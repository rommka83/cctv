import { ISession } from '../../../shared/types/sessionTypes';
import { CustomCheckBox } from '../../../shared/ui/customCheckBox';

type Props = {
  session: ISession;
  selected: boolean;
  handleChange: (value: boolean) => void;
};

export default function Row({ session, selected, handleChange }: Props) {
  return (
    <tr className=''>
      <td className='td-l'>
        <CustomCheckBox handleCheck={handleChange} check={selected} />
      </td>
      <td className='td'>{session.name}</td>
      <td className='td'>{session.videos.map((el) => el.cameraId)}</td>
      <td className='td'>
        {`${new Date(session.created).toLocaleDateString().toString()} 
          ${new Date(session.created).toLocaleTimeString().toString()}`}
      </td>
      <td className='td-r'>{}</td>
    </tr>
  );
}
