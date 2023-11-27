import { IVideoDevice } from '../../../shared/types/videoDeviceTypes';
import { CustomCheckBox } from '../../../shared/ui/customCheckBox';

type Props = { data: IVideoDevice };

export default function Row({ data }: Props) {
  const handleChange = (value: boolean) => {
    console.log(value);
  };
  return (
    <tr>
      <td className='border-2 border-l-0 border-border text-center'>
        <CustomCheckBox handleCheck={(val) => handleChange(val)} />
      </td>
      <td className='border-2 border-border text-center'>{data.name}</td>
      <td className='border-2 border-border text-center'>{data.uri}</td>
      <td className='border-2 border-border text-center'>
        <div
          className={`mx-auto h-0 w-0 border border-b-[20px] border-l-[20px] border-r-0 border-t-0 ${
            data.activate ? 'border-button' : 'border-red'
          } border-l-transparent border-r-transparent border-t-transparent`}
        ></div>
      </td>
      <td className='border-2 border-r-0 border-border text-center'>{`количество систем: ${data.cameraSystem.length}`}</td>
    </tr>
  );
}
