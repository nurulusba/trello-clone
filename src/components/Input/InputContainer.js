import React, { useState } from 'react'
import InputCard from './InputCard'

import { Paper, Typography, Collapse } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    
    root: {
       width: '300px',
       marginTop: theme.spacing(1),

    },

    addCard: {
       padding: theme.spacing(1, 1, 1, 2 ),
       margin: theme.spacing(0, 1, 1, 1),
       background: '#f7c5a8',
      
       "&:hover": {
           backgroundColor: fade('#000', 0.25)
       }
    },

     typo: {
      fontFamily: 'Permanent Marker',
      fontSize: '20px'
     }

}));

function InputContainer( {listId, type} ) {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);

    return (
        <div className={classes.root} >
             <Collapse in={open} >
              <InputCard setOpen={setOpen} listId={listId} type={type} />
             </Collapse>
            
             <Collapse in={!open}>
               <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)} >
                 <Typography className={classes.typo} > 
                { type === 'card' ? ' + Add a Card' : '+ Add another List' }   
                 </Typography> 
               </Paper>
             </Collapse>
              

        </div>
    )
}

export default InputContainer
