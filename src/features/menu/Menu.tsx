import { Link, useLocation } from 'react-router-dom';

import { SvgSprite } from '../../shared/ui/svg-sprite';
export const Menu = () => {
  const { pathname } = useLocation();

  return (
    <nav className='flex h-[10%] w-full justify-between bg-main'>
      <ul className='flex h-full items-center gap-12 px-8'>
        <li className='cursor-pointer'>
          <Link to='/cctv/startPage'>
            <SvgSprite
              type='power'
              className={`${
                pathname === '/cctv/startPage' ? 'fill-button' : 'fill-secondary'
              } h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/cctv/broadcastsPage'>
            <SvgSprite
              type='play'
              className={`${
                pathname === '/cctv/broadcastsPage' ? 'fill-button' : 'fill-secondary'
              } h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/cctv/sessionsPage'>
            <SvgSprite
              type='sessions'
              className={`${
                pathname === '/cctv/sessionsPage' ? 'fill-button' : 'fill-secondary'
              } h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/cctv/calculationPage'>
            <SvgSprite
              type='calculation'
              className={`${
                pathname === '/cctv/calculationPage' ? 'fill-button' : 'fill-secondary'
              } h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/cctv/locationPage'>
            <SvgSprite
              type='location'
              className={`${
                pathname === '/cctv/locationPage' ? 'fill-button' : 'fill-secondary'
              } h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/cctv/'>
            <SvgSprite
              type='settings'
              className={`${
                pathname === '/cctv/' ? 'fill-button' : 'fill-secondary'
              } h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
      </ul>
      <ul className='flex h-full items-center gap-12 px-8'>
        <li className='cursor-pointer'>
          <SvgSprite type='help' className='h-12 w-8 fill-secondary active:opacity-50' />
        </li>
        <li className='cursor-pointer'>
          <SvgSprite type='exit' className='h-12 w-8 fill-secondary active:opacity-50' />
        </li>
      </ul>
    </nav>
  );
};
