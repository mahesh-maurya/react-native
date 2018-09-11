import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import Splash from '../containers/splash'

/*Navigation */
import SideBar from '../containers/sidebar';
import Auth from '../components/Auth';
import Dashboard from "../components/Dashboard";
import About from "../components/About";
/*Navigation */

// drawer stack after login
const DrawerNavigation = createDrawerNavigator({
    About: {screen:About},
    Dashboard:{ screen:Dashboard},
},
{
    initialRouteName: 'Dashboard',
    headerMode: 'screen',
    drawerLockMode: 'locked-closed',
    contentComponent: props => <SideBar {...props} />
})

// stack Naviagtor before login
const initialStack = createStackNavigator({
    splash : {screen : Splash}
},
{
    headerMode:'none',
    initialRouteName: 'splash'
})

// Manifest of possible screens
export const AppNavigation = createStackNavigator({
    drawerStack: { screen: DrawerNavigation },  
    loginStack: { screen: Auth },
    initialStack : {screen: initialStack}
},

{
    headerMode: 'none',
    initialRouteName: 'initialStack'
})
