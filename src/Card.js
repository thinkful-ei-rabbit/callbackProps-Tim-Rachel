import React from 'react';
import './Card.css';
import './Messages.css';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the App component available
import App from './App';

export default function Card(props) {
  return (
    <div className='Card'>
      <button
        type='button'
      >
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

// make React available


// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<Card />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

export default function Messages(props) {
  const badge = props.unread 
    ? <div className="unread_count">{props.unread}</div> 
    : null;
  return (
    <div className="messages">
      {props.name} 
      {badge}
    </div>  
  );
}

//git push test