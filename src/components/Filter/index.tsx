import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { changeFilter } from '../../redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Filter } from '../../redux/features/todoSlice';

export function FilterGroup() {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.todo);

  return (
    <View style={styles().container}>
      {[Filter.ALL, Filter.COMPLETED, Filter.ACTIVE].map((filterItem) => {
        return (
          <TouchableOpacity
            key={filterItem}
            style={styles(filterItem === filter).filterItem}
            onPress={() => dispatch(changeFilter(filterItem))}
          >
            <Text style={styles(filterItem === filter).filterItemText}>
              {filterItem}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = (active?: boolean) =>
  StyleSheet.create({
    container: {
      marginTop: 16,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    filterItem: {
      borderRadius: 50,
      paddingVertical: 2,
      paddingHorizontal: 16,
      backgroundColor: active ? 'salmon' : undefined
    },
    filterItemText: {
      textTransform: 'capitalize',
      color: active ? 'white' : 'gray'
    }
  });
