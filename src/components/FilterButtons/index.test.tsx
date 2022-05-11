import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { FilterButtons } from '.';
import { Filter } from '../../redux/features/todoSlice';

describe('<FilterButtons />', () => {
  test('renders correctly', () => {
    const mockFilterOnPress = jest.fn();

    const { getByText } = render(
      <FilterButtons
        filter={Filter.ALL}
        handleFilterOnPress={mockFilterOnPress}
      />
    );

    const all = getByText(/all/i);
    const completed = getByText(/completed/i);
    const active = getByText(/active/i);

    expect(all).toBeDefined();
    expect(completed).toBeDefined();
    expect(active).toBeDefined();

    fireEvent.press(all);
    fireEvent.press(completed);
    fireEvent.press(active);

    expect(mockFilterOnPress).toHaveBeenCalledTimes(3);
  });
});
