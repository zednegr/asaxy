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
                <div className="hero-1">

                    {
                        data.map((item) => {
                            return (
                                <div className="content">
                                    <h5>Скидка</h5>
                                    <img className="icon-btn" src={button} alt="" />
                                    <img className="heart-btn" src={heart} alt="" />
                                    <img className="img" src={item.img} alt="error" width={250} height={250} />
                                
                                    <h4>{item.nomi}</h4>
                                    <span>
                                <img className="icon" src={icon} alt="" />
                                <img className="icon" src={icon} alt="" />
                                <img className="icon" src={icon} alt="" />
                                <img className="icon" src={icon} alt="" />
                                <img className="icon" src={icon} alt="" />
                                0 отзывов

                                    </span>
                                    <p className="sof-narx">{item.sof}</p>
                                    <div>{item.narxi}</div>
                                    {/* <p>{item.brend}</p> */}


                                    <button>Купить в 1 клик</button>

                                </div>

                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Cards