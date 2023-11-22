import { CustomCheckBox } from '../../../shared/ui/customCheckBox';

type Props = { data: { 1: string; 2: string; 3: string; 4: string } };

export default function Row({ data }: Props) {
  const handleChange = (value: boolean) => {
    console.log(value);
  };
  return (
    <tr>
      <td className='border-border border-2 border-l-0 text-center'>
        <CustomCheckBox handleCheck={(val) => handleChange(val)} />
      </td>
      <td className='border-border border-2 text-center'>{data[1]}</td>
      <td className='border-border border-2 text-center'>{data[2]}</td>
      <td className='border-border border-2 text-center'>{data[3]}</td>
      <td className='border-border border-2 border-r-0 text-center'>{data[4]}</td>
    </tr>
  );
}
