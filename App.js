import React from 'react';
import { View, ScrollView } from 'react-native';

import Header from './components/header';
import TaskList from './components/task-list'; 
import ButtonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';
import _ from 'lodash';

console.disableYellowBox = true

const taskList = [
  {
    id: 0,
    content: 'Aller voir Sébastien',
    status: 'En cours'
  },
  {
    id: 1,
    content: 'Se brosser les dents',
    status: 'En cours'
  },
  {
    id: 2,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 3,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 4,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 5,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 6,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 7,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 8,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 9,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 10,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 11,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 12,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 13,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 14,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
  {
    id: 15,
    content: 'Faire du ménage',
    status: 'Terminé'
  },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList,
      isMenuTaskVisible: false,
      currentTask: {}
    };
  }

  onPressButton = () => {
    this.setState({ myText: "Salut" });
    console.log('onPress');
    
  }

  toggleMenuTaskVisibility = task => {
    this.setState({ 
      isMenuTaskVisible: !this.state.isMenuTaskVisible,
      currentTask: task === undefined ? {} : task
    });
  }

  displayMenuTask = (taskContent) => {
    console.log('onPress', taskContent);
  }

  deleteCurrentTask = () => {
    const index = _.findIndex(this.state.taskList, {id: this.state.currentTask.id});
    const list = this.state.taskList;

    list.splice(index, 1);
    this.setState({ taskList: list, currentTask: {} });
    this.toggleMenuTaskVisibility();
  }

  render() { 
    let { isMenuTaskVisible } = this.state;   
    return (
      <View style={{ flex: 1 }}>
        <Header content="Liste de tâches" />
          <ScrollView>
            <TaskList taskList={this.state.taskList} onPressCallback={this.toggleMenuTaskVisibility}/>
          </ScrollView>
          <MenuTask isVisible={ isMenuTaskVisible } onDisappearCallback={this.toggleMenuTaskVisibility} onDeleteCallback={this.deleteCurrentTask} onChangeStatusCallback />
        <ButtonAddTask />
      </View>
    );
  }
}