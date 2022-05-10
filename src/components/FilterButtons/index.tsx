import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Theme, useAppTheme } from '../../context/theme';
import { Filter } from '../../redux/features/todoSlice';
import Icon from 'react-native-vector-icons/AntDesign';
import GlobalStyles from '../../utils/GlobalStyles';

interface FilterButtonsProps {
  filter: Filter;
  handleFilterOnPress: (filterItem: Filter) => void;
}

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

export function FilterButtons({
  filter,
  handleFilterOnPress
}: FilterButtonsProps) {
  const { theme } = useAppTheme();

  return (
    <View style={styles({ theme }).container}>
      {[Filter.ALL, Filter.COMPLETED, Filter.ACTIVE].map((filterItem) => {
        const active = filter === filterItem;
        return (
          <TouchableOpacity
            key={filterItem}
            style={[
              styles({ active, theme }).filterItem,
              styles({ active, theme }).filterItemActive
            ]}
            onPress={() => handleFilterOnPress(filterItem)}
          >
            <Icon
              name={getIcon(filterItem)}
              size={16}
              color={active ? '#f5f6f7' : 'gray'}
            />
            <Text
              style={[
                GlobalStyles(theme).font,
                styles({ active, theme }).filterItemText
              ]}
            >
              {filterItem}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

interface StyleProps {
  active?: boolean;
  theme: Theme;
}

const styles = ({ active, theme }: StyleProps) =>
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
      backgroundColor:
        active && theme === Theme.LIGHT
          ? 'rebeccapurple'
          : active && theme === Theme.DARK
          ? '#03dac6'
          : 'transparent'
    },
    filterItemText: {
      paddingLeft: 2,
      textTransform: 'capitalize',
      color: active ? '#f5f6f7' : 'gray'
    }
  });
