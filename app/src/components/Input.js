import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

import TextField from '@material-ui/core/TextField'

import Button from '@material-ui/core/Button'

const Input = ({ todoText, onChange, onClick, disabled }) => {
    const classes = useStyles()
    return (
        <div className={classes.input}>
            <div className={classes.inputArea}>
                <TextField
                    id="outlined-basic"
                    type="text"
                    variant="outlined"
                    label="Create new todos"
                    value={todoText}
                    disabled={disabled}
                    onChange={onChange}
                />
            </div>
            <div className={classes.addButton}>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={onClick}
                    disabled={disabled}
                >
                    <p>Add Todos</p>
                </Button>
            </div>
        </div >
    )
}

const useStyles = makeStyles((theme) => ({
    input: {
        display: "flex",
        justifyContent: "center",
        background: "#85C5F3",
        padding: "20px",
    },
    inputArea: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
    addButton: {
        margin: "8px 10px",
    },
}))

export default Input
