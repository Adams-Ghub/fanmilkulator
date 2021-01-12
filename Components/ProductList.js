import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {addProduct} from '../store/appAction';
import {View, Textview,TouchableOpacity,ScrollView, TextInput, StyleSheet,Text} from 'react-native';
import ProductComponent from './ProductComponent';
import { NavigationContainer } from '@react-navigation/native';



class  ProductList extends Component {
    constructor(props){
        super(props)
    }

        render(){
           
           
            return(
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {
                            this.props.product.map((prod)=>{
                                
                                 return(   
                                     
                                <TouchableOpacity
                                    style={styles.container}
                                    onPress={()=>{this.props.navigation.navigate("Booking",{id:prod.id})}}
                                   >
                                        <ProductComponent 
                                            name={prod.name} 
                                            bookedVal={prod.booked} 
                                            returnedVal={prod.returned}
                                            soldVal={String(Number(prod.booked)-Number(prod.returned))} 
                                            img={prod.img}                                                                                                           
                                            key={prod.id} />
                                  </TouchableOpacity>          
                                 )
                                
                            })
                        }
                    <View style={styles.pastriesTextContainer}> 
                        <Text style={styles.pastriesText}>
                            Pastries
                        </Text>
                    </View>

                    <View>
                        {
                                this.props.pastries.map((past)=>{
                                    
                                    return(   
                                        
                                    <TouchableOpacity
                                        style={styles.container}
                                        onPress={()=>{this.props.navigation.navigate("Booking Pastries",{id:past.id})}}
                                    >
                                            <ProductComponent 
                                                name={past.name} 
                                                bookedVal={past.booked} 
                                                returnedVal={past.returned}
                                                soldVal={String(Number(past.booked)-Number(past.returned))}   
                                                img={past.img}                                                                                                          
                                                key={past.id} />
                                    </TouchableOpacity>          
                                    )
                                    
                                })
                            }
                    </View>
                    </ScrollView>   
                        <View style={styles.calculateButtonContainer}>
                            <TouchableOpacity 
                                style={styles.calculateButton}
                                onPress={()=>{this.props.navigation.navigate("Results")}}    >
                                <Text style={styles.calculateButtonText} >Calculate</Text>
                            </TouchableOpacity>
                        </View>
                        
                    
      
                </View>
            )
        }
    }
    
  
    const styles=StyleSheet.create({
        container:{
            flex:1,
            flexDirection:'column',
            marginVertical:10,
            marginHorizontal:10,

        },
        headerContainer:{
            flexDirection:'row',
            justifyContent:'space-between'
        },
        headerText:{
            fontSize:20,
            fontWeight:'600'
        },
        calculateButton:{
            backgroundColor:'#0646f4',
            borderRadius:20,
            marginTop:10,
            justifyContent:'center',
            alignItems:'center',
          },
          calculateButtonContainer:{
            justifyContent:'center',
            alignItems:'center',
            marginTop:20,
          },
          calculateButtonText:{
            color:'white',
            fontSize:22,
            paddingHorizontal:16,
            paddingVertical:5
            
          },
          pastriesTextContainer:{
              marginTop:30,
              borderStyle:'solid',
              borderBottomWidth:1,
              borderColor:'#071371'
          },
          pastriesText:{
            color:'#071371',
            fontSize:25,
            fontWeight:'500',
            textAlign:'left',
            paddingLeft:20
          },
    })
    

    function mapStateToProps(state){
        
        return{
            product:state.products,
            pastries:state.pastries
        }
    }
     
    function mapDispatchToProps(){
        return{
        }
    }
        
      

     export default connect(mapStateToProps, mapDispatchToProps)(ProductList);