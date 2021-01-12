import React from 'react';
import {connect} from 'react-redux';


import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import {  useNavigation, useRoute } from '@react-navigation/native';


class ProductComponent extends React.Component{
   constructor(props){
       super(props)


       this.Subtraction= this.Subtraction.bind(this)
   }
    
  
     Subtraction=()=>{
            this.setState({sold: String(Number(this.state.booked)-Number(this.state.returned))})
        }
    
    render(){
        
       
        const {navigation}=this.props
        const {route}=this.props
    
        return(
            
                <View style={styles.body}>                
                    <View style={styles.productNameContainer}>
                        <Text style={styles.productName}>{this.props.name} </Text>
                    </View>
                    <View style={styles.productBodyContainer}>
                        <View style={styles.productImageContainer}>
                            <Image style={styles.productImage} source={this.props.img}></Image>
                        </View>
                        <View style={styles.productBookingContainer}>
                            <View style={styles.productBookingIandText}>
                                <Text style={styles.bookingText}>Booked:</Text>
                                <Text style={styles.bookingInput}> {this.props.bookedVal}</Text>
                            </View>
                            <View style={styles.productBookingIandText}>
                                <Text style={styles.bookingText}>Returned:</Text>
                                <Text style={styles.bookingInput}>{this.props.returnedVal}</Text>
                            </View>
                            <View style={styles.productBookingIandText}>
                                <Text style={styles.bookingText}>Sold:</Text>
                                <Text style={styles.bookingInput} >{this.props.soldVal}</Text>
                                    
                            </View>
                            
                        </View>
                    </View>
                </View>    
           
        )
    }
}
export default function (props){
    const navigation =useNavigation()
    const route = useRoute()
    return(
        <ProductComponent {...props} navigation={navigation} route={route}/>
    )
}
   const styles=StyleSheet.create({
    Container:{
        flex:1,
        flexDirection:'column',
        borderTopWidth:2,
        borderBottomWidth:2,
        borderColor:'black'
    },
    body:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'white',
        paddingHorizontal:20,
        paddingVertical:2,
        width:360,
        height:125
    },
    productNameContainer:{
        
    },
    productName:{
        fontSize:20,
        fontWeight:'600',
        marginBottom:5,
        borderBottomWidth:2,
        borderColor:"#ddd"
    }
    ,
    productBodyContainer:{
        flexDirection:'row',
        marginBottom:20
    },
    productBookingContainer:{
        flexDirection:'column'
    },
    productBookingIandText:{
        flexDirection:'row',
        
    },
    bookingText:{
        fontSize:20,
        marginRight:10,
    },
    bookingInput:{
        fontSize:18,
        // borderColor:'#ddd',
        // borderBottomWidth:2,
        textAlign:"center",
        
    },
    productImage:{
        width:117,
        height:70,
        
        marginRight:10,
    },
    productImageContainer:{
        borderColor:'#ddd',
        borderRightWidth:2,
        marginRight:10
    },
   
})