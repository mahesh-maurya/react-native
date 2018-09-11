import React from 'react';
import {AsyncStorage, View ,Text, TouchableOpacity} from 'react-native';
/*Load other required file */
import { Col, Grid,Row } from 'react-native-easy-grid';
import styles from '../../assets/css/main/style';
import { connect } from 'react-redux';
/*Load other required file */

class Dashboard extends React.Component
{
    constructor(props)
      {
          super(props);
          this.state = {
              loader: false,
              message: '',
              error: {}
          }
      }

    async componentDidMount(){
        const token =  await AsyncStorage.getItem('token'); 
        this.setState({token:token});
    }

    render()
    {
        const first_name = this.props.users ? this.props.users.first_name: null;
        const last_name = this.props.users ? this.props.users.last_name: null;
        return(     
            <View style={{flex:1,height:'100%',paddingLeft:7,paddingRight:7}}>
                <View style={{marginVertical:30,paddingLeft:7}}>
                    <Text style={{color:'#19769F',fontSize:30}}>
                        Welcome,
                    </Text>
                    <Text style={{color:'#ED5D5B',fontSize:35,fontWeight:'bold'}}>
                        {first_name+' '+last_name}
                    </Text>
                </View>

                <View style={{flex:1}}>
                    <Grid>
                        <Row style={{marginBottom:15}}>
                            <Col>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                                    <View style={styles.PatProBox}>
                                        <Text style={styles.PatProBtext}>Profile</Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('MyPatient')}>
                                    <View style={styles.PatProBox}>
                                        <Text style={styles.PatProBtext}>My Patient</Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:15}}>
                            <Col>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('OnlineAdmission')}>
                                    <View style={styles.PatProBox}>
                                        <Text style={styles.PatProBtext}>
                                        Bed Reservation
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('BookAppointment')}>
                                    <View style={styles.PatProBox}>
                                        <Text style={styles.PatProBtext}>
                                            Appointments
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:15}}>
                            <Col>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PendingBill')}>
                                    <View style={styles.PatProBox}>
                                        <Text style={styles.PatProBtext}>
                                            Bill Payments
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                            <Col>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('BookTest')}>
                                    <View style={styles.PatProBox}>
                                        <Text style={styles.PatProBtext}>
                                            Booked Test
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:15}}>
                            <Col>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Feedback',{route:'Dashboard'})}>
                                    <View style={styles.PatProBox}>
                                        <Text style={styles.PatProBtext}>Feedback</Text>
                                    </View>
                                </TouchableOpacity>
                            </Col>
                        </Row>
                    </Grid>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(Dashboard);
