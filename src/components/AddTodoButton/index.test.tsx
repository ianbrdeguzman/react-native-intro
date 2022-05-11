import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { AddTodoButton } from '.';

describe('<AddTodoButton />', () => {
  test('renders correctly', () => {
    const mockOnPress = jest.fn();

    const { getByTestId } = render(
      <AddTodoButton handleAddTodoOnPress={mockOnPress} />
    );

    const button = getByTestId('add-button');
    fireEvent.press(button);

    expect(button).toBeDefined();
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});
