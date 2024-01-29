
import './Header.scss'
import React, {useEffect, useState, useRef} from "react";
import $ from "jquery";
import p5 from "p5";

const Header = () => {

        return (
        <html>
        <head>
         <title>HR</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

            <meta name="yandex-verification" content="ee98594a3963c95e" />
            </head>
            <body className="custom-zoom-page">
            <div className='Header'>
                <div className='header_up'>
                    <img className='header_up_img' src='/public/logo.png'/>
                    <div className='header_up_text'>
                        <a className='header_up_text_1' href='#about'>О компании</a>
                        <a className='header_up_text_2' href='#ourcep'>Цепочка сотрудничества</a>
                        <a className='header_up_text_3'>Почему мы</a>
                        <a className='header_up_text_4' href='#etap'>Этапы работы</a>
                        <a className='header_up_text_5'>В каких сферах мы ищем</a>
                    </div>
                </div>
                <div className='header_top'>
                    <div className='header_top_ml'>
                    <h className='header_top_title'>Подберем идеальных профессионалов, чтобы ваш бизнес расцвел.</h>
                    <img className='header_top_img_1' src='/public/h1.png'/>
                    <img className='header_top_img_2' src='/public/h2.png'/>
                    <img className='header_top_img_3' src='/public/h3.png'/>
                    <div className='header_top_text'>
                        <p className='header_top_text_1'>Подбираем персонал уже более 2 лет</p>
                        <p className='header_top_text_2'>Ищем людей по всей России</p>
                        <p className='header_top_text_3'>Имеем кейсы от менеджеров до директоров</p>
                    </div>
                    </div>
                </div>
                <div className='header_keys'>
                    <h className='header_keys_title'>Наши кейсы</h>
                    <div className='header_keys_title_img'>
                        <div className='header_keys_box_1'>
                            <img className='header_keys_img_1' src='/public/poisk.png'/>
                            <p className='header_keys_text_title_1'>Знаем где искать</p>
                            <p className='header_keys_text_1'>В подборе персонала мы используем огромнейшую базу кандидатов, собранную со всех возможных источников</p>
                        </div>
                        <div className='header_keys_box_2'>
                            <img className='header_keys_img_2' src='/public/poisk.png'/>
                            <p className='header_keys_text_title_2'>Знаем где искать</p>
                            <p className='header_keys_text_2'>В подборе персонала мы используем огромнейшую базу кандидатов, собранную со всех возможных источников</p>
                        </div>
                        <div className='header_keys_box_3'>
                            <img className='header_keys_img_3' src='/public/poisk.png'/>
                            <p className='header_keys_text_title_3'>Знаем где искать</p>
                            <p className='header_keys_text_3'>В подборе персонала мы используем огромнейшую базу кандидатов, собранную со всех возможных источников</p>
                        </div>
                    </div>
                </div>
                <div className='header_about_company'>
                    <img className='header_about_company_img' src='/public/6911306.jpg'/>
                    <img className='header_about_company_img_2' src='/public/logo.png'/>
                    <h className='header_about_company_title' id='about'>О нас</h>
                    <p className='header_about_company_text_1'>Мы - компания, специализирующаяся на подборе персонала любой сложности и широкого спектра</p>
                    <p className='header_about_company_text_2'>Мы работаем со всеми отраслями и закрываем топ позиции и руководителей высшего звена</p>
                    <p className='header_about_company_text_3'>Ценим экспертность и нацелены на долгосрочное сотрудничество с нашими клиентами.</p>
                    <p className='header_about_company_text_4'><span>aaaaaaaaaa</span> — это профессиональное кадровое агентство, специализирующееся на подборе персонала любой сложности и широкого спектра. Наша экспертиза охватывает все отрасли, включая закрытие топ-менеджмента. Мы стремимся к долгосрочному сотрудничеству с нашими клиентами и ценим экспертность.</p>
                </div>
                <div className='header_ourcep'>
                    <h2 className='header_ourcep_title' id='ourcep'>Наша цепочка сотрудничества</h2>
                     <div className='header_ourcep_box'>
                        <img className='header_ourcep_img_1' src='/public/dog.png'/>
                        <p className='header_ourcep_text_1'>Подписание договора, заявки на подбор</p>
                         <img className='header_ourcep_img_2' src='/public/brif.png'/>
                        <p className='header_ourcep_text_2'>Брифинг по этапам отбора, выявления необходимых компетенций, оценке и сроков подбора</p>
                         <img className='header_ourcep_img_3' src='/public/brif.png'/>
                        <p className='header_ourcep_text_3'>Создание рабочей группы по кандидатам</p>
                        <img className='header_ourcep_img_4' src='/public/brif.png'/>
                        <p className='header_ourcep_text_4'>Подбор и отбор кандидатов, оценка кандидатов, приглашение на интервью</p>
                         <img className='header_ourcep_img_5' src='/public/brif.png'/>
                        <p className='header_ourcep_text_5'>Выход сотрудника на работу, сбор обратной связи и адаптационные встречи с кандидатом</p>
                     </div>
                </div>
                <div className='header_etap'>
                    <h2 className='header_etap_title' id='etap'>Этапы выполнения вакансии</h2>
                    <p className='header_etap_num_1'>1</p>
                    <p className='header_etap_num_1_text'>Встреча с заказчиком и оценка задачи</p>
                    <img className='header_etap_num_1_img' src='/public/vsrecha.png'/>
                    <p className='header_etap_num_2'>2</p>
                    <p className='header_etap_num_2_text'>Расчет стоимости и коммерческое предложение</p>
                    <img className='header_etap_num_2_img' src='/public/cena.png'/>
                    <p className='header_etap_num_3'>3</p>
                    <p className='header_etap_num_3_text'>Подписание договора и заполнение заявки на поиск кандидата</p>
                    <img className='header_etap_num_3_img' src='/public/podpis.png'/>
                    <p className='header_etap_num_4'>4</p>
                    <p className='header_etap_num_4_text'>Подбор кандидатов и направление их заказчику</p>
                    <img className='header_etap_num_4_img' src='/public/otbor.png'/>
                    <p className='header_etap_num_5'>5</p>
                    <p className='header_etap_num_5_text'>Сопровождение процесса до подтверждения выхода кандидата на работу</p>
                    <img className='header_etap_num_5_img' src='/public/sopr.png'/>
                    <p className='header_etap_num_6'>6</p>
                    <p className='header_etap_num_6_text'>Поддержание контакта с заказчиком и кандидатом в течение гарантийного периода</p>
                    <img className='header_etap_num_6_img' src='/public/contact.png'/>
                </div>
                <div className='header_preim'>
                    <h2 className='header_preim_title_1'>Преимущества работы с нами</h2>
                    <h2 className='header_preim_title_2'>Основательный подход к своему делу и грамотное отношение к каждому клиенту — залог успешного сотрудничества!</h2>
                        <div className='header_preim_box'>
                            <p className='header_preim_text_1'>Поиск и подбор топ-менеджеров;</p>
                            <p className='header_preim_text_2'>Поиск и подбор специалистов, персонала среднего и высшего звена;</p>
                            <p className='header_preim_text_3'>Прямой поиск уникальных специалистов в своей области деятельности;</p>
                            <p className='header_preim_text_4'>Консультации клиента по оценке потребности компании в специалистах и составлению точного профиля должности</p>
                            <p className='header_preim_text_5'>Курирование кандидата на испытательном сроке и - консультации заказчика по вопросам адаптации персонала</p>
                            <p className='header_preim_text_6'>Предоставление гарантии на все закрываемые вакансии</p>
                        </div>
                        <div className='header_preim_box_img'>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                            <img className='header_preim_img_1' src='/public/business-analyst_11780004.png'/>
                        </div>
                </div>
                <div className='header_footer'>
                    <p>Подвал</p>

                </div>
            </div>
            </body>
        </html>
        );
}
export default Header
