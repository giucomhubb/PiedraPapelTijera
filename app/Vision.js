import PiedraButton from "./PiedraButton";
import TijeraButton from "./TijeraButton";
import PaperButton from "./PapelButton"; 
import game from "./functionButton";
import { View } from "react-native-web";


const Vision=()=>{
    const{elecJugador,elecganador,elecOrdenador,TijeraButton,PaperButton,PiedraButton}=game();
    return(
        <View>
            <PaperButton/>
            <PiedraButton/>
            <TijeraButton/>
            <h1>Jugador:{elecJugador}</h1>
            <h1>Order: {elecOrdenador}</h1>
            <h1>Ganadr: {elecganador}</h1>

        </View>

    );

};
export default Vision;