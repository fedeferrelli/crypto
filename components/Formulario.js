import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import { Picker } from '@react-native-community/picker';
import axios from 'axios';

const Formulario = ({ moneda, criptomoneda, guardarMoneda, guardarCriptomoneda, guardarConsultarAPI}) => {


    const [ criptomonedas, guardarCriptomonedas ] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(url);
            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    // Almacena las selecciones del usuario
    const obtenerMoneda = moneda => {
        guardarMoneda(moneda)
    }
    const obtenerCriptomoneda = cripto => {
        guardarCriptomoneda(cripto)
    }

    const cotizarPrecio = () => {
        if(moneda.trim() === '' || criptomoneda.trim() === '') {
            mostrarAlerta();
            return;
        }

        // Cambiar el state de consultar api
        guardarConsultarAPI(true)
  
    }

    const mostrarAlerta = () => {
        Alert.alert(
            'Error...',
            'Ambos campos son obligatorios', 
            [
                {text: 'OK'}
            ]
        )
    }

    return ( 

        <View style={styles.view} >

            <View style={styles.card}>
            <Text style={styles.label}>Moneda</Text>

            <View style = {styles.picker}>
            <Picker
                selectedValue={moneda}
                onValueChange={ moneda => obtenerMoneda(moneda) }
                itemStyle={{ height: 120 }}
            >
                <Picker.Item label="- Seleccione -" value="" /> 
                <Picker.Item label="Dolar de Estados Unidos" value="USD" /> 
                <Picker.Item label="Euro" value="EUR" /> 
                <Picker.Item label="Libra Esterlina" value="GBP" /> 
            </Picker>
            </View>

            </View>

            <View style={styles.card}>
            <Text style={styles.label}>Criptomoneda</Text>

            <View style = {styles.picker}>
            <Picker
                selectedValue={criptomoneda}
                onValueChange={ cripto => obtenerCriptomoneda(cripto) }
                itemStyle={{ height: 120, textAlign: 'center' }}
            >
                <Picker.Item label="- Seleccione -" value="" /> 
                {criptomonedas.map( cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} /> 
                ))}
            </Picker>
            </View>
            </View>
            
            <View style={styles.viewbtn}>
            <TouchableHighlight
                style={styles.btnCotizar}
                onPress={ () => cotizarPrecio() }
            >
                <Text style={styles.textoCotizar}>Cotizar</Text>
            </TouchableHighlight>
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    view:{
       alignItems: "center",
        justifyContent: "center",
        width: '100%',
       
    },

    viewbtn:{
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',

    },

    label: {
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20,
        textAlign: 'center',
        width: '100%',
        marginBottom: 0,
        letterSpacing: 1.5,
    },
    btnCotizar: {
        backgroundColor: '#C37B89',
        padding: 10,
        marginTop: 15,
        width: "80%",
        borderRadius: 10,
        
    },
    textoCotizar: {
        color: '#FFF',
        fontSize: 18,
        textTransform: 'uppercase',
        textAlign: 'center',
        
    }, 

    picker:{
        
        width: '70%',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#1C0C5B",
    },

    card:{
        backgroundColor: '#fff',
        width: '90%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 5,

        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,

    }
});
 
export default Formulario;