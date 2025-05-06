import { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function Product(){

    const [produtos, setProdutos] = useState([
        {id : 1, nome: 'Hamburguer', preco: 10.99,},
        {id: 2,  nome: 'Nugget', preco: 19.99,},
        {id: 3, nome: 'Sorvete', preco: 4.99,},
        ])

    return(
        <View style={styles.container}>
            <Text style={styles.txt} >Cardápio</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt:{
        fontSize: 30,
        color: 'red',
    }
})