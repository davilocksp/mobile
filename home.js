import { Text, View, StyleSheet, Image, Button, TextInput, ImageBackground } from "react-native";

export default function Home(){
    return(
        <ImageBackground style = {styles.imgback} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzjQ0y5ajl1e1lImkU_rWvRLlBq2IXLms9rg&s'}} resizeMode="cover">
        <View style = {styles.containerProfile}> 
            <View style = {styles.viewimg}>
                <br></br>
                <Image style = {styles.img} source={{ uri: 'https://static.vecteezy.com/ti/vetor-gratis/p1/20336184-mcdonalds-logotipo-mcdonald-icone-livre-gratis-vetor.jpg'}}/>

                <br></br>
                <Text style = {styles.titulo}> <h1>Venha conhecer nosso cardápio <br></br>
                        </h1>
                </Text>
            </View>
            <br></br><br></br>

            <View style = {styles.imgmeio}>
                <Image  style={styles.img} source={require("../projetomobile/assets/imagem3.jpg")}/> 
                <Image  style={styles.img}  source={require("../projetomobile/assets/imagem4.webp")}/>
                
            </View>
            <Text>McDonald's Corporation é uma rede multinacional estadunidense de fast food, fundada em 1940 como um restaurante operado por Richard e Maurice McDonald, em San Bernardino, Califórnia, Estados Unidos.</Text>
            <View style = {styles.imgmeio}>
                <Image  style={styles.img} source={require("../projetomobile/assets/imagem5.jpg")}/> 
                <Image  style={styles.img}  source={require("../projetomobile/assets/imagem6.jpg")}/>
            </View>
            <Text>O McDonald's é a maior cadeia de restaurantes de fast food do mundo,[9] servindo mais de 69 milhões de clientes diariamente, em mais de 100 países[10] por meio de 40 mil pontos de venda em 2021.</Text>
            <br></br><br></br>
           

        </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    containerProfile:{
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
        // backgroundColor: 'grey'
    },
    imgback:{
        flex: 1,
        ImageBackground
    },
    img:{
        width: 150, 
        height: 100,
        borderRadius: 5,
    },
    img2:{
        width: 370, 
        height: 300,
        borderRadius: 5,
    },
    imgmeio:{
        flexDirection: 'row',
        justifyContent: 'space-aroud',
        alignSelf: 'center',
        padding: 30

    },
    viewimg:{
        alignItems: 'flex-start',
    },
    textcred:{
        alignSelf: 'center'
    },
    txtinput:{
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 5
    },
    divisao:{
        justifyContent: 'space-evenly',
        padding: 5,
    },
    titulo:{
        color: 'black',
        fontSize: 15,
        fontStyle: 'italic'
    }
})












