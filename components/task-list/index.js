import React from 'react';
import { List, ListItem } from 'react-native-elements';
import { View } from 'react-native';

const TaskList = ({ taskList }) => {
    return (
    <View>
        { taskList.map((task) => {
        return (
            <ListItem 
                key={task.id} 
                title={task.content}  
                bottomDivider
                badge={{ value: task.status }}
            />
        )
    }) }
    </View>
    )};

export default TaskList;
