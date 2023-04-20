import React from "react";
import { View,Text, Button } from "react-native-web";

import Botao from '../Componentes/Botao';

const  Especializacao = ({navigation})  =>{
    return (
        <View>
            <Text>Especializações</Text>

            <Text>
                mestrado (que pode ser profissional ou acadêmico)
                doutorado (idem ao mestrado)
                especialização.
                aperfeiçoamento.
                MBA. 
                
            </Text>
            
            <Botao 
                title="Voltar"
                onPress={()=> navigation.goBack ()} />    
            </View>
    );
}

export default Especializacao;

