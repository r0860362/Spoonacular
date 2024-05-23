import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Settings from '../screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RecipeInfo from '../screens/RecipeInfo';
import RecipeIngredients from '../screens/RecipeIngredients';
import RecipeInstructions from '../screens/RecipeInstructions';
import SearchRecipes from '../screens/SearchRecipes';

import Colors from '../constants/Colors';
import Favorites from '../screens/Favorites';

const Tab = createBottomTabNavigator();
const RecipeTab = createMaterialTopTabNavigator();

const iconSize = 15;

const tabOptions = (iconLabel, iconName, headerShown = true) => ({
  tabBarActiveTintColor: Colors.tabIconActiveColor,
  tabBarInactiveTintColor: Colors.tabIconColor,

  tabBarLabel: iconLabel,

  tabBarIcon: ({ focused }) => {
    return (
      <Ionicons
        name={iconName}
        color={focused ? Colors.tabIconActiveColor : Colors.tabIconColor}
        size={iconSize}
      />
    );
  },
  headerShown: headerShown,
});

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Group activeColor={Colors.tabIconActiveColor}></Tab.Group>
      <Tab.Screen
        name="SearchRecipesNavigator"
        component={SearchRecipesNavigator}
        options={tabOptions('Recipes', 'restaurant-sharp', false)}
      />
      <Tab.Screen
        name="FavoritesNavigator"
        component={FavoritesNavigator}
        options={tabOptions('Favorites', 'heart-sharp', false)}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={tabOptions('Settings', 'settings-sharp')}
      />
    </Tab.Navigator>
  );
}

const RecipeStack = createNativeStackNavigator();
export function SearchRecipesNavigator() {
  return (
    <RecipeStack.Navigator>
      <RecipeStack.Screen name="SearchRecipes" component={SearchRecipes} />
      <RecipeStack.Screen name="RecipeDetail" component={RecipeDetailTab} />
    </RecipeStack.Navigator>
  );
}

const FavoriteStack = createNativeStackNavigator();
export function FavoritesNavigator() {
  return (
    <FavoriteStack.Navigator>
      <FavoriteStack.Screen name="Favorites" component={Favorites} />
      <FavoriteStack.Screen name="RecipeDetail" component={RecipeDetailTab} />
    </FavoriteStack.Navigator>
  );
}

export function RecipeDetailTab() {
  return (
    <RecipeTab.Navigator>
      <RecipeTab.Group
        activeColor={Colors.tabIconActiveColor}
      ></RecipeTab.Group>
      <RecipeTab.Screen
        name="RecipeInfo"
        component={RecipeInfo}
        options={tabOptions('Info', 'information-circle-sharp', false)}
      />
      <RecipeTab.Screen
        name="RecipeIngredients"
        component={RecipeIngredients}
        options={tabOptions('Ingredients', 'basket-sharp')}
      />
      <RecipeTab.Screen
        name="RecipeInstructions"
        component={RecipeInstructions}
        options={tabOptions('Instructions', 'flame-sharp')}
      />
    </RecipeTab.Navigator>
  );
}

const RootStack = createNativeStackNavigator();
export function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Tabs"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
