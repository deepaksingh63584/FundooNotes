import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Unpined from '../Component/image/unpined.svg';
import Pined from '../Component/image/pined.svg';
import Avatar from '@material-ui/core/Avatar';
import { AddAlertOutlined, PersonAddOutlined, ColorLensOutlined, MoreVertOutlined, ImageOutlined, ArchiveOutlined, UndoOutlined, RedoOutlined } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: 570,
        boxShadow: '0.1em 0.1em 0.4em 0.1em black',
        borderRadius: '8px',
        [theme.breakpoints.down('xs')]: {
            width: 300,
        }
    },
    paper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 570,
        border: '2px solid white',
        borderRadius: '0px',
        boxShadow: '0.1em 0.1em 0.4em 0em #fff',
        [theme.breakpoints.down('xs')]: {
            width: 300,
        }
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
        color: "#202124",
        [theme.breakpoints.down('xs')]: {
            marginRight: theme.spacing(-1),
        }
    },
    closeButton: {
        marginLeft: theme.spacing(19),
        [theme.breakpoints.down('xs')]: {
            marginLeft: theme.spacing(28),
        }
    },
}));

export default function CustomizedInputBase(props) {
    const classes = useStyles();

    return (
        <Paper component="div" className={classes.root}>

            <Paper className={classes.paper}>
                <InputBase
                    className={classes.input}
                    placeholder="Title"
                    inputProps={{ "aria-label": "title" }}
                />
                <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={props.pinStatusChange} >
                    <Avatar src={props.pinStatus ? Pined : Unpined} style={{ height: "25px", width: "20px" }} ></Avatar>
                </IconButton>
            </Paper>
            <Paper className={classes.paper}>
                <InputBase
                    className={classes.input}
                    placeholder="Take a notes..."
                    inputProps={{ "aria-label": "search" }}
                />
            </Paper>
            <Paper className={classes.paper}>
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
                <Button className={classes.closeButton} onClick={props.onClickAway}>
                    Close
                </Button>
            </Paper>
        </Paper>
    );
}