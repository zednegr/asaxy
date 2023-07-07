import "./apps.scss"
import logo2 from "../../assets/svg/apps-logo.svg"
import googel from "../../assets/svg/apps-google.svg"
import store from "../../assets/svg/apps-store.svg"
import mobile from "../../assets/imgs/apps-mobile.png"

function Apps(){
    return(
        <section className="section-6">
            <div className="contaner">
                <div className="apps-box">
                    <ul className="apps-link">
                        <li className="apps-links">
                            <img src={logo2} alt="error" width={134} height={32} />
                            <p className="apps-text">Ваш интернет магазин</p>
                            <div className="apps-links-content">
                                 <img src={store} alt="error" />
                                 <img src={googel} alt="error" />
                                 <img src="https://asaxiy.uz/custom-assets/images/app-gallery.svg" alt="error" />
                            </div>
                        </li>

                        <img src={mobile} alt="error" />
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Apps