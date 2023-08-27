import React, { useState } from "react";
import game from "./functionButton";
import { View,Button,Text, TouchableOpacity} from "react-native-web";


const TijeraButton=()=>{
    const{tijera}=game();
    return(
        <View>
            <TouchableOpacity onPress={tijera}>
                <Text>Tijera</Text>
            </TouchableOpacity>
        </View>
    );
}; 
export default TijeraButton;