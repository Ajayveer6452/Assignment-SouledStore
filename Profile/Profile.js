import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Help extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {

        return (

            <View style={styles.container} >

                <Text style={{ margin: 10, fontSize: 18}}>Profile Comming Soon..</Text>

            </View>
           
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})