import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList, TouchableOpacity, Image
} from 'react-native';
import * as HomeModel from './HomeModel'



export default class ProductDetails extends Component {

    static navigationOptions = { headerLeft: null }


    constructor(props) {
        super(props);
        this.state = {
            ProductDataArray: [],
            title: ""
        };

        console.log(this.props.categoryName)
        
     

    }

    componentWillMount() {
     
        if (this.props.categoryName === "Shirts") {
            this.setState({ ProductDataArray: HomeModel.ProductShirtsData })
        }
        else if (this.props.categoryName === "TShirts") {
            this.setState({ ProductDataArray: HomeModel.ProductTShirtsData })
        }
        else if (this.props.categoryName === "Jeans") {
            this.setState({ ProductDataArray: HomeModel.ProductJeansData })
        }
        else if (this.props.categoryName === "Kurtas") {
            this.setState({ ProductDataArray: HomeModel.ProductKurtasData })
        }
        else {

        }
    }


    render() {


        return (

            <View style={styles.container} >

                <FlatList
                    style={{
                        width: '100%',
                        height: '100%',
                        padding: 5

                    }}
                    data={this.state.ProductDataArray}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {

                        return (
                            <TouchableOpacity
                                style={styles.listItem}
                                activeOpacity={.5} onPress={() => {}} >

                                <View style={styles.listCard}>

                                    <Image source={item.Image} style={styles.profileImg} />
                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <Text style={{ color: '#4E4E4E', fontWeight: 'bold', fontSize: 16 }}>{item.Description} </Text>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <Text numberOfLines={0} style={{ color: '#4E4E4E', fontWeight: 'bold', fontSize: 16 }}>{item.Price} </Text>
                                    </View>

                                </View>

                            </TouchableOpacity>

                        );
                    }}
                >
                </FlatList>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10
    },
    listCard: {
        flex: 1,
        backgroundColor: 'white',
        borderBottomWidth: 3,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        alignItems: 'center',
        borderColor: 'rgb(201, 207, 216)',
        borderRadius: 6,
    },
    listItem: {
        marginBottom: 10,
    },
    profileImg: {
        marginTop: 5,
        height: 300,
        width: 200,
        borderRadius: 40,
        alignSelf: 'center'
    },

})