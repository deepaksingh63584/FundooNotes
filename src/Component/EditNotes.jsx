import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Unpined from '../Component/image/unpined.svg';
import Pined from '../Component/image/pined.svg';
import Avatar from '@material-ui/core/Avatar';
import { IconButton, MenuItem, MenuList, Popper, ClickAwayListener, Grow } from '@material-ui/core/';
import { AddAlertOutlined, PersonAddOutlined, ColorLensOutlined, MoreVertOutlined, ImageOutlined, ArchiveOutlined } from '@material-ui/icons';

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


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);


    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const renderMenu = (
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ backgroundColor: "#fff", zIndex: 1 }}>
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                    <Paper style={{ backgroundColor: "#fff", zIndex: 1 }}>
                        <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow">
                                <MenuItem onClick={handleClose}>Delete Note</MenuItem>
                                <MenuItem onClick={handleClose}>add Level</MenuItem>
                                <MenuItem onClick={handleClose}>add Drawing</MenuItem>
                                <MenuItem onClick={handleClose}>Make a Copy</MenuItem>
                                <MenuItem onClick={handleClose}>Show Checkboxes</MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Grow>
            )}
        </Popper>
    )
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Slide in alert dialog
      </Button>
            <Dialog open={open} onClose={handleClose}>
                <Paper component="div" className={classes.root}>
                    <DialogTitle>
                        {
                            <Paper className={classes.paper}>
                                <Typography
                                    className={classes.input}
                                    placeholder="Title"
                                    inputProps={{ "aria-label": "title" }}
                                >
                                    {props.Title}
                                </Typography>
                                <IconButton
                                    color="primary"
                                    className={classes.iconButton}
                                    aria-label="directions"
                                    onClick={props.pinStatusChange}
                                >
                                    <Avatar
                                        src={props.pinStatus ? Pined : Unpined}
                                        style={{ height: "20px", width: "15px" }}
                                    />
                                </IconButton>
                            </Paper>
                        }
                    </DialogTitle>
                    <DialogContent>
                        <Paper className={classes.paper}>
                            <Typography
                                className={classes.input}
                                placeholder="Take a notes..."
                                inputProps={{ "aria-label": "Notes" }}
                            >
                                {props.Content}
                            </Typography>
                        </Paper>
                    </DialogContent>
                    <DialogActions>
                        <Paper className={classes.paper}>
                            <IconButton className={classes.iconButton}>
                                <AddAlertOutlined fontSize="small" />
                            </IconButton>
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
                            <IconButton
                                className={classes.iconButton}
                                ref={anchorRef}
                                aria-controls={open ? "menu-list-grow" : undefined}
                                aria-haspopup="true"
                                onClick={handleToggle}
                            >
                                <MoreVertOutlined fontSize="small" />
                                {renderMenu}
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
                    </DialogActions>
                </Paper>
            </Dialog>
        </div>
    );
}