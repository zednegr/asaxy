import { useRef, useEffect } from "react"
import './header.scss'
import NavLogo from "../../assets/svg/asaxy-logo.svg"
import SearchIcon from "../../assets/svg/search-icon.svg"
import google from "../../assets/imgs/modal-inner-form-google.png"
import facebook from "../../assets/imgs/modal-inner-form-facebook.png"

import link11 from "../../assets/svg/section-link1-links-market.svg"
import link12 from "../../assets/svg/section-link1-links-fast-delivery.svg"
import link13 from "../../assets/svg/section-link1-links-return.svg"
import link14 from "../../assets/svg/section-link1-links-card.svg"

import close from "../../assets/imgs/modal-close-btn.png"

function Header() {

    const elModal = useRef()

    const elInner = useRef()

    return (
        <section className="header-section">

            <div className="container">

                <div className="header-wrapper">

                    <nav className="navbar">

                        <div className="brand">

                            <img src={NavLogo} alt="Asaxy" />

                        </div>

                        <form>

                            <input className='nav-search' type="text" placeholder='Search...' />

                            <div className="search-btn">

                                <a className='search-link' href="#">Search</a>
                                <img className='search-icon' width={'19px'} src={SearchIcon} alt="icon" />

                            </div>

                        </form>

                        <div className="icons">
                            <div className="icon">
                                <svg className='icon-svg' width="33" height="24" viewBox="0 0 33 24" fill="#0059a1" xmlns="http://www.w3.org/2000/svg">
                                    <g id="payment.svg" clip-path="url(#clip0_3_2836)">
                                        <g id="Layer_x0020_1">
                                            <g id="_1735475502800">
                                                <path id="Vector" d="M7.41987 18.6616C8.52361 18.6616 9.41836 17.7669 9.41836 16.6632C9.41836 15.5594 8.52361 14.6647 7.41987 14.6647C6.31614 14.6647 5.42139 15.5594 5.42139 16.6632C5.42139 17.7669 6.31614 18.6616 7.41987 18.6616Z" fill="#212529" />
                                                <path id="Vector_2" d="M25.4079 0.00744629H6.75373C3.07592 0.0107198 0.0953756 2.9929 0.0921021 6.66907V17.3293C0.0953756 21.0071 3.07592 23.9877 6.75373 23.9926H25.4079C29.0857 23.9877 32.0663 21.0071 32.0695 17.3309V6.67071C32.0663 2.9929 29.0857 0.0123566 25.4079 0.00908305V0.00744629ZM6.75373 2.6721H25.4079C27.6159 2.6721 29.4049 4.46271 29.4049 6.66907H2.75511C2.75511 4.46108 4.54573 2.6721 6.75209 2.6721H6.75373ZM25.4079 21.3263H6.75373C4.54573 21.3263 2.75675 19.5357 2.75675 17.3293V9.33372H29.4065V17.3293C29.4065 19.5373 27.6159 21.3263 25.4095 21.3263H25.4079Z" fill="#212529" />
                                            </g>
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_2836">
                                            <rect width="31.98" height="23.9851" fill="" transform="translate(0.0899963 0.00744629)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                Оплатить</div>

                            <div className="icon">

                                <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="tracker.svg" clip-path="url(#clip0_3_2844)">
                                        <g id="Layer_x0020_1">
                                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M2.89345 7.95539L3.11408 8.39664C3.14559 8.45968 3.18681 8.51787 3.22075 8.5809C3.51048 9.12034 3.83172 9.6513 4.15902 10.1677C4.48996 10.6902 4.83666 11.2139 5.20639 11.7085C5.37246 11.9303 5.50217 12.134 5.73856 12.2903C5.95555 12.4346 6.23194 12.5304 6.49378 12.5304C7.22718 12.5304 7.49145 12.2503 7.90239 11.6951C7.99573 11.5691 8.08059 11.4369 8.17151 11.3084C8.26121 11.1824 8.34486 11.0526 8.43577 10.9278C8.78853 10.4441 9.11462 9.90223 9.42496 9.38946L9.89045 8.55787C10.202 8.00145 10.4481 7.43777 10.6517 6.83165C11.0457 5.65821 10.6336 4.19747 9.85045 3.27254C9.47466 2.82765 9.0528 2.46277 8.53397 2.19244C7.84663 1.83483 7.21506 1.70997 6.43802 1.70997C6.08404 1.70997 5.73977 1.77422 5.39913 1.86392C4.32025 2.14637 3.27773 2.98039 2.78314 3.98169C2.04004 5.48365 2.18672 6.48131 2.89466 7.95781L2.89345 7.95539ZM5.38216 6.03643V5.84247C5.38216 5.27878 5.89857 4.75873 6.60409 4.75873C7.16172 4.75873 7.71571 5.28969 7.71571 5.84247C7.71571 6.21947 7.64419 6.54435 7.36174 6.79407C6.49984 7.55535 5.38216 6.83044 5.38216 6.03643ZM23.0104 21.8851C22.2055 21.8851 21.4491 21.2269 21.4491 20.4208C21.4491 19.9686 21.4758 20.102 21.4976 19.8353H24.4251C24.6664 20.3383 24.4312 21.1057 24.0699 21.4318C23.8142 21.6633 23.3523 21.8839 23.0092 21.8839L23.0104 21.8851ZM9.98016 20.3723L10.0783 19.8353H13.0059C13.0568 20.4523 13.172 21.279 12.1682 21.7312C11.0542 22.2331 9.98016 21.3493 9.98016 20.3723ZM25.7428 17.6884H22.4734V13.5886H27.646V15.6385C27.646 16.2337 27.3914 16.7247 27.0981 17.0423C26.8181 17.3466 26.3029 17.6884 25.7428 17.6884ZM6.85745 15.6385V14.2238C7.38356 14.1741 7.89633 13.9947 8.33758 13.688C8.95219 13.2613 9.31707 12.6528 9.75468 12.0212C10.3038 11.2284 10.6493 10.655 11.1209 9.85859C11.1803 9.75798 11.23 9.67555 11.2809 9.57493L11.7343 8.69485C12.0531 8.0063 12.521 6.92257 12.521 5.95399C12.521 5.03876 12.2337 3.92714 11.8143 3.14646H17.1044C18.9967 3.14646 20.3738 4.52477 20.3738 6.41585V17.6884H8.75944C7.78359 17.6884 6.85624 16.7441 6.85624 15.6385H6.85745ZM4.75907 13.6868V15.8349C4.75907 16.3065 4.92273 16.9368 5.08395 17.2678C5.67067 18.4764 6.575 19.3746 7.93149 19.691C7.85754 20.5759 7.80299 21.0281 8.23939 21.9688C8.73156 23.0283 9.96925 23.9181 11.2021 23.9872C11.9282 24.0284 12.5174 23.9278 13.0714 23.6611C13.4326 23.4877 13.595 23.3883 13.8726 23.1459C14.149 22.9046 14.2896 22.7919 14.5285 22.4355C14.9091 21.8658 15.2012 21.0851 15.2012 20.3262C15.2012 20.1189 15.1528 20.0971 15.1528 19.8377H19.3495C19.3495 20.4984 19.2186 20.5893 19.5265 21.5154C20.1665 23.4441 22.3413 24.5557 24.4542 23.672C24.8252 23.5168 25.2252 23.2477 25.5125 22.9737C26.0034 22.5058 26.6217 21.5009 26.6217 20.5687C26.6217 20.1432 26.6556 20.0462 26.5732 19.6898C28.3261 19.2813 29.7456 17.566 29.7456 15.8349V10.2223C29.7456 9.29248 29.4038 8.43058 29.0607 7.83295C28.3018 6.51283 26.9829 5.55153 25.4107 5.28484C24.5742 5.14301 23.368 5.19514 22.3764 5.19514L22.1049 4.34415C21.34 2.43246 19.4792 1.04688 17.3008 1.04688H9.92561C9.69043 0.889288 9.42859 0.740184 9.13281 0.591079C8.42123 0.234683 7.61146 0.0395136 6.7932 0.00799561H6.30588C5.48763 0.0407259 4.67664 0.234683 3.96627 0.591079C3.59291 0.778975 2.97103 1.13658 2.65343 1.44449C2.51887 1.5742 2.39401 1.67118 2.2643 1.80574C2.19157 1.88211 2.1746 1.92575 2.09823 2.00091C1.85214 2.24699 1.67031 2.53671 1.47635 2.82401C0.951453 3.6059 0.576874 4.89814 0.576874 5.95278C0.576874 7.6984 2.14065 10.2162 2.96618 11.4539C3.25106 11.8818 3.75413 12.6322 4.06083 13.0262C4.27176 13.2965 4.48753 13.5038 4.76029 13.6868H4.75907ZM22.4734 7.34321H24.767C25.1828 7.34321 25.6313 7.50444 25.9234 7.65112C26.9393 8.16026 27.646 9.19793 27.646 10.3689V11.443H22.4734V7.34321ZM6.57621 8.31542C7.19445 8.31542 7.81754 8.03176 8.22242 7.62809C8.9037 6.95045 9.11099 5.93702 8.74732 5.0327C8.64064 4.76843 8.47942 4.50659 8.29152 4.32112C7.72419 3.76107 7.26961 3.56468 6.4368 3.56468C5.941 3.56468 5.5046 3.75985 5.14214 4.02048C4.99788 4.12474 4.9397 4.18777 4.81726 4.30778C4.6233 4.49932 4.46329 4.75146 4.3554 5.0133C4.25115 5.26908 4.13114 5.73337 4.16023 6.00491C4.20266 6.39403 4.25842 6.628 4.39056 6.94318C4.593 7.42807 5.09971 7.9069 5.58582 8.10934C5.87797 8.23057 6.17254 8.31542 6.575 8.31542H6.57621Z" fill="#212529" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_2844">
                                            <rect width="29.17" height="23.9864" fill="white" transform="translate(0.575012 0.0067749)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                Отследить</div>

                            <div className="icon">

                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="language.svg" clip-path="url(#clip0_3_2850)">
                                        <g id="Layer_x0020_1">
                                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M14.6718 21.6094L15.4486 20.558C16.1325 19.6125 16.6216 18.6853 17.1408 17.6561C17.2546 17.4312 17.3278 17.2219 17.4377 17.0153H20.6247L19.5262 18.5427C18.7703 19.5157 17.6273 20.2533 16.5902 20.8575C16.2097 21.0785 15.1282 21.5035 14.6704 21.6094H14.6718ZM8.81168 17.0153H15.187C14.5214 18.2747 13.8492 19.4203 12.922 20.5162C12.7729 20.6927 12.0811 21.4303 12.0458 21.5624H11.9516C11.9202 21.4434 11.2167 20.6835 11.0754 20.5162C10.1508 19.4216 9.47603 18.272 8.81038 17.0153H8.81168ZM3.37402 17.0153H6.56103C6.66434 17.2101 6.7415 17.4259 6.8422 17.6247C6.94813 17.8352 7.04359 18.0249 7.15475 18.2498C7.98779 19.9198 9.12031 21.2184 9.32694 21.6094C9.07062 21.5493 8.57367 21.3819 8.34351 21.2812C7.75109 21.0209 7.14691 20.7489 6.60811 20.3919C4.93156 19.279 4.39538 18.5414 3.37402 17.0166V17.0153ZM16.0305 15H7.96818L7.65301 13.5811C7.45161 12.378 7.45161 11.6221 7.65301 10.4203L7.96818 9.00133H16.0305C16.0436 9.1648 16.3888 10.3522 16.4503 11.1604C16.4608 11.2978 16.4451 11.4351 16.4595 11.5724C16.5392 12.3047 16.4869 12.0523 16.4529 12.7978C16.415 13.5955 16.0488 14.7842 16.0305 15.0013V15ZM18.1399 9.00003H21.4211C21.5898 9.00003 21.5963 9.22758 21.684 9.58067C22.0789 11.1604 22.0828 12.8004 21.6931 14.3815C21.6146 14.7019 21.5898 15 21.4211 15H18.1399C18.1439 14.8012 18.238 14.4887 18.2772 14.2938C18.5362 13.0044 18.5963 11.7437 18.4028 10.4255L18.1412 9.00003H18.1399ZM5.48344 11.9529C5.48344 12.8121 5.55929 13.4869 5.72145 14.2925C5.76068 14.4887 5.85353 14.7999 5.85876 14.9987H2.57759C2.23496 14.9987 2.01526 12.5061 2.01526 12.1857C2.01526 11.1461 2.07018 10.5589 2.31473 9.57936C2.3592 9.40151 2.39189 8.99872 2.57759 8.99872H5.85876C5.85484 9.18965 5.7646 9.49436 5.72929 9.66698C5.57759 10.4255 5.48344 11.1434 5.48344 11.9529ZM11.9529 2.43769H12.0471C12.0785 2.5567 12.782 3.3165 12.9233 3.4839C13.0763 3.66568 13.1874 3.81868 13.3326 4.01223C14.2703 5.26376 14.4965 5.67962 15.187 6.98608H8.81168C9.47733 5.7267 10.1495 4.58111 11.0767 3.4852C11.2258 3.30866 11.9176 2.57108 11.9529 2.439V2.43769ZM14.6718 2.39061C14.9281 2.45077 15.425 2.61816 15.6552 2.71886C16.6151 3.14126 17.3017 3.46167 18.1556 4.15609C18.9285 4.78381 19.5222 5.3723 20.0898 6.15957C20.2925 6.44074 20.4403 6.70883 20.6247 6.98346H17.4377L16.8439 5.74894C16.6334 5.32653 16.4228 4.97474 16.1874 4.57849C15.7611 3.86315 15.5401 3.56367 15.068 2.93202C14.9281 2.74501 14.7738 2.58024 14.6731 2.3893L14.6718 2.39061ZM6.56234 6.98477H3.37533C3.55187 6.7206 3.7075 6.44728 3.89058 6.18834C4.65432 5.10552 5.82607 4.04623 6.98605 3.37797C7.45946 3.10465 7.81125 2.96079 8.31212 2.73586C8.56452 2.62208 9.05754 2.45469 9.32825 2.39192C9.12947 2.76855 7.97079 4.11424 7.17175 5.72017L6.56234 6.98608V6.98477ZM0 11.5789C0 13.7302 0.260244 15.3139 1.10898 17.0794C1.7354 18.3845 2.49259 19.4856 3.5048 20.4965C5.56713 22.5589 8.67045 24 11.5789 24C13.7328 24 15.3112 23.7398 17.0793 22.891C19.6844 21.6408 21.5636 19.776 22.8766 17.1094C23.5122 15.8187 24.0013 13.8845 24.0013 12.4211C24.0013 10.2672 23.7411 8.68878 22.8923 6.92069C22.5824 6.27466 22.2201 5.64432 21.8174 5.08852C21.4891 4.63473 20.881 3.88669 20.4965 3.50221L19.3705 2.51877C19.2188 2.39453 19.0907 2.30822 18.9377 2.20099C17.1931 0.970384 14.8025 -0.00128174 12.4211 -0.00128174C10.2646 -0.00128174 8.69137 0.257655 6.92066 1.1077C4.87663 2.08983 3.49041 3.2982 2.19573 5.05452C0.942895 6.75199 0 9.38974 0 11.5776V11.5789Z" fill="#212529" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_2850">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                O'zbekcha</div>

                            <div className="icon">
                                <span className='sold-zero'>0</span>

                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="cart.svg" clip-path="url(#clip0_3_2856)">
                                        <g id="Layer_x0020_1">
                                            <g id="_1732897426368">
                                                <path id="Vector" d="M23.3964 4.0774C22.8281 3.39467 21.9859 3.00037 21.0975 3.00037C21.0963 3.00037 21.0951 3.00037 21.0939 3.00037H4.9262L4.8836 2.64987C4.70592 1.14081 3.42565 0.00170527 1.90563 0.000488281H1.68292C1.13041 0.000488281 0.682556 0.44834 0.682556 1.00085C0.682556 1.55337 1.13041 2.00122 1.68292 2.00122H1.90441C2.4119 2.00122 2.83784 2.38092 2.89748 2.88475L4.27389 14.5837C4.56962 17.1016 6.70422 19.0001 9.23921 19.0001H19.6822C20.2347 19.0001 20.6826 18.5523 20.6826 17.9998C20.6826 17.4472 20.2347 16.9994 19.6822 16.9994H9.23921C7.9711 16.9957 6.84174 16.195 6.41944 14.9999H18.3386C20.758 14.9999 22.8305 13.2681 23.2589 10.8877L24.0439 6.53329C24.0755 6.35682 24.0926 6.17792 24.0926 5.99903C24.0926 5.29682 23.8455 4.61653 23.394 4.0774H23.3964ZM22.0833 6.17792L21.2971 10.5323C21.0403 11.9611 19.7966 13.0004 18.3447 13.0004C18.3435 13.0004 18.3423 13.0004 18.3399 13.0004H6.10181L5.16108 5.0011H21.0927C21.0951 5.0011 21.0963 5.0011 21.0988 5.0011C21.6513 5.0011 22.0991 5.44895 22.0991 6.00146C22.0991 6.06109 22.093 6.12073 22.0833 6.17914V6.17792Z" fill="#212529" />
                                                <path id="Vector_2" d="M7.68511 23.9983C8.78941 23.9983 9.68462 23.1031 9.68462 21.9988C9.68462 20.8945 8.78941 19.9993 7.68511 19.9993C6.58081 19.9993 5.68559 20.8945 5.68559 21.9988C5.68559 23.1031 6.58081 23.9983 7.68511 23.9983Z" fill="#212529" />
                                                <path id="Vector_3" d="M17.6839 23.9983C18.7882 23.9983 19.6834 23.1031 19.6834 21.9988C19.6834 20.8945 18.7882 19.9993 17.6839 19.9993C16.5796 19.9993 15.6844 20.8945 15.6844 21.9988C15.6844 23.1031 16.5796 23.9983 17.6839 23.9983Z" fill="#212529" />
                                            </g>
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_2856">
                                            <rect width="23.41" height="23.9991" fill="white" transform="translate(0.684998 0.000488281)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <a className='icon_title' href="#sold-hover">Корзинка</a></div>

                            <div className="icon">

                                <span className='sold-zero'>0</span>

                                <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="heart.svg" clip-path="url(#clip0_3_2867)">
                                        <g id="Layer_x0020_1">
                                            <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M20.3116 2.29494C21.8396 2.29494 23.5752 3.37465 24.4069 4.59706C25.1767 5.72866 25.3756 6.63971 25.3756 8.05384C25.3756 10.4598 23.3272 13.6412 21.8151 15.371C21.5599 15.6637 21.3422 15.952 21.0698 16.2244L19.9786 17.4252C19.2636 18.133 18.1233 19.2805 17.3708 19.883C17.2771 19.958 17.2411 20.0084 17.1532 20.0906C16.2623 20.9238 15.3455 21.7037 13.9674 21.7037C12.8271 21.7037 12.1626 21.1689 11.5528 20.6528C11.4548 20.5692 11.4433 20.5778 11.3424 20.4899C11.2602 20.4164 11.2343 20.3789 11.1492 20.3097L10.4875 19.7461C10.3131 19.5774 10.2583 19.5183 10.0681 19.367C9.78119 19.1378 9.58226 18.8711 9.26801 18.6202C8.68275 18.1532 7.567 16.863 6.97021 16.2259C6.12548 15.322 4.91171 13.7421 4.28032 12.6768C3.29287 11.0104 2.66437 9.76782 2.66437 7.52192C2.66437 6.19572 3.32026 4.80897 4.19671 3.93684C6.08079 2.06285 8.52562 1.73707 10.7081 3.37032C11.8296 4.21073 12.6873 5.60757 12.8416 7.0491C12.905 7.65022 12.7464 8.07835 12.9972 8.54685C13.5839 9.64385 15.1941 9.20563 15.1941 7.94861C15.1941 6.55754 15.3844 5.6119 16.2897 4.40534L16.9312 3.7134C17.4213 3.33572 17.3737 3.25788 18.1622 2.86434C18.7215 2.58613 19.5072 2.29638 20.313 2.29638L20.3116 2.29494ZM0.370895 7.2538V8.32053C0.370895 10.2522 1.45637 12.4909 2.20596 13.7378C2.44093 14.1299 2.67157 14.4643 2.91952 14.8362L4.67674 17.1311C5.64689 18.2195 6.05772 18.675 7.12878 19.7446C7.92739 20.5432 10.1574 22.6003 10.9906 23.1337C12.99 24.4152 15.69 24.2624 17.5467 22.7776L20.8853 19.7706C23.0216 17.6342 25.1003 15.3321 26.4626 12.6048L27.0103 11.3405C27.6388 9.57466 27.6706 9.20563 27.6706 7.36191C27.6706 5.5009 26.7321 3.57069 25.4448 2.28341C22.4465 -0.71497 18.1954 -0.801461 15.0745 2.28341C14.841 2.51405 14.1476 3.37032 14.0755 3.68313H13.9688C13.8045 2.97678 12.3586 1.65202 11.6653 1.18785C9.56929 -0.21476 7.00913 -0.38486 4.74449 0.751064C3.09106 1.57994 1.96811 2.6928 1.11905 4.37651C0.783172 5.04105 0.372337 6.26491 0.372337 7.25524L0.370895 7.2538Z" fill="#212529" />
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_2867">
                                            <rect width="27.2986" height="24" fill="white" transform="translate(0.370728)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                Избранное</div>

                            <div className="icon" onClick={(evt) => {

                                elModal.current.classList.add("modal-open")
                                setTimeout(() => {
                                    elInner.current.style.position = "static"
                                    elInner.current.style.transition = "0.5s linear"

                                }, 1000)

                                console.log(evt.target);

                                const elEevn = evt.target.matches('.modal') || evt.target.matches('.modal-close-btn') ||  evt.target.matches('.modal-close-btn-img') 

                                if (elEevn) {
                                    elModal.current.classList.remove('modal-open')
                                }
                                else {
                                 
                                }

                            }}>

                                <svg className="cabinet" width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="avatar.svg" clip-path="url(#clip0_3_2875)">
                                        <g id="Layer_x0020_1">
                                            <g id="_1732704023632">
                                                <path id="Vector" d="M9.00074 12C12.314 12 15.0007 9.31334 15.0007 6.00003C15.0007 2.68673 12.314 6.10352e-05 9.00074 6.10352e-05C5.68744 6.10352e-05 3.00077 2.68673 3.00077 6.00003C3.00375 9.31185 5.68893 11.997 9.00074 12ZM9.00074 2.00055C11.2096 2.00055 13.0002 3.79116 13.0002 6.00003C13.0002 8.2089 11.2096 9.99952 9.00074 9.99952C6.79187 9.99952 5.00126 8.2089 5.00126 6.00003C5.00126 3.79116 6.79187 2.00055 9.00074 2.00055Z" fill="#212529" />
                                                <path id="Vector_2" d="M9.00074 14.0005C4.03376 14.005 0.00450924 18.0327 4.3869e-05 23.0012C4.3869e-05 23.5534 0.448069 24.0014 1.00029 24.0014C1.5525 24.0014 2.00053 23.5534 2.00053 23.0012C2.00053 19.1357 5.13522 16.001 9.00074 16.001C12.8663 16.001 16.001 19.1357 16.001 23.0012C16.001 23.5534 16.449 24.0014 17.0012 24.0014C17.5534 24.0014 18.0014 23.5534 18.0014 23.0012C17.997 18.0342 13.9692 14.005 9.00074 14.0005Z" fill="#212529" />
                                            </g>
                                        </g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3_2875">
                                            <rect width="18" height="23.9999" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                                Кабинет

                                <div className="modal" ref={elModal} >
                                    <ul className="modal-inner">
                                        <li className="modal-links1">
                                            <h2 className="modal-links1-title">Вход или создать личный кабинет</h2>
                                            <form className="modal-links1-form">
                                                <span className="modal-links1-form-span">yoki</span>
                                                <span className="modal-links1-form-span2">Telefon</span>
                                                <input type="text " placeholder="number" className="modal-links1-input" />
                                                <button className="modal-links1-btn">Faollashtirish kodini oling</button>
                                            </form>
                                            <div className="modal-links1-websites">
                                                <span className="modal-links1-websites-span"><img src={google} alt="error" /></span>
                                                <span className="modal-links1-websites-span"><img src={facebook} alt="error" /></span>
                                            </div>
                                        </li>
                                        <li className="modal-links2">
                                            <button className="modal-close-btn" onClick={(()=>{
                                                  elModal.current.classList.remove('modal-open')
                                            })}><img className="modal-close-btn-img" src={close} alt="error"  /></button>
                                            <ul className="modal-links2-link">
                                                <li className="modal-links2-links">
                                                    <span className="modal-links2-link-img"><img src={link11} alt="error" width={59} height={57} /></span>
                                                    <h4 className="modal-links2-links-title">Больше не нужно ходить на базар <span className="modal-links2-links-title-span">У нас выгодные цены и доставка до дома</span></h4>
                                                </li>
                                                <li className="modal-links2-links">
                                                    <span className="modal-links2-link-img"><img src={link12} alt="error" width={59} height={57} /></span>
                                                    <h4 className="modal-links2-links-title">Быстрая доставка<span className="modal-links2-links-title-span">Наш сервис удивит вас</span></h4>
                                                </li>
                                                <li className="modal-links2-links">
                                                    <span className="modal-links2-link-img"><img src={link13} alt="error" width={59} height={57} /></span>
                                                    <h4 className="modal-links2-links-title">Удобства для вас <span className="modal-links2-links-title-span">Быстрое оформление и гарантия на возврат в случае неисправности
                                                    </span></h4>
                                                </li>
                                                <li className="modal-links2-links">
                                                    <span className="modal-links2-link-img"> <img src={link14} alt="error" width={59} height={57} /></span>
                                                    <h4 className="modal-links2-links-title">Рассрочка<span className="modal-links2-links-title-span">Без предоплаты на 6 или 12 месяцев</span></h4>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>

                    </nav>

                    <div id='sold-hover' className="sold-hover">

                        <div className="sold-content">

                        </div>

                        <a className='sold-hover-close' id='sold-close' href="#">X</a>

                        <div className="sold-hover-about">

                            <h5 className='sold-hover-h5'>Сумма</h5>

                            <p className='sold-hover-p'>0 UZS</p>
                        </div>

                        <div className="sold-hover-btns">

                            <a className='sold-hover-btn' href="#">Sold out</a>
                            <a className='sold-hover-link' href="">Sold out</a>

                        </div>
                    </div>

                    {/* <- ==================== Navbar Bottom ===================== -> */}

                    <div className="nav-bottom">

                        <ul className='bottom-nav_list'>

                            <li><a id='item-1' href="#">Все категории</a></li>
                            <li><a id='item-2' href="#">Скидки</a></li>
                            <li><a id='item-3' href="#">Кондиционеры</a></li>
                            <li><a id='item-4' href="#">Новинки</a></li>
                            <li><a id='item-5' href="#">Книги</a></li>
                            <li><a id='item-6' href="#">Телефоны и гаджеты</a></li>
                            <li><a id='item-7' href="#">Ноутбуки</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Header