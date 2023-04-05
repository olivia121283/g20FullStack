import { NavLink } from 'react-router-dom'
import './Header.scss'
import { useAuthContext } from '../../context/AuthContext'

const Header = () => {
  const { isAuth, logout } = useAuthContext()
  const context = useAuthContext()
  const product = context.selectedProduct

  const handleSearch = (e) => {
    context.setSearch(e.target.value)
    console.log(e)
  }

  const linkIsActive = (isActive, isPending) => {
    if (isPending) return 'header__item-link'
    if (isActive) return 'header__item-link header__item-link--is-active'
    else return 'header__item-link'
  }

  return (
    <nav className='header'>
      <img className='mb-2' src='https://ticnegocios.camaradesevilla.com/wp-content/uploads/2019/04/ecommerce-news-logo.png' alt='' width='225' height='200' />
      <ul className='header__nav-list'>
        <input type='search' placeholder='Search' className='form-control' onChange={handleSearch} />
        <li className='header__list-item'>
          <NavLink
            to='/'
            className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >Home
          </NavLink>
        </li>

        <li className='header__list-item'>
          <NavLink
            to='/dashboard'
            className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
          >Dashboard
          </NavLink>
        </li>
        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink
                  to='/secret'
                  className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
                >Secret
                </NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  to='/'
                  className='header__item-link'
                  onClick={logout}
                >Logout
                </NavLink>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <NavLink
                  to='/login'
                  className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
                >Login
                </NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  to='/signup'
                  className={({ isActive, isPending }) => linkIsActive(isActive, isPending)}
                >Signup
                </NavLink>
              </li>

            </>)}

      </ul>
    </nav>
  )
}

export default Header
