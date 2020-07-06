import React, { useState } from 'react'
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
        fontSize: '1.2rem',
        fontWeight: 'bold'
    },
     
    input: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        margin: theme.spacing(1),
        "&:focus": {
            background: '#ddd',
        }
    }
}));
function Title() {
    const [ open, setOpen ] = useState(false);
    const classes = useStyle();
    return (
        <div>
           {
               open ? (
                <div>
                <InputBase
                    value="EditList"
                    autoFocus
                    inputProps={{
                        className: classes.input,
                    }}
                    fullWidth
                    onBlur={() => setOpen(!open)}
                 />
                </div>
               ) : (
                <div className={classes.editableTitleContainer}>
                <Typography
                   className={classes.editableTitle}
                   onClick={() => setOpen(!open)}
                > 
                 List 
                </Typography>
                <MoreHorizIcon />
                </div>
               )}
        </div>
    )
}

export default Title
