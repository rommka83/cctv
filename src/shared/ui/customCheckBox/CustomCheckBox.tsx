import { useState } from 'react';

type Props = {
  handleCheck: (val: boolean) => void;
};

export function CustomCheckBox({ handleCheck }: Props) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    handleCheck(!checked);
  };

  return (
    <div
      className={`mx-auto h-4 w-4 cursor-pointer border ${checked && 'bg-secondary'}`}
      onClick={handleChange}
    ></div>
  );
}
