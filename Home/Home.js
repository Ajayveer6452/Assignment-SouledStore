import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'


export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {
        SplashScreen.hide();
        console.log("Aj")
    }


    render() {

      
        return (

            <View style={styles.container} >

                <Text style={{ margin: 10, fontSize: 18}}> Home Comming Soon..</Text>

            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})