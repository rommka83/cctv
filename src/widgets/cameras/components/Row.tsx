import { ICamera } from '../../../shared/types/videoDeviceTypes';
import { CustomCheckBox } from '../../../shared/ui/customCheckBox';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { camerasActive, changeActiveCameras } from '../../../store/slices/camerasSlice';

type Props = {
  name: string;
  camera: ICamera;
  selected?: boolean;
};

export default function Row({ name, camera, selected }: Props) {
  const { cameras } = useAppSelector(camerasActive);

  const dispatch = useAppDispatch();

  const handleChange = (value: boolean) => {
    let arr: ICamera[];
    if (value) {
      arr = [...cameras, { ...camera, dron: name }];
      dispatch(changeActiveCameras(arr));
    } else {
      arr = cameras.filter((el) => el.id !== camera.id);
      dispatch(changeActiveCameras(arr));
    }
  };

  return (
    <tr>
      <td className='td border-l-0'>
        <CustomCheckBox handleCheck={(val) => handleChange(val)} check={selected} />
      </td>
      <td className='td'>{name}</td>
      <td className='td'>{camera.name}</td>
      <td className='td'>{camera.cameras[0].type !== 'VIS' ? 'Да' : 'Нет'}</td>
      <td className='td'>{camera.cameras[0].resolution}</td>
      <td className='td border-r-0'>''</td>
    </tr>
  );
}
