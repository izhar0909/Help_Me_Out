import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import {Linking} from 'react-native'
const Motoraccident = ({navigation}) => {
    return(
        <View>
            <Text h1>Motoraccident</Text>
            <TouchableOpacity onPress={() => {Linking.openURL(`tel:${100}`)}}>
                <Text h2 >Call</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Motoraccident