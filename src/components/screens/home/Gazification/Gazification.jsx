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

window.addEventListener('scroll', function() {

    let scrollPosition = window.pageYOffset;

    let rotationDegree = scrollPosition / 10;


    document.querySelector('.transportir_1').style.transform = `rotate(${rotationDegree}deg)`;
    document.querySelector('.transportir_2').style.transform = `rotate(${rotationDegree}deg)`;
    // scrollTimeout = setTimeout(function() {
    //
    //     document.querySelector('.transportir_1').style.transition = 'none';
    //     document.querySelector('.transportir_2').style.transition = 'none';
    // }, 150);
});



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
                                <iframe src="http://www.partner-tech.ru/gazification" frameBorder="0"></iframe>
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
                <div className='gazification_for'>
                    <div className='gazification_for_block'>
                        <p className='gazification_for_img1'/>
                        <p className='gazification_for_img2'/>
                        <p className='gazification_for_img3'/>
                        <p className='gazification_for_img4'/>
                        <p className='gazification_for_img5'/>
                        <p className='gazification_for_img6'/>
                        <div className='gazification_for_block_org'>
                            <h2 className='gazification_for_block_org_title'>Услуги для организации</h2>
                            <div className='gazification_for_block_org_block'>
                                <p className='gazification_for_block_org_text_1'>Проектирование газораспределительных пунктов</p>
                                <p className='gazification_for_block_org_text_2'>Проектирование наружных газопроводов</p>
                                <p className='gazification_for_block_org_text_3'>Проектирование котельной</p>
                                <p className='gazification_for_block_org_text_4'>Проектирование газоснабжения котельной</p>
                                <p className='gazification_for_block_org_text_5'>Проект газоснабжения промышленных предприятий</p>
                                <p className='gazification_for_block_org_text_6'>Вынос газопроводов из под пятна строительства</p>
                                <p className='gazification_for_block_org_text_7'>Разработка схемы газоснабжения объекта</p>
                                <p className='gazification_for_block_org_text_8'>Инженерные изыскания</p>
                            </div>
                        </div>

                        <div className='gazification_for_block_ur'>
                            <h2 className='gazification_for_block_ur_title'>Услуги для частных лиц</h2>
                            <div className='gazification_for_block_ur_block'>
                                <p className='gazification_for_block_ur_text_1'>Газификация частного дома</p>
                                <p className='gazification_for_block_ur_text_2'>Проект газоснабжения квартиры или переноса газопровода</p>
                                <p className='gazification_for_block_ur_text_3'>Демонтаж газового оборудования</p>
                                <p className='gazification_for_block_ur_text_4'>Топографическая съёмка для ТУ</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gazification_1'>
                    <h2 className='gazification_1_title'>Газораспределения и газопотребления</h2>
                    <p className='gazification_1_text'>Благодаря многолетнему опыту в области газификации объектов самого различного назначения, наша компания успешно справляется с заказами повышенного уровня сложности</p>
                    <img className='gazification_1_img' src='/public/Group 113.png'/>
                    <img className='gazification_fon_img' src='/public/gaz_fon.png' />
                </div>

            <div className='gazification_2'>
                <h2 className='gazification_2_title_1'>Поэтапный подход к решению поставленной задачи</h2>
                <p className='gazification_2_title_text'>Проектирование и согласование систем газоснабжения и газораспределения выполняются специалистами имеющей разрешительные документы и допуски на данный вид деятельности</p>
              <div className='gazification_2_block'>
                  <p className='gazification_2_block_img_1'/>
                  <p className='gazification_2_block_img_2' />
                    <p className='gazification_2_block_img_3' />
                  <p className='gazification_2_block_img_4' />
                  <p className='gazification_2_block_img_5' />
                <p className='gazification_2_block_img_6' />
                  <p className='gazification_2_block_img_7' />
                    <p className='gazification_2_block_img_8' />
                    <p className='gazification_2_block_img_9' />
                    <p className='gazification_2_block_img_10' />
                      <p className='gazification_2_block_img_11' />
                      <p className='gazification_2_block_img_12' />
                      <p className='gazification_2_block_img_13' />
                      <p className='gazification_2_block_img_14' />
                      <p className='gazification_2_block_img_15' />
                  <img className='transportir_1' src='src/assets/img/Protacor/transportir30.svg'/>
                  <img className='transportir_2' src='src/assets/img/Protacor/transportirceluyctnter.svg'/>
                  <div className='gazification_2_block_1'>
                      <img className='gazification_2_block_1_img_1' src='/public/ish.png'/>
                      <p className='gazification_2_block_1_text_1'> Исходные данные</p>
                      <p className='gazification_2_block_1_text_2'>получаем всю необходимую исходно- разрешительную документацию </p>
                      <p className='gazification_2_block_1_text_3'>01</p>
                  </div>
                  <div className='gazification_2_block_2'>
                       <img className='gazification_2_block_1_img_2' src='/public/russia.png'/>
                      <p className='gazification_2_block_1_text_1'>Изыскания</p>
                      <p className='gazification_2_block_1_text_2'> получение топографо-геодезических изысканий и данных о рельефе местности.</p>
                      <p className='gazification_2_block_2_text_3'>02</p>
                  </div>
                  <div className='gazification_2_block_3'>
                    <img className='gazification_2_block_1_img_3' src='/public/proekt.png'/>
                      <p className='gazification_2_block_1_text_1'>Разработка проекта</p>
                      <p className='gazification_2_block_1_text_2'>с техническими решениями обеспечивающими безопасную для жизни и здоровья среду</p>
                      <p className='gazification_2_block_3_text_3'>03</p>
                  </div>
                  <div className='gazification_2_block_4'>
                    <img className='gazification_2_block_1_img_4' src='/public/sogl.png'/>
                      <p className='gazification_2_block_1_text_1'>Согласование</p>
                      <p className='gazification_2_block_1_text_2'>Согласование проекта со всеми организациями, инстанциями и структурами. </p>
                      <p className='gazification_2_block_4_text_3'>04</p>
                  </div>
                  <div className='gazification_2_block_5'>
                    <img className='gazification_2_block_1_img_5' src='/public/exper.png'/>
                      <p className='gazification_2_block_1_text_1'>Экспертиза</p>
                      <p className='gazification_2_block_1_text_2'>Прохождение экспертизы промышленной безопасности проектной документации </p>
                      <p className='gazification_2_block_5_text_3'>05</p>
                  </div>
                  <div className='gazification_2_block_6'>
                    <img className='gazification_2_block_1_img_6' src='/public/lupa.png'/>
                      <p className='gazification_2_block_1_text_1'>Авторский надзор</p>
                      <p className='gazification_2_block_1_text_2'>контроль соблюдения в процессе строительства требований проектной документации </p>
                      <p className='gazification_2_block_6_text_3'>06</p>
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
                            <img className='gazification_pdf_box_img' src='/public/pdf1.png'/>
                            <img className='gazification_pdf_box_img2' src='/public/pdf2.png'/>
                            <img className='gazification_pdf_box_img3' src='/public/pdf3.png'/>
                            <img className='gazification_pdf_box_img4' src='/public/pdf4.png'/>
                            <img className='gazification_pdf_box_img5' src='/public/pdf5.png'/>
                            <img className='gazification_pdf_box_img6' src='/public/pdf6.png'/>
                            <a className='gazification_pdf_box_title_1' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                            <a className='gazification_pdf_box_title_2' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                            <a className='gazification_pdf_box_title_3' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                            <a className='gazification_pdf_box_title_4' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                            <a className='gazification_pdf_box_title_5' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                            <a className='gazification_pdf_box_title_6' href="public/sto-gazprom-18000.3-006-2017.pdf" download="sto-gazprom-18000.3-006-2017.pdf">18000.3-006-2017 Газораспределительная система. Организация проведения контроля за соблюдением требований промышленной безопасности при эксплуатации, строительстве и реконструкции. Основные положения</a>
                        </div>

                    </div>
                </div>
          </div>
            <div className='gazification_faq'>
                <h2 className='gazification_faq_title'>Часто задаваемые вопросы</h2>
                <div className='gazification_faq_block'>
                    <div className={`gazification_faq_block_1 ${activeHandler === 1 ? 'faq_1' : ''}`} onClick={() => handleClick(1)}>
                        <p className='gazification_faq_block_1_title'>Для каких целей нужен проект газификации ?</p>
                        <input className={`gazification_faq_block_1_title_strela1 ${activeHandler === 1 ? 'strela-digris': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(1)} alt=''/>
                        {activeHandler === 1 && (
                        <div className='faq_1'>
                            <p className='gazification_faq_block_1_text'>Проектирование газификации - обязательное условие для подключения новых абонентов, ремонта и реконструкции существующих объектов. Включает газовые сети и отдельные участки, технические приборы, газовое оборудование.</p>
                            </div>
                          )}
                    </div>
                    <div className={`gazification_faq_block_2 ${activeHandler === 2 ? 'faq_2' : ''} ${activeHandler === 1 ? 'faq_2_2' : ''}`} onClick={() => handleClick(2)}>
                        <p className='gazification_faq_block_2_title'>Газопроводы какого давления Вы проектируете  ?</p>
                        <input className={`gazification_faq_block_2_title_strela1 ${activeHandler === 2 ? 'strela-digris_2': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(2)} alt=''/>
                        {activeHandler === 2 && (
                        <div className='faq_2'>
                            <p className='gazification_faq_block_2_text'>Газопроводы низкого давления (служат для подачи газа к жилым домам, общественным зданиям и коммунально-бытовым предприятиям).
<br/>Газопроводы среднего давления (через газорегуляторные пункты снабжают газом газопроводы низкого давления, а также промышленные и коммунально-бытовые предприятия).
<br/>Газопроводы высокого давления (через газораспределительные установки на промышленные предприятия и газопроводы среднего давления). " </p>
                            </div>
                          )}
                    </div>
                    <div className={`gazification_faq_block_3 ${activeHandler === 3 ? 'faq_3' : ''} ${activeHandler === 2 ? 'faq_3_3' : ''}`} onClick={() => handleClick(3)}>
                        <p className='gazification_faq_block_2_title'>В какой срок выполняется работа   ?</p>
                        <input className={`gazification_faq_block_3_title_strela1 ${activeHandler === 3 ? 'strela-digris_3': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(3)} alt=''/>
                        {activeHandler === 3 && (
                        <div className='faq_3'>
                            <p className='gazification_faq_block_3_text'>Сроки реализации зависят от сложности проекта, специфики местности, колличества согласующих инстанций и могут составлять от 5 дней до нескольких месяцев. </p>
                            </div>
                          )}
                    </div>
                    <div className={`gazification_faq_block_4 ${activeHandler === 4 ? 'faq_4' : ''} ${activeHandler === 3 ? 'faq_4_4' : ''}`} onClick={() => handleClick(4)}>
                        <p className='gazification_faq_block_2_title'>Сколько времени может занять согласование документации   ?</p>
                        <input className={`gazification_faq_block_4_title_strela1 ${activeHandler === 4 ? 'strela-digris_4': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(4)} alt=''/>
                        {activeHandler === 4 && (
                        <div className='faq_4'>
                            <p className='gazification_faq_block_4_text'>За счет десятилетнего опыта и развитой сети партнеров на всей территории России сроки оптимизированы. Большая практика согласования проектов в различных инстанциях.</p>
                            </div>
                          )}
                    </div>
                    <div className={`gazification_faq_block_5 ${activeHandler === 5 ? 'faq_5' : ''} ${activeHandler === 4 ? 'faq_5_5' : ''}`} onClick={() => handleClick(5)}>
                        <p className='gazification_faq_block_2_title'>Вы принимаете участие в тендерах   ?</p>
                        <input className={`gazification_faq_block_5_title_strela1 ${activeHandler === 5 ? 'strela-digris_5': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(5)} alt=''/>
                        {activeHandler === 5 && (
                        <div className='faq_5'>
                            <p className='gazification_faq_block_5_text'>ООО "Партнер" имеет в структуре организации тендерный отдел. Победы в тендерах, госзакупках и электронных торгах фоормируют ключевой объем заказов компании. Основными Заказчикамия являются АО "Газпром газораспределие" и ПАО "Россети"</p>
                            </div>
                          )}
                    </div>
                    <div className={`gazification_faq_block_6 ${activeHandler === 6 ? 'faq_6' : ''} ${activeHandler === 5 ? 'faq_6_6' : ''}`} onClick={() => handleClick(6)}>
                        <p className='gazification_faq_block_2_title'>До какой суммы можете заключить договор   ?</p>
                        <input className={`gazification_faq_block_6_title_strela1 ${activeHandler === 6 ? 'strela-digris_6': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(6)} alt=''/>
                        {activeHandler === 6 && (
                        <div className='faq_6'>
                            <p className='gazification_faq_block_6_text'>Допуск СРО на разработку проектной документации и проведение инженерных изысканий позволяет заключать договора объемеом до 50 млн рублей</p>
                            </div>
                          )}
                    </div>
                    <div className={`gazification_faq_block_7 ${activeHandler === 7 ? 'faq_7' : ''} ${activeHandler === 6 ? 'faq_7_7' : ''}`} onClick={() => handleClick(7)}>
                        <p className='gazification_faq_block_2_title'>От чего зависит цена проектирования газоснабжения   ?</p>
                        <input className={`gazification_faq_block_7_title_strela1 ${activeHandler === 7 ? 'strela-digris_7': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(7)} alt=''/>
                        {activeHandler === 7 && (
                        <div className='faq_7'>
                            <p className='gazification_faq_block_6_text'>Основные характеристики, влияющие на стоимость: расстояние от распределительного газопровода до объекта, дополнительные разрешения, которые необходимо получить, статус объекта, статус заказчика (физическое или юридическое лицо).</p>
                            </div>
                          )}
                    </div>
                    <div className={`gazification_faq_block_8 ${activeHandler === 8 ? 'faq_8' : ''} ${activeHandler === 7 ? 'faq_8_8' : ''}`} onClick={() => handleClick(8)}>
                        <p className='gazification_faq_block_2_title'>Каков порядок оплаты по Договору газификации объектов   ?</p>
                        <input className={`gazification_faq_block_8_title_strela1 ${activeHandler === 8 ? 'strela-digris_8': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(8)} alt=''/>
                        {activeHandler === 8 && (
                        <div className='faq_8'>
                            <p className='gazification_faq_block_8_text'>Потребность проекта в финансировании обсуждается на этапе формирования КП и не изменяется до момента завершения работ по Договору. Как приавило, мы разделяем оплаты на этапы, чтобы снизить финансовую нагрузку наших партнеров.</p>
                            </div>
                          )}
                    </div>

                   <div className={`gazification_faq_block_9 ${activeHandler === 9 ? 'faq_9' : ''} ${activeHandler === 8 ? 'faq_9_9' : ''}`} onClick={() => handleClick(9)}>
                        <p className='gazification_faq_block_9_title'>Вы ведете контроль монтажных работ   ?</p>
                        <input className={`gazification_faq_block_9_title_strela1 ${activeHandler === 9 ? 'strela-digris_9': ''}`} type="image" src='/public/close_7903969.png' onClick={() => handleClick(9)} alt=''/>
                        {activeHandler === 9 && (
                        <div className='faq_9'>
                            <p className='gazification_faq_block_9_text'>Да, мы оказываем авторский надзор за всеми работами по нашему проекту газопровода.</p>
                            </div>
                          )}
                    </div>


                </div>


            </div>
            <div className='gazification_footer'>
                <div className='gazification_footer_1'>
                    <img className='gazification_footer_1_img' src='/public/logo_new.png'/>
                    <img className='gazification_footer_2_img' src='/public/tochki.png'/>
                </div>
                <div className='gazification_footer_2'>
                    <p className='gazification_footer_2_text_1'>АДРЕС ОФИСА</p>
                    <p className='gazification_footer_2_text_2'>г.Крснодар ул.Заполярная 37 к4</p>
                    <p className='gazification_footer_2_text_3'>г.Крснодар ул.Красных Партизан 1/4 к9</p>
                </div>
                <div className='gazification_footer_4'>
                    <p className='gazification_footer_2_text_1'>ГРАФИК РАБОТЫ</p>
                    <p className='gazification_footer_2_text_2'>пн-пт с 9:00 до 18:00,</p>
                    <p className='gazification_footer_2_text_3'>сб-вс - выходной</p>
                </div>
                <div className='gazification_footer_5'>
                    <p className='gazification_footer_2_text_1'>ТЕЛЕФОН</p>
                    <p className='gazification_footer_2_text_2'>+7 (918) 331-25-57</p>
                    <p className='gazification_footer_2_text_3'>+7 (993) 310-00-01</p>
                </div>
                <div className='gazification_footer_6'>
                    <p className='gazification_footer_2_text_1'>E-MAIL</p>
                    <p className='gazification_footer_2_text_2'>info@partner-tech.ru</p>
                    <p className='gazification_footer_2_text_3'>mail@partner-krd.ru</p>
                </div>
                <div className='gazification_footer_7'>
                    <p className='gazification_footer_2_text_1'>ИФОРМАЦИЯ</p>
                    <p className='gazification_footer_2_text_11'>Контакты</p>
                    <p className='gazification_footer_2_text_21'>О компании</p>
                </div>

                </div>





        </div>
        </body>
      </html>
  );
}


export default Gazification