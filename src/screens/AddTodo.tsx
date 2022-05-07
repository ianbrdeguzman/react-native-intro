import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { TodoForm } from '../components/TodoForm';
import { addTodo, changeInput } from '../redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { routes } from '../routes';
import { RootStackParamList } from '../routes';

export default function AddTodo() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useAppDispatch();
  const { text } = useAppSelector((state) => state.todo);

  const handleOnPress = () => {
    if (!text) return;
    dispatch(addTodo(text));
    navigation.navigate(routes.list, {});
  };

  return (
    <View style={{ flex: 1 }}>
      <TodoForm
        value={text}
        onChangeText={(text) => dispatch(changeInput(text))}
        onPress={handleOnPress}
      />
    </View>
  );
}
