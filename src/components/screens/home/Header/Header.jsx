
import './Header.css'
import React, {useEffect, useState} from "react";
import $ from "jquery"; // Импортируем jQuery
const Header = () => {
    const [activeHandler, setActiveHandler] = useState(null);

    const handleClick = (handlerId) => {
        if (activeHandler === handlerId) {
            // If the same handler is clicked again, close it
            setActiveHandler(null);
        } else {
            // Close the previously active handler (if any)
            if (activeHandler !== null) {
                switch (activeHandler) {
                    case 1:
                        setIsShown(false);
                        break;
                    case 2:
                        setIsShown_2(false);
                        break;
                    case 3:
                        setIsShown_3(false);
                        break;
                    case 4:
                        setIsShown_4(false);
                        break;
                    default:
                        break;
                }
            }
            const UslugiBlock = () => {
                const [isHovered, setIsHovered] = useState(false);
                const [description, setDescription] = useState('');

                const handleMouseEnter = (desc) => {
                    setDescription(desc);
                    setIsHovered(true);
                };

                const handleMouseLeave = () => {
                    setDescription('');
                    setIsHovered(false);
                };
            }

            // Open the clicked handler
            setActiveHandler(handlerId);
        }
    };

    const [isShown, setIsShown] = useState(false);
    const [isShown_2, setIsShown_2] = useState(false);
    const [isShown_3, setIsShown_3] = useState(false);
    const [isShown_4, setIsShown_4] = useState(false);

    const handleCloseClick = () => {
        setActiveHandler(null); // Закрыть блок
    };

    function openMenu() {
        document.body.classList.add('menu-opened');
    }

// При закрытии меню
    function closeMenu() {
        document.body.classList.remove('menu-opened');
    }

    const [currentNumber, setCurrentNumber] = useState(0);
    const [incrementing, setIncrementing] = useState(false);
    const targetNumber = 10283;
    const animationDuration = 2000; // Продолжительность анимации в миллисекундах
    const frameDuration = 1000 / 60; // Продолжительность одного кадра (60 FPS)

    const totalFrames = Math.round(animationDuration / frameDuration);
    const increment = Math.ceil(targetNumber / totalFrames);
    const dop_number = 1;

    // Функция для отправки запроса на сервер для обновления значения
    const updateNumberInDatabase = (newValue) => {
        // Здесь вы можете использовать Fetch API или другую библиотеку для отправки запроса на сервер
        // Пример Fetch API:
        fetch('/your-api-endpoint', {
            method: 'POST', // Метод запроса для обновления значения
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({value: newValue}), // Отправляем новое значение на сервер
        })
            .then((response) => {
                if (response.ok) {
                    console.log('Значение успешно обновлено в базе данных.');
                } else {
                    console.error('Произошла ошибка при обновлении значения в базе данных.');
                }
            })
            .catch((error) => {
                console.error('Произошла ошибка:', error);
            });
    };

    useEffect(() => {
        let frame = 0;
        const interval = setInterval(() => {
            if (frame < totalFrames) {
                setCurrentNumber((prevNumber) => prevNumber + increment);
                frame++;
            } else {
                setCurrentNumber(targetNumber);
                clearInterval(interval);
                setIncrementing(true); // Установка флага для увеличения на 1
                updateNumberInDatabase(targetNumber); // Отправляем окончательное значение на сервер
            }
        }, frameDuration);

        return () => {
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        if (incrementing) {
            const incrementInterval = setInterval(() => {
                setCurrentNumber((prevNumber) => {
                    const newNumber = prevNumber + dop_number;
                    updateNumberInDatabase(newNumber); // Отправляем новое значение на сервер
                    return newNumber;
                });
            }, 3000); // Каждую секунду увеличиваем число на 1

            return () => {
                clearInterval(incrementInterval);
            };
        }
    }, [incrementing]);

    function restartAnimation(element) {
        element.style.animation = 'none';
        element.offsetHeight; // Требуется перерендерить элемент
        element.style.animation = null;
    }

    useEffect(() => {
        const partnerImages = document.querySelectorAll('.partner img');

        partnerImages.forEach((img) => {
            img.addEventListener('animationiteration', () => {
                restartAnimation(img);
            });
        });
    }, []);

    const UslugiBlock = () => {
        const [isHovered, setIsHovered] = useState(false);
        const [description, setDescription] = useState('');

        const handleMouseEnter = (desc) => {
            setDescription(desc);
            setIsHovered(true);
        };

        const handleMouseLeave = () => {
            setDescription('');
            setIsHovered(false);
        };
    };

        return (
        <head>
         <title>Партнер</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
            <div className='Header_glav'>
                <span className="circle"></span>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <div className='Header'>
                    <img className='logo-image' src="/public/logo.png" alt=''/>
                    <img className='logo-name' src="/public/logo-name.png" alt=''/>
                    <div id='header_menu' className='header-menu'>
                        <li className='header_menu_li'><a href="/project">Проекты</a></li>
                        <li className='header_menu_li'><a href="/about">О кампании</a></li>
                        <li className='header_menu_li'><a href="/contacts">Контакты</a></li>
                    </div>
                    <p className='header-callback'>Связаться с нами</p>
                </div>
                <div className='container_1'>
                    <div className="home__spinner">
                        <img id="homeMainLogo" className="home__main_logo" src="/public/output-onlinegiftools.gif"/>
                        <img id="homeMainLogo_2" className="home__main_logo_2"
                             src="/public/home-graphics/home-logo.png"/>
                        <div className='home__main-logo_1'></div>
                        <img className="home__circle-home__circle--first"
                             src="/public/home-graphics/first-circle.png" alt=""/>
                        <img className="home__circle-home__circle--second"
                             src="/public/home-graphics/second-circle.png" alt=""/>
                        <img className="home__circle-home__circle--third"
                             src="/public/home-graphics/third-circle.png" alt=""/>
                        <img className="home__circle-home__circle--fourth"
                             src="/public/home-graphics/fourth-circle.png" alt=""/>
                        <img className="home__circle-home__circle--last"
                             src="/public/home-graphics/last-circle.png" alt=""/>
                        <img className="home__circle-home__circle--right-little"
                             src="/public/home-graphics/second-circle.png" alt=""/>
                    </div>
                    <div className='one_uslugi'>
                      <li className='p-uslugi'>
                        <a href="/complex_project">Комплексное проектирование застройки</a>
                        <div className='uslugi-description1'>
                            <p className='uslugi-description1_1'>Комплексное проектирование зданий представляет собой совокупность этапов, начиная с концепции и завершая готовым объектом, которые объединяют в себе разнообразные аспекты проектирования, включая архитектуру, инженерные системы, конструкцию и дизайн.</p>
                            <p className='uslugi-description1_2'>Наши услуги:</p>
                            <li className='uslugi-description1_3'>Геодезические изыскания</li>
                            <li className='uslugi-description1_3'>Разработка проектной документации</li>
                            <li  className='uslugi-description1_3'>Разработка технической экспертизы</li>
                            <li  className='uslugi-description1_3'>Получение технических условий</li>
                        </div>
                      </li>
                      <li className='p-uslugi'>
                        <a href="/project_supply">Электроснабжение</a>
                        <div className='uslugi-description2'>
                            <p className='uslugi-description2_1'>Мы редлагает комплексные услуги по разработке проектной и рабочей документации для строительства, реконструкции и модернизации объектов электроэнергетики</p>
                            <p className='uslugi-description2_2'>Наши услуги:</p>
                            <li className='uslugi-description2_3'>Проектирование воздушных линий</li>
                            <li className='uslugi-description2_3'>Проектирование кабельных линий</li>
                            <li  className='uslugi-description2_3'>Проектирование трансформаторных подстанций</li>
                            <li  className='uslugi-description2_3'>Проектирование ВРУ</li>
                        </div>
                      </li>
                      <li className='p-uslugi'>
                        <a href="/gaz">Разработка проекта газификации</a>
                        <div className='uslugi-description3'>
                            <p className='uslugi-description3_1'>Профессионально разработанный проект газификации для жилых домов или коммерческих объектов полностью соблюдает нормативные стандарты, учитывает уникальные особенности участка и удовлетворяет потребности заказчика.</p>
                            <p className='uslugi-description3_2'>Наши услуги:</p>
                            <li className='uslugi-description3_3'>Геодезические изыскания</li>
                            <li className='uslugi-description3_3'>Разработка проектной документации</li>
                            <li  className='uslugi-description3_3'>Разработка технической экспертизы</li>
                            <li  className='uslugi-description3_3'>Получение технических условий</li>
                        </div>
                      </li>
                      <li className='p-uslugi'>
                        <a href="/communication_system">Системы связи</a>
                        <div className='uslugi-description4'>
                            <p className='uslugi-description4_1'>Проектирование систем связи включает в себя серию действий, таких как выбор наилучших технических компонентов, проведение расчетов, создание чертежей и спецификаций, с целью создания эффективной коммуникационной инфраструктуры.</p>
                            <p className='uslugi-description4_2'>Наши услуги:</p>
                            <li className='uslugi-description4_3'>Ситуационный план</li>
                            <li className='uslugi-description4_3'>Расчет объема грунта</li>
                            <li  className='uslugi-description4_3'>Камерально геодезические работы</li>
                            <li  className='uslugi-description4_3'>Вынос границ земельного участка в натуру</li>
                        </div>
                      </li>
                      <li className='p-uslugi'>
                        <a href="/geo">Геодезические изыскания</a>
                        <div className='uslugi-description5'>
                            <p className='uslugi-description5_1'>Геодезические исследования представляют собой комплекс мероприятий, направленных на сбор данных о местоположении, рельефе и особенностях территории, которые играют ключевую роль в проектировании и выполнении различных исследований и кадастровых работ.</p>
                            <p className='uslugi-description5_2'>Наши услуги:</p>
                            <li className='uslugi-description5_3'>Ситуационный план</li>
                            <li className='uslugi-description5_3'>Расчет объема грунта</li>
                            <li  className='uslugi-description5_3'>Камерально геодезические работы</li>
                            <li  className='uslugi-description5_3'>Вынос границ земельного участка в натуру</li>
                        </div>
                      </li>
                      <li className='p-uslugi'>
                        <a href="/cadastral_works">Кадастровые работы</a>
                        <div className='uslugi-description6'>
                            <p className='uslugi-description6_1'>Кадастровые работы представляют собой специализированную деятельность, которая направлена на обработку объектов недвижимости с целью присвоения им кадастровых номеров. Эти работы осуществляются для различных видов собственности, включая земельные участки, строения, их части и многое другое.</p>
                            <p className='uslugi-description6_2'>Наши услуги:</p>
                            <li className='uslugi-description6_3'>Межевание земельного участка</li>
                            <li className='uslugi-description6_3'>Технический план ОКС</li>
                            <li  className='uslugi-description6_3'>Разрешение на строительство</li>
                            <li  className='uslugi-description6_3'>Снижение кадастровой стоимости</li>
                        </div>
                      </li>
                    </div>
                </div>
                <div className='container_2'>
                    <input className={`menu_glav ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" id='qww'
                           src='/public/Menu-img-white.png' onClick={() => handleClick(4)} alt=''/>
                    {activeHandler === 4 && (
                        <div className='menu_supply_activate'>
                            <p className='menu_supply_activate_close' onClick={handleCloseClick}>Закрыть</p>
                            <div className='menu_opacity_bgc'></div>
                            <div className='menu_supply_activate_LI'>
                                <li className='menu_supply_activate_li'><a href="/">Главная</a></li>
                                <li className='menu_supply_activate_li'><a href="/project">Проекты</a></li>
                                <li className='menu_supply_activate_li'><a href="/about">О кампании</a></li>
                                <li className='menu_supply_activate_li'><a href="/contacts">Контакты</a></li>
                                <li className='menu_supply_activate_li_callback'><a href='#'>Связаться с нами</a></li>
                            </div>
                            <p className='menu_supply_activate_city'>г.Краснодар</p>
                            <p className='menu_supply_activate_number'>+7 (918) 495-34-20</p>
                        </div>
                    )}
                    <img className='bgc_2' src='/public/object1.png'/>
                    <p className='why_we'>Почему выбирают нас?</p>
                    <div className='container_2_block'>
                        <p className='num_project'>{currentNumber}</p>
                        {incrementing && (
                            <p className="DopNumber">+{dop_number}</p>
                        )}
                        <p className='dev_project'>Разработанных проектов</p>
                        <p className='num_spec'>более 50</p>
                        <p className='spec'>Специалистов</p>
                        <p className='sobs'>собственные</p>
                        <p className='it_dev'>IT разработки</p>
                    </div>
                    <p className='sotr'>С нами сотрудничают</p>
                </div>
                <div className='partners'>
                    <div className='div_c1'><img className='circle_1' src='/public/gaz.png'/></div>
                    <div className='div_c2'><img className='circle_2' src='/public/ros.png'/></div>
                    <div className='div_c3'><img className='circle_3' src='/public/dom.png'/></div>
                    <div className='div_c4'><img className='circle_4' src='/public/dongis.png'/></div>
                    <div className='div_c5'><img className='circle_5' src='/public/ipstroy.png'/></div>
                </div>


                <svg width="0" height="0">
                    <filter
                        id="ambilight"
                        width="300%"
                        height="300%"
                        x="-0.75"
                        y="-0.75"
                        colorInterpolationFilters="sRGB"
                    >
                        <feOffset in="SourceGraphic" result="source-copy"/>
                        <feColorMatrix
                            in="source-copy"
                            type="saturate"
                            values="1"
                            result="saturated-copy"
                        />
                        <feColorMatrix
                            in="saturated-copy"
                            type="matrix"
                            values="1 0 0 0 0
                        0 1 0 0 0
                        0 0 1 0 0
                        33 33 33 101 -100"
                            result="bright-colors"
                        />
                        <feMorphology
                            in="bright-colors"
                            operator="dilate"
                            radius="1"
                            result="spread"
                        />
                        <feGaussianBlur
                            in="spread"
                            stdDeviation="15"
                            result="ambilight-light"
                        />
                        <feOffset in="SourceGraphic" result="source"/>
                        <feComposite in="source" in2="ambilight-light" operator="over"/>
                    </filter>
                </svg>


                <div className='header_project'>
                    <div className='our_project'>
                        <p className='our_project_title'>Выполненные объекты</p>
                        <img className='our_project_img_1' src='/public/our_project1.png' alt=''/>
                        <p className='our_project_text_1'>Строительство ЛЭП-10 кВ от ВЛ-10 кВ ТМ-4</p>
                        <p></p>

                        <img className='our_project_img_2' src='/public/our_project2.png' alt=''/>
                        <p className='our_project_text_2'>Строительство ЛЭП-10 кВ от ВЛ-10 кВ ТМ-4</p>
                        <p></p>

                        <img className='our_project_img_3' src='/public/our_project3.png' alt=''/>
                        <p className='our_project_text_3'>Строительство ЛЭП-10 кВ от ВЛ-10 кВ ТМ-4</p>
                        <p></p>

                        <img className='our_project_img_4' src='/public/our_project4.png' alt=''/>
                        <p className='our_project_text_4'>Строительство ЛЭП-10 кВ от ВЛ-10 кВ ТМ-4</p>

                        <img className='our_project_img_5' src='/public/our_project1.png' alt=''/>
                        <p className='our_project_text_5'>Строительство ЛЭП-10 кВ от ВЛ-10 кВ ТМ-4</p>
                        <p></p>

                        <img className='our_project_img_6' src='/public/our_project2.png' alt=''/>
                        <p className='our_project_text_6'>Строительство ЛЭП-10 кВ от ВЛ-10 кВ ТМ-4</p>
                        <p></p>

                        <img className='our_project_img_7' src='/public/our_project3.png' alt=''/>
                        <p className='our_project_text_7'>Строительство ЛЭП-10 кВ от ВЛ-10 кВ ТМ-4</p>
                        <p></p>

                        <img className='our_project_img_8' src='/public/our_project4.png' alt=''/>
                        <p className='our_project_text_8'>Строительство ЛЭП-10 кВ от ВЛ-10 кВ ТМ-4</p>
                        <p></p>
                    </div>
                </div>

                <div className='header_pont'>
                    <img className='pont_img' src='/public/pont.png'/>
                    <p className='pont_text_1'>Крупнейшая проектная организация. <br/>Мы работаем с лучшими.</p>
                    <p className='pont_text_2'>Мы работаем с 2014 года. За это время выпустили более 10 251 крупных
                        проектов. Наиболее масштабные из них методично разрабатываем годами. А проекты со сжатыми
                        сроками успеваем выпустить за несколько месяцев.</p>
                    <p className='pont_text_3'>Выписка СРО </p>
                    <div className='pont_sro'>
                        <img className='pont_sro_img_1' src='/public/sro1.png' alt=''/>
                        <img className='pont_sro_img_2' src='/public/sro2.png' alt=''/>
                        <img className='pont_sro_img_3' src='/public/sro3.png' alt=''/>
                        <img className='pont_sro_img_4' src='/public/sro4.png' alt=''/>
                        <img className='pont_sro_img_5' src='/public/sro5.png' alt=''/>
                    </div>
                </div>

                <div
                    className={`header_footer ${activeHandler === 1 ? 'footer-shot_1' : '' || activeHandler === 2 ? 'footer-shot_2' : '' || activeHandler === 3 ? 'footer-shot_3' : ''}`}>
                    <img className='header_footer_logo' src='/public/logo2.png' alt=''/>
                    <img className='header_footer_logo2' src='/public/Group 4.png' alt=''/>
                    <div className='header_footer_s'>
                        <li className='header_footer_source'><a>Главная</a></li>
                        <li className='header_footer_source'><a>Проекты</a></li>
                        <li className='header_footer_source'><a>О кампании</a></li>
                        <li className='header_footer_source'><a>Контакты</a></li>
                        <li className='header_footer_callback'><a>Связаться с нами</a></li>
                        <div className='header_black_line'></div>
                    </div>
                </div>
            </div>
        </head>
        );
}
export default Header
