import { Select, Option, Switch, Button } from '@material-tailwind/react';

export function SettingsPage() {
  return (
    <div className='py-4'>
      <span className='text-2xl text-secondary'>Настройки</span>
      <div className='mt-10'>
        <div className='mx-auto flex w-[50%] flex-col gap-6 pt-10'>
          <div className='flex items-center'>
            <span className='w-3/5'>Размер партии</span>
            <div className='ml-auto w-full'>
              <Select variant='standard' label='' success>
                <Option>4</Option>
                <Option>8</Option>
              </Select>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='w-3/5'>Нейросеть</span>
            <div className='ml-auto w-full'>
              <Select variant='standard' label='' className='' success>
                <Option>Какое то название</Option>
                <Option>Ещё Какое то название</Option>
              </Select>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='w-3/5'>Разрешение анализа</span>
            <div className='ml-auto w-full'>
              <Select variant='standard' label='' className='' success>
                <Option>2160</Option>
                <Option>4320</Option>
              </Select>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='w-3/5'>Частота кадров анализа</span>
            <div className='ml-auto w-full'>
              <Select variant='standard' label='' className='' success>
                <Option>30</Option>
                <Option>60</Option>
              </Select>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='w-3/5'>Тип анализа</span>
            <div className='ml-auto w-full'>
              <Select variant='standard' label='' success>
                <Option>Двойной</Option>
                <Option>Тройной</Option>
              </Select>
            </div>
          </div>
          <div className='flex items-center'>
            <span className='w-3/5'>Гамма-коррекция</span>
            <div className='ml-auto w-fit'>
              <Switch color='green' defaultChecked crossOrigin={undefined} />
            </div>
          </div>

          <Button color='green' className='ml-auto w-fit'>
            Применить
          </Button>
        </div>
      </div>
    </div>
  );
}
