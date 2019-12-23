import React from "react";
import '../Css Files/notes.css';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Unpined from '../Component/image/unpined.svg';
import Pined from '../Component/image/pined.svg';
import Button from '@material-ui/core/Button';
import { AddAlertOutlined, PersonAddOutlined, ColorLensOutlined, MoreVertOutlined, ImageOutlined, ArchiveOutlined, UndoOutlined, RedoOutlined } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        borderRadius: '8px',
        backgroundColor: "deeppink",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        marginTop: "7em",
        padding: theme.spacing(2)
    },

    textInput: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        width: 570,
        paddingTop: "8px",
        border: "1ps solid white",
        boxShadow: "0.1em 0.1em 0.4em 0em #fff",
        lineHeight: "0.8rem",
        borderRadius: 'none',
        // border: 'none',
        boxShadow: 'none'
    },

    titleText: {
        marginLeft: theme.spacing(1),
        dispaly: 'flex',
        width: "100%",
        borderRadius: 'none',
        border: 'none',
        boxShadow: 'none'
    },

    iconButton: {
        width: "32px",
        hight: "32px",
        margin: "5px",
        color: "#202124"

    },

    closeButton: {
        display: "flex",
        marginLeft: "10em",
        width: "32px",
        hight: "32px",
        margin: "5px",
        color: "#202124"

    },
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    const [pin, setpin] = React.useState(false);

    return (
        <Paper component="div" className={classes.root}>
            <Paper className={classes.textInput}>
                <InputBase
                    style={{ fontSize: '18px' }}
                    className={classes.titleText}
                    placeholder="Title"
                    inputProps={{ "aria-label": "title" }}
                />
                <IconButton>
                    {/* <Unpined /> */}
                </IconButton>
            </Paper>
            <Paper className={classes.textInput}>
                <InputBase
                    className={classes.takeNote}
                    placeholder="Take a notes..."
                    inputProps={{ "aria-label": "search" }}
                />
            </Paper>
            <Paper className={classes.textInput}>
                <IconButton className={classes.iconButton}>
                    <AddAlertOutlined fontSize="small" />
                </IconButton >
                <IconButton className={classes.iconButton}>
                    <PersonAddOutlined fontSize="small" />
                </IconButton>
                <IconButton className={classes.iconButton}>
                    <ColorLensOutlined fontSize="small" />
                </IconButton>
                <IconButton className={classes.iconButton}>
                    <ImageOutlined fontSize="small" />
                </IconButton>
                <IconButton className={classes.iconButton}>
                    <ArchiveOutlined fontSize="small" />
                </IconButton>
                <IconButton className={classes.iconButton}>
                    <MoreVertOutlined fontSize="small" />
                </IconButton>
                <IconButton className={classes.iconButton}>
                    <UndoOutlined fontSize="small" />
                </IconButton>
                <IconButton className={classes.iconButton}>
                    <RedoOutlined fontSize="small" />
                </IconButton >
                <Button className={classes.closeButton}>
                    Close
                </Button>
            </Paper>
        </Paper>
    );
}