import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp'
import DeleteIcon from '@material-ui/icons/Delete'
import Button from '@material-ui/core/Button'

const Notyet = ({ incompleteTodos, onClickComplete, onClickDelete }) => {
    const classes = useStyles()
    return (
        <div className={classes.notyetArea}>
            <ul className={classes.ul}>
                <li className={classes.title}>Notyet</li>
                {incompleteTodos.map((todo, idx) => {
                    return (
                        <div className={classes.list} key={idx}>
                            <div className={classes.todos}>
                                <li>{todo}</li>
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={() => onClickComplete(idx)}
                            >
                                <CheckCircleSharpIcon />
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                                onClick={() => onClickDelete(idx)}
                            >
                                <DeleteIcon />
                            </Button>
                        </div>
                    )
                })}
            </ul>
        </div >
    )
}

const useStyles = makeStyles(() => ({
    notyetArea: {
        background: "#B582CE",
    },
    title: {
        listStyle: "none",
        borderBottom: "2px solid skyblue",
        margin: "0 40px",
        paddingBottom: "10px",
        fontSize: "2.2em",
        textAlign: "left",
    },
    ul: {
        margin: 0,
        padding: "20px 0",
    },
    list: {
        display: "flex",
        justifyContent: "center",
        listStyle: "none",
        borderBottom: "1px solid #eee",
        margin: "0 40px",
        "& Button": {
            margin: "10px 10px 10px 0",
        },
    },
    todos: {
        display: "flex",
        alignItems: "center",
        marginRight: "100px",
        width: "75%",
        fontSize: "2em",
    },
}))

export default Notyet
