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
            <img className='logo-supply' src="/public/logo.png" alt='' />
        </a>
            <a className='about_bgc_bgc'/>
            <div className='About_ous'>
                 <div className='animation_square'>
                    <div className='black_square'></div>
                    <div className='black_square2'></div>
                        <input className={`menu_supply ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img-white1.png' onClick={() => handleClick(4)} alt=''/>
                         <input className={`menu_supply2 ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img-white2.png' onClick={() => handleClick(4)} alt=''/>
                        <input className={`menu_supply3 ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img-white3.png' onClick={() => handleClick(4)} alt=''/>

                        <input className={`menu_supply4 ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img-white1.png' onClick={() => handleClick(4)} alt=''/>
                        <input className={`menu_supply5 ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img-white2.png' onClick={() => handleClick(4)} alt=''/>
                        <input className={`menu_supply6 ${activeHandler === 4 ? 'menu_opacity' : ''}`} type="image" src='/public/Menu-img-white3.png' onClick={() => handleClick(4)} alt=''/>
                    </div>
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
                <img className='About_fon' src='/public/About_fon.jpg'/>
                <p className='about_title'>ООО ПАРТНЕР</p>
                <p className='about_title_text'>Профессиональная команда выполняющая комплексные проектных, изыскательных, кадастровых и инженерных услуг</p>
                <div className="collage">
                        <img className='about_title_img_1' src="/public/about_fon1.png" alt="Геодезия 1"/>
                    </div>
            </div>










        </div>

    </div>
        </body>
        </html>
    );
}

export default About