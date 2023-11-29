import { useRef, useState } from 'react';

import { Checkbox } from '@material-tailwind/react';

type Props = {
  handleCheck: (val: boolean) => void;
  check?: boolean;
};

export function CustomCheckBox({ handleCheck, check }: Props) {
  const [checked, setChecked] = useState(check ?? false);

  const handleChange = () => {
    setChecked(!checked);
    handleCheck(!checked);
  };

  const ref = useRef(null);

  return (
    <Checkbox
      checked={checked}
      crossOrigin={undefined}
      inputRef={ref}
      onChange={handleChange}
      color='green'
    />
  );
}
