export interface IFilterModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (min: Date, max: Date) => void;
}
