import React from 'react';
import { View } from 'react-native';
import Header from './components/header';
import TaskList from './components/task-list'; 

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
  }
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

  render() {
    return (
      <View>
        <Header content="Liste de tâches" />
        <TaskList taskList={this.state.taskList} />
      </View>
    );
  }
}