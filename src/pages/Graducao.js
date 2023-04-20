import React from "react";
import { View,Text, Button } from "react-native-web";

import Botao from '../Componentes/Botao';

const Graduacao = ({navigation})  =>{
    return (
        <View>
            <Text>Graduações</Text>

            <Text>
                Ciências Sociais.
                Comunicação e Mídia. 
                Design e Arte. 
                Direito.         
                
            </Text>
            
            <Botao
                title="Voltar"
                onPress={()=> navigation.goBack ()} />    
            </View>
    );
}

export default Graduacao;