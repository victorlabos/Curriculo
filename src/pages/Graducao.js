import React from "react";
import { View,Text, Button } from "react-native-web";

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
            
            <Button 
                title="Voltar"
                onPress={()=> navigation.goBack ()} />    
            </View>
    );
}

export default Graduacao;