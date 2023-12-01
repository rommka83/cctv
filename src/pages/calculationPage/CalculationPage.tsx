import { CustomCheckBox } from '../../shared/ui/customCheckBox';
import img from '../../test-video/sample-10s.mp4';
import { VideoPlayer } from '../../widgets/videoPlayer';

export function CalculationPage() {
  const handleChange = (value: boolean) => {
    value;
  };

  return (
    <div className='grid grid-cols-[1fr_0.3fr] gap-4 py-4'>
      <div className='flex  flex-col'>
        <span className='text-2xl text-secondary'>Объекты</span>
        <VideoPlayer url={img} />
      </div>
      <div className='flex flex-col'>
        <span className='text-2xl text-secondary'>Список</span>
        <div className='mb-2 flex-1 rounded border-2 border-border'>
          <table className='w-full '>
            <thead>
              <tr>
                <th className='border-2 border-l-0 border-t-0 border-border'>
                  <CustomCheckBox handleCheck={(val) => handleChange(val)} />
                </th>
                <th className='border-2 border-t-0 border-border'>Достоверность</th>
                <th className='border-2 border-t-0 border-border'>Идентификатор</th>
                <th className='border-2 border-t-0 border-border'>Время</th>
              </tr>
            </thead>
            {/* <tbody>{data && <Row data={data} />}</tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
}
