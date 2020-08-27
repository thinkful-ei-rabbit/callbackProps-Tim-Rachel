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
   handleItem = (listId) => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
      console.log('handleItem');
    const newCard = { 
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
    let allNewCards = {}
    allNewCards[id]= newCard
    console.log(allNewCards);

    const allNewObj = {...this.state.store.allCards, ...allNewCards}
    console.log(allNewObj);

    const test = this.state.store.list[listId]
    console.log(test);
    

    //const newArr= [...this.state.store.lists] 
    //newArr.push(newCard)
    //console.log(newArr);


    //this.setState({
     // store: {
       // allCards : allNewObj,
        //lists : newArr
     //}
   // })
  }



 
    



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
            handleItem = {this.handleItem}
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
