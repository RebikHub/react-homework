import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const newsHead = [{
  name: 'Сейчас в СМИ',
  url: '#',
  value: [
    {
      img: '#',
      text: 'Путин упростил получение автомобильных номеров',
      url: ''
    },
    {
      img: '#',
      text: 'В команде Зеленского раскрыли план реформ на Украине',
      url: ''
    },
    {
      img: '#',
      text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
      url: ''
    },
    {
      img: '#',
      text: 'Суд закрыл дело Демпартии США против России',
      url: ''
    },
    {
      img: '#',
      text: 'На Украине призвали создать ракеты для удара по Москве',
      url: ''
    }
  ]
},
{
  name: 'в Германии',
  url: '#',
  value: []
},
{
  name: 'Рекомендуем',
  url: '#',
  value: []
}]
const newsDate = '31 июля, среда 02 32'
const quotes = [{
  currency: 'USD MOEX',
  value: '63,52',
  difference: '+0,09'
},
{
  currency: 'EUR MOEX',
  value: '70,86',
  difference: '+0,14'
},
{
  currency: 'НЕФТЬ',
  value: '64,90',
  difference: '+1,63%'
}
]
const sideItem = {
img: '#',
name: 'Работа над ошибками',
url: '#',
text: 'Смотрите на Яндекс и запоминайте'
}

const searchMenu = [
  {
    url: '#',
    text: 'Видео'
  },
  {
    url: '#',
    text: 'Картинки'
  },
  {
    url: '#',
    text: 'Новости'
  },
  {
    url: '#',
    text: 'Карты'
  },
  {
    url: '#',
    text: 'Маркет'
  },
  {
    url: '#',
    text: 'Переводчик'
  },
  {
    url: '#',
    text: 'Эфир'
  },
  {
    url: '#',
    text: 'ещё'
  }
]
const weather = {
  url: '#',
  name: 'Погода',
  img: '#',
  current: '+17',
  today: 'Утром +17, днем +20'
}
const map = {
  url: '#',
  name: 'Карта Германии',
  text: 'Расписания'
}
const broadcast = {
  url: '#',
  name: 'Эфир',
  cast: [
    {
      img: '#',
      tvShow: 'Управление как искусство',
      tvChannel: 'Успех'
    },
    {
      img: '#',
      tvShow: 'Ночь. Мир в это время',
      tvChannel: 'earthTV'
    },
    {
      img: '#',
      tvShow: 'Андрей Возн...',
      tvChannel: 'Совершенно секретно'
    },
  ]
}
const visited = {
  url: '#',
  name: 'Посещаемое',
  category: [
    {
      url: '#',
      name: 'Недвижимость',
      text: '-о сталинках'
    },
    {
      url: '#',
      name: 'Маркет',
      text: '-люстры и светильники'
    },
    {
      url: '#',
      name: 'Авто.ру',
      text: '-привод 4х4 до 500 000'
    },
  ]
}
const tvProgram = {
  url: '#',
  name: 'Телепрограмма',
  link: {
    url: '#',
    name: 'Эфир'
  },
  program: [
    {
      time: '02:00',
      name: 'ТНТ.Best',
      channel: 'THT International'
    },
    {
      time: '02:15',
      name: 'Джинглики',
      channel: 'Карусель INT'
    },
    {
      time: '02:25',
      name: 'Наедине со всеми',
      channel: 'Первый'
    },
  ]
}

ReactDOM.render(
  <App
  newsHead={newsHead}
  newsDate={newsDate}
  quotes={quotes}
  sideItem={sideItem}
  searchMenu={searchMenu}
  weather={weather}
  map={map}
  broadcast={broadcast}
  visited={visited}
  tvProgram={tvProgram} />,
  document.getElementById('root')
);
