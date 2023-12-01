import { useEffect, useState } from 'react';

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Typography,
} from '@material-tailwind/react';
import axios from 'axios';

import Row from './components/Row';
import { IVideoDevice } from '../../shared/types/videoDeviceTypes';
import { BtnControl } from '../../shared/ui/btnControl';
import { CustomCheckBox } from '../../shared/ui/customCheckBox';
import { useAppDispatch } from '../../store/hooks';
import { deleteVideoDevice, getVideoDevice } from '../../store/slices/videoDeviceSlice';

interface IConnectionsProps {
  devices: IVideoDevice[] | null;
}

export function Connections({ devices }: IConnectionsProps) {
  const [adress, setAdress] = useState('');
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(false);
  const [statusDevaice, setStatuDevaice] = useState<
    { id: number; status: boolean; selected: boolean }[]
  >([]);

  const dispatch = useAppDispatch();

  const handleChange = (value: boolean) => {
    setStatuDevaice((old) => old.map((el) => ({ ...el, selected: value })));
  };

  useEffect(() => {
    if (!devices) return;

    setStatuDevaice((old) =>
      devices.map((el) => {
        const oldEl = old.find((e) => e.id === el.id);
        return { id: el.id, status: true, selected: oldEl?.selected ?? false };
      }),
    );
  }, [devices]);

  useEffect(() => {
    dispatch(getVideoDevice());

    const update = setInterval(async () => {
      await devices?.forEach((el) => {
        axios
          .patch(`http://192.168.5.127:7300/video_device/${el.id}`)
          .then((res) =>
            setStatuDevaice((old) =>
              old.map((el) => (el.id === res.data.id ? { ...el, status: true } : el)),
            ),
          )
          .catch(() =>
            setStatuDevaice((old) =>
              old.map((elem) => (elem.id === el.id ? { ...elem, status: false } : elem)),
            ),
          );
      });

      await dispatch(getVideoDevice());
    }, 15000);

    return () => clearInterval(update);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpen = () => setOpen((cur) => !cur);

  const creatDevice = async (str: string) => {
    str;
    // TODO: str - знечение body
    await axios
      .post('http://192.168.5.127:7300/video_device', {
        body: 'http://192.168.5.127:7301',
      })
      .catch((err) => {
        if (err.response.status === 409) setErr(true);
      });
  };

  const checkStatus = (num: number) => {
    const el = statusDevaice.find((e) => e.id === num);

    return el ? el.status : false;
  };

  const checkSelected = () => {
    const el = statusDevaice.find((e) => e.selected);

    return el ? el.id : 0;
  };

  return (
    <div className='flex h-full flex-col'>
      <div className='flex h-20 items-center gap-8'>
        <span className='text-2xl text-secondary'>Подключения</span>
        <div className='flex items-center gap-4'>
          <BtnControl type='add' onClick={() => handleOpen()} active />
          <BtnControl
            active={checkSelected() !== 0 ? true : false}
            onClick={() => dispatch(deleteVideoDevice(checkSelected() !== 0 ? checkSelected() : 0))}
          />
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
          <tbody>
            {devices &&
              devices.map((el) => (
                <Row
                  handleChange={(w) =>
                    setStatuDevaice((old) =>
                      old.map((e) => (e.id === el.id ? { ...e, selected: w } : e)),
                    )
                  }
                  key={el.id}
                  status={checkStatus(el.id)}
                  videoDevaice={el}
                  selected={statusDevaice.find((e) => e.id === el.id)?.selected ?? false}
                />
              ))}
          </tbody>
        </table>
      </div>
      <Dialog size='xs' open={open} handler={handleOpen} className='bg-transparent shadow-none'>
        <Card className='mx-auto w-full max-w-[24rem]'>
          <CardBody className='flex flex-col gap-4'>
            <Typography className='mb-3 font-normal' variant='paragraph' color='gray'>
              Введите адрес подключения
            </Typography>
            <Input
              label='Адрес подключения'
              size='lg'
              crossOrigin={undefined}
              value={adress}
              onChange={(e) => setAdress(e.target.value)}
            />
          </CardBody>
          <CardFooter className='pt-0'>
            <Button
              variant='gradient'
              onClick={async () => {
                await creatDevice(adress);
                await dispatch(getVideoDevice());
                setAdress('');
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
      <Dialog size='xs' open={err} handler={handleOpen} className='bg-transparent shadow-none'>
        <Card className='mx-auto w-full max-w-[24rem]'>
          <CardBody className='flex flex-col gap-4'>
            <Typography className='mb-3 text-center font-normal' variant='paragraph' color='red'>
              Устройство с таким адресом уже существует
            </Typography>
          </CardBody>
          <CardFooter className='pt-0'>
            <Button
              variant='gradient'
              onClick={() => {
                setErr(false);

                setErr(false);
              }}
              fullWidth
              color='red'
            >
              Закрыть
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
}
