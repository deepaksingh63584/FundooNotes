import React from 'react';
import '../Css Files/notes.css';
import Container from '@material-ui/core/Container';
import { ClickAwayListener } from '@material-ui/core';
import NotesCollapse from './NotesCollapse';
import NotesExpand from './NotesExpand';
import { connect } from 'react-redux';

class Notes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderClassName: !props.drawerOpen ? 'mainContainer' : 'slideMainContainer',
            clickAway: false,
            noteTitle: '',
            noteItem: '',
            pinStatus: false,

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
    }

    render() {
        return (
            <Container style={{ marginTop: '4.1em', backgroundColor: 'red' }}>
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
                                    />
                                    : <NotesCollapse
                                        HandleClickChange={this.handleClickChange} />
                            }
                        </div>
                    </ClickAwayListener>
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