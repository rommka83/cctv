import { Link } from 'react-router-dom';
import { SvgSprite } from '../../shared/ui/svg-sprite';

export const Menu = () => {
  let location = useLocation();

  return (
    <nav className='bg-main flex h-[10%] w-full justify-between'>
      <ul className='flex h-full items-center gap-12 px-8'>
        <li className='cursor-pointer'>
          <Link to='/power'>
            <SvgSprite type='power' className='fill-secondary h-12 w-8 active:opacity-50' />
          </Link>
        </li>
        <li className='cursor-pointer'>
          <SvgSprite type='play' className='fill-secondary h-12 w-8 active:opacity-50' />
        </li>
        <li className='cursor-pointer'>
          <SvgSprite type='sessions' className='fill-secondary h-12 w-8 active:opacity-50' />
        </li>
        <li className='cursor-pointer'>
          <SvgSprite type='calculation' className='fill-secondary h-12 w-8 active:opacity-50' />
        </li>
        <li className='cursor-pointer'>
          <SvgSprite type='location' className='fill-secondary h-12 w-8 active:opacity-50' />
        </li>
        <li className='cursor-pointer'>
          <SvgSprite type='settings' className='fill-secondary h-12 w-8 active:opacity-50' />
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
