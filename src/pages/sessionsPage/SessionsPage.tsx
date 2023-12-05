import { useEffect, useState } from 'react';

import { Switch } from '@material-tailwind/react';
import axios from 'axios';

import Row from './components/Row';
import VideoRow from './components/VideoRow';
import { IVideo } from '../../shared/types/videoTypes';
import { CustomCheckBox } from '../../shared/ui/customCheckBox';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { sessionActive, updateSession } from '../../store/slices/sessionSlice';

export function SessionsPage() {
  const [videoIsOpen, setVideoIsOpen] = useState(false);
  const [videos, setVideos] = useState<IVideo[]>();

  const { session } = useAppSelector(sessionActive);
  const dispatch = useAppDispatch();

  const handleChange = (value: boolean) => {
    value;
  };

  useEffect(() => {
    dispatch(updateSession());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    videoIsOpen &&
      axios
        .get('http://192.168.5.127:7300/videos/all/video/info?sessionId=all')
        .then((res) => setVideos(res.data));
  }, [videoIsOpen]);

  return (
    <div className='h-full '>
      <div className='flex h-full flex-col'>
        <div className='flex h-20 items-center gap-8'>
          <span className='text-2xl text-secondary'>Сессии</span>
          <Switch
            crossOrigin={undefined}
            color='green'
            onChange={(e) => setVideoIsOpen(e.target.checked)}
          />
          <span className='text-2xl text-secondary'>Видео</span>
        </div>
        <div className='mb-2 flex-1 overflow-auto rounded border-2 border-border'>
          {!videoIsOpen ? (
            <table className='w-full table-fixed'>
              <thead>
                <tr className=''>
                  <th className='border-2 border-l-0 border-t-0 border-border'>
                    <CustomCheckBox handleCheck={(val) => handleChange(val)} />
                  </th>
                  <th className='border-2 border-t-0 border-border'>Название сессии</th>
                  <th className='border-2 border-t-0 border-border'>Подключения</th>
                  <th className='border-2 border-t-0 border-border'>Дата и время</th>
                  <th className='border-2 border-r-0 border-t-0 border-border'>Статус</th>
                </tr>
              </thead>
              <tbody className=''>
                {session &&
                  session.map((el) => (
                    <Row key={el.id} session={el} selected={false} handleChange={() => {}} />
                  ))}
              </tbody>
            </table>
          ) : (
            <table className='w-full table-fixed'>
              <thead>
                <tr className=''>
                  <th className='border-2 border-l-0 border-t-0 border-border'>
                    <CustomCheckBox handleCheck={(val) => handleChange(val)} />
                  </th>
                  <th className='border-2 border-t-0 border-border'>ID видео</th>
                  <th className='border-2 border-t-0 border-border'>Дрон</th>
                  <th className='border-2 border-t-0 border-border'>Дата и время</th>
                  <th className='border-2 border-r-0 border-t-0 border-border'>Статус</th>
                </tr>
              </thead>
              <tbody className=''>
                {videos &&
                  videos.map((el) => (
                    <VideoRow key={el.id} video={el} selected={false} handleChange={() => {}} />
                  ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
