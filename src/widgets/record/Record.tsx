import { useState } from 'react';

import {
  Dialog,
  Card,
  CardBody,
  Typography,
  Input,
  CardFooter,
  Button,
} from '@material-tailwind/react';

import Row from './components/Row';
import { BtnControl } from '../../shared/ui/btnControl';
import { CustomCheckBox } from '../../shared/ui/customCheckBox';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { camerasActive } from '../../store/slices/camerasSlice';
import { creatSession } from '../../store/slices/sessionSlice';

type Props = { className?: string };

export function Record({ className }: Props) {
  const { cameras } = useAppSelector(camerasActive);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();

  const handleOpen = () => setOpen((cur) => !cur);

  const handleChange = (value: boolean) => {
    value;
  };

  return (
    <div className={`${className} flex h-full flex-col pb-8`}>
      <div className='flex items-center gap-8 py-3'>
        <span className='text-2xl text-secondary'>Запись</span>
        <div className='flex items-center gap-4'>
          <BtnControl
            active={cameras.length > 0 ? true : false}
            type='add'
            onClick={() => setOpen(true)}
          />
          <BtnControl />
          <BtnControl type='play' />
        </div>
      </div>
      <div className='td flex-1 rounded'>
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
            <Row />
          </tbody>
        </table>
      </div>
      <Dialog size='xs' open={open} handler={handleOpen} className='bg-transparent shadow-none'>
        <Card className='mx-auto w-full max-w-[24rem]'>
          <CardBody className='flex flex-col gap-4'>
            <Typography className='mb-3 font-normal' variant='paragraph' color='gray'>
              Введите название сессии
            </Typography>
            <Input
              label='Назание сессии'
              size='lg'
              crossOrigin={undefined}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </CardBody>
          <CardFooter className='pt-0'>
            <Button
              variant='gradient'
              onClick={() => {
                dispatch(creatSession(name));

                setName('');

                handleOpen();
              }}
              fullWidth
              color='green'
            >
              Отправить
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}
