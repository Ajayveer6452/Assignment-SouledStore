import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    PixelRatio,
    Image
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';

// Home Route
import Home from '../Assignment/Home/Home'


//Profile Route
import Profile from '../Assignment/Profile/Profile'
 
// Help Route
import Help from '../Assignment/Help/Help'


//Create a child class that will manage the tabBar icon 
class TabIcon extends Component {
    render() {
        var icon = require('../Assignment/src/tab-active/home.png');
        switch (this.props.iconName) {
            case 'home':
                icon = this.props.focused ? require('../Assignment/src/tab-active/home.png') : require('../Assignment/src/tab-inactive/home.png');
                break;
            case 'profile':
                icon = this.props.focused ? require('../Assignment/src/tab-active/user.png') : require('../Assignment/src/tab-inactive/user.png');
                break;

            case 'help':
                icon = this.props.focused ? require('../Assignment/src/tab-active/help.png') : require('../Assignment/src/tab-inactive/help.png');
                break;
        }
        return (
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
                <Image source={icon} style={{ width: 28, height: 28 }} />
            </View>
        );
    }
}

//MyApp Main Class 
export default class BottomBar extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (

            <View style={styles.container}>

                <Router>
                    <Scene key="root">

                        {/* Here we created tabbar - Ajay Veer*/}
                        <Scene key="tabbar" hideNavBar={true} mode='modal' animationEnabled={true} swipeEnabled={false} tabBarPosition="bottom" type="reset" duration={1}  >
                            <Scene key="main" hideNavBar={true} tabs={true} tabBarStyle={styles.tabBar} lazy default="Home">

                                <Scene key="Home"
                                    iconName="home"
                                    icon={TabIcon}
                                    title="Home"
                                    headerTitleStyle={styles.headerTitleTabBarStyle}
                                    headerStyle={{ backgroundColor: 'rgb(0, 61, 165)' }}
                                    component={Home}
                                    initial={true}
                                />
                        
                                <Scene key="Profile"
                                    iconName="profile"
                                    title="Profile"
                                    headerTitleStyle={styles.headerTitleTabBarStyle}
                                    headerStyle={{ backgroundColor: 'rgb(0, 61, 165)' }}
                                    icon={TabIcon}
                                    hideNavBar={false}
                                    component={Profile} />

                                <Scene key="Help"
                                    title="Help"
                                    headerTitleStyle={styles.headerTitleTabBarStyle}
                                    headerStyle={{ backgroundColor: 'rgb(0, 61, 165)' }}
                                    iconName="help"
                                    icon={TabIcon}
                                    hideNavBar={false}
                                    component={Help} />

                            </Scene>

                        </Scene>

                    </Scene>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tabBar: {
        borderTopColor: 'darkgrey',
        borderTopWidth: 1 / PixelRatio.get(),
        backgroundColor: 'ghostwhite',
        opacity: 0.98
    },
    headerTitleTabBarStyle:{
        flex: 1, 
        textAlign: 'center', 
        alignSelf: 'center', 
        color: 'white'
    }

});

