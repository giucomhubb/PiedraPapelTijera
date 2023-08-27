import React, { useState, useEffect } from "react";
import { View, Button, TouchableOpacity, Text } from "react-native-web";


const game = () => {
    const [elecJugador, setElecJugador] = useState('');
    const [elecganador, setElecGanador] = useState('');
    const [elecOrdenador, setElecOrdenador] = useState('');
    const opciones = ["Piedra", "Papel", "Tijera"];

    const TijeraButton = () => {
        return (
            <View>
                <TouchableOpacity onPress={tijera}>
                    <Text>Tijera</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const PiedraButton = () => {
        return (
            <View>
                <TouchableOpacity onPress={piedra}>
                    <Text>Piedra</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const PaperButton = () => {
        return (
            <View>
                <TouchableOpacity onPress={papel}>
                    <Text>Papel</Text>
                </TouchableOpacity>
            </View>
        );
    };

    function ordenador() {
        
        const numRandom = Math.floor(Math.random() * opciones.length);
        setElecOrdenador(opciones[numRandom]);
    }

    function tijera() {
        setElecJugador("Tijera");
        ordenador();
    }

    function piedra() {
        setElecJugador("Piedra");
        ordenador();
    }

    function papel() {
        setElecJugador("Papel");
        ordenador();
    }

    function ganador() {
        if(elecJugador=="Papel" && elecOrdenador=="Papel"){
            setElecGanador("Empate");
        }else if(elecJugador=="Tijera" && elecOrdenador=="Tijera"){
            setElecGanador("Empate");
        }else if(elecJugador=="Piedra" && elecOrdenador=="Piedra"){
            setElecGanador("Empate");
        }else if(elecJugador=="Papel" && elecOrdenador=="Tijera"){
            setElecGanador("Gana ordenador");
        }else if(elecJugador=="Piedra" && elecOrdenador=="Papel"){
            setElecGanador("Gana Ordenador");
        }else if(elecJugador=="Tijera" && elecOrdenador=="Piedra"){
            setElecGanador("Gana ordenador");
        }else{
            setElecGanador("Gana Jugador")
        }
    }

    useEffect(() => {
        ganador(); // Call ganador whenever elecOrdenador changes
    }, [elecOrdenador]);

    useEffect(() => {
        ganador(); // Call ganador whenever elecOrdenador changes
    }, [elecJugador]);

    return {
        TijeraButton,
        PiedraButton,
        PaperButton,
        elecJugador,
        elecganador,
        elecOrdenador
    };
};

export default game;
