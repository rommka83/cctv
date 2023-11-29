import Row from './components/Row';
import { CustomCheckBox } from '../../shared/ui/customCheckBox';
import { useAppSelector } from '../../store/hooks';
import { videoDevice } from '../../store/slices/videoDeviceSlice';

export function Cameras() {
  const { data } = useAppSelector(videoDevice);

  const handleChange = (value: boolean) => {
    console.log(value);
  };

  return (
    <div className='flex h-full flex-col'>
      <div className='flex h-20 items-center'>
        <span className='text-2xl text-secondary'>Камеры</span>
      </div>
      <div className='flex-1 rounded border-2 border-border'>
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
            {data?.selected &&
              data.cameraSystem.map((camera) => (
                <Row key={camera.id} name={data.name} camera={camera} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
