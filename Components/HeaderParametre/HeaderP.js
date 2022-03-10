import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar
} from 'react-native';

const HeaderP =({title,name,navigation})=>{
    return(
        <View style={styles.containerTitle}>
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', paddingHorizontal: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
            <Icon name={name} color={'#fff'} size={35} />
        </TouchableOpacity>
        <View style={[{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 12 }]}>
            <Text style={[{ fontSize: 20, color: '#fff', textAlign: 'center', fontWeight: 'bold' }]}> {title} </Text>
        </View>
    </View>
</View>
    )
}
export default HeaderP

export const styles = StyleSheet.create({
    containerTitle:{
        backgroundColor: '#087',
        width: "100%",
        height: 70,
        justifyContent: 'center' 
    }

})