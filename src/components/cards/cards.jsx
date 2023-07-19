import {NavLink , Outlet} from 'react-router-dom';
import "./cards.scss"
import { comeData } from "../../data/data"
import icon from "../../assets/svg/@2x.svg"
import button from "../../assets/svg/Button.svg"
import heart from "../../assets/svg/heart.svg.svg"


function Cards() {

    const data = comeData

    return (
        <section className="section-1">
            <div className="container">
                        <h3 className="skitka">Скидки</h3>
                <div className="hero-1">
                    {
                        data?.map((item) => {
                            return (
                               <NavLink to={"/card-inner"}>
                                <li className="list-nav">
                                <div className="content">
                                    <h5 className="skitki">Скидка</h5>
                                    <img className="icon-btn" src={button} alt="" />
                                    <img className="heart-btn" src={heart} alt="" />
                                    <img className="img" src={item.img} alt="error" width={250} height={250} />
                                
                                    <h4 className="item-title">{item.nomi}</h4>
                                    <span className="icons-list">
                                <img className="icon" src={icon} alt="" />
                                <img className="icon" src={icon} alt="" />
                                <img className="icon" src={icon} alt="" />
                                <img className="icon" src={icon} alt="" />
                                <img className="icon" src={icon} alt="" />
                                0 отзывов

                                    </span>
                                    <p className="sof-narx">{item.sof}</p>
                                    <div className="item-price">{item.narxi}</div>
                                    {/* <p>{item.brend}</p> */}


                                    <button className="kupit">Купить в 1 клик</button>

                                </div>

                                </li>
                               </NavLink>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Cards