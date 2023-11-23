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
  onClick?: () => void;
};

export function BtnControl({ type, onClick }: Props) {
  return (
    <div className='cursor-pointer rounded-full bg-border p-4 active:bg-main' onClick={onClick}>
      {type ? (
        <SvgSprite type={type} className='h-5 w-5 fill-secondary' />
      ) : (
        <div className='h-5 w-5 bg-secondary'></div>
      )}
    </div>
  );
}
