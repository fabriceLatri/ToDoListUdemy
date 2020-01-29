import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './style';

const Header = ({ content }) => {
return ( 
    <View>
        <View style={ styles.subHeader } />
        <View style={ styles.header }>
            <Text style={ styles.text }>{ content }</Text>
        </View>
    </View>
)};

export default Header;