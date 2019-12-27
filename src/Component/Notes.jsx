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
            notes: ''

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
        // console.log('before click : ' + this.state.clickAway);

        this.setState({
            clickAway: true
        })
        // console.log('After click : ' + this.state.clickAway);
    }

    handleClickAway = () => {
        // console.log('before away : ' + this.state.clickAway);
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
            this.setState({
                notes: snapObj
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
                    {
                        this.state.notes !== null && this.state.notes !== undefined
                            ? Object.getOwnPropertyNames(this.state.notes).map((key, index) => (
                                // console.log('notes :' + JSON.stringify(this.state.notes)),
                                // console.log('Title :' + this.state.notes[key].Title),
                                // console.log('content :' + this.state.notes[key].Content),
                                // console.log('pin :' + this.state.notes[key].PinStatus)
                                <NoteCard
                                    Title={this.state.notes[key].Title}
                                    Content={this.state.notes[key].Content}
                                    PinStatus={this.state.notes[key].Content}
                                />
                            ))

                            : null
                    }
                </div>
            </Container>
        )
    }
}

const mapToStateProps = (state) => {
    return {
        drawerOpen: state.drawerOpen
    }
}

export default connect(mapToStateProps)(Notes);