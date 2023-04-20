import React from "react";
import { View,Text, Button } from "react-native-web";

import Botao from '../Componentes/Botao';

const Formacao = ({navigation})  =>{
    return (
        <View>
            <Text>Formações</Text>

            <Text>
                Bacharelado.
                Tecnólogo.
                Licenciatura.
            </Text>
            
            <Botao
                title="Voltar"
                onPress={()=> navigation.goBack ()} />    
            </View>
    );
}

export default Formacao;