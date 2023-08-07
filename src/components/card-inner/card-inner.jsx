import './card-inner.scss'
// import Conditsioner from '../../assets/svg/conditsioner.svg'
import icons2 from './../../assets/svg/@2x.svg'
import { comeData } from "../../data/data"
// import { Item } from '@radix-ui/react-accordion'


function InnerCard() {
    const data = comeData
    console.log(data?.img);
    return (
        <>

            <div className="container">
                <div className="hero-2">
                    
                    <div className="innner-information">
                        <div className="inner-img">
                            <img src={data?.img} alt="" />
                        </div>
                        <div className="information">
                            <p className='inner-title'>{data?.nomi}</p>
                            <span className="icons-list2">
                                <img className="icon" src={icons2} alt="" />
                                <img className="icon" src={icons2} alt="" />
                                <img className="icon" src={icons2} alt="" />
                                <img className="icon" src={icons2} alt="" />
                                <img className="icon" src={icons2} alt="" />
                                0 отзывов
                            </span>
                            <div className="inner-price">
                            {data?.narxi}
                            </div>
                            <p className='inner-brand'>
                            {data?.nomi}
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