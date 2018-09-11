import React from 'react';
import {createStackNavigator, Button, Icon} from 'react-navigation';
import DashboardView from './dashboard';
import styles from '../../assets/css/main/style';
class Dashboard extends React.Component
{    
    render()
    {
    const Navigator = createStackNavigator({
        Dashboard: {screen:props=><DashboardView drawerNavigation={this.props.navigation} />}
        },{
            initialRouteName: 'Dashboard',
            headerMode: 'screen',
            navigationOptions: ({navigation}) => ({
                title:'Dashboard',
                headerStyle: {backgroundColor: '#23b8bf', color:'#ffffff'},
                headerTitleStyle: {color:'#ffffff',fontFamily:'avenir',flex: 1,
                alignItems: 'center',alignSelf:'center',textAlign:'center'},
                headerTintColor: 'white',
                headerRight: (
                    <Button

                    />
                ),
                headerLeft: (<Button transparent onPress={()=>this.props.navigation.toggleDrawer()} style={styles.homeTop}>
                                <Icon name="menu" style={styles.homeBtn} />
                            </Button>)
            })
    });
    return (
            <Navigator/>
        )
    }
}

export default Dashboard;
