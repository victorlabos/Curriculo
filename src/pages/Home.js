import React from "react";
import { View, Text, StyleSheet,Button} from 'react-native';

const Home = ({navigation}) => {
    return(
        <View>
            <Text>Olá meu nome é Victor Labos e esse é meu currículo</Text>

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

            <Button
                title="Área_acadêmica"
                onPress={() => navigation.navigate ('area_academica')}/>


            <Button
                title="TCC"
                onPress={() => navigation.navigate ('tcc')}/>

            <Button
                title="Pessoal"
                onPress={() => navigation.navigate ('pessoal')}/>

            </View>
    );
}

const estilos = StyleSheet.create({

});

export default Home;









