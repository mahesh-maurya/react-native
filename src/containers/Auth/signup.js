import React from 'react';
import {View ,Text, Button, Thumbnail, Input, Item, Label} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import RNPickerSelect from 'react-native-picker-select';
import { connect } from 'react-redux';
import {Register, UpdateLoader} from '../../actions';
import styles from '../../assets/css/auth/style';
import defaultUser from '../../assets/images/default.png';
import Toast from 'react-native-simple-toast';

class SignupForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.inputRefs = {};
        this.state={
            errors:null,
            image:'',
            imageBase64: null,
            first_name:null,
            last_name:null,
            sex:null,
            email:null,
            mobile:null,
            gender:[
                {label:'Male',value:'male'},
                {label:'Female',value:'female'}
              ]
        }
    }
    
    _signUp  = () => {
        
        /* Validation of fields */
        var errors = {};
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        if(!this.state.first_name) {
            errors.first_name = 'First name is required.'
        }
        if(!this.state.last_name) {
            errors.last_name = 'Last name is required.'
        }
        if(!this.state.email || reg.test(this.state.email) === false) {
            errors.email = 'Invalid email-id.';
        }
        if(!this.state.mobile || (this.state.mobile.length != 10 && this.state.mobile.length != 12)) {
            errors.mobile = 'Invalid mobile number.';
        }
        if(!this.state.sex) {
            errors.sex = 'Gender is required.';
        }
        
        if(JSON.stringify(errors) !== JSON.stringify({})){
            this.setState({errors:errors});
            return false;
        }
         /* Validation of fields ends */

        const data = {
            first_name:this.state.first_name,
            last_name:this.state.last_name,
            sex:this.state.sex,
            email:this.state.email,
            mobile:this.state.mobile,
            profile_pic: this.state.imageBase64 ? 'data:image/jpeg;base64,'+this.state.imageBase64 : null,
        }
        this.setState({ message: '', error: {} })
        this.props.dispatch(Register(data))
        .then(resp => {                
            if(resp.code == 200){
                Toast.show('Successfully Registered',Toast.LONG);
                this.props.navigation.navigate('Dashboard');
            }else{
                if(resp.message) {
                    const error = {
                        email: resp.message.email ? resp.message.email : '',
                        mobile: resp.message.mobile ? resp.message.mobile : '',
                        firstName: resp.message.first_name ? resp.message.first_name : '',
                        lastName: resp.message.last_name ? resp.message.last_name : '',
                        sex: resp.message.sex ? resp.message.sex : ''
                    }
                    this.setState({ errors:error });
                }
                
            }
        })
        .catch((err) => {
            alert(err);
        });
        
    }
    
    render()
    {        
        let { image } = this.state;
        return(
          
                <View style={{  width:'100%',paddingLeft:30,
                paddingRight:30,}}>
                    <View style={styles.SignFormMAin}>
                                                      
                               <View>
                               <Button info style={styles.ProAddBt}
                                    onPress={this._pickImage} >
                                    <Text style={styles.PlusAdd}>+</Text>
                                </Button>   
                                <View style={{width: 130,height: 130,borderRadius: 150,overflow:'hidden' }}> 
                               <Thumbnail source={image ? { uri : image }: defaultUser} style={styles.SigPro} />
                               </View>
                               </View> 
                    </View>
                    <View>
                    <Item floatingLabel style={{marginTop:12}}>
                        <Label style={styles.signUpText}>FIRST NAME</Label>
                        <Input style={styles.userText} 
                        onChangeText={(first_name) => this.setState({first_name})}
                        value={this.state.first_name}
                        maxLength={25}
                        />

                    </Item>
                    {this.state.errors && this.state.errors.first_name ? (<View>
                        <Text style={styles.AllErrorText}>
                        {this.state.errors.first_name}
                        </Text>
                    </View> ) : null}
                    <Item floatingLabel style={{marginTop:12}}>
                        <Label style={styles.signUpText}>LAST NAME</Label>
                        <Input style={styles.userText} 
                        onChangeText={(last_name) => this.setState({last_name})} 
                        value={this.state.last_name}
                        maxLength={25}
                        />                                
                    </Item>
                    {this.state.errors && this.state.errors.last_name ? (<View >
                        <Text style={styles.AllErrorText}>
                        {this.state.errors.last_name}
                        </Text>
                    </View>) :null}
                    <Item floatingLabel style={{marginTop:12}}>
                        <Label style={styles.signUpText}>EMAIL</Label>
                        <Input style={styles.userText} 
                        onChangeText={(email) => this.setState({email})} 
                        keyboardType={'email-address'} 
                        value={this.state.email} 
                        maxLength={50}
                        />

                    </Item>
                    {this.state.errors && this.state.errors.email ? (<View>
                        <Text style={styles.AllErrorText}>
                        {this.state.errors.email}
                        </Text>
                    </ View>) : null}

                    <Item floatingLabel style={{marginTop:12}}>
                        <Label style={styles.signUpText}>MOBILE</Label>
                        <Input style={styles.userText} 
                        onChangeText={(mobile) => this.setState({mobile})} 
                        keyboardType={'numeric'} 
                        value={this.state.mobile}
                        maxLength={12} />

                    </Item>
                    {this.state.errors && this.state.errors.mobile ? (<View>
                        <Text style={styles.AllErrorText}>
                        {this.state.errors.mobile}
                        </Text>
                    </View>) : null}
                    <Item style={{width:'100%',marginTop:20,borderBottomWidth:0}}>
                        <RNPickerSelect
                            placeholder={{
                                label: 'SELECT GENDER',
                                value: null,
                                fontSize:16,
                                color:'#8C8C8C',

                            }}
                            items={this.state.gender}
                            onValueChange={(value) => {
                                this.setState({
                                    sex: value,
                                });
                            }}
                            onUpArrow={() => {
                                //this.inputRefs.name.focus();
                            }}
                            onDownArrow={() => {
                                //this.inputRefs.picker2.togglePicker();
                            }}
                            value={this.state.sex}

                            style={{inputIOS:{marginTop:15,color:'#707070',paddingTop:15,paddingHorizontal: 10,borderWidth:1,borderColor:"#C6C5C5",paddingBottom:15},inputAndroid: { color:"#707070",borderBottomWidth:0}, viewContainer: { width:'100%',fontSize:16,fontFamily:'avenir',color:'#8C8C8C',borderColor:"#C6C5C5",borderWidth:0},placeholderColor:{color:'#8C8C8C',borderWidth:0,padding:0},underline:{borderWidth:0,color:'#C6C5C5',}}}
                            ref={(el) => {
                                this.inputRefs.picker = el;
                            }}
                        />
                    </Item>
                    {this.state.errors && this.state.errors.sex ? (<View>
                        <Text style={styles.AllErrorText}>
                        {this.state.errors.sex}
                        </Text>
                    </View>) : null}
                   
                    <Button block primary style={styles.signupButton} onPress={this._signUp} >
                        <Text style={{color: 'white',fontSize:18}}>Create</Text>
                    </Button>
                    </View>
                </View> 
              
        );
    }
    _pickImage = async () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            mediaType: "photo",
            includeBase64: true
        }).then(image => {
            this.setState({ image: image.path });
            this.setState({ imageBase64: image.data });
        });
    };
}

function mapStateToProps(state) {
    return {
        Loader:state.Loader
    };
}

export default connect(mapStateToProps)(SignupForm);
