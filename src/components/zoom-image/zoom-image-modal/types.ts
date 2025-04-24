export interface ZoomImageModalProps {
  src: string;
  width: number;
  height: number;
  fileName: string;
  transition: boolean;
  onClose: (val: boolean) => () => void;
  onChangeTransition: (val: boolean) => void;
}
