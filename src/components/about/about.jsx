import { useRef } from "react"
import "./about.scss"


function About() {

    const elModal = useRef()
    const elModal2 = useRef()
    const elModal3 = useRef()
    const elModal4 = useRef()
    const elBtn1 = useRef()
    const elBtn2 = useRef()

    return (
        <section className="section-about">
            <div className="container">
                <div className="about-box">
                    <div className="about-content">
                        <h3 className="about-title">О компании Asaxiy</h3>
                        <p className="about-text">Главное преимущество нашей компании, которая занимается поставками бытовой техники и электроники в Узбекистане – многолетний опыт работы и
                            заслуженное доброе имя. С момента своего развития интернет-магазин Asaxiy и его команда неустанно следит за тенденциями спроса потребительского рынка,
                            что дает нам возможность всегда быть в курсе самых последних технологий и инновационных решений. Специалисты компании внимательно изучают желания
                            наших клиентов, поэтому ресурс постоянно обновляется качественными новинками, имеющими доступную стоимость.</p>

                        <div class="accordin" >
                            <div className="close-btn1" ref={elBtn1} onClick={((evt) => {
                                elModal.current.style.height = "45px"
                                elModal.current.style.transition = "0.5s linear"
                                setTimeout(()=>{
                                    elModal4.current.style.display = "none" 
                                },100)
                                elBtn1.current.classList.remove("close-accordin1")
                            })}></div>
                            <div className="close-btn2" ref={elBtn2} onClick={(()=>{
                                 elModal3.current.style.height = "45px"
                                 elModal3.current.style.transition = "0.5s linear"
                                 setTimeout(()=>{
                                     elModal2.current.style.display = "none"
                                },100)
                                 elBtn2.current.classList.remove("close-accordin2")
                            })}>salom</div>

                            <h3 class="accordin-head" ref={elModal} onClick={(() => {
                                elModal.current.style.height = "456px"
                                elModal.current.style.transition = "0.5s linear"
                                setTimeout(() => {
                                    elModal4.current.style.display = "flex"
                                }, 200)
                                elModal3.current.style.height = "45px"
                                elModal3.current.style.transition = "0.5s linear"
                                elModal2.current.style.display = "none"

                                elBtn1.current.classList.add("close-accordin1")
                            })}> Принцип работы компании
                                <p class="accordin-content" ref={elModal4}>
                                    ждый покупатель должен в комфортных условиях выбрать телефоны и гаджеты максимально быстро, поэтому мы создали интуитивно понятное меню, которое легко освоить новым пользователям сети. Для большего удобства мы раздели меню на соответствующие разделы, в которых вы найдете более 15 тысяч разновидностей оргтехники и сопутствующих товаров. Выглядят они следующим образом:
                                    <br />
                                    • посуда – здесь вы найдете самые необходимые атрибуты домашнего обихода, без которого не обходится наша повседневная жизни. Товары, представленные на сайте нашего магазина, обладают высоким качеством и прочностью;
                                    • кондиционеры и климатическая техника – раздел позволяет сделать полезные покупки в соответствии с вашими потребностями. К каждому товару имеется описание, которое позволит сделать правильный выбор;
                                    • телевизоры, видео и аудио находятся в следующем разделе, который достойно позиционируется как бытовая техника. Здесь представлены самые последние новинки и разработки, имеющие полномасштабный перечень функций, идущий в ногу со временем;
                                    • Техника для красоты и здоровья – один из любимых отделов наших постоянных покупательниц, которые знают цену здоровья и стремятся к естественной красоте путем правильного питания;
                                    • Компьютеры и оргтехника являются самым большим разделом, так как здесь включены всевозможные аксессуары и вспомогательные комплектующие, призванные облегчить процесс компьютеризации и уменьшить трату рабочего времени.

                                    Также наша компания Asaxiy.uz позаботилась про любителей игровых сервисов, о чем может сказать раздел для геймеров. Здесь предоставлено мощное компьютерное обеспечение, игровые мыши и клавиатуры, которые позволят осуществлять игровой процесс с максимальной точностью и меткостью. А для любителей чтения мы предоставили усовершенствованную литературу в виде аудио книг, тематика жанра которых достаточно широка.
                                </p>

                            </h3>
                            <h3 class="accordin-head2" ref={elModal3} onClick={(() => {
                                elModal3.current.style.height = "255px"
                                elModal3.current.style.transition = "0.5s linear"
                                setTimeout(() => {
                                    elModal2.current.style.display = "flex"
                                }, 200)
                                elModal.current.style.height = "45px"
                                elModal.current.style.transition = "0.5s linear"
                                elModal4.current.style.display = "none"

                                elBtn2.current.classList.add("close-accordin2")

                                elBtn1.current.classList.remove("close-accordin1")
                            })}>Наши преимущества
                                <p class="accordin-content" ref={elModal2}>
                                    Компания Asaxiy.uz стремительно прорабатывает все свои возможности, и сегодня мы предлагаем своим клиентам значительные скидки и быструю доставку в ряды городов. В зону нашего обслуживания входят такие города как Андижане, Бухаре, Фергане, Джизак, Хорезм, Наманган, Навои, Кашкадарью, Самарканде, Сырдарье, Сурхандарье и всей Ташкентской области, а также Республика Каракалпакстан. И это неполная карта поставок. Уточнить все наши зоны обслуживания вы можете, позвонив специалисту интернет-магазина, который предоставит всю интересующую вас информацию.
                                    Каждый покупатель нашего магазина – достойный гость, которому мы предложим приятные скидки и бонусные программы. Мы полностью сопроводим весь процесс подбора товаров согласно требованиям клиентам и произведем доставку любым удобным способом.
                                </p>
                            </h3>
                        </div>

                        <div className="about-container">
                            <p className="about-container-text">"Asaxiy Books" ООО</p>
                            <p className="about-container-text">Регистрация: 646439</p>
                            <p className="about-container-text">ИНН: 305829008</p>
                            <p className="about-container-text">Директор: Allayev Firuz Abdunasimovich</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default About