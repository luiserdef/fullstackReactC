import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import About from './AboutComponent';
import { DISHES } from '../shared/dishes';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Contact from './ContactComponent';


const MainNavigator = createDrawerNavigator();
const HomeNavigator = createStackNavigator();
const MenuNavigator = createStackNavigator();
const AboutNavigator = createStackNavigator();
const ContactNavigator = createStackNavigator();

function HomeScreen() {
    return(
        <HomeNavigator.Navigator>
            <HomeNavigator.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: "#512DA8"
                    },
                    headerTitleStyle: {
                        color: "#ffffff"
                    },
                    headerTintColor: "#ffffff"
                }}
            />
        </HomeNavigator.Navigator>
    )
}

function MenuScreen() {
    return(
        <MenuNavigator.Navigator>
            <MenuNavigator.Screen
                name="Menu"
                component={Menu}
                options={{
                    title: "Menu",
                    headerStyle: {
                        backgroundColor: "#512DA8"
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        color: "#ffffff"            
                    }
                }}
            />
            <MenuNavigator.Screen 
                name="Dishdetail"
                component={Dishdetail}
            />
        </MenuNavigator.Navigator>
    )
}

function AboutScreen() {
    return(
        <AboutNavigator.Navigator>
            <AboutNavigator.Screen
                name="About Us"
                component={About}
                options={{
                    title: "About Us",
                    headerStyle: {
                        backgroundColor: "#512DA8"
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        color: "#ffffff"            
                    }
                }}
            />
        </AboutNavigator.Navigator>
    )
}

function ContactScreen() {
    return(
        <ContactNavigator.Navigator>
            <ContactNavigator.Screen
                name="Contact Us"
                component={Contact}
                options={{
                    title: "Contact Us",
                    headerStyle: {
                        backgroundColor: "#512DA8"
                    },
                    headerTintColor: '#ffffff',
                    headerTitleStyle: {
                        color: "#ffffff"            
                    }
                }}
            />
        </ContactNavigator.Navigator>
    )
}

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }

    render() {
        return (
            <NavigationContainer>
                <MainNavigator.Navigator 
                    drawerStyle={{
                        backgroundColor: '#D1C4E9'
                    }}
                    overlayColor="#ffffff">
                    <MainNavigator.Screen
                        name="Home"
                        component={HomeScreen}
                    />
                    <MainNavigator.Screen
                        name="About Us"
                        component={AboutScreen}
                    />
                    <MainNavigator.Screen
                        name="Menu"
                        component={MenuScreen}
                    />
                    <MainNavigator.Screen
                        name="Contact Us"
                        component={ContactScreen}
                    />
                </MainNavigator.Navigator>
            </NavigationContainer>
        )
    }
}

export default Main;