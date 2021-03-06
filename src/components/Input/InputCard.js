import React, { useState, useContext } from 'react'
import  StoreApi  from '../../utils/StoreApi';

import { Paper, Typography, InputBase, Button, IconButton } from '@material-ui/core'
import { makeStyles, fade } from '@material-ui/core/styles'
import ClearIcon from '@material-ui/icons/Clear'


const useStyle = makeStyles((theme) => ({
    
   card: {
       minWidth: '280px',

       margin: theme.spacing(0, 1, 1, 1),
       paddingBottom: theme.spacing(4),
       background: '#faf0af',
   },
   
   input: {
    background: '#faf0af',
    margin: theme.spacing(2),
    fontFamily: 'Merienda One',
   },

   btnConfirm: {

      background: '#f7797d',
       color: '#fff',
       "&:hover": {
           background: fade('#f7797d', 0.75)
       }
   },

   confirm: {
       margin: theme.spacing(0, 1, 1, 1),

   }

}));


function InputCard( {setOpen, listId, type} ) {
    const classes = useStyle();
    
    const [ title, setTitle ] = useState('');
    const { addMoreCard, addMoreList } = useContext(StoreApi);

    const handleTextChange = e => {
       setTitle(e.target.value);
    }
 
    const handleBtnConfirm = () => {
        if(type === 'card') {
            addMoreCard(title, listId);
            setTitle("");
            setOpen(false);
        }
        else {
            addMoreList(title);
            setTitle('');
            setOpen(false);
        }

    };


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
                     value={title}
                     placeholder={
                         type === 'card' 
                     ? "Enter card title .." 
                     : "Enter list title .." 
                     }
                     onBlur={() => setOpen(false)}     
                    />
            </Paper>
            </div>

            <div className={classes.confirm}>
               <Button className={classes.btnConfirm} onClick={handleBtnConfirm} >
                   { type === 'card' ? "Add Card" : "Add List" }
               </Button>
               <IconButton onClick={() => setOpen(false)} >
                   <ClearIcon />
               </IconButton>
            </div>

        </div>
    )
}

export default InputCard
