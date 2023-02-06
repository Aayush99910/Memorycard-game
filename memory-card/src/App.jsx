import React from "react";
import Header from "./components/Header/Header.jsx";
import Message from "./components/Message/Message.jsx";
import Card from "./components/Card/Card.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

export default function App() {
  const cards = [
    {
        id: 0,
        imageURL: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "Bear",
    },
    {
        id: 1,
        imageURL: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        text: "Car",
    },
    {
        id: 2,
        imageURL: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        text: "Paris",
    },
    {
        id: 3,
        imageURL: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=983&q=80",
        text: "Cars",
    },
    {
        id: 4,
        imageURL: "https://images.unsplash.com/photo-1559912147-f62c767ec0e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
        text: "Cliff",
    },
    {
        id: 5,
        imageURL: "https://images.unsplash.com/photo-1675236272377-aeadff0db186?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        text: "Dog",
    }
  ];

  const CardsElement = cards.map(eachCard => {
    return (
      <Card key={eachCard.id} data={eachCard}/>
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