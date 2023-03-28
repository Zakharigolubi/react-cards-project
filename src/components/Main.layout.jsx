import { Outlet, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', title: 'Main Page' },
  { to: '/create', title: 'Create Page' }
]

function MainLayout() {
  return (
    <div className='container'>
      <nav className='navbar bg-body-tertiary'>
        <form className='container-fluid justify-content-start'>
          {navItems.map((item) => (
            <NavLink to={item.to} key={item.title + Math.random()}>
              {({ isActive }) => (
                <button
                  className={
                    isActive
                      ? 'btn btn-outline-success mx-2'
                      : 'btn btn-sm btn-outline-secondary mx-2'
                  }
                >
                  {item.title}
                </button>
              )}
            </NavLink>
          ))}
        </form>
      </nav>

      <Outlet />
    </div>
  )
}
export default MainLayout
