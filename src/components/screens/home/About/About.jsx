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

    return(
        <head>
         <title>О компании</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <div className='About'>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className={`supply_header ${activeHandler === 4 ? 'bgc_opacity' : ''}`}>
        <a href="/">
            <img className='logo-supply' src="/public/logo.png" alt='' />
        </a>
        <input className={`menu_supply ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img-white.png' onClick={() => handleClick(4)} alt=''/>
        {activeHandler === 4 && (
            <div className='menu_supply_activate'>
                <p className='menu_supply_activate_close' onClick={handleCloseClick}>Закрыть</p>
                <div className='menu_opacity_bgc'></div>
                <div className='menu_supply_activate_LI'>
                    <li className='menu_supply_activate_li'><a href="/">Главная</a></li>
                    <li className='menu_supply_activate_li'><a href="/project">Проекты</a></li>
                    <li className='menu_supply_activate_li'><a href="/about">О компании</a></li>
                    <li className='menu_supply_activate_li'><a href="/contacts">Контакты</a></li>
                    <li className='menu_supply_activate_li_callback'><a href='/callback'>Связаться с нами</a></li>
                </div>
                <p className='menu_supply_activate_city'>г.Краснодар</p>
                <p className='menu_supply_activate_number'>+7 (918) 495-34-20</p>
            </div>
        )}
            <img className='about_image' src='/public/About.png'/>
            <img className='about_bgc_bgc' src='/public/About_bgc_bgc.png'/>
            <h1 className='about_title'>О компании</h1>
            <p className='about_text_1'>Свою деятельность наша компания «Партнер» ведет 8 лет на земельном рынке Краснодара и Краснодарского края.</p>
            <p className='about_text_2'>ООО «Партнер» состоит в Ассоциации СРО «Центризыскания», что позволяет вести деятельность на территории Российской Федерации.</p>
            <p className='about_text_3'>Мы предлагаем своим клиентам выполнение полного перечня кадастровых и инженерно-геодезических работ. Компания «Партнер» также выполняет инженерно-геологические и инженерно-эскологические изыскания, которые обеспечивают комплексное изучение инженерно-геологических условий района для проектируемого строительства.</p>

            <div className='about_etap'></div>
            <img className="about_bgc" src='/public/about_obj.png'/>
                <h2 className='about_etap_glav_title'>Этапы сотрудничества</h2>
                <img className='about_etap_img_1' src='/public/001.png'/>
                <img className='about_etap_img_2' src='/public/002.png'/>
                <img className='about_etap_img_3' src='/public/003.png'/>
                <img className='about_etap_img_4' src='/public/004.png'/>
                <p className='about_etap_title_1'>ВАШЕ ОБРАЩЕНИЕ</p>
                <p className='about_etap_title_2'>ЗАКЛЮЧЕНИЕ ДОГОВОРА</p>
                <p className='about_etap_title_3'>ВЫПОЛНЕНИЕ РАБОТЫ</p>
                <p className='about_etap_title_4'>ПЕРЕДАЧА РЕЗУЛЬТАТА</p>
                <p className='aout_etap_text_1'>Позвоните нам и мы обязательно Вас проконстультируем и подготовим коммерческое предложение.</p>
                <p className='aout_etap_text_2'>Если наше кп Вас устроит, то мы согласуем условия договора и подготовим счет на аванс.</p>
                <p className='aout_etap_text_3'>После оплаты аванса наши специалисты немедленно свяжутся с Вами и приступят к выпонению работ.</p>
                <p className='aout_etap_text_4'>После завершения работы, согласовав все в электронном виду, передаем документацию удобным для Вас способом.</p>
                <h2 className='about_why'>Причины выбрать нас:</h2>

            <div className='about_why_text'>
                <p className='about_why_text_1'>Имеем все необходимые государственные лицензии и сертификаты</p>
                <p className='about_why_text_2'>Квалифицированные специалисты, аттестованные кадастровые инженеры</p>
                <p className='about_why_text_3'>Современное геодезическое оборудование и программное обеспечение</p>
                <p className='about_why_text_4'>Срочное выполнение заказа</p>
                <p className='about_why_text_5'>Оформление всех согласований и разрешений</p>
                <p className='about_why_text_6'>Индивидуальный подход к клиенту</p>
            </div>

            <h2 className='about_prem'>Несколько важных преимуществ компании Партнер</h2>
            <div className='about_top'>
                <li className='about_top_1'>Имеем все необходимые государственные лицензии и сертификаты</li>
                <li className='about_top_2'>Работает с каждым клиентом в индивидуальном порядке</li>
                <li className='about_top_3'>Более 10000 положительных решений от Росреестра</li>
                <li className='about_top_4'>Оформление всех согласований и разрешений</li>
                <li className='about_top_5'>Гарантируем прохождение экспертизы инженерно-геодезических изысканий</li>
                <li className='about_top_6'>Закрыли более 5000 различных объектов инженерных изысканий объемом от 0,1 га до 2000 га</li>
                <li className='about_top_7'>Доступные цены,работаем без посредников</li>
                <li className='about_top_8'>Работаем в выходные и праздничные дни, осуществляем поддержку в нерабочее время</li>
            </div>

            <div className='about_its'>
                <h2 className='about_its_title'>ПАРТНЕР - это</h2>
                <p className='about_its_title_1'>ПРОФЕССИОНАЛИЗМ</p>
                <p className='about_its_title_2'>КОМПЕТЕНТНОСТЬ</p>
                <p className='about_its_title_3'>КОНСТРУКТИВНОСТЬ</p>
                <p className='about_its_title_4'>ОБЪЕКТИВНОСТЬ</p>
                <p className='about_its_text_1'>Профессиональная команда экспертов и специалистов. Актуальная и проверенная инструментально-техническая база.</p>
                <p className='about_its_text_2'>Наличие необходимых допусков, аккредитаций и лицензии, а так же регулярное повышение компетентности экспертов.</p>
                <p className='about_its_text_3'>Конструктивный подход к решению любых задач. Применение актуальной нормативно- правовой и технической документации.</p>
                <p className='about_its_text_4'>Независимость экспертов, подтвержденная годами. Объективные исследования и полная конфиденциальность сотрудничества.</p>
                <img className='about_its_circle_1' src='/public/about_circle_1.png'/>
                <img className='about_its_circle_2' src='/public/about_circle_2.png'/>
            </div>
            <img className='about_bgc_2' src='/public/Group 75.png'/>
            <div className={`about_footer ${activeHandler === 1 ? 'footer-shot_1' : '' || activeHandler === 2 ? 'footer-shot_2' : '' || activeHandler === 3 ? 'footer-shot_3' : '' }`}>
                   <img className='about_footer_logo' src='/public/logo2.png' alt=''/>
                   <img className='about_footer_logo2' src='/public/Group 4.png' alt=''/>
                   <div className='about_footer_s'>
                   <li className='about_footer_source'><a>Главная</a></li>
                   <li className='about_footer_source'><a>Проекты</a></li>
                   <li className='about_footer_source'><a>О кампании</a></li>
                   <li className='about_footer_source'><a>Контакты</a></li>
                   <li className='about_footer_callback'><a>Связаться с нами</a></li>
               </div>
      </div>
        </div>

    </div>
        </head>
    );
}

export default About