import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
        width: 240,
        marginBottom: "20px",
        height: 'fit-Content',
        marginLeft: '20px',
        boxShadow: '0em 0em 0em 0em black',
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
        borderRadius: '8px',
        boxShadow: '0em 0em 0em 0em #fff',
        [theme.breakpoints.down('xs')]: {
            width: 240,
        }
    },
    input: {
        whiteSpace: 'preWrap',
        wordBreak: 'break-all',
        letterSpecing: '.00625em',
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 9,
        color: "#202124",

        [theme.breakpoints.down('xs')]: {
            marginRight: theme.spacing(-1),
        }
    },
}));

export default function CustomizedInputBase(props) {
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

    const renderMenu = (
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal
            style={{ backgroundColor: "#fff", zIndex: 1 }}>
            {({ TransitionProps, placement }) => (
                <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                >
                    <Paper >
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
        <Paper component="div" className={classes.root}>
            <Paper className={classes.paper}>
                <Typography
                    className={classes.input}
                    placeholder="Title"
                    inputProps={{ "aria-label": "title" }}
                >{props.Title}</Typography>
                <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={props.pinStatusChange} >
                    <Avatar src={props.pinStatus ? Pined : Unpined} style={{ height: "20px", width: "15px" }} ></Avatar>
                </IconButton>
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
                <IconButton className={classes.iconButton}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}>
                    <MoreVertOutlined fontSize="small" />
                    {renderMenu}
                </IconButton>
            </Paper>
        </Paper>
    );
}