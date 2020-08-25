import React from 'react';
import Card from './Card'
import './List.css';
import ReactDOM from 'react-dom';
import App from './App';

export default function List(props) {
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
          />
        )}
        <button
          type='button'
          className='List-add-button'
        >
          + Add Random Card
        </button>
      </div>
    </section>
  )
};




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
