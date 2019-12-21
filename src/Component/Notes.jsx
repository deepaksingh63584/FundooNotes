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
        backgroundColor: "#fff",
        alignItems: "center",
        flexDirection: 'column',
        marginTop: 100,
        marginLeft: 425,
    },
    titleInput: {
        dispaly: 'flex',
        padding: "10px 15px",

    },
    titleInput: {

    }
}));

export default function CustomizedInputBase() {
    const classes = useStyles();
    const [pin, setpin] = React.useState(false);

    return (
        <Paper component="div" className={classes.root}>
            <Paper className="textInput">
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
            <Paper>
                <InputBase
                    className='textInput'
                    placeholder="Take a notes..."
                    inputProps={{ "aria-label": "search" }}
                />
            </Paper>
            <Paper className='textInput'>
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