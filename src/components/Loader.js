import React, { PureComponent } from 'react';
import {ScrollView, ActivityIndicator, View ,Text, ImageBackground,  AsyncStorage,TouchableOpacity,Image } from 'react-native';
import {Content,Button, Body, Right, Container, Header, Left, Card, Icon, Label, Thumbnail, ListItem,Textarea} from "native-base";
import styles from '../assets/css/main/style';
import bgLogoImage from '../assets/images/login_background.png';
import bgImage from '../assets/images/login_background.png';


class Loader extends React.Component
{
  constructor()
  {
    super();
  }

  render()
  { 
     return(    
   
    
                        <ImageBackground source={bgLogoImage}  style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: null,
                height: null,
            }}>
                        <ActivityIndicator size='large' style={{opacity:1}} />
                        </ImageBackground>
                      
                 
        );
  }
}


/* Css for above view */
/* Css for above view */


export default Loader;
