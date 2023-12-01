import { CustomCheckBox } from '../../../shared/ui/customCheckBox';
import { useAppSelector } from '../../../store/hooks';
import { camerasActive } from '../../../store/slices/camerasSlice';
import { sessionActive } from '../../../store/slices/sessionSlice';

export default function Row() {
  const { cameras } = useAppSelector(camerasActive);
  const { session } = useAppSelector(sessionActive);

  const handleChange = (value: boolean) => {
    value;
  };

  return session ? (
    <tr>
      <td className='td border-l-0'>
        <CustomCheckBox handleCheck={(val) => handleChange(val)} />
      </td>
      <td className='td'>{session?.name}</td>
      <td className='td'>{cameras.map((el) => `${el.dron} - ${el.name}, `)}</td>
      <td className='td'>{new Date(session.created).toLocaleDateString().toString()}</td>
      <td className='td'>{'?'}</td>
      <td className='td'>{'?'}</td>
      <td className='td border-r-0'>{''}</td>
    </tr>
  ) : null;
}
