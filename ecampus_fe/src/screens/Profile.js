import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

const Profile = ({navigation}) => {

    const user = navigation.getParam('user')

    return(
        <View>
            
            <Text h1>Hey {user.name}</Text>
            <View style={{padding: 2}}>
            <TouchableOpacity onPress={() => navigation.navigate('Add_contacts')} style={{justifyContent: "center", alignItems: 'center',
            borderRadius: 20,
            backgroundColor:"skyblue", width: "100%"}}>
                <View>
                    <Text h3 style={{padding: 5}}>Add Contacts</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
        
    )
    
}

export default Profile