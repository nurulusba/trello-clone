import React from 'react'

import { Paper, Typography, InputBase, Button, IconButton } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'
import ClearIcon from '@material-ui/icons/Clear'


const useStyle = makeStyles((theme) => ({
    
   card: {
       
       margin: theme.spacing(0, 1, 1, 1),
       paddingBottom: theme.spacing(4)
   },
   
   input: {
       margin: theme.spacing(2)
   },

   btnConfirm: {
       background: '#3cca74',
       color: '#fff',
       "&:hover": {
           background: fade('#3cca74', 0.75)
       }
   },

   confirm: {
       margin: theme.spacing(0, 1, 1, 1),

   }

}));


function InputCard( {setOpen} ) {
    const classes = useStyle();

    return (
        <div>

            <div>
            <Paper className={classes.card}>
                <InputBase 
                     multiline
                     onBlur={() => setOpen(false)}
                     fullWidth
                     inputProps= {{
                        className: classes.input
                     }} 
                     placeholder="Enter a title of this card .."
                />
            </Paper>
            </div>

            <div className={classes.confirm}>
               <Button className={classes.btnConfirm} onClick={() => setOpen(false)} > Add Card </Button>
               <IconButton onClick={() => setOpen(false)} >
                   <ClearIcon />
               </IconButton>
            </div>

        </div>
    )
}

export default InputCard
