import React, { useState } from 'react'
import InputCard from './InputCard'

import { Paper, Typography, Collapse } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'

const useStyle = makeStyles((theme) => ({
    
    root: {
       margin: theme.spacing(2),
    },

    addCard: {
       padding: theme.spacing(1, 1, 1, 2 ),
       margin: theme.spacing(0, 1, 1, 1),
       background: '#EBECF0',
       "&:hover": {
           backgroundColor: fade('#000', 0.25)
       }
    },

}));

function InputContainer() {
    const classes = useStyle();
    const [ open, setOpen ] = useState(false);

    return (
        <div className={classes.root} >
             <Collapse in={open} >
              <InputCard setOpen={setOpen} />
             </Collapse>
            
             <Collapse in={!open}>
               <Paper className={classes.addCard} elevation={0} onClick={() => setOpen(!open)} >
                 <Typography  > + Add The Card </Typography>
               </Paper>
             </Collapse>
              

        </div>
    )
}

export default InputContainer
