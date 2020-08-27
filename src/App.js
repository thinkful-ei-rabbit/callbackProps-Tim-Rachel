import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './STORE'

class App extends Component {
  state = {
    store: STORE
  }




  //Object.entries( allCards ).reduce( );
  //obj ---> whole object? object id?
  //how does it know that entries should be cardIDs
  //that is what we want to reduce and find matching cardId
  omit = (keyToOmit) => {
    


    const newAllCards = Object.entries(this.state.store.allCards).reduce(
      (newObj, [key, value]) =>
        key === keyToOmit ? newObj : { ...newObj, [key]: value },
      {}
    );

    const newLists = this.state.store.lists.map(list => {
      return {...list, cardIds: list.cardIds.filter(id => id !== keyToOmit)};
      
    })
    
    //(Object.entries(this.state.store.allCards)).filter(position => position[0] !== keyToOmit);
    console.log(newLists);
    this.setState({
      store: {
        allCards : newAllCards,
        lists : newLists
      }
    })


  }

 



  // const filteredArr = this.state.store.allCards.filter(itm => itm !== item)





  render() {

    console.log(this.state);
    const { store } = this.state;
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              omit={this.omit}
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
