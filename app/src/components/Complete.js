import React from 'react'

import { makeStyles } from "@material-ui/core/styles"

import Button from '@material-ui/core/Button'
import ReplyAllSharpIcon from '@material-ui/icons/ReplyAllSharp'


const Complete = ({ completeTodos, onClickBack }) => {
    const classes = useStyles()
    return (
        <div className={classes.completeArea}>
            <ul className={classes.ul}>
                <li className={classes.title}>Complete</li>
                {completeTodos.map((todo, idx) => {
                    return (
                        <div className={classes.list} key={idx}>
                            <div className={classes.todos}>
                                <li>{todo}</li>
                            </div>
                            <Button
                                variant="contained"
                                className={classes.button}
                                onClick={() => onClickBack(idx)}
                            >
                                <ReplyAllSharpIcon />
                            </Button>
                        </div>
                    )
                })}
            </ul>

        </div>
    )
}

const useStyles = makeStyles(() => ({
    completeArea: {
        background: "#8CDF7D",
    },
    title: {
        listStyle: "none",
        borderBottom: "2px solid yellow",
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
            margin: "10px 10px 10px 15px",
        },
    },
    todos: {
        display: "flex",
        alignItems: "center",
        marginRight: "100px",
        width: "80%",
        fontSize: "2em",
    },
}))

export default Complete
