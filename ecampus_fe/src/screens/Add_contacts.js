import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { Text } from "react-native-elements";
import Contacts from 'react-native-contacts';
import { PermissionsAndroid } from 'react-native';
import Contact from "./Contact";
import MultiSelect from "react-native-multiple-select";
const Add_contacts = ({navigation}) => {

    const [contacts, setContacts] = useState([]);
    const [selectedItems, setSelectedItems] =useState([])

    const requestPermission = async () => {
        const granted = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS
        )
      if (granted) {
        console.log("You can use the Storage");
        
        Contacts.getAll().then(contacts => {
            console.log(contacts[1].phoneNumbers)
            setContacts(contacts);
        })
      }
    }

    const onSelectedItemsChange = (selectedItems) => {
        setSelectedItems(selectedItems)
    }

    const keyExtractor = (item, idx) => {
        return item?.recordID?.toString() || idx.toString();
      };

      const renderItem = ({item, index}) => {
        return <Contact contact={item} />;
      };

    useEffect(() => {
        requestPermission()
    },[])

    return(
        <View>
            <Text h1>Add_contacts</Text>
            <View>
            <MultiSelect
                items={contacts}
                uniqueKey={contacts.id}
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedItems}
                selectText="Pick Team Members"
                searchInputPlaceholderText="Search users..."
                onChangeInput={ (text)=> console.log(text)}
                altFontFamily="ProximaNova-Light"
                tagRemoveIconColor="#CCC"
                tagBorderColor="green"
                hideSubmitButton
                flatListProps={{height: 200}}
                tagTextColor="green"
                selectedItemTextColor="green"
                selectedItemIconColor="green"
                itemTextColor="#000"
                displayKey="displayName"
                searchInputStyle={{ color: 'black' }}
                submitButtonColor="skyblue"
                submitButtonText="Submit"
                />
            </View>
        </View>
    )
}

export default Add_contacts
