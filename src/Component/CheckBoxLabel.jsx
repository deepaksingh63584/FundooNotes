import React from 'react';
import { Dialog, InputBase, Paper, ListItem, ListItemText, List, Checkbox } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        padding: theme.spacing(2),
        border: 'none',
        boxShadow: 'none',
    },

    paper: {
        border: 'none',
        boxShadow: 'none',
        marginBottom: theme.spacing(0.5),
        marginTop: theme.spacing(0.5),
    },

    paper2: {
        border: 'none',
        boxShadow: 'none',
        marginBottom: theme.spacing(0),
        marginTop: theme.spacing(0),
    }
}))

function EditLabels(props) {
    const classes = useStyle();

    return (
        <div>
            <Dialog open={props.DialogState} onClose={props.CloseDialog} >
                <Paper className={classes.root}>
                    <Paper className={classes.paper}>
                        Edit note
                    </Paper>

                    <Paper className={classes.paper}>
                        <List
                            dense={true}
                            disablePadding={true}
                        >
                            <ListItem dense={true} disableGutters={true}>
                                <ListItemIcon>
                                    <IconButton
                                        className={classes.iconButton}
                                        onClick={() => setBtnState(!btnState)}
                                    >
                                        {btnState ? <ClearIcon fontSize="small" /> : <AddIcon fontSize="small" />}
                                    </IconButton>
                                </ListItemIcon>
                                <ListItemText>
                                    <InputBase
                                        placeholder="Enter label Name"
                                        className={classes.inputBase}
                                        style={{ borderBottom: btnState ? '1px solid lightgray' : 'none' }}
                                    />
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Paper>

                    {
                        labels !== null &&
                        Object.getOwnPropertyNames(labels).map((key, index) => (
                            <Labelnote
                                label={labels[key].Label}
                                labelvalue={key}
                            />
                        ))
                    }
                </Paper>
            </Dialog>
        </div>
    );
};

function Labelnote(props) {

    const classes = useStyle();

    return (
        <Paper className={classes.paper2}>
            <List
                dense={true}
            >
                <ListItem dense={true} disableGutters={true}>
                    <ListItemText>
                        <InputBase
                            placeholder="Enter Label Name"
                            className={classes.inputBase}
                        />
                    </ListItemText>
                </ListItem>
            </List>
        </Paper>
    );
}

export default EditLabels;


