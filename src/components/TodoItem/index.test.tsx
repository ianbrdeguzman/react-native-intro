import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { TodoItem } from '.';

describe('<TodoItem />', () => {
  test('renders correctly', () => {
    const mockOnDelete = jest.fn();
    const mockOnEdit = jest.fn();
    const mockOnCheckbox = jest.fn();

    const { getByRole, getByText, getByTestId } = render(
      <TodoItem
        item={{
          id: 'foo',
          title: 'bar',
          completed: false,
          version: 1,
          createdAt: 1652465498245,
          updatedAt: undefined
        }}
        handleDeleteOnPress={mockOnDelete}
        handleEditOnPress={mockOnEdit}
        handleCheckboxOnChange={mockOnCheckbox}
      />
    );

    const checkbox = getByRole('checkbox');
    const title = getByText(/bar/i);
    const editBtn = getByTestId('edit-button');
    const deleteBtn = getByTestId('delete-button');

    expect(checkbox).toBeDefined();
    expect(title).toBeDefined();
    expect(editBtn).toBeDefined();
    expect(deleteBtn).toBeDefined();

    fireEvent.press(checkbox);
    fireEvent.press(editBtn);
    fireEvent.press(deleteBtn);

    expect(mockOnCheckbox).toHaveBeenCalledTimes(1);
    expect(mockOnEdit).toHaveBeenCalledTimes(1);
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });
});
