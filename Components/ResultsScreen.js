import React from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet,Text, TextInput, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class ResultsScreen extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let totalcp=0;
        let totalsp=0;
        let pastriesTotalSalescp=0;
        let pastriesTotalSalessp=0
           for(var i=0;i<this.props.product.length;i++){
               
                    totalcp=totalcp+(Number(this.props.product[i].cp)*Number(this.props.product[i].sold))
                    totalsp=totalsp+(Number(this.props.product[i].sp)*Number(this.props.product[i].sold))
                           
           }

           for(var i=0;i<this.props.pastries.length;i++){
               
            pastriesTotalSalescp=pastriesTotalSalescp+(Number(this.props.pastries[i].cp)*Number(this.props.pastries[i].sold))
            pastriesTotalSalessp=pastriesTotalSalessp+(Number(this.props.pastries[i].sp)*Number(this.props.pastries[i].sold))
                   
   }

          
        return(
            <View style={styles.container}>
                <View style={styles.structuralCategorySection}>
                    <Text style={styles.categoryHeader}>Fanmilk Products</Text>
                    <View style={styles.vendorAgentPayContainer}>
                        <Text style={styles.paySectionText}>Amount due Vendor:</Text>
                        <Text style={styles.amtInCedisText} >GHS {(totalsp-totalcp).toFixed(2)}</Text>
                    </View>
                    <View style={styles.vendorAgentPayContainer}>
                        <Text style={styles.paySectionText}>Amount due Agent:</Text>
                        <Text style={styles.amtInCedisText} >GHS {totalcp.toFixed(2)}</Text>
                    </View>
                </View>

                <View style={styles.structuralCategorySection}>
                    <Text style={styles.categoryHeader}>Pastries</Text>
                    <View style={styles.vendorAgentPayContainer}>
                        <Text style={styles.paySectionText}>Amount due Vendor:</Text>
                        <Text style={styles.amtInCedisText} >GHS {(0.3*pastriesTotalSalessp).toFixed(2)}</Text>
                    </View>
                    <View style={styles.vendorAgentPayContainer}>
                        <Text style={styles.paySectionText}>Amount due Agent:</Text>
                        <Text style={styles.amtInCedisText} >GHS {(0.7*pastriesTotalSalessp).toFixed(2)}</Text>
                    </View>
                </View>

                <View style={styles.structuralCategorySection}>
                    <Text style={styles.categoryHeader}>Total</Text>
                    <View style={styles.vendorAgentPayContainer}>
                        <Text style={styles.paySectionText}>Amount due Vendor:</Text>
                        <Text style={styles.amtInCedisText}>GHS {((totalsp-totalcp)+(0.3*pastriesTotalSalessp)).toFixed(2)} </Text>
                    </View>
                    <View style={styles.vendorAgentPayContainer}>
                        <Text style={styles.paySectionText}>Amount due Agent:</Text>
                        <Text style={styles.amtInCedisText}>GHS {(totalcp+(0.7*pastriesTotalSalessp)).toFixed(2)}</Text>
                    </View>
                </View>

                <View style={styles.okayButtonContainer}>
                        {/* <TouchableOpacity style={styles.okayButton}
                                // onPress={this.props.navigation.navigate('Products')}   
                                 >
                            <Text style={styles.okButtonText}>
                                Ok
                            </Text>
                        </TouchableOpacity> */}
                        
                </View>
            </View>
        )
    }
}
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
export default connect(mapStateToProps, mapDispatchToProps)(ResultsScreen)
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:15
    },

    structuralCategorySection:{
        marginBottom:35,
    },
    categoryHeader:{
        fontSize:27,
        fontWeight:'700',
        borderBottomWidth:2,
        borderColor:'#34abe0',
        
    },
    
    vendorAgentPayContainer:{
        flexDirection:'row',
    },
    paySectionText:{
        fontSize:20,
        marginRight:10,
        fontWeight:'600'
    },
    amtInCedisText:{
        fontSize:20,
        fontWeight:'600'
    },
    okayButtonContainer:{
        justifyContent:'center',
        alignItems:'center',

    },
    okayButton:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:10,
        backgroundColor:"#071371",
        width:70,
        borderRadius:20,
    },
    okButtonText:{
        color:'white',
        fontSize:20,
    }
})