import React, { useState } from "react";
import game from "./functionButton";
import { View,Button, TouchableOpacity,Text} from "react-native-web";
const PiedraButton=()=>{
    const{piedra}=game();
    return(

        <View>
            <TouchableOpacity onPress={piedra}>
                <Text>piedra</Text>
            </TouchableOpacity>
        </View>
        
    );
}; 
export default PiedraButton;