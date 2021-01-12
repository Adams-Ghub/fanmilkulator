import React from 'react';
import {TouchableOpacity,Text, StyleSheet, TextInput,View,ImageBackground} from 'react-native';
import {connect} from 'react-redux';
import {editPastries} from '../store/appAction'

class BookingPastriesComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:props.pastries.name,
            booked:props.pastries.booked,
            returned:props.pastries.returned,
            sold:props.pastries.sold,
            sp:props.pastries.sp,
            cp:props.pastries.cp,
            id:props.pastries.id
        }
        this.id=props.route.params.id

        this.updating = this.updating.bind(this)
        
    }

    updating =()=> {
        let newProduct={
            name:this.state.name,
            booked:this.state.booked,
            returned:this.state.returned,
            sold:String(Number(this.state.booked)-Number(this.state.returned)),
            sp:this.props.pastries.sp,
            cp:this.props.pastries.cp,
            id:this.props.pastries.id
        }
  
        this.props.editPastries(this.props.route.params.id, newProduct)
        this.props.navigation.navigate("Products")
        
    }

//     Subtraction=(text)=>{
//         this.setState({returned:text})
//         this.setState({sold: String(Number(this.state.booked)-Number(this.state.returned))})
        
// }
    
    render(){
    
        return(
            <View style={styles.container}>
                    <View style={styles.productImageContainer}>
                        <ImageBackground  style={styles.productImage} 
                                source={this.props.pastries.img}></ImageBackground>
                    </View>
                    
                    <View style={styles.productNameContainer}>
                        <Text style={styles.productNameText}>
                            {this.props.pastries.name}
                        </Text>
                    </View>
                    <View style={styles.bookedAndReturnedContainer}>
                        <View style={styles.bookedAndReturnedTextContainer}>
                            <Text style={styles.bookedAndReturnedText} >
                                Booked:
                            </Text>
                        </View>
                        <TextInput style={styles.bookedAndReturnedTextInput} 
                        placeholder="Quantity Booked"
                        clearTextOnFocus="true"
                        keyboardType="number-pad"
                        value={this.state.booked}y
                        onChangeText={(booked)=>{this.setState({booked})}}
                        >

                        </TextInput>
                    </View>

                    <View style={styles.bookedAndReturnedContainer}>
                        <View style={styles.bookedAndReturnedTextContainer}>
                            <Text style={styles.bookedAndReturnedText} >
                                Returned:
                            </Text>
                        </View >
                        <TextInput style={styles.bookedAndReturnedTextInput}
                         placeholder="Quantity Returned"
                         clearTextOnFocus="true"
                         keyboardType="number-pad"
                         value={this.state.returned}
                         onChangeText={(returned)=>this.setState({returned})}
                         >

                        </TextInput>
                    </View>

                    {/* <View style={styles.spTextInputContainer}>
                        <TextInput style={styles.spTextInput} 
                        placeholder="Quantity Sold"
                        keyboardType="number-pad"
                        value={this.state.sold}
                        onFocus={this.Subtraction}
                        >
                            
                        </TextInput>
                        <Text>
                            
                        </Text>
                    </View> */}

                    <View style={styles.saveBookingButtonContainer}>
                        <TouchableOpacity 
                            style={styles.saveBookingButton}
                            onPress={this.updating}
                            >
                            <Text style={styles.saveBookingButtonText}>
                                Save
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    };



}
const mapStateToProps=(state,ownProps)=>{
    
    return{
        
        pastries:state.pastries.find(past=>past.id===ownProps.route.params.id)
        
    
    }
}

const mapDispatchToProps=()=>{
    
    
    return{
        editPastries
        
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps()) (BookingPastriesComponent)

const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:'center',
    },
    productNameContainer:{
        marginVertical:20,
        paddingHorizontal:20,
        paddingVertical:5,
        borderBottomWidth:1,
        borderColor:"black",
        borderStyle:'solid'
    },
    productNameText:{
        fontSize:30
    },
    bookedAndReturnedContainer:{
        flexDirection:"row",
        justifyContent:'space-evenly'

    },
    bookedAndReturnedTextContainer:{
        marginVertical:15,
        
    },
    productImage:{
        width:350,
        height:200,
    },
    bookedAndReturnedText:{
        fontSize:30,
        paddingBottom:0,
        paddingTop:10

    },
    bookedAndReturnedTextInput:{
        textAlign:'center',
        fontSize:20,
        borderStyle:'solid',
        borderColor:'#ccc',
        borderBottomWidth:1,
        paddingLeft:15
    },
    saveBookingButtonContainer:{
        marginVertical:40,        
        
        

    },
    saveBookingButton:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        backgroundColor:"#071371",
        width:150,
        borderRadius:20,
    },
    saveBookingButtonText:{
        color:'white',
        fontSize:20,
    }
})