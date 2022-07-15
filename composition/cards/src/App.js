import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from "./components/Card";
import CardImage from "./components/CardImage";
import CardBody from "./components/CardBody";
import CardButton from "./components/CardButton";

function App() {
  const titles = {
    a: 'Card title',
    b: 'Special title treatment'
  }
  const texts = {
    a: 'Some quick example text to build on the card title and make up the bulk of the card"s content.',
    b: 'With supporting text below as a natural lead-in to additional content.'
  }
  return (
    <>
      <Card image={<CardImage href={'#'} name={'image'}/>}>
        <CardBody title={titles.a} text={texts.a}/>
        <CardButton/>
      </Card>
      <Card>
        <CardBody title={titles.b} text={texts.b}/>
        <CardButton/>
      </Card>
    </>
  );
}

export default App;
