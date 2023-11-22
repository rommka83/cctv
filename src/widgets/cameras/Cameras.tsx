import Row from './components/Row';
import { CustomCheckBox } from '../../shared/ui/customCheckBox';

type Props = { data?: unknown };

export function Cameras({ data }: Props) {
  const handleChange = (value: boolean) => {
    console.log(value);
  };

  data;
  return (
    <div className='flex h-full flex-col'>
      <div className='flex h-20 items-center'>
        <span className='text-2xl'>Камеры</span>
      </div>
      <div className='border-border flex-1 rounded border-2'>
        <table className='w-full '>
          <thead>
            <tr>
              <th className='border-border border-2 border-l-0 border-t-0'>
                <CustomCheckBox handleCheck={(val) => handleChange(val)} />
              </th>
              <th className='border-border border-2 border-t-0'>Название дрона</th>
              <th className='border-border border-2 border-t-0'>Название камеры</th>
              <th className='border-border border-2 border-t-0'>Наличие ИК</th>
              <th className='border-border border-2 border-t-0'>Разрешение</th>
              <th className='border-border border-2 border-r-0 border-t-0'>Примечание</th>
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
              }}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
