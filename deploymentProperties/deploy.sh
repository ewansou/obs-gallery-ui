#!/bin/bash

# To check if app is running on port 3001 use below command
# sudo netstat -tulnp | grep :3001


# === CONFIGURATION ===
APP_NAME="obs-gallery-ui"
PROJECT_DIR="/Users/ewansou/VSCodeProjects/instantly_ui/$APP_NAME"
ZIP_FILE_NAME="$APP_NAME.zip"
LOCAL_ZIP="/Users/ewansou/VSCodeProjects/instantly_ui/$ZIP_FILE_NAME"
REMOTE_DIR="/home/ec2-user/$APP_NAME"
EC2_USER="ec2-user"
EC2_HOST="ec2-47-130-40-112.ap-southeast-1.compute.amazonaws.com"
PEM_PATH="/Users/ewansou/AWS/EC2/instantly.pem"

# === PACKAGE ===
echo "Zipping $PROJECT_DIR..."
cd "$PROJECT_DIR/.." || exit 1
rm -f "$LOCAL_ZIP"
zip -r "$ZIP_FILE_NAME" "$(basename "$PROJECT_DIR")" -x "**/node_modules/*" "**/.next/*" "**/.git/*"

# === UPLOAD ===
echo "Uploading $ZIP_FILE_NAME to EC2..."
scp -i "$PEM_PATH" "$LOCAL_ZIP" "$EC2_USER@$EC2_HOST:/home/$EC2_USER"

# === DEPLOY ON EC2 ===
ssh -i "$PEM_PATH" "$EC2_USER@$EC2_HOST" << EOF
  set -e
  echo "Unzipping and deploying Next.js app..."

  # Kill existing Next.js process if port 3001 is in use
  PID=\$(sudo netstat -tulnp 2>/dev/null | grep ':3001' | awk '{print \$7}' | cut -d'/' -f1)
  if [ -n "\$PID" ]; then
    echo "Killing process on port 3000 (PID: \$PID)..."
    sudo kill -9 \$PID
  fi

  # Remove existing folder
  rm -rf ~/$APP_NAME

  # Unzip the uploaded archive
  unzip -o ~/$ZIP_FILE_NAME -d ~/

  cd ~/$APP_NAME

  echo "Installing dependencies..."
  npm install --legacy-peer-deps

  echo "Building Next.js app..."
  npm run build

  echo "Starting app in background with nohup..."
  nohup bash -c "PORT=3001 npm start" > output.log 2>&1 &

  # Delete the uploaded zip
  rm -f ~/$ZIP_FILE_NAME
EOF

# === CLEANUP ===
echo "Deleting local ZIP archive..."
rm -f "$LOCAL_ZIP"

echo "Deployment complete. Visit your site at https://obsphotogallery.sg"