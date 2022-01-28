import React from 'react'
import { makeStyles } from "@material-ui/core/styles";


const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.header}>
            <p>My Todo List</p>
        </div>
    )
}

const useStyles = makeStyles(() => ({
    header: {
        background: "#FFFFD8",
        padding: "20px",

        "& p": {
            margin: 0,
            letterSpacing: 5,
            fontSize: "2em",
            fontWeight: "bold",
        },
    },
}))


export default Header
