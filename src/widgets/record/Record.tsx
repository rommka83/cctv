import Row from './components/Row';
import { BtnControl } from '../../shared/ui/btnControl';
import { CustomCheckBox } from '../../shared/ui/customCheckBox';

type Props = { data?: unknown; className?: string };

export function Record({ data, className }: Props) {
  const handleChange = (value: boolean) => {
    console.log(value);
  };

  data;
  return (
    <div className={`${className} flex h-full flex-col pb-8`}>
      <div className='flex items-center gap-8 py-3'>
        <span className='text-2xl text-secondary'>Запись</span>
        <div className='flex items-center gap-4'>
          <BtnControl type='add' />
          <BtnControl />
          <BtnControl type='play' />
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
              <th className='border-2 border-t-0 border-border'>Камеры</th>
              <th className='border-2 border-t-0 border-border'>Дата</th>
              <th className='border-2 border-t-0 border-border'>Длительность</th>
              <th className='border-2 border-t-0 border-border'>Воспроизведение</th>
              <th className='border-2 border-r-0 border-t-0 border-border'>Примечание</th>
            </tr>
          </thead>
          <tbody>
            <Row
              data={{
                1: 'первое значение',
                2: 'второе значение',
                3: 'третее значение',
                4: 'четвёртое значение',
                5: 'пятое значение',
                6: 'шестое значение',
              }}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
