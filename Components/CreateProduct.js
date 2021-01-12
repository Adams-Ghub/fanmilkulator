import { ThemeProvider } from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity,Text, StyleSheet, TextInput,View} from 'react-native';
import { connect } from 'react-redux';
import {addProduct} from '../store/appAction'

class CreateProduct extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            booked:"0",
            returned:"0",
            sold:"0",
            sp:"",
            cp:"",
        }
        this.AddingProduct=this.AddingProduct.bind(this)
    }

    AddingProduct=()=>{
        const newproduct= {
            name:this.state.name,
            booked:this.state.booked,
            returned:this.state.returned,
            sold:this.state.sold,
            sp:this.props.product.sp,
            cp:this.props.product.cp,
            id:this.props.product.id
        }

        this.props.addProduct(newproduct)

        this.props.navigation.navigate('Products')
        
    }

    render(){

       
      
        
        return(
            <View style={styles.container}>
                    <View style={styles.productNameTextInputContainer}>
                        <TextInput style={styles.spTextInput} 
                        placeholder="Product Name"
                        value={this.state.name}
                        onChangeText={(text)=>{this.setState({name:text})}}
                        >

                        </TextInput>
                    </View>

                    <View style={styles.cpTextInputContainer}>
                        <TextInput style={styles.spTextInput}
                         placeholder="Cost Price"
                         value={this.state.cp}
                         onChangeText={(text)=>{this.setState({cp:text})}}
                         >

                        </TextInput>
                    </View>

                    <View style={styles.spTextInputContainer}>
                        <TextInput style={styles.spTextInput} 
                        placeholder="Selling Price"
                        value={this.state.sp}
                        onChangeText={(text)=>{this.setState({sp:text})}}
                        >

                        </TextInput>
                    </View>

                    <View style={styles.addProductButtonContainer}>
                        <TouchableOpacity 
                            style={styles.addProductButton}
                            onPress={this.AddingProduct}>
                            <Text>
                                Add product
                            </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }

    


}
function mapStateToProps(state){
    return{
        product:state.products
    }
}

function mapDispatchToProps(){
    return{
        addProduct
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProduct)
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:"column",
        alignItems:'center',
    }
})