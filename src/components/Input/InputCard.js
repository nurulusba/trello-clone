import React, { useState, useContext } from 'react'
import  StoreApi  from '../../utils/StoreApi';

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


function InputCard( {setOpen, listId} ) {
    const classes = useStyle();
    
    const [ cardTitle, setCardTitle ] = useState('');
    const { addMoreCard } = useContext(StoreApi);

    const handleTextChange = e => {
       setCardTitle(e.target.value);
    }
 
    const handleBtnConfirm = () => {
        addMoreCard(cardTitle, listId);
        setCardTitle("");
        setOpen(false);

    };

    const handleBlur = () => {
        setOpen(false);
        setCardTitle('');
    }

    return (
        <div>

            <div>
            <Paper className={classes.card}>
                <InputBase 
                    onChange={handleTextChange}
                     multiline
                     fullWidth
                     inputProps= {{
                        className: classes.input
                     }} 
                     value={cardTitle}
                     placeholder="Enter a title of this card .."
                     onBlur={handleBlur}     
                    />
            </Paper>
            </div>

            <div className={classes.confirm}>
               <Button className={classes.btnConfirm} onClick={handleBtnConfirm} > Add Card </Button>
               <IconButton onClick={() => setOpen(false)} >
                   <ClearIcon />
               </IconButton>
            </div>

        </div>
    )
}

export default InputCard
