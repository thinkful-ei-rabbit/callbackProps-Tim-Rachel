import React from 'react';
import Card from './Card'
import './List.css';
import ReactDOM from 'react-dom';
import App from './App';

export default function List(props) {
  console.log(props.id);
  return (
    <section className='List'>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {props.cards.map((card) =>
          <Card
            key={card.id}
            title={card.title}
            content={card.content}
            id={card.id}
            omit={props.omit}
          />
        )}
        <button
          type='button'
          className='List-add-button'
          onClick={() => props.handleItem(props.key)}
        >
          
          + Add Random Card
        </button>
      </div>
    </section>
  )
};


