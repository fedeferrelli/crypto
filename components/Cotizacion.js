import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cotizacion = ({resultado}) => {

   if(Object.keys(resultado).length === 0 ) return null;

    return ( 
        <View style={styles.resultado}>
            <Text style={[styles.texto, styles.precio]}>
                <Text style={styles.span}>{resultado.PRICE} </Text>
            </Text>
            <Text style={styles.texto}>Precio más alto del día: {' '}
                <Text style={styles.span}> {resultado.HIGHDAY} </Text>
            </Text>
            <Text style={styles.texto}>Precio más bajo del día: {' '}
                <Text style={styles.span}> {resultado.LOWDAY} </Text>
            </Text>
            <Text style={styles.texto}>Variación últimas 24 horas: {' '}
                <Text style={styles.span}> {resultado.CHANGEPCT24HOUR} % </Text>
            </Text>
            <Text style={styles.texto}>Última Actualización: {' '}
                <Text style={styles.span}> {resultado.LASTUPDATE} </Text>
            </Text>
        </View>
     );
}

const styles = StyleSheet.create({
    resultado: {
        backgroundColor: '#1C0C5B',
        padding: 20
    },
    texto: {
        color: '#FFF',
       textAlign: "center",
        fontSize: 18,
        marginBottom: 10
    },
    precio: {
        fontSize: 38
    },
    span: {
      
    }
})
 
export default Cotizacion;