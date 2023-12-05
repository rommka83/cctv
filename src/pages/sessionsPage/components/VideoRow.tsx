import { IVideo } from '../../../shared/types/videoTypes';
import { CustomCheckBox } from '../../../shared/ui/customCheckBox';

type Props = {
  video: IVideo;
  selected: boolean;
  handleChange: (value: boolean) => void;
};

export default function VideoRow({ video, selected, handleChange }: Props) {
  return (
    <tr className=''>
      <td className='td-l'>
        <CustomCheckBox handleCheck={handleChange} check={selected} />
      </td>
      <td className='td'>{video.id}</td>
      <td className='td'>{video.videoDeviceId}</td>
      <td className='td'>
        {`${new Date(video.created).toLocaleDateString().toString()} 
          ${new Date(video.created).toLocaleTimeString().toString()}`}
      </td>
      <td className='td-r'>{}</td>
    </tr>
  );
}
