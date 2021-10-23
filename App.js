import React, { useState, useEffect } from 'react';
import { StyleSheet, Image, View, ScrollView, ActivityIndicator, StatusBar, Animated } from 'react-native';
import axios from 'axios';
import Header from './components/Header'
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import Carrousel from "./components/Carrousel";
//import Animacion from "./components/Animated"


const App  = () => {

  const [ moneda, guardarMoneda ] = useState('');
  const [ criptomoneda, guardarCriptomoneda ] = useState('');
  const [ consultarAPI, guardarConsultarAPI ] = useState(false);
  const [ resultado, guardarResultado] = useState({});
  const [ cargando, guardarCargando] = useState(false);

  useEffect(() => {
    const cotizarCriptomoneda = async () => {
      if(consultarAPI) {
          // consultar la api para obtener la cotización
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
          const resultado = await axios.get(url);

          // console.log(resultado.data.DISPLAY[criptomoneda][moneda] );
          guardarCargando(true);

          // Ocultar el spinner y mostrar el resultado
          setTimeout(() => {
              guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda] );
              guardarConsultarAPI(false);
              guardarCargando(false);
              
          }, 3000);
      }
    }
    cotizarCriptomoneda();
  }, [consultarAPI]);

  // mostrar el spinner o el resultado
  const componente = cargando ? <ActivityIndicator size="large" color="#1C0C5B" /> : <Cotizacion  resultado={resultado}/>

  const [animacion] = useState(new Animated.Value(0));

 useEffect(() => {
    
    Animated.timing(
        animacion, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: false,
        }
    ).start();

 }, []);

  return (



    <>
    <StatusBar backgroundColor="#1C0C5B"  ></StatusBar>
    <Animated.ScrollView style={[styles.view, {opacity: animacion}] }>

    
        <Header />
       
        

        <Carrousel style={styles.carrousel}/>

        

        <View style={styles.contenido}>
            <Formulario 
              moneda={moneda}
              criptomoneda={criptomoneda}
              guardarMoneda={guardarMoneda}
              guardarCriptomoneda={guardarCriptomoneda}
              guardarConsultarAPI={guardarConsultarAPI}
            />
        </View>
        <View style={styles.componente}>
          {componente}
        </View>
   
      </Animated.ScrollView>
    </>
  );
};

const styles = StyleSheet.create({

  view:{
    width:"100%",
    
    backgroundColor: "orange",
    
    
},
  
  contenido: {
    marginHorizontal: '2.5%',
    marginVertical: 0,
  },

  componente:{
    marginTop: 20,
  }
 
});

export default App;
