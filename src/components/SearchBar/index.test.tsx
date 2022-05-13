import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { SearchBar } from '.';

describe('<SearchBar />', () => {
  test('renders correctly', () => {
    const mockOnChange = jest.fn();
    const mockOnPress = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchBar value="" onChangeText={mockOnChange} onPress={mockOnPress} />
    );

    const searchBar = getByPlaceholderText(/search/i);

    expect(searchBar).toBeDefined();

    fireEvent.changeText(searchBar, 'foo');

    expect(mockOnChange).toBeCalledTimes(1);
    expect(mockOnChange).toBeCalledWith('foo');
  });
});
