import React from 'react';
import { APP_COLORS } from '../../styles/color';
import ActionButton from 'react-native-action-button';
import  { Icon } from 'react-native-elements';

const ButtonAddTask = () => {
    return (
    <ActionButton
        buttonColor={APP_COLORS.primaryAction}
        icon={<Icon color={APP_COLORS.primaryText} name={'add'} />}
        onPress={() => onPress()}
    />
    )
};

function onPress() {
    console.log('add');
}

export default ButtonAddTask;