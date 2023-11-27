import { ICamera } from '../../../shared/types/videoDeviceTypes';
import { CustomCheckBox } from '../../../shared/ui/customCheckBox';

type Props = {
  name: string;
  data: ICamera;
};

export default function Row({ name, data }: Props) {
  const handleChange = (value: boolean) => {
    console.log(value);
  };
  return (
    <tr>
      <td className='border-2 border-l-0 border-border text-center'>
        <CustomCheckBox handleCheck={(val) => handleChange(val)} />
      </td>
      <td className='border-2 border-border text-center'>{name}</td>
      <td className='border-2 border-border text-center'>{data.name}</td>
      <td className='border-2 border-border text-center'>
        {data.cameras[0].type !== 'VIS' ? 'Да' : 'Нет'}
      </td>
      <td className='border-2 border-border text-center'>{data.cameras[0].resolution}</td>
      <td className='border-2 border-r-0 border-border text-center'>''</td>
    </tr>
  );
}
