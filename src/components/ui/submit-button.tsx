import React from "react";
import { Button } from "./button";
import { useFormStatus } from "react-dom";

interface Props extends React.ComponentProps<"button"> {
  text: string;
  className?: string;
  loadingMessage?: string;
  isDirty?: boolean;
  children?: React.ReactNode;
}

const SubmitButton: React.FC<Props> = ({
  text,
  className,
  loadingMessage = "Submitting...",
  isDirty = true,
  children,
  disabled,
  ...rest
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className={className}
      type="submit"
      title={text}
      aria-disabled={!isDirty || pending}
      disabled={!isDirty || pending || disabled}
      {...rest}
    >
      {pending ? loadingMessage : children ? <>{children}</> : text}
    </Button>
  );
};

export default SubmitButton;
