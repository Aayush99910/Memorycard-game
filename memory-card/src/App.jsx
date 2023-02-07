import React from "react";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Message from "./components/Message/Message.jsx";
import Card from "./components/Card/Card.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { nanoid } from 'nanoid'
import "./App.css";

// Images
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


// App function
export default function App() {
  const [cards, setCards] = useState([
    {
        id: nanoid(),
        imageURL: "https://freepngimg.com/thumb/one_piece/90550-monkey-nami-top-character-fictional-nico-luffy.png",
        text: "Robin",
    },
    {
        id: nanoid(),
        imageURL: "https://freepngimg.com/thumb/one_piece/23213-7-one-piece-zoro-photos.png",
        text: "Zoro",
    },
    {
        id: nanoid(),
        imageURL: "https://freepngimg.com/thumb/one_piece/23092-1-one-piece-sanji-clipart.png",
        text: "Sanji",
    },
    {
        id: nanoid(),
        imageURL: "https://freepngimg.com/thumb/one_piece/86562-usopp-warriors-one-joint-costume-piece-pirate.png",
        text: "Ussop",
    },
    {
      id: nanoid(),
      imageURL: "https://freepngimg.com/thumb/one_piece/23231-5-one-piece-chibi-image.png",
      text: "Luffy"
    },
    {
      id: nanoid(),
      imageURL: "https://freepngimg.com/thumb/one_piece/23369-9-one-piece-chibi-transparent-background.png",
      text: "Chopper"
    },
    {
      id: nanoid(),
      imageURL: "https://freepngimg.com/thumb/one_piece/87811-monkey-usopp-character-brook-fictional-costume-luffy.png",
      text: "Brook"
    },
    {
      id: nanoid(),
      imageURL: Franky,
      text: "Franky"
    },
    {
      id: nanoid(),
      imageURL: Kaido,
      text: "Kaido"
    },
    {
      id: nanoid(),
      imageURL: Crocodile,
      text: "Crocodile"
    },
    {
      id: nanoid(),
      imageURL: Law,
      text: "Law"
    },
    {
      id: nanoid(),
      imageURL: Nami,
      text: "Nami"
    },
    {
      id: nanoid(),
      imageURL: Buggy,
      text: "Buggy"
    },
    {
      id: nanoid(),
      imageURL: Arlong,
      text: "Arlong"
    },
    {
      id: nanoid(),
      imageURL: Blackbeard,
      text: "Blackbeard"
    },
    {
      id: nanoid(),
      imageURL: Kid,
      text: "Kid"
    },
    {
      id: nanoid(),
      imageURL: Sabo,
      text: "Sabo"
    },
    {
      id: nanoid(),
      imageURL: Caesar,
      text: "Caesar"
    },
    {
      id: nanoid(),
      imageURL: Kiemon,
      text: "Kiemon"
    },
    {
      id: nanoid(),
      imageURL: Ace,
      text: "Ace"
    },
    {
      id: nanoid(),
      imageURL: BigMom,
      text: "Big Mom"
    },
    {
      id: nanoid(),
      imageURL: Shanks,
      text: "Shanks"
    },
    {
      id: nanoid(),
      imageURL: Jimbei,
      text: "Jimbei"
    },
    {
      id: nanoid(),
      imageURL: WhiteBeard,
      text: "White Beard"
    },
    {
      id: nanoid(),
      imageURL: Garp,
      text: "Garp"
    },
    {
      id: nanoid(),
      imageURL: Dadan,
      text: "Dadan"
    },
    {
      id: nanoid(),
      imageURL: Smoker,
      text: "Smoker"
    }
  ]);

  const [clickedCardsArray, setClickedCardsArray] = useState([]); // array for the clicked cards
  const [gameOver, setGameOver] = useState(false); // using state to know if the game is over or not
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState(`Don't click the same picture twice.`);

  // RandomiseArray. It is triggered whenever a card is clicked and all this function 
  // does is that it randomises the array. At last it sets the new array as the cards.
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

  // returns a randomNumber from 0 to max. (max is a variable)
  const getRandomNumber = (max) => {
    let number = Math.floor(Math.random() * max);
    return number;
  }

  // This function puts the clicked cards into a an array called clickedCardsArray 
  // and at the end it randomises the array.
  const putClickedCardsIntoNewArray = (e) => {
    const id = e.target.parentElement.parentElement.id;
    clickedCardsArray.map(eachClickedCard => {
      if (eachClickedCard.id == id) {
        setClickedCardsArray([]);
        setGameOver(true);
      }
    })


    if (!gameOver) {
      setScore(prevScore => {
        return prevScore + 1;
      })
      let newCardsArray = clickedCardsArray;

      cards.map(eachCard => {
        if (eachCard.id == id) {
          newCardsArray.push(eachCard);
        }
      })

      setClickedCardsArray([...newCardsArray]);
      randomiseArray();
    }
  }

  const changeGameOver = () => {
    setGameOver(false);
    setScore(0);
  }

  // cardElement
  const CardsElement = cards.map(eachCard => {
    return (
      <Card 
        putClickedCards={putClickedCardsIntoNewArray} 
        key={eachCard.id} 
        id={eachCard.id} 
        data={eachCard}
        />
    )
  })

  
  // returning the JSX
  return (
    <div>
      <Header score={score} />
      <Message message={message} gameOver={gameOver} changeGameOver={changeGameOver}/>
      <div className="big-card-container">
        <div className="small-card-container">
          {CardsElement}
        </div>
      </div>
      <Footer />
    </div>
  )
}