import { useEffect, useState } from 'react';

import Row from './components/Row';
import { IVideoDevice } from '../../shared/types/videoDeviceTypes';
import { CustomCheckBox } from '../../shared/ui/customCheckBox';
import { useAppDispatch } from '../../store/hooks';
import { changeActiveCameras } from '../../store/slices/camerasSlice';

interface ICamerasProps {
  devices: IVideoDevice[] | null;
}

export function Cameras({ devices }: ICamerasProps) {
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useAppDispatch();

  const handleChange = (value: boolean) => {
    setSelectAll(value);
  };

  useEffect(() => {
    if (selectAll && devices) {
      const [arr] = devices.map((el) => el.cameraSystem.map((el) => ({ ...el, dron: el.name })));
      dispatch(changeActiveCameras(arr));
    } else {
      dispatch(changeActiveCameras([]));
    }
  }, [devices, dispatch, selectAll]);

  return (
    <div className='flex h-full flex-col'>
      <div className='flex h-20 items-center'>
        <span className='text-2xl text-secondary'>Камеры</span>
      </div>
      <div className='td flex-1 rounded'>
        <table className='w-full '>
          <thead>
            <tr>
              <th className='border-2 border-l-0 border-t-0 border-border'>
                <CustomCheckBox handleCheck={(val) => handleChange(val)} />
              </th>
              <th className='border-2 border-t-0 border-border'>Название дрона</th>
              <th className='border-2 border-t-0 border-border'>Название камеры</th>
              <th className='border-2 border-t-0 border-border'>Наличие ИК</th>
              <th className='border-2 border-t-0 border-border'>Разрешение</th>
              <th className='border-2 border-r-0 border-t-0 border-border'>Примечание</th>
            </tr>
          </thead>
          <tbody>
            {devices?.map((dev) =>
              dev.cameraSystem.map((camera) => (
                <Row key={camera.id} name={dev.name} camera={camera} selected={selectAll} />
              )),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
