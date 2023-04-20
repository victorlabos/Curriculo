import React from "react";
import { View,Text, Button } from "react-native-web";

import Botao from '../Componentes/Botao';

const  Caracteristicas = ({navigation})  =>{
    return (
        <View>
            <Text>Características</Text>

            <Text>
                Liderança. 
                Humildade. 
                Motivação. 
                Responsabilidade. 
                Proatividade. 
                Organização. 
                Flexibilidade.
                            
            </Text>
            
            <Botao
                title="Voltar"
                onPress={()=> navigation.goBack ()} />    
            </View>
    );
}

export default Caracteristicas;
