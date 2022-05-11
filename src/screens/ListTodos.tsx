import React, { useEffect, useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Keyboard, StyleSheet, View } from 'react-native';
import { TodoList } from '../components/TodoList';
import { Theme, useAppTheme } from '../context/theme';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { routes, RootStackParamList } from '../routes';
import { loadData, saveData } from '../utils/storage';
import { ConfirmDeleteModal } from '../components/ConfirmDeleteModal';
import { FilterButtons } from '../components/FilterButtons';
import { filterTodos } from '../utils/filter';
import { SearchBar } from '../components/SearchBar';
import { AddTodoButton } from '../components/AddTodoButton';
import {
  changeFilter,
  changeQuery,
  changeSelected,
  completeTodo,
  deleteTodo,
  Filter,
  initTodos,
  showModal,
  Todo
} from '../redux/features/todoSlice';

export default function ListTodos() {
  const dispatch = useAppDispatch();
  const { theme } = useAppTheme();
  const { todos, filter, query, selected, modal } = useAppSelector(
    (state) => state.todo
  );

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleFilterOnPress = (filter: Filter) => {
    dispatch(changeFilter(filter));
  };

  const handleSearchOnChangeText = (text: string) => {
    dispatch(changeQuery(text));
  };

  const handleSearchOnPress = () => {
    dispatch(changeQuery(query));
    Keyboard.dismiss();
  };

  const handleDeleteOnPress = (item: Todo) => {
    dispatch(showModal());
    dispatch(changeSelected(item));
  };

  const handleAddTodoOnPress = () => {
    navigation.navigate(routes.add, {});
  };

  const handleModalConfirmOnPress = () => {
    if (selected) dispatch(deleteTodo(selected.id));
    dispatch(showModal());
  };

  useEffect(() => {
    async function initialize() {
      try {
        const todos = await loadData();
        if (todos) dispatch(initTodos(todos));
      } catch (e) {
        console.warn(e);
      }
    }

    initialize();
  }, []);

  useEffect(() => {
    async function saveTodosLocally() {
      try {
        await saveData(JSON.stringify(todos));
      } catch (e) {
        console.warn(e);
      }
    }

    saveTodosLocally();
  }, [todos]);

  const filteredTodos = useMemo(
    () => filterTodos(todos, filter, query),
    [todos, filter, query]
  );

  return (
    <View style={styles(theme).container}>
      <ConfirmDeleteModal
        selected={selected}
        visible={modal}
        onRequestClose={() => dispatch(showModal())}
        handleCancleOnpress={() => dispatch(showModal())}
        handleConfirmOnPress={handleModalConfirmOnPress}
      />
      <FilterButtons
        filter={filter}
        handleFilterOnPress={handleFilterOnPress}
      />
      <SearchBar
        value={query}
        onChangeText={handleSearchOnChangeText}
        onPress={handleSearchOnPress}
      />
      <TodoList
        todos={filteredTodos}
        handleDeleteOnPress={(item) => handleDeleteOnPress(item)}
        handleCheckboxOnChange={(item) => dispatch(completeTodo(item.id))}
      />
      <AddTodoButton handleAddTodoOnPress={handleAddTodoOnPress} />
    </View>
  );
}

const styles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme === Theme.DARK ? '#000' : '#f5f6f7'
    }
  });
