import { useCallback, useEffect, useRef, useState } from 'react';

import { Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';
import ReactPlayer from 'react-player';

import useResizeObserver from '../../shared/hooks/useResizeObserver';
import { BtnControl } from '../../shared/ui/btnControl';
import { SvgSprite } from '../../shared/ui/svg-sprite';
import { VideoPrgress } from '../../shared/ui/videoProgress';

type Props = {
  url: string;
  name?: string;
  handleFull?: () => void;
};

export const VideoPlayer = ({ url, name, handleFull }: Props) => {
  const [play, setPlay] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [typeCamera, setTypeCamera] = useState<'опт.' | 'инфр.'>('опт.');
  const [isOpen, setIsOpen] = useState(false);
  const [menuVerticalIsOpen, setMenuVerticalIsOpen] = useState(false);
  const [controlsGorizontal, setControlsGorizontal] = useState(true);
  const onResize = useCallback((target: HTMLDivElement) => {
    if (target.getBoundingClientRect().width < 360) {
      setControlsGorizontal(false);
    } else {
      setControlsGorizontal(true);
    }
  }, []);
  const wrapperPlayer = useResizeObserver(onResize);
  const player = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (!player.current) return;

    setDuration(player.current.getDuration());
  }, []);

  const frameBack = () => {
    if (!player.current) return;

    player.current.seekTo(progress - 1, 'seconds');
  };

  const frameForward = () => {
    if (!player.current) return;
    player.current.seekTo(progress + 1, 'seconds');
  };

  const rewind = (event: number) => {
    if (!player.current) return;

    player.current.seekTo(event, 'seconds');

    setProgress(event);
  };

  const fastForward = () => {
    if (speed === 4) return;
    setSpeed((old) => old + 0.25);
  };

  const fastRewing = () => {
    if (speed === 0.25) return;
    setSpeed((old) => old - 0.25);
  };

  return (
    <div
      ref={wrapperPlayer}
      className='relative overflow-hidden rounded-lg border border-border'
      onContextMenu={(e) => {
        e.preventDefault();
        if (controlsGorizontal) return;
        setMenuVerticalIsOpen(true);
      }}
    >
      <ReactPlayer
        ref={player}
        url={url}
        loop
        playing={play}
        playbackRate={speed}
        onDuration={(val) => setDuration(val)}
        width='100%'
        height='100%'
        volume={0}
        muted={false}
        onProgress={(val) => {
          setProgress(val.playedSeconds);
        }}
        progressInterval={50}
      />

      <div
        className={`absolute bottom-0 min-h-[10%] w-full ${
          isOpen && controlsGorizontal && 'bg-main'
        }`}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        {controlsGorizontal && (
          <div className={`h-fit w-full flex-col gap-1 px-3 py-2 ${isOpen ? 'flex' : 'hidden'}`}>
            <VideoPrgress
              duration={duration}
              progress={progress}
              handleChange={(event) => rewind(event)}
            />

            <div className='flex items-center justify-between'>
              <div className='relative'>
                <div className='flex gap-1'>
                  <BtnControl player type='skip_previous' onClick={frameBack} />
                  <BtnControl player type='fast_rewind' onClick={fastRewing} />
                  <BtnControl
                    player
                    type={play ? 'pause' : 'play'}
                    onClick={() => setPlay(!play)}
                  />
                  <BtnControl player type='fast_forward' onClick={fastForward} />
                  <BtnControl player type='skip_next' onClick={frameForward} />
                </div>
                <span className='absolute -bottom-2 left-1/2 -translate-x-1/2 select-none text-xs text-secondary'>
                  {speed}
                </span>
              </div>

              <div className='flex gap-1'>
                <button
                  className='select-none text-xs text-secondary'
                  onClick={() => setTypeCamera((old) => (old === 'опт.' ? 'инфр.' : 'опт.'))}
                >
                  тип камеры: {typeCamera}
                </button>
                <BtnControl player type='location' />
                <BtnControl player type='fullscreen' onClick={handleFull} />
              </div>
            </div>
          </div>
        )}

        <Menu
          dismiss={{
            outsidePress: (ev) => {
              setMenuVerticalIsOpen(!ev);
              return !ev;
            },
          }}
          open={menuVerticalIsOpen}
        >
          <MenuHandler>
            <div className='h-[1px] w-[1px]'></div>
          </MenuHandler>
          <MenuList className='border-none bg-main'>
            <MenuItem className='flex items-center hover:bg-placeholder focus:bg-placeholder active:bg-placeholder'>
              <span className='text-secondary'>скорость:</span>
              <span className='text-red ml-auto'>{speed}</span>
            </MenuItem>

            <MenuItem
              className='flex items-center hover:bg-placeholder focus:bg-placeholder active:bg-placeholder'
              onClick={frameBack}
            >
              <span className='text-secondary'>кадр назад</span>
              <SvgSprite type='skip_previous' className='ml-auto h-3 fill-secondary' />
            </MenuItem>
            <MenuItem
              className='flex items-center hover:bg-placeholder focus:bg-placeholder active:bg-placeholder'
              onClick={fastRewing}
            >
              <span className='text-secondary'>замедлить</span>
              <SvgSprite type='fast_rewind' className='ml-auto h-3 fill-secondary' />
            </MenuItem>
            <MenuItem
              className='flex items-center hover:bg-placeholder focus:bg-placeholder active:bg-placeholder'
              onClick={() => setPlay(!play)}
            >
              <span className='text-secondary'>{play ? 'пауза' : 'старт'}</span>
              <SvgSprite type={play ? 'pause' : 'play'} className='ml-auto h-3 fill-secondary' />
            </MenuItem>
            <MenuItem
              className='flex items-center hover:bg-placeholder focus:bg-placeholder active:bg-placeholder'
              onClick={fastForward}
            >
              <span className='text-secondary'>ускорить</span>
              <SvgSprite type='fast_forward' className='ml-auto h-3 fill-secondary' />
            </MenuItem>
            <MenuItem
              className='flex items-center hover:bg-placeholder focus:bg-placeholder active:bg-placeholder'
              onClick={frameForward}
            >
              <span className='text-secondary'>кадр вперёд</span>
              <SvgSprite type='skip_next' className='ml-auto h-3 fill-secondary' />
            </MenuItem>
            <MenuItem
              className='flex items-center hover:bg-placeholder focus:bg-placeholder active:bg-placeholder'
              onClick={() => setTypeCamera((old) => (old === 'опт.' ? 'инфр.' : 'опт.'))}
            >
              <span className='text-secondary'>тип камеры:</span>
              <span className='text-red ml-auto'>{typeCamera}</span>
            </MenuItem>
            <MenuItem
              className='flex items-center hover:bg-placeholder focus:bg-placeholder active:bg-placeholder'
              onClick={frameForward}
            >
              <span className='text-secondary'>координаты</span>
              <SvgSprite type='location' className='ml-auto h-3 fill-secondary' />
            </MenuItem>
            <MenuItem
              className='flex items-center hover:bg-placeholder focus:bg-placeholder active:bg-placeholder'
              onClick={handleFull}
            >
              <span className='text-secondary'>увеличить</span>
              <SvgSprite type='fullscreen' className='ml-auto h-3 fill-secondary' />
            </MenuItem>
            <MenuItem
              className='hover:bg-placeholder focus:bg-placeholder active:bg-placeholder'
              onClick={() => setMenuVerticalIsOpen(false)}
            >
              <span className='text-red'>Выйти</span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <span
        className={`absolute left-2 top-2 select-none text-secondary ${
          !controlsGorizontal && 'text-[8px]'
        }`}
      >
        Камера: {name ?? 'нет имени'}
      </span>
    </div>
  );
};
