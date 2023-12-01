import { IVideoDevice } from '../../../shared/types/videoDeviceTypes';
import { CustomCheckBox } from '../../../shared/ui/customCheckBox';

type Props = {
  videoDevaice: IVideoDevice;
  status: boolean;
  selected: boolean;
  handleChange: (value: boolean) => void;
};

export default function Row({ videoDevaice, status, selected, handleChange }: Props) {
  return (
    <tr>
      <td className='td-l'>
        <CustomCheckBox handleCheck={handleChange} check={selected} />
      </td>
      <td className='td'>{videoDevaice.name}</td>
      <td className='td'>{videoDevaice.uri}</td>
      <td className='td'>
        <div
          className={`mx-auto h-0 w-0 border border-b-[20px] border-l-[20px] border-r-0 border-t-0 ${
            status ? 'border-button' : 'border-myred'
          } border-l-transparent border-r-transparent border-t-transparent`}
        ></div>
      </td>
      <td className='td-r'>{`количество систем: ${videoDevaice.cameraSystem.length}`}</td>
    </tr>
  );
}
