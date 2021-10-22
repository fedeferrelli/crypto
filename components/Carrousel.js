import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";


const Carrousel = () => {
    return(

        <ScrollView  horizontal  style={styles.carrousel}>
            <Image style={styles.imagen} source={ require('../assets/6807.webp') }/>

            <Image style={styles.imagen} source={ require('../assets/criptomonedas.jpg') }/>

            <Image style={styles.imagen} source={ require('../assets/varias.webp') }/>

            <Image style={styles.imagen} source={ require('../assets/bitcoin-criptomonedas-.jpg') }/>
            

        </ScrollView>

    );

};

const styles = StyleSheet.create({
    imagen: {
       height: 150,
       width: 410,
       marginHorizontal: 0.50,
       opacity: 0.8,
       flexBasis: '100%'

      },

      carrousel:{
        width: '100%',
        marginVertical: 10,
        
        
        
      }

     


});

export default Carrousel;