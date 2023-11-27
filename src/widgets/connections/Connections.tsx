import { useEffect } from 'react';

import Row from './components/Row';
import { BtnControl } from '../../shared/ui/btnControl';
import { CustomCheckBox } from '../../shared/ui/customCheckBox';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  deleteVideoDevice,
  getVideoDevice,
  videoDevice,
} from '../../store/slices/videoDeviceSlice';

export function Connections() {
  const dispatch = useAppDispatch();

  const { data, error } = useAppSelector(videoDevice);

  const handleChange = (value: boolean) => {
    console.log(value);
  };

  const videoDeviceAdded = () => {
    dispatch(getVideoDevice());
  };

  useEffect(() => {
    error && alert('Сбросте существующие подключения');
  }, [error]);

  return (
    <div className='flex h-full flex-col'>
      <div className='flex h-20 items-center gap-8'>
        <span className='text-2xl text-secondary'>Подключения</span>
        <div className='flex items-center gap-4'>
          <BtnControl type='add' onClick={videoDeviceAdded} />
          <BtnControl onClick={() => dispatch(deleteVideoDevice())} />
        </div>
      </div>
      <div className='flex-1 rounded border-2 border-border'>
        <table className='w-full '>
          <thead>
            <tr>
              <th className='border-2 border-l-0 border-t-0 border-border'>
                <CustomCheckBox handleCheck={(val) => handleChange(val)} />
              </th>
              <th className='border-2 border-t-0 border-border'>Название</th>
              <th className='border-2 border-t-0 border-border'>Адрес</th>
              <th className='border-2 border-t-0 border-border'>Статус</th>
              <th className='border-2 border-r-0 border-t-0 border-border'>Примечание</th>
            </tr>
          </thead>
          <tbody>{data && <Row data={data} />}</tbody>
        </table>
      </div>
    </div>
  );
}
