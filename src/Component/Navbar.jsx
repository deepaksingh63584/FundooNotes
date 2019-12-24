import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import SettingsDashboard from "./DashbordSetting"
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import RefreshIcon from "@material-ui/icons/Refresh";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/EmojiObjectsOutlined';
import NotificationsRemindersIcon from '@material-ui/icons/NotificationsOutlined';
import LablesOutlinedIcon from '@material-ui/icons/CreateOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { deepOrange } from '@material-ui/core/colors';
import Avatar from '@material-ui/core/Avatar';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import firebase from '../firebase';
import Paper from "@material-ui/core/Paper";
import { connect } from 'react-redux';
import { toggleDrawerOpen, toggleDrawerClose } from "../Redux/Drawer/Ation";

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1
    },

    menuButton: {
        marginRight: theme.spacing(2)
    },

    title: {
        marginLeft: theme.spacing(1),
        position: 'relative',
        [theme.breakpoints.up("sm")]: {
            display: "block",
            marginRight: theme.spacing(2)
        }
    },

    root: {
        padding: "2px 4px",
        display: "flex",
        marginLeft: theme.spacing(14),
        borderRadius: '8px',
        backgroundColor: "#e6e6e6",
        alignItems: "center",
        width: 650,
        // width: "50%",
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1
    },

    iconButton: {
        padding: 10
    },

    inputRoot: {
        color: "inherit",
    },

    inputInput: {
        padding: theme.spacing(2, 2, 1, 7),
        transition: theme.transitions.create("width"),
        width: "100%",
        marginLeft: '-2.4em',
        [theme.breakpoints.up("md")]: {
            width: 575
        }
    },

    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },

    profile: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
        height: '80px',
        width: '80px'

    },

    list: {
        width: 250,
    },

    fullList: {
        width: 'auto',
    },

    drawer: {
        '& .MuiDrawer-paper': {
            top: '4.1em'
        },

        '& .MuiListItem-button:hover': {
            backgroundColor: '#e4df9b',
            borderTopRightRadius: '8em',
            borderBottomRightRadius: '8em'
        },

        '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }
    },

    card: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        maxWidth: '20em',
        flexDirection: 'column',
        padding: '20px',
        marginTop: '2em'
    },
    buttonAccount: {
        display: 'flex',
        borderTopRightRadius: '8em',
        borderBottomRightRadius: '8em'
    },
    media: {
        height: '14em',
    },

}));

function Navbar(props) {
    const classes = useStyles();
    const [view, setview] = React.useState(false)
    // const [state, setstate] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleDrawerClose = () => {
    //     setstate(false);
    // }
    // const handleDrawerOpen = () => {
    //     setstate(true);
    // }

    const popOpen = Boolean(anchorEl)
    const id = popOpen ? 'simple-popover' : undefined;
    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
        setAnchorEl(null);
    }

    const sideList = (
        <div
            className={classes.list}
            role="presentation">
            <List>
                {[<span style={{ fontSize: '14px' }}><b>Notes</b></span>, <span style={{ fontSize: '14px' }}><b>Reminders</b></span>].map((text, index) => (
                    <ListItem button key={text}
                        onClick={() => {
                            index % 2 === 0
                                ? props.DashboardProps.history.push('/dashboard/notes')
                                : props.DashboardProps.history.push('/dashboard/reminder')
                        }}>
                        <ListItemIcon>{index % 2 === 0 ? <NotesIcon /> : <NotificationsRemindersIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <span style={{ fontSize: '12px', marginLeft: '24px' }}>LABELS</span>
                {[<span style={{ fontSize: '14px' }}><b>Edit labels</b></span>].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <LablesOutlinedIcon /> : <BorderColorOutlinedIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {[<span style={{ fontSize: '14px' }}><b>Archive</b></span>, <span style={{ fontSize: '14px' }}><b>Trash</b></span>].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <ArchiveOutlinedIcon /> : <DeleteOutlineOutlinedIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    const popoverProfile = (
        <div>
            <Popover
                id={id}
                open={popOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Card className={classes.card}>
                    <Avatar className={classes.profile}>{localStorage.getItem('FirstLetter')}</Avatar>
                    <CardContent>
                        <text className={classes.avatarName} style={{ fontSize: '21px' }}><b>{
                            localStorage.getItem('FirstName') + ' ' + localStorage.getItem('LastName')
                        }</b></text>
                        <br />
                        <text className={classes.avatarEmail} style={{ fontSize: '15px', marginTop: 14 }}>
                            {localStorage.getItem('EmailId')}</text>
                    </CardContent>
                    <Button style={{ border: '1px solid lightgray', borderRadius: '40px', color: 'balck' }}>
                        <b>Manage your Fundoo Account</b>
                    </Button>
                    <Button style={{ border: '1px solid lightgray', borderRadius: '6px', color: 'black', marginTop: 28 }}
                        onClick={() => {
                            firebase.auth().signOut().then(() => {
                                localStorage.setItem('isAuth', false)
                                localStorage.clear()
                                props.DashboardProps.history.push('/')
                            })
                                .catch(() => { })
                        }} >
                        <b>Sign Out</b>
                    </Button>
                </Card>
            </Popover>
        </div>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="fixed" color="inherit">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={!props.drawerOpen ? props.toggleDrawerOpen : props.toggleDrawerClose}>
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Fundoo
                    </Typography>
                    <Paper component="form" className={classes.root}>
                        <IconButton className={classes.iconButton} aria-label="menu">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            className={classes.input}
                            placeholder="Search"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput
                            }}
                            inputProps={{ "aria-label": "search" }}
                        />
                    </Paper>
                    <div className={classes.grow} />
                    <div>
                        <IconButton color="inherit">
                            <RefreshIcon />
                        </IconButton>
                        <IconButton color="inherit" onClick={() => { setview(!view) }}>
                            {view ? <DashboardOutlinedIcon /> : <ViewStreamIcon />}
                        </IconButton>
                        <SettingsDashboard marginRight={'7'} />
                        <IconButton
                            onClick={handleClick}>
                            <Avatar className={classes.orange}>{localStorage.getItem('FirstLetter')}</Avatar>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            <Drawer className={classes.drawer}
                open={props.drawerOpen}
                anchor="left"
                variant="persistent">
                {sideList}
            </Drawer>
            {popoverProfile}
        </div>
    );
}

const mapToStateProps = (state) => {
    return {
        drawerOpen: state.drawerOpen
    }
}

const mapToDispatchProps = (dispatch) => {
    return {
        toggleDrawerOpen: () => dispatch(toggleDrawerOpen()),
        toggleDrawerClose: () => dispatch(toggleDrawerClose())
    }
}

export default connect(mapToStateProps, mapToDispatchProps)(Navbar)