import React from 'react'
import Title from './Title'
import Card from '../Card/Card'
import InputContainer from '../Input/InputContainer'

import { Paper, Typography, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
   
    root: {
        minWidth: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1)
    },

}));

function List( {list} ) { 
    const classes = useStyle();
    return (
        <div>
          <Paper className={classes.root}>
            <CssBaseline />
            <Title title={list.title} listId={list.id} />
           {list.cards.map((card) => 
           <Card card={card} key={card.id}  />
           )}
            <InputContainer listId={list.id} type="card" />
          </Paper>
        </div>
    )
}

export default List
