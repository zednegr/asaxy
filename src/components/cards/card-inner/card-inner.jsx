import './card-inner.scss'
import Conditsioner from './../../../assets/svg/conditsioner.svg'

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
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}
export default InnerCard