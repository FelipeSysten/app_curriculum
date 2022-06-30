import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';


import foto from './assets/foto.jpg';

export default function App() {

    function handleRedeSocial(redes_sociais){
      switch(redes_sociais) {
        case 'linkedin' : 
        Alert.alert('Meu Linkedin','https://www.linkedin.com/in/felipe-souza-746ab8142/')
        break
        case 'github' : 
        Alert.alert('Meu GitHub','https://www.linkedin.com/in/felipe-souza-746ab8142/')
        break
        case 'facebook' : 
        Alert.alert('Meu Facebook','https://www.linkedin.com/in/felipe-souza-746ab8142/')
        break
      }
    }


  return (
    <View style={styles.page}>
      <View style={styles.container_cabecalho}>
      <Image source={foto} style={styles.foto}/>
      <Text style={styles.nome}> FELIPE DE SOUZA </Text>
      <Text style={styles.funcao}> Desenvolvedor Mobile </Text>
        <View style={styles.redes_sociais}>
        <TouchableOpacity onPress={() => handleRedeSocial('github')}>
            <Text> GitHub </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleRedeSocial('facebook')}>
          <Text> Facebook </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleRedeSocial('linkedin')}>
          <Text> Linkdin </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.card_container}>
      <View style={styles.card}>

        <View style={styles.card_header}>
          <Text>Experiancia Profissional</Text>

        </View>

        <View style={styles.card_content}>
        <Text style={styles.card_content_text}>DESIGNER GRÁFICO</Text>
        <Text style={styles.card_content_text}>DESENVOLVEDOR</Text>
        <Text style={styles.card_content_text}>UI/UX</Text>
          </View>
  

      </View>
      </View>
      <View style={styles.card_container}>
      <View style={styles.card}>

        <View style={styles.card_header}>
          <Text>Formação acadêmica</Text>

        </View>

        <View style={styles.card_content}>
        <Text style={styles.card_content_text}>JORNALISMO - 2011</Text>
        <Text style={styles.card_content_text}>REDES DE COMPUTADORES - 2018</Text>
        <Text style={styles.card_content_text}>UI/UX - 2022</Text>
          </View>
  

      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#e7e7e7',
   
 
  },
  container_cabecalho:{
alignItems: 'center',
justifyContent: 'center',
marginTop: 60,
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,

  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
      },
      funcao: {
        color: '#939393',
        marginBottom: 10,
          },

    redes_sociais: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
      marginTop: 20,
    },
    card_container: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    card: {
      width: '60%',
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#939393',
      padding: 10,
      backgroundColor: '#FFF',
   
    },

    card_content: {
      marginTop: 10,
      color: '#939393',
    },

    card_content_text: {
      color: '#939393',
      marginBottom: 10,
    },
});
