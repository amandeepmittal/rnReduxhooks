import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Text } from 'react-native'
import { IconButton, TextInput, FAB } from 'react-native-paper'
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import Header from '../components/Header';
import ImagePickerComponent from '../components/ImagePicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

function AddClient({ navigation }) {

    const [title, setTitle] = useState('')
    const [firstName, setFirstName] = useState('')
    const [middleName, setMiddleName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender0, setGender] = useState('')
    const [id0, setId0] = useState('')
    const [nationality, setNationality] = useState('')

    const [date0, setDate0] = useState(new Date(6531243))
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const [res0, setRes0] = useState('')
    //const [date1, setDate1] = useState(new Date())
    const [offOpp, setOffOpp] = useState('')
    const [addT, setAddT] = useState('')
    const [add0, setAdd0] = useState('')
    const [reg0, setReg0] = useState('')
    const [count0, setCount0] = useState('')
    const [emp0, setEmp0] = useState('')
    const [comp0, setComp0] = useState('')
    const [role0, setRole0] = useState('')

    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date0;
      setDate0(currentDate);
    };

    const titleIDs = [
      {
        label: 'Mr',
        value: 'MR'
      },
      {
        label: 'Mrs',
        value: 'MS'
      },
      {
        label: 'Ms',
        value: 'RS'
      }
    ]

    const idForms = [
        {
          label: 'Birth Certificate',
          value: 'birthCert',
        },
        {
          label: 'Driving License',
          value: 'drivLic',
        },
        {
          label: 'TRA License',
          value: 'traPin',
        },
        {
          label: 'Voters Identification',
          value: 'voteId',
        },
        {
          label: 'National Identification',
          value: 'natId',
        },
        {
          label: 'Passport Number',
          value: 'passNo',
        },
        {
          label: 'Certificate of Incorporation',
          value: 'certInc',
        },
        {
          label: 'Business Registration Number',
          value: 'busRegNo',
        },
        {
          label: 'National ID of Zanzibar',
          value: 'natIdZanz',
        },
        {
          label: 'School ID',
          value: 'schId',
        },
        {
          label: 'Introduction Letter',
          value: 'intrLet',
        },
      ];
      
      const gender = [
        {
          label: 'Male',
          value: 'M',
        },
        {
          label: 'Female',
          value: 'F',
        },
      ];
      
      const residTypes = [
        {
          label: 'Tanzania REsident',
          value: 'resTZ',
        },
        {
          label: 'Tanzanian Non-resident',
          value: 'nonRes',
        },
        {
          label: 'ForeignerResident',
          value: 'ForRes',
        },
        {
          label: 'ForeignerNonRes',
          value: 'ForNonRes',
        },
        {
          label: 'Minor Local',
          value: 'MinLoc',
        },
        {
          label: 'MinorForeign',
          value: 'MinFor',
        },
      ];
      
      const addrType = [
        {
          label: 'Resident Address',
          value: 'resAdd',
        },
        {
          label: 'Business Address',
          value: 'busAdd',
        },
        {
          label: 'Office Address',
          value: 'offAdd',
        },
        {
          label: 'Mailing Address',
          value: 'mailAdd',
        },
        {
          label: 'Home Country Address',
          value: 'homeCouAdd',
        },
      ];
      
      const emplType = [
        {
          label: 'Accountant-Registered',
          value: 'accReg'
        },
        {
          label: 'Accountant Unregistered',
          value: 'accUnreg'
        },
        {
          label: 'Account clerk',
          value: 'accCler'
        },
        {
          label: 'Actor',
          value: 'actor'
        },
        {
          label: 'Administrator Officer',
          value: 'adminOff'
        },
      ];
      
      const compType = [
        {
          label: 'Public',
          value: 'pub',
        },
        {
          label: 'Private',
          value: 'priv',
        },
        {
          label: 'Partnership',
          value: 'partn',
        },
      ];
      
      const custoRole = [
        {
          label: 'Accountant',
          value: 'acco',
        },
        {
          label: 'CEO',
          value: 'ceo',
        },
        {
          label: 'Manager',
          value: 'mng',
        },
        {
          label: 'Software Engineer',
          value: 'softEng',
        },
        {
          label: 'Owner',
          value: 'own',
        },
        {
          label: 'Pensioner',
          value: 'pension',
        },
        {
          label: 'Employed',
          value: 'empl',
        },
        {
          label: 'Minor',
          value: 'min',
        },
      ];

      function postClientData () {
      
        axios.post('http://192.168.2.116:8081/api/clients',
            {
            TitleID: title,
            FirstName: firstName,
            MiddleName: middleName,
            LastName: lastName,
            GenderID: gender0,
            IdentificationTypeID: id0,
            Nationality: nationality,
            OpenedDate: date0,
            ResidentType: res0,
            OpenedBy: offOpp,
            AddressTypeID: addT,
            Address1: add0,
            Region: reg0,
            Country: count0,
            OccupationID: emp0,
            CompanyTypeID: comp0,
            DesignationID: role0
          }
        ).then(response => {
          if(response.data.status) {
            console.log(response);
          }
        }).catch(error => {console.log(error)});
        console.log(date0)
      }

    function onSaveClient() {
        postClientData();
        
        navigation.goBack()
    }

    return (
      <>
        <Header titleText='Client Sign Up' />
        <View style={styles.container}>
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollContentContainer}>
                  <View>
                  <Text style={styles.itemPadding}>Select Title</Text>
                    <RNPickerSelect
                        items={titleIDs}
                        onValueChange={(value) => setTitle(value)} />

                  <Text style={{paddingTop: 10}}>First Name</Text>
                    <TextInput 
                        label="Enter your first name"
                        mode='outlined'
                        onChangeText={text => setFirstName(text)}
                        value={firstName}
                        style={styles.title}
                    />
                    <Text>Middle Name</Text>
                    <TextInput 
                        label="Enter your middle name"
                        mode='outlined'
                        onChangeText={text => setMiddleName(text)}
                        value={middleName}
                        style={styles.title}
                    />
                    <Text>Last Name</Text>
                    <TextInput 
                        label="Enter your Last name"
                        mode='outlined'
                        onChangeText={text => setLastName(text)}
                        style={styles.title}
                    />
                    
                    <Text style={styles.itemPadding}>Gender</Text>
                    <RNPickerSelect
                        items={gender}
                        onValueChange={(value) => setGender(value)} />

                    <Text>{gender0}</Text>

                    <Text style={styles.itemPadding}>Select Type of ID</Text>
                    <RNPickerSelect
                        items={idForms}
                        onValueChange={(value) => setId0(value)} />

                    <Text style={styles.itemPadding}>Nationality</Text>
                    <TextInput 
                        label="Enter your Nationality"
                        mode='outlined'
                        onChangeText={text => setNationality(text)}
                        value={nationality}
                        style={styles.title}
                    />

                    <Text >Select Type of Resident</Text>
                    <RNPickerSelect
                        items={residTypes}
                        onValueChange={(value) => setRes0(value)} />

                    <View paddingVertical={5} />

                    {/* Placeholder for datepicker */}
                    <Text style={styles.itemPadding}>Opened On</Text>
                    <DateTimePicker
                      mode={mode}
                      is24Hour={true}
                      display="calendar"
                      onChange={onChange}
                      value={date0}
                    />


                    <Text>Opened By</Text>
                    <TextInput 
                        label="Enter your UserID"
                        mode='outlined'
                        onChangeText={text => setOffOpp(text)}
                        value={offOpp}
                        style={styles.title}
                    />

                    <Text>Select Type of Address</Text>
                    <RNPickerSelect
                        items={addrType}
                        onValueChange={(value) => setAddT(value)}
                        />

                    <Text style={styles.itemPadding}>Enter Address</Text>
                    <TextInput 
                        label="Enter your Address"
                        mode='outlined'
                        onChangeText={text => setAdd0(text)}
                        value={add0}
                        style={styles.title}
                    />

                    <Text>Region</Text>
                    <TextInput 
                        label="Enter your Region"
                        mode='outlined'
                        onChangeText={text => setReg0(text)}
                        value={reg0}
                        style={styles.title}
                    />

                    <Text>Country</Text>
                    <TextInput 
                        label="Enter your Country"
                        mode='outlined'
                        onChangeText={text => setCount0(text)}
                        value={count0}
                        style={styles.title}
                    />

                    <Text style={styles.itemPadding}>Select Type of Employment</Text>
                    <RNPickerSelect
                        items={emplType} 
                        onValueChange={(value) => setEmp0(value)} 
                      />


                    <Text style={styles.itemPadding}>Select Company Type</Text>
                    <RNPickerSelect
                        items={compType}
                        onValueChange={(value) => setComp0(value)} />

                    <Text style={styles.itemPadding}>Select Your role at the Company</Text>
                    <RNPickerSelect
                        items={custoRole}
                        onValueChange={(value) => setRole0(value)} />
                  </View>
                  <View style={styles.itemPadding}>
                    <FAB
                          style={styles.fab}
                          small
                          icon='check'
                          disabled={firstName == '' ? true: false}
                          onPress={() => onSaveClient()}
                      />
                  </View>
                </ScrollView>
        </View>
    </>
    )
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollContainer: {
      flex: 1,
      paddingHorizontal: 15,
    },
    scrollContentContainer: {
      paddingTop: 40,
      paddingBottom: 10,
    },
    itemPadding: {
      paddingTop: 10,
      marginVertical: 10
    },
    iconButton: {
        backgroundColor: 'rgba(46, 113, 102, 0.8)',
        position: 'absolute',
        right: 0,
        top: 40,
        margin: 10
      },
    title: {
        fontSize: 24,
        marginBottom: 15,
        paddingTop: 10
    },
    text: {
        height: 300,
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 15,
        right: 0,
        bottom: 0
    }
  });
  
  export default AddClient;