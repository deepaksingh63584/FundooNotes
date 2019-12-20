import React from "react";
import '../Css Files/notes.css';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import BrushOutlinedIcon from "@material-ui/icons/BrushOutlined";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";


const useStyles = makeStyles(theme => ({
    root: {
        padding: "2px 4px",
        display: "flex",
        marginLeft: theme.spacing(14),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "#f1f3f4",
        alignItems: "center",
        width: 600,
        marginTop: 100,
        marginLeft: 425,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },
    iconButton: {
        padding: 10
    }
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <div className="textInput">
                <InputBase
                    style={{
                        fontSize: '20px'
                    }}
                    className={classes.titleInput}
                    placeholder="Title"
                    inputProps={{ "aria-label": "Title" }}
                />
                <InputBase
                    className={classes.input}
                    placeholder="Take a notes..."
                    inputProps={{ "aria-label": "search" }}
                />
            </div>
        </Paper>
    );
}