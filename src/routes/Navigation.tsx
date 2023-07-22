import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

import logo from '../logo.svg';
import { Lazyload1 } from '../01-lazy-load/pages/Lazyload1';
import { Lazyload2 } from '../01-lazy-load/pages/Lazyload2';
import { Lazyload3 } from '../01-lazy-load/pages/Lazyload3';

export const Navigation = () => {
 return (
  <BrowserRouter>
   <div className='main-layout'>
    <nav>
     <img src={logo} alt='React Logo' />
     <ul>
      <li>
       <NavLink
        to='/lazy1'
        className={({ isActive }) => (isActive ? 'nav-active' : '')}
       >
        Lazy page 1
       </NavLink>
      </li>
      <li>
       <NavLink
        to='/lazy2'
        className={({ isActive }) => (isActive ? 'nav-active' : '')}
       >
        Lazy page 2
       </NavLink>
      </li>
      <li>
       <NavLink
        to='/lazy3'
        className={({ isActive }) => (isActive ? 'nav-active' : '')}
       >
        Lazy page 3
       </NavLink>
      </li>
     </ul>
    </nav>

    <Routes>
     <Route path='/lazy1' element={<Lazyload1 />} />
     <Route path='/lazy2' element={<Lazyload2 />} />
     <Route path='/lazy3' element={<Lazyload3 />} />

     <Route path='/*' element={<Navigate to='/lazy1' replace />} />
    </Routes>
   </div>
  </BrowserRouter>
 );
};
