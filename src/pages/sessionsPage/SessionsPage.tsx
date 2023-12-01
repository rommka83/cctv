import { CustomCheckBox } from '../../shared/ui/customCheckBox';

export function SessionsPage() {
  const handleChange = (value: boolean) => {
    value;
  };

  return (
    <div className='h-full'>
      <div className='flex h-full flex-col'>
        <div className='flex h-20 items-center gap-8'>
          <span className='text-2xl text-secondary'>Сессии</span>
        </div>
        <div className='mb-2 flex-1 rounded border-2 border-border'>
          <table className='w-full '>
            <thead>
              <tr>
                <th className='border-2 border-l-0 border-t-0 border-border'>
                  <CustomCheckBox handleCheck={(val) => handleChange(val)} />
                </th>
                <th className='border-2 border-t-0 border-border'>Название сессии</th>
                <th className='border-2 border-t-0 border-border'>Подключения</th>
                <th className='border-2 border-t-0 border-border'>Дата и время</th>
                <th className='border-2 border-r-0 border-t-0 border-border'>Статус</th>
              </tr>
            </thead>
            {/* <tbody>{data && <Row data={data} />}</tbody> */}
          </table>
        </div>
      </div>
    </div>
  );
}
