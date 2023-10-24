import './Project.css'
import React, {useRef, useState} from "react";


const Project = () =>  {

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
         <title>Проекты</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
        <link rel="manifest" href="/site.webmanifest">
        <div className='Project'>
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
                    <li className='menu_supply_activate_li'><a href="/about">О кампании</a></li>
                    <li className='menu_supply_activate_li'><a href="/contacts">Контакты</a></li>
                    <li className='menu_supply_activate_li_callback'><a href='/callback'>Связаться с нами</a></li>
                </div>
                <p className='menu_supply_activate_city'>г.Краснодар</p>
                <p className='menu_supply_activate_number'>+7 (918) 495-34-20</p>
            </div>
        )}
      <h1 className='Project_title'>Проекты</h1>
       <div className='Project_object'>
         <img className='Project_img1' src='/public/Project1.png' alt=''/>
         <p className='Project_text1'>Строительство ЛЭП-10 <span className='project_span'>11</span> кВ от ВЛ-10 кВ ТМ-4</p>
         <img className='Project_img2' src='/public/Project2.png' alt=''/>
         <p className='Project_text2'>Строительство ЛЭП-10 кВ от ВЛ-10 кВ ТМ-4</p>
         <img className='Project_img3' src='/public/Project3.png' alt=''/>
         <p className='Project_text3'>Строительство ЛЭП-10 <span className='project_span'>11</span> кВ от ВЛ-10 кВ ТМ-4</p>
       </div>
      </div>

        </div>
        </head>
    );
}

export default Project