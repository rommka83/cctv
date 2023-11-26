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
    | 'phone'
    | 'fullscreen'
    | 'fast_forward'
    | 'fast_rewind'
    | 'pause'
    | 'skip_next'
    | 'skip_previous';

  onClick?: () => void;
  player?: boolean;
};

export function BtnControl({ type, onClick, player }: Props) {
  return !player ? (
    <div className='cursor-pointer rounded-full bg-border p-4 active:bg-main' onClick={onClick}>
      {type ? (
        <SvgSprite type={type} className='h-5 w-5 fill-secondary' />
      ) : (
        <div className='h-5 w-5 bg-secondary'></div>
      )}
    </div>
  ) : (
    <div className='cursor-pointer p-2 active:opacity-50' onClick={onClick}>
      {type ? <SvgSprite type={type} className='h-3 fill-secondary' /> : null}
    </div>
  );
}
