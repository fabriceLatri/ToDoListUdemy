import React from 'react';
import { View, ScrollView } from 'react-native';

import { YellowBox } from 'react-native';

import Header from './components/header';
import TaskList from './components/task-list'; 
import ButtonAddTask from './components/button-add-task';
import MenuTask from './components/menu-task';

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

    this.state = { taskList };
    console.log(this.state);
  }

  onPressButton = () => {
    this.setState({ myText: "Salut" });
    console.log('onPress');
    
  }

  displayMenuTask = (taskContent) => {
    console.log('onPress', taskContent);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header content="Liste de tâches" />
          <ScrollView>
            <TaskList taskList={this.state.taskList} onPressCallback={this.displayMenuTask}/>
          </ScrollView>
          <MenuTask />
        <ButtonAddTask />
      </View>
    );
  }
}