import React from 'react';
import { List, ListItem } from 'react-native-elements';
import { View } from 'react-native';
import { TASK } from '../../model';
import { APP_COLORS } from '../../styles/color';

const TaskList = ({ taskList, onPressCallback }) => {
    return (
    <View>
        { taskList.map((task) => {
        return (
            <ListItem 
                key={task.id} 
                title={task.content}
                onPress={() => onPressCallback(task.content)}
                bottomDivider
                badge={{ 
                    value: task.status,
                    badgeStyle: {
                        backgroundColor: task.status === TASK.todoStatus ? APP_COLORS.lightPrimaryColor : APP_COLORS.divider 
                    }
                }}
            />
        )
    }) }
    </View>
    )};

export default TaskList;
