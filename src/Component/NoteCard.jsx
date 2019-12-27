import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { AddAlertOutlined, PersonAddOutlined, ColorLensOutlined, MoreVertOutlined, ImageOutlined, ArchiveOutlined } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: 240,
        boxShadow: '0.1em 0.1em 0.4em 0.1em black',
        borderRadius: '8px',
        [theme.breakpoints.down('xs')]: {
            width: 240,
        }
    },
    paper: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 240,
        border: '2px solid white',
        borderRadius: '0px',
        boxShadow: '0.1em 0.1em 0.4em 0em #fff',
        [theme.breakpoints.down('xs')]: {
            width: 240,
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
}));

export default function CustomizedInputBase(props) {
    const classes = useStyles();

    return (
        <Paper component="div" className={classes.root}>

            <Paper className={classes.paper}>
                <Typography
                    className={classes.input}
                    placeholder="Title"
                    inputProps={{ "aria-label": "title" }}
                >{props.Title}</Typography>
            </Paper>
            <Paper className={classes.paper}>
                <Typography
                    className={classes.input}
                    placeholder="Take a notes..."
                    inputProps={{ "aria-label": "Notes" }}
                >{props.Content}</Typography>
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
            </Paper>
        </Paper>
    );
}