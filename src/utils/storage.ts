import AsyncStorage from '@react-native-async-storage/async-storage';
import { Todo } from '../redux/features/todoSlice';

export const saveData = async (value: string) => {
  try {
    await AsyncStorage.setItem('mytodoapp', value);
  } catch (e) {
    console.warn(e);
  }
};

export const loadData = async () => {
  try {
    const stringData = await AsyncStorage.getItem('mytodoapp');
    return stringData !== null ? (JSON.parse(stringData) as Todo[]) : null;
  } catch (e) {
    console.warn(e);
  }
};
