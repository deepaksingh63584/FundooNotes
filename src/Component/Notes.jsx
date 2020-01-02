import React from 'react';
import '../Css Files/notes.css';
import Container from '@material-ui/core/Container';
import { ClickAwayListener } from '@material-ui/core';
import NotesCollapse from './NotesCollapse';
import NotesExpand from './NotesExpand';
import { connect } from 'react-redux';
import { setNoteInFireBase, fetchNotesFromFireBase } from '../FirebaseServices';
import NoteCard from './NoteCard';

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderClassName: !props.drawerOpen ? 'mainContainer' : 'slideMainContainer',
            clickAway: false,
            noteTitle: '',
            noteItem: '',
            pinStatus: false,
            pinNotes: null,
            unPinNotes: null,

        };
    }

    static getDerivedStateFromProps(props, state) {
        if (!window.matchMedia('(max-width: 1000px)').matches) {
            return {
                ...state,
                sliderClassName: !props.drawerOpen ? 'mainContainer' : 'slideMainContainer'

            }
        }
    }

    handleClickChange = () => {
        this.setState({
            clickAway: true
        })
    }

    handleClickAway = () => {
        this.setState({
            clickAway: false
        })
        console.log('after away : ' + this.state.clickAway);
        if (this.state.noteTitle !== '' || this.state.noteItem !== '') {
            setNoteInFireBase(this.state.noteTitle, this.state.noteItem, this.state.pinStatus)
            this.setState({
                noteTitle: '',
                noteItem: '',
                pinStatus: false
            })
        }
    }

    componentDidMount() {
        fetchNotesFromFireBase((snapObj) => {
            let pinNotes = {}
            let unPinNotes = {}
            if (snapObj !== null && snapObj !== undefined) {
                Object.getOwnPropertyNames(snapObj).map((key, index) => {
                    if (snapObj[key].PinStatus === true) {
                        pinNotes[key] = snapObj[key]
                    }
                    else if (snapObj[key].PinStatus === false) {
                        unPinNotes[key] = snapObj[key]
                    }
                })
            }
            this.setState({
                pinNotes: pinNotes,
                unPinNotes: unPinNotes
            })
        })
    }

    handleNoteChange = () => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <Container style={{ marginTop: '4.1em', backgroundColor: 'deeppink', }}>
                <div className={this.state.sliderClassName}>
                    <ClickAwayListener onClickAway={this.handleClickAway}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.8em' }}>
                            {
                                this.state.clickAway
                                    ? <NotesExpand
                                        onClickAway={this.handleClickAway}
                                        noteTitleValue={this.state.noteTitle}
                                        noteItemValue={this.state.noteItem}
                                        pinStatusChange={() => this.setState({ pinStatus: !this.state.pinStatus })}
                                        pinStatus={this.state.pinStatus}
                                        handleNoteChange={this.handleNoteChange}

                                    />
                                    : <NotesCollapse
                                        HandleClickChange={this.handleClickChange} />
                            }
                        </div>
                    </ClickAwayListener>
                    PINED
                    <div className='noteCard'>
                        {
                            this.state.pinNotes !== null && this.state.pinNotes !== undefined
                                ? Object.getOwnPropertyNames(this.state.pinNotes).map((key, index) => (
                                    <NoteCard
                                        NoteObj={this.state.pinNotes[key]}
                                        Nkey={key}
                                    />
                                ))
                                : null
                        }
                    </div>
                    UNPINED
                    <div className='listView'>
                        {
                            this.state.unPinNotes !== null && this.state.unPinNotes !== undefined
                                ? Object.getOwnPropertyNames(this.state.unPinNotes).map((key, index) => (
                                    <NoteCard
                                        NoteObj={this.state.unPinNotes[key]}
                                        Nkey={key}
                                    />
                                ))
                                : null
                        }
                    </div>
                </div>
            </Container>
        )
    }
}

const mapToStateProps = (state) => {
    return {
        drawerOpen: state.drawer.drawerOpen,
        viewOpen: state.view.viewOpen
    }
}

export default connect(mapToStateProps)(Notes);