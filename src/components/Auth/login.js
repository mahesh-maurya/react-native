import React, { PureComponent } from 'react';
import {ScrollView, View, Text, Image, Container} from 'react-native';
import styles from '../../assets/css/';
import bgImage from '../../assets/images/login_background.png';
import logo from '../../assets/images/logo.png';
import LoginForm from '../../containers/Auth/login';

class Login extends React.Component
{
    render()
    {
        return(
                <Container >
                    <View style={styles.MainComponent}>
                        <Image source={bgImage} style={styles.image} resizeMode="cover"/>
                        <ScrollView style={styles.container} >
                            <View style={styles.log}>
                                <Image source={logo} style={styles.logoImage} resizeMode='contain'/>
                                <LoginForm navigation={this.props.navigation} />
                                <View style={styles.signUpView}>
                                    <Text style={styles.signUpText}>DON'T HAVE AN ACCOUNT?          
                                        <Text onPress={() => this.props.navigation.navigate('Signup')} style={{fontWeight: 'bold',color:'#1d1d26'}}> SIGN UP</Text>
                                    </Text>
                                </View>
                            </View>
                            
                        </ScrollView>
                    </View>
                </Container>
            );
    }
}

/* Css for above view */
/* Css for above view */

export default Login;
