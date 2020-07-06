import React from 'react'
import Title from './Title'
import Card from '../Card/Card'
import InputContainer from '../Input/InputContainer'

import { Paper, Typography, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
   
    root: {
        width: '300px',
        backgroundColor: '#EBECF0',
        marginLeft: theme.spacing(1)
    },

}));

function List() { 
    const classes = useStyle();
    return (
        <div>
          <Paper className={classes.root}>
            <CssBaseline />
            <Title />
            <Card />
            <Card />
            <Card />
            <Card />
            <InputContainer />
          </Paper>
        </div>
    )
}

export default List
