import React, {useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";
import axios from "axios";

const Form = () => {

  const [currency, setCurrency] = useState('');
  const [crypto, setCrypto] = useState('');
  const [cryptos, setCryptos] = useState([]);
  const [criptos, setCriptos] = useState([]);

  useEffect(() => {

    const consultarAPI = async () =>{
      const url ="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const resultado = await axios.get(url);
      
      
    
      console.log(resultado);
      setCriptos(resultado);
    }
    
    consultarAPI();
  }, []);

  console.log(criptos);
  

  

  return(
    <View style={styles.view}>
     
        <Text style={styles.text}> Moneda</Text>

        <Picker style={styles.picker}
        onValueChange = {currency => setCurrency(currency)}
        selectedValue = {currency}
        >
          <Picker.Item label="Seleccione una moneda" value="" />
          <Picker.Item label="Dólar" value="USD" />
          <Picker.Item label="Euro" value="EUR" />
          <Picker.Item label="Libra Esterlina" value="GBP" />
        </Picker>

        <Text style={styles.text}> Criptomoneda</Text>

        <Picker style={styles.picker}
        onValueChange = {crypto => setCrypto(crypto)}
        selectedValue = {crypto}
        >
       <Picker.Item label="- Seleccione -" value="" /> 
                {criptos.map( cripto => (
                    <Picker.Item key={cripto.CoinInfo.Id} label={cripto.CoinInfo.FullName} value={cripto.CoinInfo.Name} /> 
                ))}


        </Picker>

    </View>
  
  );
};

const styles = StyleSheet.create({
  view: {
    
    
   
    justifyContent: "center",
  },

  text: {
    fontSize: 24,
    color: "#1C0C5B",
    fontWeight: "bold",
    textTransform: "uppercase",
    marginVertical: 10,
    textAlign: "center",
    letterSpacing: 2.5,
  },

  picker: {
    width: "50%",
    borderBottomColor: "#1C0C5B",
    marginLeft: 10,
    textAlign: "center",
    justifyContent: "center",
   
  },
});

export default Form;
