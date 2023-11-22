import { Link, useLocation } from 'react-router-dom';

import { SvgSprite } from '../../shared/ui/svg-sprite';

export const Menu = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <nav className='bg-main flex h-[10%] w-full justify-between'>
      <ul className='flex h-full items-center gap-12 px-8'>
        <li className='cursor-pointer'>
          <Link to='/'>
            <SvgSprite
              type='power'
              className={`${
                pathname === '/' ? 'fill-button' : 'fill-secondary'
              } fill-secondary h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/broadcastsPage'>
            <SvgSprite
              type='play'
              className={`${
                pathname === '/broadcastsPage' ? 'fill-button' : 'fill-secondary'
              } fill-secondary h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/sessionsPage'>
            <SvgSprite
              type='sessions'
              className={`${
                pathname === '/sessionsPage' ? 'fill-button' : 'fill-secondary'
              } fill-secondary h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/calculationPage'>
            <SvgSprite
              type='calculation'
              className={`${
                pathname === '/calculationPage' ? 'fill-button' : 'fill-secondary'
              } fill-secondary h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/locationPage'>
            <SvgSprite
              type='location'
              className={`${
                pathname === '/locationPage' ? 'fill-button' : 'fill-secondary'
              } fill-secondary h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <Link to='/settingsPage'>
            <SvgSprite
              type='settings'
              className={`${
                pathname === '/settingsPage' ? 'fill-button' : 'fill-secondary'
              } fill-secondary h-12 w-8 active:opacity-50`}
            />
          </Link>
        </li>
      </ul>
      <ul className='flex h-full items-center gap-12 px-8'>
        <li className='cursor-pointer'>
          <SvgSprite type='help' className='fill-secondary h-12 w-8 active:opacity-50' />
        </li>
        <li className='cursor-pointer'>
          <SvgSprite type='exit' className='fill-secondary h-12 w-8 active:opacity-50' />
        </li>
      </ul>
    </nav>
  );
};
