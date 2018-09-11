import React from 'react';
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux';
import anim from '../assets/json/splash.json';
import { StackActions,NavigationActions } from 'react-navigation';


class Splash extends React.Component{
    constructor(props) {
        super(props);
    }
     async componentDidMount() {
        
    }
    
    validateUser = ()=>{
        const {dispatch} = this.props;
        const loggedOutAction = StackActions.reset({
              index: 0,
              key:null,
              actions: [NavigationActions.navigate({ routeName: 'loginStack' })],
        });
        const loggedInAction = NavigationActions.navigate({
              routeName: 'drawerStack',
        });
        //validate user session
        dispatch(profile())
        .then(response=>{
            if(response && response.data){
                dispatch(loggedInAction);
            }else{
                
                dispatch(loggedOutAction);
            }
        });
    }
    
    render(){        
        return (
                <View style={styles.container}>
                    <View>
                        <Animation
                            ref={animation => {
                            this.animation = animation;
                            }}
                            style={{
                            width: 350,
                            height: '100%'
                            }}
                            loop={true}
                            source={anim}
                        />
                    </View> 
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    }
});

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(Splash);
