import { SvgSprite } from '../svg-sprite';

type Props = {
  type?:
    | 'power'
    | 'play'
    | 'sessions'
    | 'calculation'
    | 'location'
    | 'settings'
    | 'help'
    | 'exit'
    | 'add'
    | 'stop'
    | 'atm'
    | 'notes'
    | 'playlist'
    | 'phone';
};

export function BtnControl({ type }: Props) {
  return type ? (
    <div className='bg-border active:bg-main cursor-pointer rounded-full p-4'>
      <SvgSprite type={type} className='fill-secondary h-5 w-5' />
    </div>
  ) : (
    <div className='bg-border active:bg-main cursor-pointer rounded-full p-4'>
      <div className='bg-secondary h-5 w-5'></div>
    </div>
  );
}
