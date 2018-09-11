import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Login from './login';
import Signup from './signup';
import {Button,Icon} from 'native-base'

const Navigator = createStackNavigator({
    Login: { screen: Login, navigationOptions: { header:null } },
    Signup: { screen: Signup, navigationOptions: { title: 'Sign Up' } },    
},
{
    navigationOptions: {
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#23b8bf', color:'#ffffff',fontFamily:'avenir'},
        headerTitleStyle: {color:'#ffffff',fontFamily:'avenir',flex: 1,
        alignItems: 'center',alignSelf:'center',textAlign:'center'},
        headerRight: (
            <Button
            />
        )
    },
    initialRouteName: 'Login'
});

class Auth extends Component {
    render() {
        return (
            <Navigator/>
        )
    }
}

export default Auth;
