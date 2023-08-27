import React, { useState} from "react";
import game from "./functionButton";
import { View,Button,TouchableOpacity,Text} from "react-native-web";
const PaperButton=()=>{
    const{papel}=game();
    return(


       <View>
        <TouchableOpacity onPress={papel}>
                <Text>papel</Text>
            </TouchableOpacity>
       </View> 
        
            
        
    );
}; 
export default PaperButton;