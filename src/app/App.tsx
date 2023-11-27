import { Outlet } from 'react-router-dom';

import { Menu } from '../features/menu';

function App() {
  return (
    <div className='flex h-screen w-screen flex-col bg-bg text-white'>
      <div className='flex-1 px-8'>
        <Outlet />
      </div>
      <Menu />
    </div>
  );
}

export default App;
