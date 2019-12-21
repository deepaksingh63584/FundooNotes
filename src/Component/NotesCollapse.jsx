import React from "react";
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
            <InputBase
                className={classes.input}
                placeholder="Take a notes..."
                inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="New List"
            >
                <AssignmentTurnedInOutlinedIcon />
            </IconButton>
            <IconButton className={classes.iconButton} aria-label="brush">
                <BrushOutlinedIcon />
            </IconButton>
            <IconButton>
                <ImageOutlinedIcon />
            </IconButton>
        </Paper>
    );
}