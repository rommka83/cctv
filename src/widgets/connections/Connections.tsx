import Row from './components/Row';
import { BtnControl } from '../../shared/ui/btnControl';
import { CustomCheckBox } from '../../shared/ui/customCheckBox';

type Props = { data?: unknown };

export function Connections({ data }: Props) {
  const handleChange = (value: boolean) => {
    console.log(value);
  };
  data;

  return (
    <div className='flex h-full flex-col'>
      <div className='flex h-20 items-center gap-8'>
        <span className='text-2xl'>Подключения</span>
        <div className='flex items-center gap-4'>
          <BtnControl type='add' />
          <BtnControl />
        </div>
      </div>
      <div className='border-border flex-1 rounded border-2'>
        <table className='w-full '>
          <thead>
            <tr>
              <th className='border-border border-2 border-l-0 border-t-0'>
                <CustomCheckBox handleCheck={(val) => handleChange(val)} />
              </th>
              <th className='border-border border-2 border-t-0'>Название</th>
              <th className='border-border border-2 border-t-0'>Адрес</th>
              <th className='border-border border-2 border-t-0'>Статус</th>
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
              }}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
