import { useEffect, useState } from 'react';

import { Checkbox } from '@material-tailwind/react';

type Props = {
  handleCheck: (val: boolean) => void;
  check?: boolean;
};

export function CustomCheckBox({ handleCheck, check }: Props) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    handleCheck(!checked);
  };

  useEffect(() => {
    if (check) {
      setChecked(check);
      handleCheck(check);
    } else {
      setChecked(false);
      handleCheck(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [check]);

  return (
    <Checkbox checked={checked} crossOrigin={undefined} onChange={handleChange} color='green' />
  );
}
