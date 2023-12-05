import { ISession } from '../../../shared/types/sessionTypes';
import { CustomCheckBox } from '../../../shared/ui/customCheckBox';
import { useAppSelector } from '../../../store/hooks';
import { camerasActive } from '../../../store/slices/camerasSlice';
// import { sessionActive } from '../../../store/slices/sessionSlice';

interface IRowProps {
  session: ISession;
}

export default function Row({ session }: IRowProps) {
  const { cameras } = useAppSelector(camerasActive);
  // const { session } = useAppSelector(sessionActive);

  const handleChange = (value: boolean) => {
    value;
  };

  return session ? (
    <tr>
      <td className='td-l'>
        <CustomCheckBox handleCheck={(val) => handleChange(val)} />
      </td>
      <td className='td'>{session?.name}</td>
      <td className='td'>{cameras.map((el) => `${el.dron} - ${el.name}, `)}</td>
      <td className='td'>{new Date(session.created).toLocaleDateString().toString()}</td>
      <td className='td'>{'?'}</td>
      <td className='td'>{'?'}</td>
      <td className='td-r'></td>
    </tr>
  ) : null;
}
