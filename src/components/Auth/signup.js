import React from 'react';
import {ScrollView, Container, View ,Text, Image} from 'react-native';
import bgImage from '../../assets/images/login_background.png';
import styles from '../../assets/css/auth/style';
import SignupForm from '../../containers/Auth/signup'
class Signup extends React.Component
{
    render()
    {
        return(
                <Container style={styles.MainComponent}>
                <View>
                    <Image source={bgImage} style={styles.image} resizeMode="cover"/>
                    <ScrollView style={styles.container} behavior="padding" >
                    <View style={styles.log}>
                
                           <SignupForm navigation={this.props.navigation} />
                           <View style={styles.signUpView}>
                            <Text style={styles.signUpText}>ALREADY HAVE AN ACCOUNT?          
                                <Text onPress={() => {this.props.navigation.navigate('Login')}} style={{fontWeight: 'bold',color:'#1d1d26'}}> SIGN IN</Text>
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


export default Signup;
