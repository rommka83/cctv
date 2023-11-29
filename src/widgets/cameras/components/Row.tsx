import { ICamera } from '../../../shared/types/videoDeviceTypes';
import { CustomCheckBox } from '../../../shared/ui/customCheckBox';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { camerasActive, changeActiveCameras } from '../../../store/slices/camerasSlice';

type Props = {
  name: string;
  camera: ICamera;
};

export default function Row({ name, camera }: Props) {
  const { data } = useAppSelector(camerasActive);

  const dispatch = useAppDispatch();

  const handleChange = (value: boolean) => {
    let arr: ICamera[];
    if (value) {
      arr = [...data, { ...camera, dron: name }];
      dispatch(changeActiveCameras(arr));
    } else {
      arr = data.filter((el) => el.id !== camera.id);
      dispatch(changeActiveCameras(arr));
    }
  };

  console.log(data);
  return (
    <tr>
      <td className='border-2 border-l-0 border-border text-center'>
        <CustomCheckBox handleCheck={(val) => handleChange(val)} />
      </td>
      <td className='border-2 border-border text-center'>{name}</td>
      <td className='border-2 border-border text-center'>{camera.name}</td>
      <td className='border-2 border-border text-center'>
        {camera.cameras[0].type !== 'VIS' ? 'Да' : 'Нет'}
      </td>
      <td className='border-2 border-border text-center'>{camera.cameras[0].resolution}</td>
      <td className='border-2 border-r-0 border-border text-center'>''</td>
    </tr>
  );
}
