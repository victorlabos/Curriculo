import React from "react";
import { View, Text, StyleSheet, Button,Image} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View>
            <Text>Olá meu nome é Victor Labos e esse é meu currículo</Text>

            <image style={estilos.Image}source={require('../imagens/download.jpg' )}/>

            <Button
                title="Formação"
                onPress={() => navigation.navigate ('formacao')}/>

            <Button
                title="Especialização"
                onPress={() => navigation.navigate ('especializacao')}/>


            <Button
                title="Caracteristicas"
                onPress={() => navigation.navigate ('caracteristicas')}/>

            <Button
                title="Graduação"
                onPress={() => navigation.navigate ('graduacao')}/>

            <Button
                title="Cursos"
                onPress={() => navigation.navigate ('cursos')}/>

            </View>
    );
}

const estilos = StyleSheet.create({


    image:{

        width:190,
        height:190,
        borderRadius:15,
        left:700,

    }

});

export default Home;









