import React, { Component } from 'react';
import Container from '@material-ui/core/Container';

class Reminder extends Component {
    render() {
        return (
            <Container style={{ marginTop: '4.1em', backgroundColor: 'deeppink', }}>
                <div>
                    <h1>Archive</h1>
                    archive code is here !
                </div>
            </Container>
        );
    }
}

export default Reminder;