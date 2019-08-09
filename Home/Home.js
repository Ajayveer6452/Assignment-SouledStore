import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity, Text
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { Actions } from 'react-native-router-flux'

export default class Home extends Component {

    constructor(props) {
        super(props);
    
    }

    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
      
    }

    render() {

        return (
            <View style={styles.container} >
                <View style={styles.innerContainer}>
                    
                    <View style={styles.innerChild}>
                        <TouchableOpacity
                            style={[styles.cardStyle, { backgroundColor: '#DF4C85', }]}
                            activeOpacity={.5} onPress={() => { Actions.ProductDetails({ categoryName: "Shirts" }) }} >
                            <Text style={styles.textStyle}>Shirts</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.cardStyle, { backgroundColor: '#00B481', }]}
                            activeOpacity={.5} onPress={() => {
                                Actions.ProductDetails({ categoryName: "T-Shirts" })
                            }} >

                            <Text style={styles.textStyle}>T-Shirts</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.innerChild}>
                        <TouchableOpacity
                            style={[styles.cardStyle, { backgroundColor: '#2C98CC', }]}
                            activeOpacity={.5} onPress={() => { Actions.ProductDetails({ categoryName: "Jeans" }) }} >
                            <Text style={styles.textStyle}>Jeans</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.cardStyle, { backgroundColor: '#FF7356', }]}
                            activeOpacity={.5} onPress={() => {
                                Actions.ProductDetails({ categoryName: "Kurtas" })
                            }} >
                            <Text style={styles.textStyle}>Kurtas</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',

    },
    innerContainer:{
         flex: 0.7, 
         flexDirection: 'row' 
    },

    innerChild:{ flex: 0.5, padding: 5 },

    cardStyle: {
        flex: 0.5, shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 7,
        margin: 5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'

    },

    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    }

})