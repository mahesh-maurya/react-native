import React from 'react';
import {ScrollView,View, Container } from 'react-native';
import styles from '../../assets/css/main/style.android';
import Dashboard from '../../containers/Dashboard'

class DashboardScreen extends React.Component
{
    render()
    {
        return(
            <Container style={styles.MainComponent}>
                <View style={{flex:1,height:'100%'}}>
                    <ScrollView>
                        <Dashboard navigation={this.props.drawerNavigation} />
                    </ScrollView>
                </View>
            </Container>
            );
    }
}

export default DashboardScreen;
