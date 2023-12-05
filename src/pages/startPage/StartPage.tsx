import { useAppSelector } from '../../store/hooks';
import { videoDevice } from '../../store/slices/videoDeviceSlice';
import { Cameras } from '../../widgets/cameras';
import { Connections } from '../../widgets/connections';
import { Record } from '../../widgets/record';

export function StartPage() {
  const { devices } = useAppSelector(videoDevice);

  return (
    <div className='grid h-full grid-cols-2 grid-rows-2 gap-x-7 text-white'>
      <Connections devices={devices} />
      <Cameras devices={devices} />
      <Record className='col-span-2 row-span-2' />
    </div>
  );
}
