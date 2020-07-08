import React, { useState } from 'react'
import { v4 as uuid4 } from 'uuid'
import List from './components/List/List'
import Store from './utils/Store'
import StoreApi from './utils/StoreApi'
import InputContainer from './components/Input/InputContainer'

import { makeStyles } from '@material-ui/core/styles'
import { DragDropContext } from 'react-beautiful-dnd'

const useStyle = makeStyles((theme) => ({
    
  root: {
     display: 'flex',
     minHeight: '100vh',
     background: 'linear-gradient(to right, #3c3b3f, #605c3c)',
     overflowY: 'auto'

  }, 

}));
function App() {

  const classes = useStyle();
  const [ data, setData ] = useState(Store);
 
  const addMoreCard = (title, listId) => {
    const newCardId = uuid4();
     const newCard = {
       id: newCardId,
       title,
     };   
     const list = data.lists[listId];
     list.cards = [ ...list.cards, newCard ]
     
     const newState = {
       ...data,
       lists: {
         ...data.lists,
         [listId]: list,
       },
     };

     setData(newState);
    };
   
     const addMoreList = (title) => {
       const newListId = uuid4();
       const newList = {
         id: newListId,
         title,
         cards: [],
       };

       const newState = {
         listIds: [ ...data.listIds, newListId],
         lists: {
           ...data.lists,
           [newListId]: newList
         },
       };
         setData(newState);
     };
  
     const updateListTitle = (title, listId) => {
      const list = data.lists[listId];
      list.title = title;
  
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [listId]: list,
        },
      };
      setData(newState);
    };

    const onDragEnd = result => {
       const {destination, source, draggableId} = result;
       console.log("destination", destination, "source", source, "draggableId", draggableId);
        
       if (!destination) {
         return;
       }

       const sourceList = data.lists[source.droppableId];
       const destinationList = data.lists[destination.droppableId];
       const dragginCard = sourceList.card.filter((card) => card.id === draggableId)[0];

       if(source.droppableId === destination.droppableId) {
            sourceList.cards.splice(source.index, 1);
            destination.cards.splice(destination.index, 0, dragginCard)
            
            const newState = {
              ...data,
              lists: {
                ...data.lists,
                [sourceList.id]: destinationList,
              },
            };

            setData(newState);
        }
      };

  return ( 
    <StoreApi.Provider value={{ addMoreCard, addMoreList, updateListTitle }}>
    <DragDropContext onDragEnd={onDragEnd}>
    <div className={classes.root}>
      { data.listIds.map((listId) => {
        const list = data.lists[listId];
        return <List list={list} key={listId} />
      })}
    <InputContainer type="list" />
    </div>
    </DragDropContext>
    </StoreApi.Provider>
  );
}

export default App;
    