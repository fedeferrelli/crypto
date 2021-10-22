import React from 'react';
import { ViewBase, Text, StyleSheet } from 'react-native';

const Header = () =>{
    return(
        <Text style={styles.header}> cotizador de Criptomonedas</Text>
    );
};

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#1C0C5B',
        paddingVertical: 15,
        textAlign: 'center',
        fontSize: 20,
        color: "#fff",
        textTransform: 'uppercase',
       
    }
})


export default Header;