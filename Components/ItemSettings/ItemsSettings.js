import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { height, width } = Dimensions.get('window');


const ItemsSettings = ({ name, title }) => {
    return (
        <View style={styles.container}>
            <View >
                <Icon name={name} color={'#087'} size={34} />
            </View>
            <View>
                <Text style={{ fontSize: 16, color: '#000', marginLeft: 10 }}>{title} </Text>
            </View>
        </View>
    )

}

export default ItemsSettings;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%', alignSelf: 'center',
        backgroundColor: '#eee',
        padding: 18,
    }
})