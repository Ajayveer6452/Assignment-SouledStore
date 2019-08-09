import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,TouchableOpacity,Image
} from 'react-native';



export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            invitedData:[  
             { "Image": require('../src/t-shirt/t_shirt1.jpg'), "Description":"Max Men's Regular fit T-shirt", "Price":"₹600"},
             { "Image": require('../src/t-shirt/t_shirt2.jpg'), "Description":"Max Men's Regular fit T-shirt", "Price":"₹600"},
             { "Image": require('../src/t-shirt/t_shirt3.jpg'), "Description":"Max Men's Regular fit T-shirt", "Price":"₹600"},
             { "Image": require('../src/t-shirt/t_shirt4.jpg'), "Description":"Max Men's Regular fit T-shirt", "Price":"₹600"},
             { "Image": require('../src/t-shirt/t_shirt1.jpg'), "Description":"Max Men's Regular fit T-shirt", "Price":"₹600"},
             { "Image": require('../src/t-shirt/t_shirt3.jpg'), "Description":"Max Men's Regular fit T-shirt", "Price":"₹600"},
             { "Image": require('../src/t-shirt/t_shirt2.jpg'), "Description":"Max Men's Regular fit T-shirt", "Price":"₹600"},
             { "Image": require('../src/t-shirt/t_shirt4.jpg'), "Description":"Max Men's Regular fit T-shirt", "Price":"₹600"},
             { "Image": require('../src/t-shirt/t_shirt1.jpg'), "Description":"Max Men's Regular fit T-shirt", "Price":"₹600"},

            ]  
        };
    }

    componentDidMount() {

    }


    render() {

      
        return (

            <View style={styles.container} >

                <FlatList
                style={{  width: '100%',
                height: '100%' }}
                data={this.state.invitedData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {

                    return (
                        <TouchableOpacity
                            style={styles.listItem}
                            activeOpacity={.5} onPress={() => {

                                // Actions.TaskDetails({ ShiftData: item, refreshingShift: this.GetTaskData.bind(this) })


                            }}    >

                            <View style={styles.listCard}>

                            <Image source={item.Image}   style={styles.profileImg}/>
                           
                                    <View style={{ flex: 1, flexDirection: 'row', }}>

                                            <Text style={{ color: '#4E4E4E',fontWeight: 'bold', fontSize:16 }}>{item.Description} </Text>
                                   

                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', }}>

                                            <Text numberOfLines={0} style={{ color: '#4E4E4E',fontWeight: 'bold', fontSize:16}}>{item.Price} </Text>
                        
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
        padding:20
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
        marginTop:5,
        height: 300,
        width: 200,
        borderRadius: 40,
        alignSelf:'center'
      },

})