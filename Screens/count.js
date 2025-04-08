import{ View, Text, Button, StyleSheet} from 'react-native';
import { useState } from 'react';

export default function Count(){

    const [contador, setContador] = useState(0);

    function Aumentar(){
        setContador (contador + 1);
    }
    function Diminuir(){
        if (contador > 0){
        setContador (contador - 1);
        }
    }

    return(
        <View style = {styles.container}>
            <Text style = {styles.txt}>
                Meu contador
            </Text>
            <Text style = {styles.txt}>
                {contador}
            </Text>
            <View style = {styles.buttons}>
                <Button 
                    title='+'
                    color = {'yellow'}
                    onPress={Aumentar}
                />
                <Button 
                    title='-'
                    color = {'red'}
                    onPress={Diminuir}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 40,
        color: 'yellow'
    },
    txt:{
        fontSize: 25,
        color: 'Black'
    },
    buttons:{
        flexDirection: 'row'
    }
})