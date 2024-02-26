import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <h2 className='logo w-18 h-18 object-contain text-slate-200 font-bold text-lg'>More15años</h2>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : " text-slate-200 link"}>
          Ubicacíon
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : " text-slate-200 link"}>
          Contact
        </NavLink>

      </nav>
    </header>
  );
};

export default Navbar;