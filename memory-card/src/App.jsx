import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Message from "./components/Message/Message.jsx";
import Card from "./components/Card/Card.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

// images
import Crocodile from "./assets/Crocodile.png";
import Franky from "./assets/Franky.png";
import Kaido from "./assets/Kaido.png";
import Law from "./assets/Law.png";
import Nami from "./assets/Nami.png";
import Buggy from "./assets/Buggy.png";
import Blackbeard from "./assets/Blackbeard.png";
import Arlong from "./assets/Arlong.png";
import Kid from "./assets/Kid.png";
import Caesar from "./assets/Caesar.png";
import Sabo from "./assets/Sabo.png";
import Kiemon from "./assets/Kiemon.png";
import BigMom from "./assets/BigMom.png";
import Ace from "./assets/Ace.png";
import Shanks from "./assets/Shanks.png";
import Jimbei from "./assets/Jimbei.png";
import WhiteBeard from "./assets/WhiteBeard.png";
import Garp from "./assets/garp.png";
import Dadan from "./assets/Dadan.png";
import Smoker from "./assets/Smoker.png";


export default function App() {
  const [cards, setCards] = useState([
    {
        id: 0,
        imageURL: "https://freepngimg.com/thumb/one_piece/90550-monkey-nami-top-character-fictional-nico-luffy.png",
        text: "Robin",
    },
    {
        id: 1,
        imageURL: "https://freepngimg.com/thumb/one_piece/23213-7-one-piece-zoro-photos.png",
        text: "Zoro",
    },
    {
        id: 2,
        imageURL: "https://freepngimg.com/thumb/one_piece/23092-1-one-piece-sanji-clipart.png",
        text: "Sanji",
    },
    {
        id: 4,
        imageURL: "https://freepngimg.com/thumb/one_piece/86562-usopp-warriors-one-joint-costume-piece-pirate.png",
        text: "Ussop",
    },
    {
      id: 6,
      imageURL: "https://freepngimg.com/thumb/one_piece/23231-5-one-piece-chibi-image.png",
      text: "Luffy"
    },
    {
      id: 7,
      imageURL: "https://freepngimg.com/thumb/one_piece/23369-9-one-piece-chibi-transparent-background.png",
      text: "Chopper"
    },
    {
      id: 8,
      imageURL: "https://freepngimg.com/thumb/one_piece/87811-monkey-usopp-character-brook-fictional-costume-luffy.png",
      text: "Brook"
    },
    {
      id: 10,
      imageURL: Franky,
      text: "Franky"
    },
    {
      id: 11,
      imageURL: Kaido,
      text: "Kaido"
    },
    {
      id: 123,
      imageURL: Crocodile,
      text: "Crocodile"
    },
    {
      id: 324,
      imageURL: Law,
      text: "Law"
    },
    {
      id: 2356,
      imageURL: Nami,
      text: "Nami"
    },
    {
      id: 234546,
      imageURL: Buggy,
      text: "Buggy"
    },
    {
      id: 43543,
      imageURL: Arlong,
      text: "Arlong"
    },
    {
      id: 145214,
      imageURL: Blackbeard,
      text: "Blackbeard"
    },
    {
      id: 69,
      imageURL: Kid,
      text: "Kid"
    },
    {
      id: 87,
      imageURL: Sabo,
      text: "Sabo"
    },
    {
      id: 65498,
      imageURL: Caesar,
      text: "Caesar"
    },
    {
      id: 99,
      imageURL: Kiemon,
      text: "Kiemon"
    },
    {
      id: 100,
      imageURL: Ace,
      text: "Ace"
    },
    {
      id: 300,
      imageURL: BigMom,
      text: "Big Mom"
    },
    {
      id: 500,
      imageURL: Shanks,
      text: "Shanks"
    },
    {
      id: 897,
      imageURL: Jimbei,
      text: "Jimbei"
    },
    {
      id: 249,
      imageURL: WhiteBeard,
      text: "White Beard"
    },
    {
      id: 666,
      imageURL: Garp,
      text: "Garp"
    },
    {
      id: 10000,
      imageURL: Dadan,
      text: "Dadan"
    },
    {
      id: 25316,
      imageURL: Smoker,
      text: "Smoker"
    }
  ]);

  const randomiseArray = () => {
      let randomisedArray = [];
      let arrLength = cards.length;
      for (let i = 0; i < arrLength; i++) {
          let randomNumber = getRandomNumber(arrLength);
          while(randomisedArray.includes(cards[randomNumber])) {
            randomNumber = getRandomNumber(arrLength);
          }
            
          randomisedArray.push(cards[randomNumber])
      }    
      
      setCards([...randomisedArray]);
  }

  const getRandomNumber = (max) => {
      let number = Math.floor(Math.random() * max);
      return number
  }


  const CardsElement = cards.map(eachCard => {
    return (
      <Card randomise={randomiseArray} key={eachCard.id} data={eachCard}/>
    )
  })



  return (
    <div>
      <Header />
      <Message />
      <div className="big-card-container">
        <div className="small-card-container">
          {CardsElement}
        </div>
      </div>
      <Footer />
    </div>
  )
}