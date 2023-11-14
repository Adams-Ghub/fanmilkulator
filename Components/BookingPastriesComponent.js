import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  View,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { editPastries } from '../store/appAction';

const BookingPastriesComponent = ({ pastries, route, editPastries, navigation }) => {
  const [name, setName] = useState(pastries.name);
  const [booked, setBooked] = useState(pastries.booked);
  const [returned, setReturned] = useState(pastries.returned);

  const updating = () => {
    const newProduct = {
      name,
      booked,
      returned,
      sold: String(Number(booked) - Number(returned)),
      sp: pastries.sp,
      cp: pastries.cp,
      id: pastries.id,
    };

    editPastries(route.params.id, newProduct);
    navigation.navigate('Products');
  };

  return (
    <View style={styles.container}>
      <View style={styles.productImageContainer}>
        <ImageBackground style={styles.productImage} source={pastries.img}></ImageBackground>
      </View>

      <View style={styles.productNameContainer}>
        <Text style={styles.productNameText}>{pastries.name}</Text>
      </View>
      <View style={styles.bookedAndReturnedContainer}>
        <View style={styles.bookedAndReturnedTextContainer}>
          <Text style={styles.bookedAndReturnedText}>Booked:</Text>
        </View>
        <TextInput
          style={styles.bookedAndReturnedTextInput}
          placeholder="Quantity Booked"
          clearTextOnFocus={true}
          keyboardType="number-pad"
          value={booked}
          onChangeText={(text) => setBooked(text)}
        />
      </View>

      <View style={styles.bookedAndReturnedContainer}>
        <View style={styles.bookedAndReturnedTextContainer}>
          <Text style={styles.bookedAndReturnedText}>Returned:</Text>
        </View>
        <TextInput
          style={styles.bookedAndReturnedTextInput}
          placeholder="Quantity Returned"
          clearTextOnFocus={true}
          keyboardType="number-pad"
          value={returned}
          onChangeText={(text) => setReturned(text)}
        />
      </View>

      <View style={styles.saveBookingButtonContainer}>
        <TouchableOpacity style={styles.saveBookingButton} onPress={updating}>
          <Text style={styles.saveBookingButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    pastries: state.pastries.find((past) => past.id === ownProps.route.params.id),
  };
};

const mapDispatchToProps = {
  editPastries,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingPastriesComponent);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  productNameContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
  },
  productNameText: {
    fontSize: 30,
  },
  bookedAndReturnedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bookedAndReturnedTextContainer: {
    marginVertical: 15,
  },
  productImage: {
    width: 350,
    height: 200,
  },
  bookedAndReturnedText: {
    fontSize: 30,
    paddingBottom: 0,
    paddingTop: 10,
  },
  bookedAndReturnedTextInput: {
    textAlign: 'center',
    fontSize: 20,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 15,
  },
  saveBookingButtonContainer: {
    marginVertical: 40,
  },
  saveBookingButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#071371',
    width: 150,
    borderRadius: 20,
  },
  saveBookingButtonText: {
    color: 'white',
    fontSize: 20,
  },
});
