import './header.scss'
import NavLogo from "../../assets/svg/asaxy-logo.svg"
import Payment from "../../assets/svg/nav-payment.svg"
import Tracker from "../../assets/svg/nav-tracker.svg"
import Language from "../../assets/svg/nav-language.svg"
import Cart from "../../assets/svg/nav-cart.svg"
import Like from "../../assets/svg/nav-like.svg"
import User from "../../assets/svg/nav-user.svg"
import SearchIcon from "../../assets/svg/search-icon.svg"


function Header() {

    return (
        <section className="header-section">

            <div className="container">

                <div className="header-wrapper">

                    <nav className="navbar">

                        <div className="brand">

                            <img src={NavLogo} alt="Asaxy" />

                        </div>

                        <form>

                            <input className='nav-search' type="text" placeholder='Search...' />

                            <div className="search-btn">

                                <a className='search-link' href="#">Search</a>
                                <img className='search-icon' width={'19px'} src={SearchIcon} alt="icon" />

                            </div>

                        </form>

                        <div className="icons">
                            <div className="icon"><img src={Payment} alt="Icon" />Оплатить</div>
                            <div className="icon"><img src={Tracker} alt="Icon" />Отследить</div>
                            <div className="icon"><img src={Language} alt="Icon" />O'zbekcha</div>
                            <div className="icon"><img src={Cart} alt="Icon" />Корзинка</div>
                            <div className="icon"><img src={Like} alt="Icon" />Избранное</div>
                            <div className="icon"><img src={User} alt="Icon" />Кабинет</div>
                        </div>



                    </nav>

          {/* <- ==================== Navbar Bottom ===================== -> */}

                    <div className="nav-bottom">

                        <ul className='bottom-nav_list'>

                            <li><a id='item-1' href="#">Все категории</a></li>
                            <li><a id='item-2' href="#">Скидки</a></li>
                            <li><a id='item-3' href="#">Кондиционеры</a></li>
                            <li><a id='item-4' href="#">Новинки</a></li>
                            <li><a id='item-5' href="#">Книги</a></li>
                            <li><a id='item-6' href="#">Телефоны и гаджеты</a></li>
                            <li><a id='item-7' href="#">Ноутбуки</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Header