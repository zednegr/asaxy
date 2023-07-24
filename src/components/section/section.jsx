import "./section.scss"
import link11 from "../../assets/svg/section-link1-links-market.svg"
import link12 from "../../assets/svg/section-link1-links-fast-delivery.svg"
import link13 from "../../assets/svg/section-link1-links-return.svg"
import link14 from "../../assets/svg/section-link1-links-card.svg"

function Section() {
    return (
        <section className="section-8">
            <div className="container">
                <div className="section-81">
                    <ul className="link1">
                        <li className="link1-links">
                            <span className="link1-links-img"><img src={link11} alt="link11" /></span>
                            <div className="link1-links-text-title">
                                <h5 className="link1-links-title">Больше не нужно ходить на базар</h5>
                                <p className="link1-links-text">У нас выгодные цены и доставка до дома</p>
                            </div>
                        </li>
                        <li className="link1-links">
                            <span className="link1-links-img"><img src={link12} alt="link11" /></span>
                            <div className="link1-links-text-title">
                                <h5 className="link1-links-title">Быстрая доставка</h5>
                                <p className="link1-links-text">Наш сервис удивит вас</p>
                            </div>
                        </li>
                        <li className="link1-links">
                            <span className="link1-links-img"><img src={link13} alt="link11" /></span>
                            <div className="link1-links-text-title">
                                <h5 className="link1-links-title">Удобства для вас</h5>
                                <p className="link1-links-text">Быстрое оформление и
                                    гарантия на возврат в
                                    случае неисправности</p>
                            </div>
                        </li>
                        <li className="link1-links">
                            <span className="link1-links-img"><img src={link14} alt="link11" /></span>
                            <div className="link1-links-text-title">
                                <h5 className="link1-links-title">Рассрочка</h5>
                                <p className="link1-links-text">Без предоплаты на 6 или
                                    12 месяцев</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Section