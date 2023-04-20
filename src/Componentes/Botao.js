import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import Botao from "../componentes/Botao";

const Botao = ({titulo, acao}) => {
    return (
        <TouchableOpacity style={estilo.Botao} onPress={acao}>
            <Text style={estilo.texto}>{ titulo }</Text>
        </TouchableOpacity>

    );

};

const estilos = StyleSheet.create({


    image:{

        width:190,
        height:190,
        borderRadius:15,
        left:700,
    },

        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: 'black',
        },
        text: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
    
});
export default Botao;