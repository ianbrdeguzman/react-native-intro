import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ConfirmDeleteModal } from '.';
import { Todo } from '../../redux/features/todoSlice';

describe('<ConfirmDeleteModal />', () => {
  test('renders correctly', () => {
    const mockTodo: Todo = {
      id: 'foo',
      title: 'bar',
      completed: false,
      version: 1,
      createdAt: Date.now()
    };
    const mockOnClose = jest.fn();
    const mockOnCancel = jest.fn();
    const mockOnConfirm = jest.fn();

    const { getByTestId, getByText } = render(
      <ConfirmDeleteModal
        selected={mockTodo}
        visible
        onRequestClose={mockOnClose}
        handleCancleOnpress={mockOnCancel}
        handleConfirmOnPress={mockOnConfirm}
      />
    );

    const modal = getByTestId('modal');
    const title = getByText(/do you want to delete this todo/i);
    const text = getByText(/bar/);
    const cancel = getByText(/cancel/i);
    const confirm = getByText(/confirm/i);

    expect(modal).toBeDefined();
    expect(title).toBeDefined();
    expect(text).toBeDefined();
    expect(cancel).toBeDefined();
    expect(confirm).toBeDefined();

    fireEvent.press(cancel);
    fireEvent.press(confirm);

    expect(mockOnCancel).toHaveBeenCalledTimes(1);
    expect(mockOnConfirm).toHaveBeenCalledTimes(1);
  });

  test('does not render when not visible', () => {
    const mockOnClose = jest.fn();
    const mockOnCancel = jest.fn();
    const mockOnConfirm = jest.fn();

    const { getByTestId } = render(
      <ConfirmDeleteModal
        selected={null}
        visible={false}
        onRequestClose={mockOnClose}
        handleCancleOnpress={mockOnCancel}
        handleConfirmOnPress={mockOnConfirm}
      />
    );

    const modal = getByTestId('modal');

    expect(modal.props.visible).toEqual(false);
  });
});
