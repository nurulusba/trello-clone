import React from 'react'
import Title from './Title'
import Card from '../Card/Card'
import InputContainer from '../Input/InputContainer'

import { Paper, Typography, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Droppable } from 'react-beautiful-dnd'

const useStyle = makeStyles((theme) => ({
   
    root: {
        minWidth: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1)
    },

    cardContainer: {
     marginTop: theme.spacing(4)
    }

}));

function List( {list} ) { 
    const classes = useStyle();
    return (
        <div>
          <Paper className={classes.root}>
            <CssBaseline />
            <Title title={list.title} listId={list.id} />
            <Droppable droppableId={list.id}>
             
              {(provided) => (
             <div ref={provided.innerRef} {...provided.droppableProps} className={classes.cardContainer} >

               {list.cards.map((card, index) => (
               <Card card={card} key={card.id} index={index}  />
            ))}
               {provided.placeholder}
             </div>
              )}
            
            </Droppable>
            <InputContainer listId={list.id} type="card" />
          </Paper>
        </div>
    )
}

export default List
