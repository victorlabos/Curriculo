import React from "react";
import { View,Text, Button } from "react-native-web";

import Botao from '../Componentes/Botao';

const  Cursos = ({navigation})  =>{
    return (
        <View>
            <Text>Cursos</Text>

            <Text>
                Gestão de Recursos Humanos. ...
                Administração. ...
                Marketing. ...
                Medicina. ...
                            
            </Text>
            
            <Botao 
                title="Voltar"
                onPress={()=> navigation.goBack ()} />    
            </View>
    );
}

export default Cursos;

