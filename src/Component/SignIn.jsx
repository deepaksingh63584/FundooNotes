import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import '../Css Files/logInPage.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import firebase from '../firebase';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailid: "",
            password: "",
            showpassword: "false",
            errors: {},
        };
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    toDashboard = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.emailid, this.state.password).then((success) => {
            firebase.database().ref('users').orderByChild('uid').equalTo(success.user.uid).once('value', (snapshot) => {
                let snapObj = snapshot.val();
                let key = Object.getOwnPropertyNames(snapshot.val());

                localStorage.setItem('FirstLetter', (snapObj[key].firstname).charAt(0))
                console.log(snapObj[key].firstname);
                localStorage.setItem('FirstName', snapObj[key].firstname)
                localStorage.setItem('LastName', snapObj[key].lastname)
                localStorage.setItem('EmailId', snapObj[key].emailid)

            })
            localStorage.setItem("isAuth", true)
            this.props.history.push('/dashboard');
        })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('Error code : ' + errorCode);
                console.log('Error Msg : ' + errorMessage);
            });
    }

    handleChangeShowPassword = () => {
        this.setState({
            showpassword: !this.state.showpassword
        })
    }

    handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="fullView">
                <div className="initialView">
                    <Container maxWidth="sm">
                        <div className="containerView">
                            <div className="tilteView">
                                <form style={{ color: '#4285F4' }}>F</form>
                                <form style={{ color: '#DB4437' }}>u</form>
                                <form style={{ color: '#F4B400' }}>n</form>
                                <form style={{ color: '#4285F4' }}>d</form>
                                <form style={{ color: '#0F9D58' }}>o</form>
                                <form style={{ color: '#DB4437' }}>o</form>
                            </div>
                            <div className="subtilteView">
                                <text>Sign in</text>
                            </div>
                            <div className="account">
                                <text>Use your Fundoo Account</text>
                            </div>
                            <div className="emailId">
                                <TextField id="outlined-basic"
                                    margin="dense"
                                    label="Enter email"
                                    variant="outlined"
                                    value={this.state.emailid}
                                    onChange={this.handleChange}
                                    name="emailid"
                                    error={this.state.errors.emailid}
                                    helperText={this.state.errors.emailid}
                                    fullWidth={true}
                                />
                            </div>
                            <div className="passWord">
                                <FormControl variant="outlined"
                                    fullWidth error={this.state.errors.password}>
                                    <InputLabel style={{ lineHeight: 0 }}>Password</InputLabel>
                                    <OutlinedInput id="outlined-basic"
                                        fullWidth={true}
                                        variant="outlined"
                                        margin="dense"
                                        type={!this.state.showpassword ? 'text' : 'password'}
                                        value={this.state.password}
                                        name="password"
                                        onChange={this.handleChange}
                                        error={this.state.errors.password}
                                        helperText={this.state.errors.password}
                                        endAdornment={<InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={this.handleChangeShowPassword}
                                                onMouseDown={this.handleMouseDownPassword}
                                                edge="end">
                                                {this.state.showpassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton></InputAdornment>} />
                                    <FormHelperText error>{this.state.errors.password}</FormHelperText>
                                </FormControl>
                            </div>
                            <div className="forgatePassword">
                                <Button
                                    color="primary"
                                    onClick={() => {
                                        this.props.history.push('/forgatepassword')
                                    }}>
                                    forgot password?
                                </Button>
                            </div>
                            <div className="buttonlink">
                                <div>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        onClick={() => {
                                            this.props.history.push('/signup')
                                        }}>
                                        create account
                                    </Button>
                                </div>
                                <div classname="nextReference">
                                    <Button
                                        margin="dense"
                                        variant="contained"
                                        color="primary"
                                        type="submit"
                                        onClick={this.submitForm}>
                                        Next
                                    </Button>
                                </div> </div><p></p>
                        </div>
                    </Container>
                </div>
                );
            </div>
        );
    }

    validation = () => {

        let errors = {};
        var validform = true;

        if (!this.state.emailid) {
            validform = false;
            errors["emailid"] = "Please enter your email-ID.";
        }

        if (typeof this.state.emailid !== "undefined") {
            //regex used for email validation
            var pattern = new RegExp(/^[a-zA-Z0-9-.]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/);
            if (!pattern.test(this.state.emailid)) {
                validform = false;
                errors["emailid"] = "Please enter valid emailID.";
            }
        }

        if (!this.state.password) {
            validform = false;
            errors["password"] = "Please enter your password.";
        }

        if (typeof this.state.password !== "undefined") {
            if (!this.state.password.match(/^.*(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                validform = false;
                errors["password"] = "Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return validform;
    }

    submitForm(event) {
        event.preventDefault();
        if (this.validation()) {
            this.setState({
                [event.target.name]: event.target.value,
                [event.target.formvalid]: !event.target.formvalid
            })
            this.toDashboard();
        }
    }
}
export default SignIn;