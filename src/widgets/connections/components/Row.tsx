import { IVideoDevice } from '../../../shared/types/videoDeviceTypes';
import { CustomCheckBox } from '../../../shared/ui/customCheckBox';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { changeSelected, videoDevice } from '../../../store/slices/videoDeviceSlice';

type Props = { videoDevaice: IVideoDevice };

export default function Row({ videoDevaice }: Props) {
  const { data } = useAppSelector(videoDevice);
  const dispach = useAppDispatch();
  console.log(data);

  const handleChange = (value: boolean) => {
    dispach(changeSelected(value));
  };
  return (
    <tr>
      <td className='border-2 border-l-0 border-border text-center'>
        <CustomCheckBox handleCheck={(val) => handleChange(val)} />
      </td>
      <td className='border-2 border-border text-center'>{videoDevaice.name}</td>
      <td className='border-2 border-border text-center'>{videoDevaice.uri}</td>
      <td className='border-2 border-border text-center'>
        <div
          className={`mx-auto h-0 w-0 border border-b-[20px] border-l-[20px] border-r-0 border-t-0 ${
            videoDevaice.activate ? 'border-button' : 'border-red'
          } border-l-transparent border-r-transparent border-t-transparent`}
        ></div>
      </td>
      <td className='border-2 border-r-0 border-border text-center'>{`количество систем: ${videoDevaice.cameraSystem.length}`}</td>
    </tr>
  );
}
