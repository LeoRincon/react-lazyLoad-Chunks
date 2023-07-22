import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import Lazyload1 from '../pages/Lazyload1';
import Lazyload2 from '../pages/Lazyload2';
import Lazyload3 from '../pages/Lazyload3';

export default function LazyLayout() {
 return (
  <div>
   <h1>LazyLayout Page!</h1>
   <ul>
    <li>
     <NavLink to='lazy1'>LazyLoad1</NavLink>
    </li>
    <li>
     <NavLink to='lazy2'>LazyLoad2</NavLink>
    </li>
    <li>
     <NavLink to='lazy3'>LazyLoad3</NavLink>
    </li>
   </ul>

   <Routes>
    <Route path='lazy1' element={<Lazyload1 />} />
    <Route path='lazy2' element={<Lazyload2 />} />
    <Route path='lazy3' element={<Lazyload3 />} />

    <Route path='/*' element={<Navigate replace to='lazy1' />} />
   </Routes>
  </div>
 );
}
