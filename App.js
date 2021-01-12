
import React from 'react';
import { ScrollView, StyleSheet} from 'react-native';
import BookingComponent from './Components/BookingComponent'

import ResultsScreen from './Components/ResultsScreen';

import {applyMiddleware, createStore} from 'redux';
import appReducer from './store/appReducer';
import thunk from 'redux-thunk';
import {Provider } from 'react-redux';
import ProductList from './Components/ProductList';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {View} from 'react-native';
import ProductComponent from './Components/ProductComponent';
import CreateProduct from './Components/CreateProduct';
import BookingPastriesComponent from './Components/BookingPastriesComponent';


const Stack=createStackNavigator()
const store= createStore(appReducer, applyMiddleware(thunk));
class  App extends React.Component {
       
    
  render(){
    
  return (
    
    <Provider store={store}>
          <NavigationContainer >            
              <Stack.Navigator>
              
                <Stack.Screen name="Products" component={ProductList}  />
                <Stack.Screen name="Booking" component={BookingComponent}/>
                <Stack.Screen name="Creating" component ={CreateProduct}/>
                <Stack.Screen name="Booking Pastries" component={BookingPastriesComponent}/>
                <Stack.Screen name="Results" component={ResultsScreen} />
               
                                
              </Stack.Navigator>                  
          </NavigationContainer>        
      </Provider>  
   
      
    );
  }
}

export default App



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal:20,
    marginVertical:60,
  },
  
});
