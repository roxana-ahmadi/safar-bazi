import { Modal, DatePicker } from "antd";
import { IFilterModalProps } from "./types";
import { useState } from "react";

export default function FilterModal({ onClose, open, onSubmit }: IFilterModalProps) {
  const [creationAtMin, setCreationAtMin] = useState<Date>();
  const [creationAtMax, setCreationAtMax] = useState<Date>();

  console.log(creationAtMin, creationAtMax);

  const handleOk = () => {
    onClose();
    onSubmit(creationAtMin!, creationAtMax!);
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal
      okButtonProps={{ disabled: !creationAtMin || !creationAtMax }}
      title="فیلترها"
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="مشاهده نتایج"
      cancelText="انصراف"
    >
      <div className="flex items-center gap-4">
        <DatePicker
          className="flex-1"
          placeholder="از تاریخ"
          value={creationAtMin}
          onChange={e => setCreationAtMin(e)}
          type="date"
        />
        <DatePicker
          className="flex-1"
          placeholder="تا تاریخ"
          value={creationAtMax}
          onChange={e => setCreationAtMax(e)}
          type="date"
        />
      </div>
    </Modal>
  );
}
