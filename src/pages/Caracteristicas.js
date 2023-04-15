import React from "react";
import { View,Text, Button } from "react-native-web";

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
            
            <Button 
                title="Voltar"
                onPress={()=> navigation.goBack ()} />    
            </View>
    );
}

export default Caracteristicas;
