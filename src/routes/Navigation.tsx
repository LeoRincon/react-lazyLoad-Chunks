import { Suspense } from 'react';
import {
 BrowserRouter,
 Routes,
 Route,
 NavLink,
 Navigate,
} from 'react-router-dom';

import { routes } from './routes';

import logo from '../logo.svg';
export const Navigation = () => {
 return (
  <BrowserRouter>
   <Suspense fallback={<div>Loading...</div>}>
    <div className='main-layout'>
     <nav>
      <img src={logo} alt='React Logo' />
      <ul style={{ display: 'flex', flexDirection: 'column', padding: '4px' }}>
       {routes.map(({ to, name }) => (
        <li key={to}>
         <NavLink
          to={to}
          className={({ isActive }) => (isActive ? 'nav-active' : '')}
         >
          {name}
         </NavLink>
        </li>
       ))}
      </ul>
     </nav>

     <Routes>
      {routes.map(({ path, Component }) => (
       <Route key={path} path={path} element={<Component />} />
      ))}

      <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
     </Routes>
    </div>
   </Suspense>
  </BrowserRouter>
 );
};
