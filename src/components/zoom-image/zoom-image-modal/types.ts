export interface ZoomImageModalProps {
  src: string;
  width: number;
  height: number;
  transition: boolean;
  onClose: (val: boolean) => () => void;
  onChangeTransition: (val: boolean) => void;
}
