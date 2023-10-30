
import './Header.css'
import React, {useEffect, useState, useRef} from "react";
import $ from "jquery";
import p5 from "p5";
const Header = () => {

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



    const containerRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let balls = [];
      let img;
      let imageSizes = [
          {width: 198, height: 45},
          {width: 164, height: 138},
          {width: 65, height: 65},
          {width: 181, height: 84},
          {width: 181, height: 84},
          {width: 30, height: 14},
          {width: 206, height: 72},
          {width: 117, height: 82},
          {width: 132, height: 92},
          {width: 82, height: 93},
          {width: 93, height: 83}
        ];

      p.preload = () => {
        img = [];
          for (let i = 0; i < 11; i++) {
            img[i] = p.loadImage('./public/part' + (i + 1) + '.png');  // предполагая, что у вас есть изображения part1.png, part2.png и т.д.
          }
      };

      p.setup = () => {
      p.createCanvas(2500, 800);
      for (let i = 0; i < 11; i++) {
        balls.push(new Ball(p.random(p.width), p.random(p.height), p.random(125, 320), p, i));  // Передаем индекс вместо самого изображения
      }
};

        p.draw = () => {
            p.background(255);

            for (let i = 0; i < balls.length; i++) {
                balls[i].update();
                balls[i].display();
                balls[i].checkEdges();
                balls[i].checkCollision(balls);
                balls[i].handleMouseInteraction();  // Добавьте эту строку
            }
        };

      class Ball {
          constructor(x, y, diameter, p, imgIndex) {  // imgIndex - индекс изображения
            this.x = x;
            this.y = y;
            this.diameter = diameter;
            this.img = img[imgIndex];
            this.imgWidth = imageSizes[imgIndex].width;
            this.imgHeight = imageSizes[imgIndex].height;
            this.speedX = p.random(-2, 2);
            this.speedY = p.random(-2, 2);
            this.p = p;
            this.initialSpeedX = this.speedX;
            this.initialSpeedY = this.speedY;
          }

          update() {
              this.x += this.speedX;
              this.y += this.speedY;
          }

          display() {
              this.p.image(this.img, this.x, this.y);
              this.p.imageMode(this.p.CENTER);
          }

          checkEdges() {
            let radius = this.diameter / 2;

                if (this.x > this.p.width - radius) {
                    this.x = this.p.width - radius;
                    this.speedX *= -1;
                } else if (this.x < radius) {
                    this.x = radius;
                    this.speedX *= -1;
                }

                if (this.y > this.p.height - radius) {
                    this.y = this.p.height - radius;
                    this.speedY *= -1;
                } else if (this.y < radius) {
                    this.y = radius;
                    this.speedY *= -1;
                }
          }

            handleMouseInteraction() {
                let d = this.p.dist(this.x, this.y, this.p.mouseX, this.p.mouseY);
                let minDist = this.diameter / 2 + 50;  // 50 - это радиус "отталкивания" от курсора
                if (d < minDist) {
                    let angle = this.p.atan2(this.y - this.p.mouseY, this.x - this.p.mouseX);
                    let overlap = minDist - d;
                    let ax = this.p.cos(angle) * overlap;
                    let ay = this.p.sin(angle) * overlap;
                    this.x += ax;
                    this.y += ay;
                    this.speedX = this.p.cos(angle) * this.p.mag(this.speedX, this.speedY) * 1.01;
                    this.speedY = this.p.sin(angle) * this.p.mag(this.speedX, this.speedY) * 1.01;

                    setTimeout(() => {
                    this.speedX = this.initialSpeedX;
                    this.speedY = this.initialSpeedY;
                }, 3000)
                }
            }

          checkCollision(balls) {
              for (let i = 0; i < balls.length; i++) {
                  let other = balls[i];
                  if (this !== other) {
                      let d = this.p.dist(this.x, this.y, other.x, other.y);
                      let minDist = (this.diameter + other.diameter) / 2;

                      if (d < minDist) {
                          let angle = Math.atan2(other.y - this.y, other.x - this.x);
                          let overlap = minDist - d;
                          let ax = Math.cos(angle) * overlap * 0.5;
                          let ay = Math.sin(angle) * overlap * 0.5;

                          this.x -= ax;
                          this.y -= ay;
                          other.x += ax;
                          other.y += ay;

                          this.speedX = -this.speedX;
                          this.speedY = -this.speedY;
                          other.speedX = -other.speedX;
                          other.speedY = -other.speedY;
                      }
                  }
              }
          }
      }
    };

    const myP5 = new p5(sketch, containerRef.current);

    return () => {
      myP5.remove();
    };
  }, []);

  window.addEventListener('scroll', function() {
    // Получите текущую позицию прокрутки
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // Определите уровень прокрутки, на котором вы хотите изменить цвет. Например, 300px.
    if (scrollPosition > 1200 && scrollPosition < 1950) {
        document.querySelector('.header_black_square').style.backgroundColor = 'rgb(246,245,245)';  // Новый цвет для header_black_square
        document.querySelector('.header_black_square2').style.backgroundColor = 'rgb(246,245,245)'; // Новый цвет для header_black_square2
    }
    else {
        document.querySelector('.header_black_square').style.backgroundColor = 'rgba(255, 255, 255)';  // Оригинальный цвет для header_black_square
        document.querySelector('.header_black_square2').style.backgroundColor = 'rgba(255, 255, 255)'; // Оригинальный цвет для header_black_square2
    }
});


        return (
        <html>
        <head>
         <title>Партнер</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

            <meta name="yandex-verification" content="ee98594a3963c95e" />
            </head>
            <body>
            <div className='Header'>
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
            <div className='header_header'>
                <img className='header_logo' src='/public/logo2.png'/>
                <img className='header_logo_2' src='/public/Group 4.png'/>

                <div className='header_animation_square ' >
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
                        </div>
                    )}
                    <div className='header_menu'>
                        {/*<img className='header_bgc' src='/public/point_fon.png'></img>*/}
                        <p>Цены</p>
                        <p>Услуги</p>
                        <p>О нас</p>
                        <p>info@partner-tech.ru</p>
                        <p>+ 7 (918) 331-25-57</p>
                        <div className='header_top'>
                            <div className='header_top_circle'>
                                <img className='header_top_circle_1' src='/public/vec1.png'/>
                                <img className='header_top_circle_2' src='/public/vec2.png'/>
                                <img className='header_top_circle_3' src='/public/vec3.png'/>
                                <img className='header_top_circle_4' src='/public/vec4.png'/>
                                <img className='header_top_circle_5' src='/public/vec5.png'/>
                                <img className='header_top_circle_6' src='/public/vec6.png'/>
                                <img className='header_top_circle_7' src='/public/vec7.png'/>
                                <img className='header_top_circle_8' src='/public/vec8.png'/>
                                <img className='header_top_circle_9' src='/public/vec9.png'/>
                                <img className='header_top_circle_10' src='/public/vec10.png'/>
                                <img className='header_top_circle_11' src='/public/vec11.png'/>
                            </div>
                        </div>

                        <div className='black_line'></div>
                    </div>
                       <div className='header_top_2'>
                           <img className='logo_circle' src='/public/logo2.png'/>
                                <p className='header_top_2_title'>Scale at speed with a complete end-to-end solution</p>
                                <p className='header_top_comp_2_title_1'>Инженерные изыскания</p>
                                <div className='header_top_comp_2_title_111'>
                                    <p className='header_top_comp_2_title_11'>Геодезические, геологические и экологические изыскания для выполнения работ по подготовке проектной документации, строительству и реконструкции объектов капитального строительства  </p>
                                </div>
                                <p className='header_top_comp_2_title_2'>Проектирование энергообъектов электроэнергетики</p>
                                <div className='header_top_comp_2_title_211'>
                                    <p className='header_top_comp_2_title_21'>Разработка проектных решений по кабельным и воздушным линиям электропередачи, трансформаторным подстанциям, генераторам и иным видам оборудования классом напряжения 0,4-35 кВ</p>
                                </div>
                                <p className='header_top_comp_2_title_3'>Проектирование газораспределения и газопотребления</p>
                                <div className='header_top_comp_2_title_311'>
                                    <p className='header_top_comp_2_title_31'>Оказываем услуги по расчету потребления газа, разработке проектной и рабочей документации: котельных, пунктов редуцирования газа, сетей газопотребления и газораспределения</p>
                                </div>
                                <p className='header_top_comp_2_title_4'>Проектирование сетей абоненстского доступа</p>
                                <div className='header_top_comp_2_title_411'>
                                    <p className='header_top_comp_2_title_41'>Проектирование современных систем связи с использованием оптического волокна. Расчет тяжений несущих конструкций, в том числе опор воздушных линий электропередачи</p>
                                </div>
                                <p className='header_top_comp_2_title_5'>Проектирование водопровода и канализации</p>
                                <div className='header_top_comp_2_title_511'>
                                    <p className='header_top_comp_2_title_51'>Комплексное проектирование и расчет наружних инженерных канализационных и водопроводных систем любой сложности. Центральное и индивидуальное водоснабжение и водоотведение.</p>
                                </div>
                                <p className='header_top_comp_2_title_6'>Кадастровые работы</p>
                                <div className='header_top_comp_2_title_611'>
                                    <p className='header_top_comp_2_title_61'>Подготовка документов содержаших полный перечень сведений, используемых для оформления на кадастровый учет недвижимости в специальных государственных органах</p>
                                </div>
                        </div>
                    <div className='header_container_1'>
                        <p className='header_container_1_title'>Мы — проектная организация полного цикла. Наши услуги включают геодезические работы, кадастровые услуги, проектирование и реализацию систем газификации и электрификации.<br/><br/> Мы предлагаем комплексное решение задач от начальных замеров и разработки проектной документации до поддержки на всех этапах реализации проекта и последующей эксплуатации объектов.</p>
                        <p className='header_container_1_year'>8 лет</p>
                        <p className='header_container_1_prod'>Продуктивной работы</p>
                        <p className='header_container_1_num'>12683</p>
                        <p className='header_container_1_proekt'>Разработанных проектов</p>
                        <p className='header_container_1_bolee'>Более 50</p>
                        <p className='header_container_1_spec'>Cпециалистов</p>
                        <p className='header_container_1_sobs'>Собственные</p>
                        <p className='header_container_1_it'>IT разработки</p>
                    </div>

                    <div className='header_container_2'>
                        <div className='header_container_2_2'>
                        <h2 className='header_container_2_title'>Как мы работаем</h2>
                        <img className='header_container_2_etap_1_img' src='/public/feedback_9805563.png'/>
                        <p className='header_container_2_etap_1'>Ваше обращение</p>
                         <img className='header_container_2_etap_2_img' src='/public/workflow_9805572.png'/>
                        <p className='header_container_2_etap_2'>Заключение договора</p>
                         <img className='header_container_2_etap_3_img' src='/public/software_9805593.png'/>
                        <p className='header_container_2_etap_3'>Выполнение работы</p>
                        <img className='header_container_2_etap_4_img' src='/public/product_9805570.png'/>
                        <p className='header_container_2_etap_4'>Передача результата</p>
                        </div>

                    </div>
                    <div className='container_container_3' ref={containerRef}>
                        <h2 className='header_our_partner'>Наши партнеры</h2>
                        <img className='partner_1'/>
                        <img className='partner_2'/>
                        <img className='partner_3'/>
                        <img className='partner_4'/>
                        <img className='partner_5'/>
                        <img className='partner_6'/>
                        <img className='partner_7'/>
                        <img className='partner_8'/>
                        <img className='partner_9'/>
                        <img className='partner_10'/>
                    </div>
                    <div className='header_container_4'>
                        <p className='header_our_prem'>Наши преимущества</p>
                       <div className='header_our_uslugi_obol' >
                        <div className={`header_our_uslugi_1 ${activeHandler === 1 ? 'black-grey_1' : ''} ${activeHandler >= 2 && activeHandler <= 6 ? 'dop_black-grey' : ''}`} onClick={() => handleClick(1)}>
                                <p className='header_our_uslugi_geo'>Цифровые навыки</p>
                        {activeHandler === 1 && (
                        <div className='dop_1'>
                            <p className='header_our_uslugi_geo_2'>Цифровые навыки</p>
                            <p className='dop_1_title'>Геодезические услуги-это</p>
                            <p className='dop_1_geo_1'>Наша компания уделяет особое внимание рабочему месту сотрудника. Непосредственно, как скальпель для хирурга и кисть для художника, сотрудники выполняют проектную работу на современном цифровом рабочем месте. <br/> Мощные компьютеры и 4K мониторы позволяют видеть более объемным проект и снизить утомляемость персонала. Применение собственных разработок в части программного обеспечения для расчетов, построения трасс и профилей положительно сказываются на качестве проектной документации.<br/> Цифровая система критериев на базе искусственного интеллекта координирует распределение объектов между персоналом и сигнализирует об отклонениях в сроках реализации. В совокупности данные мероприятия позволяют значительно сэкономить время производства без потери качества.</p>
                            {/*<a className='dop_1_href' href='/geo'>Больше услуг</a>*/}
                            </div>
                          )}
                        </div>
                        <div className={`header_our_uslugi_2 ${activeHandler === 2 ? 'black-grey_2' : ''} ${activeHandler === 1 ? 'dop_blue-white' : ''}`} onClick={() => handleClick(2)} >
                                <p className='header_our_uslugi_cadastr'>Материальное обеспечение</p>
                        {activeHandler === 2 && (
                        <div className='dop_2'>
                            <p className='header_our_uslugi_cadastr_2'>Материальное обеспечение</p>
                            <p className='dop_2_1'>Для успешной и качественной реализации проектов ООО "Партнер" использует современное материально-техническое обеспечение, что позволяет держать высокую планку качества в сфере инженерных изысканий. Тахеометр, нивелир, GPS оборудование позволяет выполнить работу с минимальной погрешностью в любых ландшафтных условиях. Наше компания располагает собственным укомплектованным парком автотранспорта разной проходимости. В том числе имеется резерв на случаи технологической поломки или неисправности.</p>
                            </div>
                          )}
                        </div>
                         <div className={`header_our_uslugi_3 ${activeHandler === 3 ? 'black-grey_3' : '' } ${activeHandler === 1  || activeHandler === 2  ? 'dop_blue-white_2' : ''}`} onClick={() => handleClick(3)}>
                                <p className='header_our_uslugi_proekt'>Работа с персоналом</p>
                        {activeHandler === 3 && (
                        <div className='dop_3'>
                            <p className='header_our_uslugi_proekt_2'>Работа с персоналом</p>
                            <p className='dop_3_1'>В современном мире профессиональные навыки, полученные в процессе получения образования, быстро устаревают, поэтому обучение и повышение квалификации становятся важнейшими элементами профессионального роста. В ООО «Партнер» помимо классических инструктажей и самоподготовки с персоналом проводятся семинары, на которых опытные наставники детально разбирают актуальные редакции нормативно технических документов и индивидуальные замечания сотрудников, допущенных вследствие дополнительных персональных требований Заказчика</p>

                            </div>
                          )}
                        </div>
                        <div className={`header_our_uslugi_4 ${activeHandler === 4 ? 'black-grey_4' : ''} ${activeHandler === 1  || activeHandler === 2 || activeHandler === 3 ? 'dop_blue-white_3' : ''}`} onClick={() => handleClick(4)}>
                                <p className='header_our_uslugi_proekt_gaz'>Ответственность</p>
                        {activeHandler === 4 && (
                        <div className='dop_4'>
                            <p className='header_our_uslugi_proekt_gaz_2'>Ответственность</p>
                            <p className='dop_4_1'>Структура компании и четкий последовательный алгоритм производственных процессов не является только частью успеха ООО «Партнер». Коллективная и личная ответственность каждого позволяют достичь истинного баланса. Учитывая линейность процесса разработки проектной документации любой из сотрудников, понимает, что непосредственно от него зависит итоговый результат и репутация компании. Ответственное исполнение каждого этапа: получение исходных данных, сверка в натуре, инженерные изыскания, разработка проектной и рабочей документации, согласование и закрытие позволяют достичь максимальной эффективности.</p>
                            </div>
                          )}
                        </div>
                        <div className={`header_our_uslugi_5 ${activeHandler === 5 ? 'black-grey_5' : ''} ${activeHandler === 1  || activeHandler === 2 || activeHandler === 3 || activeHandler === 4 ? 'dop_blue-white_4' : ''}`} onClick={() => handleClick(5)}>
                                <p className='header_our_uslugi_proekt_set'>Логистика</p>
                        {activeHandler === 5 && (
                        <div className='dop_5'>
                            <p className='header_our_uslugi_proekt_set_2'>Логистика</p>
                            <p className='dop_5_1'>Работа в условиях пандемии COVID-19 наглядно показала положительные и негативные стороны удаленной работы. ООО «Партнер» постарался найти компромисс и использовать лучшее. Тема Краснодарских пробок - одна из самых популярных для обсуждения. Открытие небольших офисов в разных частях города позволило уменьшить время персонала, бесцельно расходуемого на дорогу до работы. А подбор специалистов отрасли инженерных изысканий с разных районов Краснодарского края и Республики Адыгея сократить время на производство. Многие сотрудники так и работают удаленно, ведь главное качественный результат.</p>
                            </div>
                          )}
                        </div>
                        <div className={`header_our_uslugi_6 ${activeHandler === 6 ? 'black-grey_6' : ''} ${activeHandler === 1  || activeHandler === 2 || activeHandler === 3 || activeHandler === 4 || activeHandler === 5 ? 'dop_blue-white_5' : ''}`} onClick={() => handleClick(6)}>
                                <p className='header_our_uslugi_proekt_wat'>Проектирование водопровода и канализации</p>
                        {activeHandler === 6 && (
                        <div className='dop_6'>
                            <p className='header_our_uslugi_proekt_wat_2'>Проектирование водопровода и канализации</p>
                            <p className='dop_1_gaz_title'>Газификация-это</p>
                            </div>
                          )}
                        </div>
                    </div>




                    </div>

            </div>


            </div>
            </body>
        </html>
        );
}
export default Header
