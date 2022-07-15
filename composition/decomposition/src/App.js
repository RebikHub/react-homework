/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Advertising from "./components/Advertising";
import CardBroadcast from "./components/CardBroadcast";
import CardMap from "./components/CardMap";
import CardTvProgram from "./components/CardTvProgram";
import CardVisited from "./components/CardVisited";
import CardWeather from "./components/CardWeather";
import NewsBody from './components/NewsBody'
import NewsHeader from './components/NewsHeader'
import NewsQuotes from './components/NewsQuotes'
import SearchForm from "./components/SearchForm";
import SearchMenu from "./components/SearchMenu";
import SideItem from './components/SideItem'

export default function App(props) {

  return (
    <>
      <a href="#" className="search-link">Яндекс</a>
      <div className="App">
        <div className="news-side">
          <div className="news">
            <NewsHeader news={props.newsHead} date={props.newsDate}/>
            <NewsBody news={props.newsHead[0].value}/>
            <NewsQuotes quotes={props.quotes}/>
          </div>
          <SideItem item={props.sideItem}/>
        </div>
        <div className="list-search">
          <SearchMenu searchMenu={props.searchMenu} />
          <div className="search">
            <SearchForm/>
            <p className="search-comment">Найдется все. Например, фаза луны сегодня</p>
          </div>
        </div>
        <Advertising/>
        <div className="section-cards">
          <CardWeather weather={props.weather}/>
          <CardMap map={props.map}/>
          <CardBroadcast broadcast={props.broadcast}/>
          <CardVisited visited={props.visited}/>
          <CardTvProgram tvProgram={props.tvProgram}/>
        </div>
      </div>
    </>
  );
}
