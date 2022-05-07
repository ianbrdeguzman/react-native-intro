import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { changeFilter } from '../../redux/features/todoSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Filter } from '../../redux/features/todoSlice';
import Icon from 'react-native-vector-icons/AntDesign';
import { Theme, useAppTheme } from '../../context/theme';

function getIcon(filter: Filter): string {
  switch (filter) {
    case Filter.ALL:
      return 'filter';
    case Filter.COMPLETED:
      return 'checksquareo';
    case Filter.ACTIVE:
      return 'exclamationcircleo';
  }
}

export function FilterButtons() {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.todo);
  const { theme } = useAppTheme();

  return (
    <View style={styles().container}>
      {[Filter.ALL, Filter.COMPLETED, Filter.ACTIVE].map((filterItem) => {
        return (
          <TouchableOpacity
            key={filterItem}
            style={[
              theme === Theme.DARK
                ? styles(filterItem === filter).filterItemActiveDark
                : styles(filterItem === filter).filterItemActive,
              styles().filterItem
            ]}
            onPress={() => dispatch(changeFilter(filterItem))}
          >
            <Icon
              name={getIcon(filterItem)}
              size={16}
              color={filterItem === filter ? '#f5f6f7' : 'gray'}
            />
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
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    filterItem: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    filterItemActive: {
      borderRadius: 50,
      paddingVertical: 2,
      paddingHorizontal: 16,
      backgroundColor: active ? 'rebeccapurple' : 'transparent'
    },
    filterItemActiveDark: {
      borderRadius: 50,
      paddingVertical: 2,
      paddingHorizontal: 16,
      backgroundColor: active ? '#03dac6' : 'transparent'
    },
    filterItemText: {
      paddingLeft: 2,
      textTransform: 'capitalize',
      color: active ? '#f5f6f7' : 'gray'
    }
  });
