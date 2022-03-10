import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icona from 'react-native-vector-icons/Entypo';
const { height, width } = Dimensions.get('window');

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Dimensions
} from 'react-native';

const HeaderAPP = ({ title, name, navigation }) => {
    return (
        <View>
            <View style={{ backgroundColor: '#fff' }}>
                <View style={styles.HeaderContainer}>
                    <View style={{ backgroundColor: '#f4f4f4', borderColor: '#087', borderWidth: .8, borderRadius: 5,marginLeft:10 }}>
                        <Icona name={"menu"} color={'#087'} size={35} style={{ paddingHorizontal: 3, paddingVertical: 2, }}
                            onPress={() => navigation.toggleDrawer()} />
                    </View>
                    <Text style={styles.TitelHeader}> {title}</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Icon name={name} color={'#087'} size={25} style={{ marginHorizontal: 15 }} />
                    </View>
                </View>
            </View>
        </View>
    )
}
export default HeaderAPP

export const styles = StyleSheet.create({
    containerTitle: {
        backgroundColor: '#087',
        width: "100%",
        height: 80,
        justifyContent: 'center'
    }, TitelHeader: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold'
    }, HeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor: '#f4f4f4',
        backgroundColor: '#cdd',
        shadowColor: '#ccc',
        elevation: 12,
        shadowRadius: 30,
        shadowOffset: { width: 156, height: 13 },
        alignSelf: 'center',
        width: width * 1,
        paddingLeft: 10,
        height: height * .085,
        justifyContent:'space-between'
    }

})