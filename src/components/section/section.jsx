import "./section.scss"

function Section() {
    return (
        <section className="section-8">
            <div className="container">
                <div className="section-box">
                    <ul className="section-link">
                        <li className="section-links">
                            <h3 className="section-links-title">Больше не нужно ходить на базар</h3>
                            <p className="section-links-text">У нас выгодные цены и
                                доставка до дома</p>
                        </li>
                        <li className="section-links">
                            <h3 className="section-links-title">Быстрая доставка</h3>
                            <p className="section-links-text">Наш сервис удивит вас</p>
                        </li>
                        <li className="section-links">
                            <h3 className="section-links-title">Удобства для вас</h3>
                            <p className="section-links-text">Быстрое оформление и
                                гарантия на возврат в
                                случае неисправности</p>
                        </li>
                        <li className="section-links">
                            <h3 className="section-links-title">Рассрочка</h3>
                            <p className="section-links-text">Без предоплаты на 6 или
                                12 месяцев</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Section