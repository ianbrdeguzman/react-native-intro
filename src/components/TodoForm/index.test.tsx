import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { TodoForm } from '.';

describe('<TodoForm />', () => {
  test('renders correctly add todo form', () => {
    const mockOnChange = jest.fn();
    const mockOnPress = jest.fn();

    const { getByText, getByPlaceholderText } = render(
      <TodoForm
        todo={undefined}
        value=""
        onChangeText={mockOnChange}
        onPress={mockOnPress}
      />
    );

    const title = getByText(/add new todo/i);
    const input = getByPlaceholderText(/title/i);
    const button = getByText(/save/i);

    expect(title).toBeDefined();
    expect(input).toBeDefined();
    expect(button).toBeDefined();

    fireEvent.changeText(input, 'foo');

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('foo');

    fireEvent.press(button);

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  test('renders correctly edit todo form', () => {
    const mockOnChange = jest.fn();
    const mockOnPress = jest.fn();
    const mockCreatedAt = 1652465498245;

    const { getByText, getByPlaceholderText, getByRole } = render(
      <TodoForm
        todo={{
          id: 'foo',
          title: 'bar',
          completed: false,
          version: 1,
          createdAt: mockCreatedAt,
          updatedAt: undefined
        }}
        value=""
        onChangeText={mockOnChange}
        onPress={mockOnPress}
      />
    );

    const title = getByText(/edit todo/i);
    const id = getByPlaceholderText(/foo/i);
    const todo = getByPlaceholderText(/bar/i);
    const switchBtn = getByRole('switch');

    expect(title).toBeDefined();
    expect(id).toBeDefined();
    expect(todo).toBeDefined();
    expect(switchBtn).toBeDefined();

    fireEvent(switchBtn, 'valueChange', true);

    expect(switchBtn.props.value).toBe(true);

    const version = getByPlaceholderText('1');
    const createdAt = getByPlaceholderText(/2022/i);
    const updatedAt = getByPlaceholderText(/n\/a/i);

    expect(version).toBeDefined();
    expect(createdAt).toBeDefined();
    expect(updatedAt).toBeDefined();
  });
});
