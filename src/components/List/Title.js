import React, { useState, useContext } from 'react'
import StoreApi from '../../utils/StoreApi'

import { Paper, Typography, InputBase } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'


const useStyle = makeStyles((theme) => ({
  
    editableTitleContainer: {
        margin: theme.spacing(1),
        display: 'flex'
    },

    editableTitle: {
        flexGrow: 1,
        fontSize: '1.4rem',
        fontWeight: 'bold',
        fontFamily: 'Permanent Marker',
        color: '#204051',
        padding: theme.spacing(2),
    },
     
    input: {
        fontSize: '1.2rem',
        color: '#204051',
        fontFamily: 'Permanent Marker',
        fontWeight: 'bold',
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        "&:focus": {
            background: '#faf0af',
        }
    }
}));



function Title( {title, listId} ) {
    const [open, setOpen] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const { updateListTitle } = useContext(StoreApi);
    const classes = useStyle();
    const handleOnChange = (e) => {
      setNewTitle(e.target.value);
    };
  
    const handleOnBlur = () => {
      updateListTitle(newTitle, listId);
      setOpen(false);
    };
    return (
      <div>
        {open ? (
          <div>
            <InputBase
              onChange={handleOnChange}
              autoFocus
              value={newTitle}
              inputProps={{
                className: classes.input,
              }}
              fullWidth
              onBlur={handleOnBlur}
            />
          </div>
        ) : (
          <div className={classes.editableTitleContainer}>
            <Typography
              onClick={() => setOpen(!open)}
              className={classes.editableTitle}
            >
              {title}
            </Typography>
            <MoreHorizIcon />
          </div>
        )}
      </div>
    );
  }
  



export default Title
