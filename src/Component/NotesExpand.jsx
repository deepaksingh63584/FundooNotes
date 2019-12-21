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
        padding: "2px 4px",
        display: "flex",
        borderRadius: '8px',
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: 'column',
        boxShadow: 'none',

    },
    input: {
        marginLeft: theme.spacing(0),
        flex: 1
    },
    iconButton: {
        padding: 10
    },
    noteInput: {
        display: "flex",
        flexWrap: "wrap",
        width: 570,

    }
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    const [pin, setpin] = React.useState(false);

    return (
        <Paper component="div" className={classes.root}>
            <Paper className={classes.noteInput}>
                <InputBase
                    style={{
                        fontSize: '18px'
                    }}
                    className={classes.titleInput}
                    placeholder="Title"
                    inputProps={{ "aria-label": "title" }}
                />
                <IconButton>
                    {/* <Unpined /> */}
                </IconButton>
            </Paper>
            <Paper className={classes.noteInput}>
                <InputBase
                    className={classes.input}
                    placeholder="Take a notes..."
                    inputProps={{ "aria-label": "search" }}
                />
            </Paper>
            <br />
            <Paper className={classes.noteInput}>
                <IconButton>
                    <AddAlertOutlined />
                </IconButton>
                <IconButton>
                    <PersonAddOutlined />
                </IconButton>
                <IconButton>
                    <ColorLensOutlined />
                </IconButton>
                <IconButton>
                    <ImageOutlined />
                </IconButton>
                <IconButton>
                    <ArchiveOutlined />
                </IconButton>
                <IconButton>
                    <MoreVertOutlined />
                </IconButton>
                <IconButton>
                    <UndoOutlined />
                </IconButton>
                <IconButton>
                    <RedoOutlined />
                </IconButton>
                <Button>
                    Close
                </Button>
            </Paper>
        </Paper>
    );
}