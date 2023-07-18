import "./footer.scss"
import phone from "../../assets/svg/footer-phone.svg"
import mail from "../../assets/svg/footer-mail.svg"
import location from "../../assets/svg/footer-location.svg"
import facebook from "../../assets/svg/footer-facebook.svg"
import telegram from "../../assets/svg/footer-telegram.svg"
import instagram from "../../assets/svg/footer-instagram.svg"
import youtobe from "../../assets/svg/footer-youtobe.svg"
import wifi from "../../assets/svg/footer-wifi.svg"



function Footer() {
    return (
        <section className="section-7">
            <div className="container">
                <div className="footer-box">
                    <ul className="footer-link">
                        <li className="footer-links">
                            <div className="footer-links-item1">
                                <h3 className="footer-links-title1">Информация</h3>

                                <div className="footer-links-content">
                                    <a className="footer-links-content-a" href="#">Часто задаваемые вопросы</a>
                                    <a className="footer-links-content-a" href="#">Пункты выдачи</a>
                                    <a className="footer-links-content-a" href="#">Блог</a>
                                    <a className="footer-links-content-a" href="#">Наши бренды</a>
                                    <a className="footer-links-content-a" href="#" >Публичная оферта (Пользовательское соглашение)</a>
                                    <a className="footer-links-content-a" href="#">Оферта для покупок в рассрочку</a>
                                    <a className="footer-links-content-a" href="#">О нас</a>
                                </div>
                            </div>

                        </li>
                        <li className="footer-links">
                            <div className="footer-links-item1">
                                <h3 className="footer-links-title1">Для связи</h3>

                                <div className="footer-links-item1-content">
                                    <a className="footer-links-content-a" href="#"><img src={phone} alt="error" /> +998 71 200 01 05 </a>
                                    <a className="footer-links-content-a" href="#"><img src={mail} alt="error" /> info@asaxiy.uz </a>
                                    <a className="footer-links-content-a" href="#"><img src={location} alt="error" /> улица Ислама Каримова, 49, Ташкент </a>
                                </div>

                            </div>
                            <div className="footer-links-item1">
                                <h3 className="footer-links-title1">Книжные магазины</h3>

                                <div className="footer-links-item1-content">
                                    <a className="footer-links-content-a" href="#"><img src={location} alt="error" /> Asaxiy Novza</a>
                                    <a className="footer-links-content-a" href="#"><img src={location} alt="error" /> Asaxiy Farhod bozori</a>
                                    <a className="footer-links-content-a" href="#"><img src={location} alt="error" /> Asaxiy Farhod bozori</a>
                                </div>
                            </div>
                        </li>
                        <li className="footer-links">
                            <div className="footer-links-item1">
                                <h3 className="footer-links-title1">Наши достижения</h3>

                                <div className="footer-links-item1-content">
                                    <a className="footer-links-content-a" href="#">Премия "Tahsin"</a>
                                    <a className="footer-links-content-a" href="#">Медаль "Shuhrat"</a>
                                    <a className="footer-links-content-a" href="#">Медаль "Kelajak
                                        bunyodkori"</a>
                                </div>

                            </div>
                            <div className="footer-links-item1">
                                <h3 className="footer-links-title1">Мы в соц. сетях</h3>

                                <div className="footer-links-websites">
                                    <img src={facebook} alt="error" />
                                    <img src={telegram} alt="error" />
                                    <img src={instagram} alt="error" />
                                    <img src={youtobe} alt="error" />
                                    <img src={wifi} alt="error" />
                                </div>
                            </div>
                        </li>
                        <li className="footer-links">
                            <div className="footer-links-item1">
                                <h3 className="footer-links-title1">Виды оплаты</h3>

                                <div className="footer-links-item2">
                                    <div className="footer-links-item2-contents">
                                        <img src="https://asaxiy.uz/custom-assets/images/payme.svg" alt="error" />
                                        <a href="#"></a>
                                    </div>
                                    <div className="footer-links-item2-contents">
                                        <img src="https://asaxiy.uz/custom-assets/images/visa.svg" alt="error" />
                                        <a href="#"></a>
                                    </div>
                                    <div className="footer-links-item2-contents">
                                        <a href="#"><img src="https://asaxiy.uz/custom-assets/images/mastercard.svg" alt="error" /></a>
                                    </div>
                                    <div className="footer-links-item2-contents">
                                        <a href="#"><img src="https://asaxiy.uz/custom-assets/images/humo.svg" alt="error" /></a>
                                    </div>
                                    <div className="footer-links-item2-contents">
                                        <a href="#">
                                            <img src="https://asaxiy.uz/custom-assets/images/uzcard.svg" alt="error" />
                                        </a>
                                    </div>
                                    <div className="footer-links-item2-contents">
                                        <a href="#">
                                            <img src="https://asaxiy.uz/custom-assets/images/uzum.svg" alt="error" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer