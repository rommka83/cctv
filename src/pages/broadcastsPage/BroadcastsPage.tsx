import { useState } from 'react';

import img1 from '../../test-video/_import_61c03301db44a1.11720954.mp4';
import img2 from '../../test-video/_import_61c0438385c6c1.31923113.mp4';
import img3 from '../../test-video/sample-10s.mp4';
import { VideoPlayer } from '../../widgets/videoPlayer';

const testVideos = [
  { img: img1, id: '1' },
  { img: img2, id: '2' },
  { img: img3, id: '3' },
  { img: img1, id: '4' },
  { img: img2, id: '5' },
  { img: img3, id: '6' },
  { img: img1, id: '7' },
  { img: img2, id: '8' },
  { img: img3, id: '9' },
  { img: img1, id: '10' },
  { img: img2, id: '11' },
  { img: img3, id: '12' },
  { img: img1, id: '13' },
  { img: img2, id: '14' },
  { img: img3, id: '15' },
  { img: img1, id: '16' },
  { img: img2, id: '17' },
  { img: img3, id: '18' },
  { img: img1, id: '19' },
  { img: img2, id: '20' },
  { img: img3, id: '21' },
  { img: img1, id: '22' },
  { img: img2, id: '23' },
  { img: img3, id: '24' },
  { img: img1, id: '25' },
  { img: img2, id: '26' },
  { img: img3, id: '27' },
  { img: img1, id: '28' },
  { img: img2, id: '29' },
  { img: img3, id: '30' },
  { img: img1, id: '31' },
  { img: img2, id: '32' },
];

export function BroadcastsPage() {
  const [fullScreen, setFullScreen] = useState('');

  const amountCol = (arr: object[]) => {
    if (arr.length === 1) return 'max-w-[90%]';
    if (arr.length <= 4) return 'grid-cols-2 max-w-[90%]';
    if (arr.length <= 6) return 'grid-cols-3';
    if (arr.length <= 12) return 'grid-cols-4';
    if (arr.length <= 20) return 'grid-cols-5';
    if (arr.length <= 30) return 'grid-cols-6';
    return 'grid-cols-7';
  };

  const amountColScreen = (arr: object[]) => {
    if (arr.length <= 5) return 'grid-cols-1 max-w-[20%]';
    if (arr.length <= 11) return 'grid-cols-2 max-w-[20%]';
    if (arr.length <= 20) return 'grid-cols-2 max-w-[15%]';
    return 'grid-cols-3 max-w-[21%]';
  };

  const handleFull = (str: string) => {
    if (testVideos.length === 1) return;
    if (fullScreen === str) {
      setFullScreen('');
    } else {
      setFullScreen(str);
    }
  };

  return fullScreen === '' ? (
    <div className={`mx-auto grid gap-2 py-2 ${amountCol(testVideos)}`}>
      {testVideos.map((el) => (
        <VideoPlayer
          url={el.img}
          name='дрон такой-то'
          handleFull={() => handleFull(el.id)}
          key={el.id}
        />
      ))}
    </div>
  ) : (
    <div className='mx-auto flex gap-2 py-2'>
      <div className='w-[80%]'>
        <VideoPlayer
          url={testVideos.find((el) => el.id === fullScreen)?.img ?? ''}
          name='дрон такой-то'
          handleFull={() => handleFull(testVideos.find((el) => el.id === fullScreen)?.id ?? '')}
        />
      </div>
      <ul className={`grid h-fit gap-2 ${amountColScreen(testVideos)}`}>
        {testVideos
          .filter((el) => el.id !== fullScreen)
          .map((el) => (
            <li className='h-fit' key={el.id}>
              <VideoPlayer url={el.img} name='дрон такой-то' handleFull={() => handleFull(el.id)} />
            </li>
          ))}
      </ul>
    </div>
  );
}
