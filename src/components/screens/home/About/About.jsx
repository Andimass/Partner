import './About.css'
import React, {useRef, useState} from "react";


const About = () =>  {

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

window.addEventListener('scroll', function() {

    let scrollPosition = window.pageYOffset;

    let rotationDegree = scrollPosition / 10;


    document.querySelector('.about_transportir_1').style.transform = `rotate(${rotationDegree}deg)`;
    document.querySelector('.about_transportir_2').style.transform = `rotate(${rotationDegree}deg)`;
    // scrollTimeout = setTimeout(function() {
    //
    //     document.querySelector('.transportir_1').style.transition = 'none';
    //     document.querySelector('.transportir_2').style.transition = 'none';
    // }, 150);
});


          window.onload = function() {
    const hash = window.location.hash;
    if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.scrollIntoView();
        }
    }
};


    return(
        <html>
        <head>
         <title>О компании</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        </head>
        <body>
        <div className='About'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className={`supply_header ${activeHandler === 4 ? 'bgc_opacity' : ''}`}>
        <a href="/">
            <img className='logo-supply' src="/public/logo_new.png" alt='' />
        </a>
            <a className='about_bgc_bgc'/>
            <div className='About_ous'>
                <div className='header_menu'>
                <a href='/price'><p>Цены</p></a>
                        <a href='/uslugi'><p>Услуги</p></a>
                       <a href='/about'><p>О нас</p></a>
                        <p>info@partner-tech.ru</p>
                    <p>+ 7 (918) 331-25-57</p>
                </div>
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
                                <iframe src="http://partner-tech.ru/about" frameBorder="0"></iframe>
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
                <p className='about_title'>ПАРТНЕР</p>
                <img className='about_fon' src='/public/фон точки о нас.jpg'/>
                <p className='about_title_2'>О компании</p>
                <p className='about_title_text'>Профессиональная команда выполняющая комплексные проектных, изыскательных, кадастровых и инженерных услуг</p>
                <div className="collage">
                        <img className='about_title_img_1' src="/public/коллаж (2).png" alt="Геодезия 1"/>
                    </div>
            </div>
                <div className='about_for'>
                    <div className='about_for_block'>
                        <p className='about_for_img1'/>
                        <p className='about_for_img2'/>
                        <p className='about_for_img3'/>
                        <p className='about_for_img4'/>
                        <p className='about_for_img5'/>
                        <p className='about_for_img6'/>
                        <div className='about_for_block_org'>
                            <h2 className='about_for_block_org_title'>Причины выбрать нас:</h2>
                            <div className='about_for_block_org_block'>
                                <p className='about_for_block_org_text_1'>Имеем все необходимые государственные лицензии и сертификаты</p>
                                <p className='about_for_block_org_text_11'>01</p>
                                <p className='about_for_block_org_text_2'>Квалифицированные специалисты, аттестованные кадастровые инженеры</p>
                                <p className='about_for_block_org_text_21'>02</p>
                                <p className='about_for_block_org_text_3'>Современное геодезическое оборудование и программное обеспечение</p>
                                <p className='about_for_block_org_text_31'>03</p>
                                <p className='about_for_block_org_text_4'>Срочное выполнение заказа</p>
                                <p className='about_for_block_org_text_41'>04</p>
                                <p className='about_for_block_org_text_5'>Оформление всех согласований и разрешений</p>
                                <p className='about_for_block_org_text_51'>05</p>
                                <p className='about_for_block_org_text_6'>Индивидуальный подход к клиенту</p>
                                <p className='about_for_block_org_text_61'>06</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about_2'>
                <h2 className='about_2_title_1'>Несколько важных преимуществ компании Партнер</h2>
                <p className='about_2_title_text'>Свою деятельность наша компания «Партнер» ведет 8 лет на земельном рынке Краснодара и Краснодарского края. ООО «Партнер» состоит в Ассоциации СРО «Центризыскания», что позволяет вести деятельность на территории Российской Федерации.</p>
              <div className='about_2_block'>
                  <p className='about_2_block_img_1'/>
                  <p className='about_2_block_img_2' />
                    <p className='about_2_block_img_3' />
                  <p className='about_2_block_img_4' />
                  <p className='about_2_block_img_5' />
                <p className='about_2_block_img_6' />
                  <p className='about_2_block_img_7' />
                    <p className='about_2_block_img_8' />
                    <p className='about_2_block_img_9' />
                    <p className='about_2_block_img_10' />
                      <p className='about_2_block_img_11' />
                      <p className='about_2_block_img_12' />
                      <p className='about_2_block_img_13' />
                      <p className='about_2_block_img_14' />
                      <p className='about_2_block_img_15' />
                  <img className='about_transportir_1' src='src/assets/img/Protacor/transportir30.svg'/>
                  <img className='about_transportir_2' src='src/assets/img/Protacor/transportirceluyctnter.svg'/>
                  <div className='about_2_block_1'>
                      <img className='about_2_block_1_img_1'/>
                      <p className='about_2_block_1_text_1'>Профессионализм</p>
                      <p className='gazification_2_block_1_text_2'>Имеем все необходимые государственные лицензии и сертификаты </p>
                      <p className='gazification_2_block_1_text_3'>01</p>
                  </div>
                  <div className='about_2_block_2'>
                       <img className='about_2_block_1_img_1'/>
                      <p className='about_2_block_1_text_1'>Индивидуальность</p>
                      <p className='about_2_block_1_text_2'> Работает с каждым клиентом в индивидуальном порядке</p>
                      <p className='about_2_block_2_text_3'>02</p>
                  </div>
                  <div className='about_2_block_3'>
                    <img className='about_2_block_1_img_1'/>
                      <p className='about_2_block_1_text_1'>Круглосуточность</p>
                      <p className='about_2_block_1_text_2'>Работаем в выходные и праздничные дни, осуществляем поддержку в нерабочее время</p>
                      <p className='about_2_block_3_text_3'>03</p>
                  </div>
                  <div className='about_2_block_4'>
                    <img className='about_2_block_1_img_1'/>
                      <p className='about_2_block_1_text_1'>Гарантия</p>
                      <p className='about_2_block_1_text_2'>Гарантируем прохождение экспертизы инженерно-геодезических изысканий </p>
                      <p className='about_2_block_4_text_3'>04</p>
                  </div>
                  <div className='about_2_block_5'>
                    <img className='about_2_block_1_img_1'/>
                      <p className='about_2_block_1_text_1'>Опыт</p>
                      <p className='about_2_block_1_text_2'>Закрыли более 5000 различных объектов инженерных изысканий объемом от 0,1 га до 2000 га</p>
                      <p className='about_2_block_5_text_3'>05</p>
                  </div>
                  <div className='about_2_block_6'>
                    <img className='about_2_block_1_img_1'/>
                      <p className='about_2_block_1_text_1'>Доступность</p>
                      <p className='about_2_block_1_text_2'>Доступные цены,работаем без посредников</p>
                      <p className='about_2_block_6_text_3'>06</p>
                  </div>
              </div>
            </div>
            <div className='about_container_3'>
            <img className='about_container_3_shema' src='/public/СХЕМА НА САЙТ.png'/>
            </div>
            <div className='about_container_4' id="target-section">
                <p className='about_container_4_text_1' id='about_1'>Цифровые навыки</p>
                <p className='about_container_4_text_2' id='about_2'>Материальное обеспечение</p>
                <img className='about_container_4_text_2_img_1' src='/public/IMG_4063-2_1_11zon (1).jpg'/>
                <img className='about_container_4_text_2_img_2' src='/public/IMG_4097-2_5_11zon (1).jpg'/>
                <img className='about_container_4_text_2_img_3' src='/public/IMG_4253_12_11zon (1).jpg'/>
                <img className='about_container_4_text_2_img_4' src='/public/IMG_4111-2_7_11zon (1).jpg'/>
                <p className='about_container_4_text_3' id='about_3'>Работа с персоналом</p>
                <p className='about_container_4_text_4' id='about_4'>Ответственность</p>
                <p className='about_container_4_text_5' id='about_5'>Логистика</p>
                <p className='about_container_4_text_6' id='about_6'>Проектирование</p>
            </div>





    </div>
        </body>
        </html>
    );
}

export default About