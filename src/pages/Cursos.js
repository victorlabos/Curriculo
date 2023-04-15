import React from "react";
import { View,Text, Button } from "react-native-web";

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
            
            <Button 
                title="Voltar"
                onPress={()=> navigation.goBack ()} />    
            </View>
    );
}

export default Cursos;

