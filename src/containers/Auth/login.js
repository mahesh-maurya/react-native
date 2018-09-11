import React from 'react';
import {Button, Input, Item, Label, View, Text} from 'react-native';
import styles from '../../assets/css/auth/style';
import { connect } from 'react-redux';
import Toast from 'react-native-simple-toast';
import {CheckLogin, EmailMobile} from '../../actions'

class LoginForm extends React.Component
{
    
    static navigationOptions = { header: null };

    constructor(props)
    {
        super(props);
    }

    _validateUser(){
        if(!this.props.EmailMobile){
            Toast.show('Invalid Email/Mobile',Toast.LONG);
            return false;
        }
        
        this.props.dispatch(CheckLogin(this.props.EmailMobile))
                .then(resp => {
                    if(resp){
                        this.props.navigation.navigate('Dashboard');
                    }
                })
                .catch((err) => {
                    alert(err);
                });
        
    }
    
    render()
    {   
        return(
           
                <View style={styles.LoginFormAll}>
                
                    <Item floatingLabel>
                        <Label style={styles.signUpText}>EMAIL / MOBILE NUMBER</Label>
                        <Input style={styles.userText} value={this.props.EmailMobile}  onChangeText={(username) => this.props.dispatch(EmailMobile(username))} />
                    </Item>
                    <Button block style={styles.signupButton}  onPress={() => this._validateUser()}>
                        <Text style={{color: 'white',fontSize:18}}>Sign In</Text>
                    </Button>
                </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        EmailMobile: state.EmailMobile,
    };
}

export default connect(mapStateToProps)(LoginForm);
