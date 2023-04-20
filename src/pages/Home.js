import React from "react";
import { View, Text, StyleSheet, Image} from 'react-native';

import Botao from '../Componentes/Botao';

const Home = ({ navigation }) => {
    return (
        <View style={estilo.container}>
            <View style={estilo.imagemContainer}>
                <Image source={require('../imagens/imagens.jpg' )} style={{ width: 190, height: 190, borderRadius: 15 }} />
            </View>

            <View style={estilo.textoContainer}>
                <Text style={[estilo.texto, estilo.destaque]}>Olá,</Text>

                <Text style={estilo.texto}>
                    meu nome é <Text style={estilo.destaque}>Victor Labos</Text> e esse é o meu currículo.
                </Text>
            </View>

            <View style={estilo.botoes}>
                <Botao titilo="Sobre" acao={ () => navigation.navigate('Sobre') } />
                <Botao titilo="Características" acao={ () => navigation.navigate('Caracteristicas') } />
                <Botao titilo="Graduação" acao={ () => navigation.navigate('Graduacao') } />
                <Botao titilo="Formação" acao={ () => navigation.navigate('Formacao') } />
                <Botao titilo="Especialização" acao={ () => navigation.navigate('Especializacao') } />
                <Botao titilo="Cursos" acao={ () => navigation.navigate('Cursos') } />
            </View>
        </View>
    );


}

const estilos = StyleSheet.create({


    image:{

        width:190,
        height:190,
        borderRadius:15,
        left:700,
    },

        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: 'black',
        },
        text: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
      
});

export default Home;
