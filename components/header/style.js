import { StyleSheet } from 'react-native';
import { APP_COLORS } from '../../styles/color';

export const styles = StyleSheet.create({
    subHeader: {
        height: 50,
        backgroundColor: APP_COLORS.darkPrimary
    },
    header: {
        backgroundColor: APP_COLORS.primary,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: APP_COLORS.shadow,
        shadowOpacity: 0.2,
        shadowOffset: {height: 10 }
    },
    text: {
        color: APP_COLORS.primaryText,
        fontSize: 30      
    }
})