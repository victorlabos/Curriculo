import React from "react";
import { View,Text, Button } from "react-native-web";

const Formacao = ({navigation})  =>{
    return (
        <View>
            <Text>Formações</Text>

            <Text>
                Bacharelado.
                Tecnólogo.
                Licenciatura.
            </Text>
            
            <Button 
                title="Voltar"
                onPress={()=> navigation.goBack ()} />    
            </View>
    );
}

export default Formacao;