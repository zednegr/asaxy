import './card-inner.scss'
import Conditsioner from '../../assets/svg/conditsioner.svg'
import icons2 from './../../assets/svg/@2x.svg'

function InnerCard() {
    return (
        <>

            <div className="container">
                <div className="hero-2">
                    <div className="innner-information">
                        <div className="inner-img">
                            <img src={Conditsioner} alt="" />
                        </div>
                        <div className="information">
                            <p className='inner-title'>Кондиционер LG Dual Cool Inverter I18CGH</p>
                            <span className="icons-list2">
                                <img className="icon" src={icons2} alt="" />
                                <img className="icon" src={icons2} alt="" />
                                <img className="icon" src={icons2} alt="" />
                                <img className="icon" src={icons2} alt="" />
                                <img className="icon" src={icons2} alt="" />
                                0 отзывов
                            </span>
                            <div className="inner-price">
                            9 809 000 сум
                            </div>
                            <p className='inner-brand'>
                            Бренд:LG Electronics Модель:I18CGH
                            </p>
                            <span className='inner-bor'>
                            Наличии: <p className='inner-green'>● Есть в наличии</p>
                            </span>
                            <p className='ovoz-bering'>
                            Ovoz bering:
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default InnerCard