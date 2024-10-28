import React from 'react';
import { View } from 'react-native';
import TodoForm from '../components/toDoForm';  
import TodoList from '../components/toDoList';  

const Index = () => {
  return (
    <View>
      <TodoList />
      <TodoForm />
    </View>
  );
};

export default Index;
