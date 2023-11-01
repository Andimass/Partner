import './Gazification.css'
import React, {useEffect, useState, useRef} from "react";

const Gazification = () =>  {


    const [activeHandler, setActiveHandler] = useState(1);

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
                    case 5:
                        setIsShown_5(false);
                        break;
                    case 6:
                        setIsShown_6(false);
                        break;
                    case 11:
                        setIsShown_11(false);
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
    const [isShown_5, setIsShown_5] = useState(false);
    const [isShown_6, setIsShown_6] = useState(false);
    const [isShown_11, setIsShown_11] = useState(false);

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









  function openMenu() {
  document.body.classList.add('menu-opened');
}

// При закрытии меню
    function closeMenu() {
    document.body.classList.remove('menu-opened');
}

return (
      <html>
    <head>
         <title>Газификация</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
    </head>
        <body>
        <div className='Gazification'>
            <div className='header_header'>
                <img className='header_logo' src='/public/logo2.png'/>
                <img className='header_logo_2' src='/public/Group 4.png'/>
                <div className='header_animation_square '>
                    <div className='header_black_square'></div>
                    <div className='header_black_square2'></div>
                        <input className={`header_menu_supply ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img1.png' onClick={() => handleClick(11)} alt=''/>
                         <input className={`header_menu_supply2 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img2.png' onClick={() => handleClick(11)} alt=''/>
                        <input className={`header_menu_supply3 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img3.png' onClick={() => handleClick(11)} alt=''/>

                        <input className={`header_menu_supply4 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img1.png' onClick={() => handleClick(11)} alt=''/>
                        <input className={`header_menu_supply5 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img2.png' onClick={() => handleClick(11)} alt=''/>
                        <input className={`header_menu_supply6 ${activeHandler === 11 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img3.png' onClick={() => handleClick(11)} alt=''/>
                    </div>
                    {activeHandler === 11 && (
                        <div className='header_menu_supply_activate'>
                            <input className='header_menu_supply_activate_close' type="image" src='/public/close_2428586.png' onClick={handleCloseClick}></input>
                            <div className='header_menu_opacity_bgc'></div>
                            <div className="scaled-iframe-container">
                                <iframe src="http://localhost" frameBorder="0"></iframe>
                            </div>
                            <div className='header_menu_menu'>
                                <a className='header_menu_menu_1' href='/'>Главная</a>
                                <a className='header_menu_menu_2' href='/'>Цены</a>
                                <a className='header_menu_menu_3' href='/'>Услуги</a>
                                <a className='header_menu_menu_4' href='/about'>О нас</a>
                                <a className='header_menu_menu_4' href='/'>Контакты</a>
                                <a className='header_menu_menu_5' href='/'>+ 7 (918) 331-25-57</a>
                                <a className='header_menu_menu_6' href='/'>info@partner-tech.ru</a>
                            </div>
                        </div>
                    )}
                </div>
                <div className='gazification_1'>
                    <h2 className='gazification_1_title'>Газораспределения и газопотребления</h2>
                    <p className='gazification_1_text'>Благодаря многолетнему опыту в области газификации объектов самого различного назначения, наша компания успешно справляется с заказами повышенного уровня сложности</p>
                    <img className='gazification_1_img' src='/public/gaz_house.png'/>
                    <img className='gazification_fon_img' src='/public/gaz_fon.png' />
                </div>

            <div className='gazification_2'>
                <h2 className='gazification_2_title_1'>Поэтапный подход к решению поставленной задачи</h2>
                <p className='gazification_2_title_text'>Проектирование и согласование систем газоснабжения и газораспределения выполняются специалистами имеющей разрешительные документы и допуски на данный вид деятельности</p>
              <div className='gazification_2_block'>
                  <div className='gazification_2_block_1'>
                      <img className='gazification_2_block_1_img_1'/>
                      <p className='gazification_2_block_1_text_1'>Исходные данные</p>
                      <p className='gazification_2_block_1_text_2'>получаем всю необходимую исходно- разрешительную документацию </p>
                      <p className='gazification_2_block_1_number'>01</p>
                  </div>
                  <div className='gazification_2_block_2'>
                       <img className='gazification_2_block_1_img_1'/>
                      <p className='gazification_2_block_1_text_1'>Изыскания</p>
                      <p className='gazification_2_block_1_text_2'> </p>
                  </div>
                  <div className='gazification_2_block_3'>
                    <img className='gazification_2_block_1_img_1'/>
                      <p className='gazification_2_block_1_text_1'>Разработка проекта</p>
                      <p className='gazification_2_block_1_text_2'>с техническими решениями обеспечивающими безопасную для жизни и здоровья среду</p>
                  </div>
                  <div className='gazification_2_block_4'>
                    <img className='gazification_2_block_1_img_1'/>
                      <p className='gazification_2_block_1_text_1'>Согласование</p>
                      <p className='gazification_2_block_1_text_2'> </p>
                  </div>
                  <div className='gazification_2_block_5'>
                    <img className='gazification_2_block_1_img_1'/>
                      <p className='gazification_2_block_1_text_1'>Экспертиза</p>
                      <p className='gazification_2_block_1_text_2'> </p>
                  </div>
                  <div className='gazification_2_block_6'>
                    <img className='gazification_2_block_1_img_1'/>
                      <p className='gazification_2_block_1_text_1'>Авторский надзор</p>
                      <p className='gazification_2_block_1_text_2'>контроль соблюдения в процессе строительства требований проектной документации </p>
                  </div>
              </div>





            </div>









            <div className='geo_uslugi'>
                <p className='geo_uslugi_title'>Наши услуги</p>
                <div className={`geo_body_uslugi_box1 ${activeHandler === 1 ? 'blue-background' : ''}`}>
                    <h2 className='geo_body_uslugi_box_title_1'>Ситуационный план</h2>
                    <img className='geo_body_box1_image' src='/public/box1.jpg'/>
                    <p className='geo_body_price'>от 10.000 руб.</p>
                    <p className='geo_body_text'>Разработка ситуационного плана для подачи заявок на газификацию и энергоснабжение</p>
                    <input className={`geo_body_uslugi_box_strela1 ${activeHandler === 1 ? 'strela-digris': ''}`} type="image" onClick={() => handleClick(1)} alt=''/>
                    {activeHandler === 1 && (
                    <div className='dop_1'>


                    </div>
                  )}
                </div>


               <div className={`geo_body_uslugi_box2 ${activeHandler === 2 ? 'blue-background' : '' }`}>
                    <h2 className='geo_body_uslugi_box_title_2'>Вынос границ земельного участка в натуру</h2>
                    <img className='geo_body_box2_image' src='/public/box2.jpg'/>
                    <p className='geo_body_price2'>от 10.000 руб.</p>
                    <p className='geo_body_text2'>Маркировка и определение физических границ участка на местности для его использования и оформления собственности</p>
                    <input className={`geo_body_uslugi_box_strela2 ${activeHandler === 2 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(2)} alt=''/>
                    {activeHandler === 2 && (
                    <div className='dop_2'>


                    </div>
                  )}
                </div>


               <div className={`geo_body_uslugi_box3 ${activeHandler === 3 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_3'>Топографическая съемка и топоплан</h2>
                   <img className='geo_body_box3_image' src='/public/box3.png'/>
                   <p className='geo_body_price3'>от 10.000 руб.</p>
                    <p className='geo_body_text3'>Создание подробной картографической информации о местности для инженерных и строительных проектов</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 3 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(3)} alt=''/>
                    {activeHandler === 3 && (
                    <div className='dop_3'>


                    </div>
                  )}
                </div>

               <div className={`geo_body_uslugi_box4 ${activeHandler === 5 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_4'>Геодезические изыскания</h2>
                   <img className='geo_body_box4_image' src='/public/box4.jpg'/>
                   <p className='geo_body_price4'>от 10.000 руб.</p>
                    <p className='geo_body_text4'>Сбор точных геодезических данных и измерений для подготовки к инженерным и строительным проектам</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 5 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(5)} alt=''/>
                    {activeHandler === 5 && (
                    <div className='dop_4'>


                    </div>
                  )}
                </div>

               <div className={`geo_body_uslugi_box5 ${activeHandler === 6 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_5'>Камерально геодезические работы</h2>
                   <img className='geo_body_box5_image' src='/public/geo_camer.jpg'/>
                   <p className='geo_body_price5'>от 10.000 руб.</p>
                    <p className='geo_body_text5'>Анализ и обработка данных с целью создания точных карт и планов для строительства и проектирования.</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 6 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(6)} alt=''/>
                    {activeHandler === 6 && (
                    <div className='dop_5'>


                    </div>
                  )}
                </div>

               <div className={`geo_body_uslugi_box6 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_6'>Координирование реперов</h2>
                   <img className='geo_body_box6_image' src='/public/geo_rap.jpg'/>
                   <p className='geo_body_price6'>от 10.000 руб.</p>
                    <p className='geo_body_text6'>Определение точных географических координат и высотных отметок опорных точек, необходимых для геодезических и строительных работ</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`geo_body_uslugi_box7 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_7'>Сопровождение линейных объектов</h2>
                   <img className='geo_body_box7_image' src='/public/geo_sopr.jpg'/>
                   <p className='geo_body_price7'>от 10.000 руб.</p>
                    <p className='geo_body_text7'>Измерение и контрольные работы для обеспечения точности и надежности линейных инженерных систем и коммуникаций</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>

                              <div className={`geo_body_uslugi_box8 ${activeHandler === 7 ? 'blue-background' : ''}`}>
                   <h2 className='geo_body_uslugi_box_title_8'>Расчет объема грунта</h2>
                   <img className='geo_body_box8_image' src='/public/v_grunt.jpg'/>
                   <p className='geo_body_price8'>от 10.000 руб.</p>
                    <p className='geo_body_text8'>Определение объема земельных масс при проведении строительных и инженерных работ</p>
                    <input className={`geo_body_uslugi_box_strela3 ${activeHandler === 7 ? 'strela-digris' : ''}`} type="image" onClick={() => handleClick(7)} alt=''/>
                    {activeHandler === 7 && (
                    <div className='dop_6'>


                    </div>
                  )}
                </div>
                <div className='gazification_pdf'>
                    <h2 className='gazification_pdf_title'>Полезно знать</h2>
                    <div className='gazification_pdf_box'>
                        <div className='gazification_pdf_box_1'>
                            <img className='gazification_pdf_box_img' src='/public/pdf (2).png'/>
                            <h2 className='gazification_pdf_box_title_1'></h2>
                            <p className='gazification_pdf_box_text_1'></p>
                            <p className='gazification_pdf_box_upload'>Скачать</p>
                        </div>

                    </div>


                </div>
          </div>


        </div>
        </body>
      </html>
  );
}


export default Gazification