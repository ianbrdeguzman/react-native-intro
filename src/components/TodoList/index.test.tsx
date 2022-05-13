import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TodoList } from '.';

describe('<TodoList />', () => {
  test('renders correctly with 0 todos', () => {
    const mockOnDelete = jest.fn();
    const mockOnCheckbox = jest.fn();

    const { getByText } = render(
      <NavigationContainer>
        <TodoList
          todos={[]}
          handleDeleteOnPress={mockOnDelete}
          handleCheckboxOnChange={mockOnCheckbox}
        />
      </NavigationContainer>
    );

    const text = getByText(/no todos/i);
    expect(text).toBeDefined();
  });

  test('renders correctly all todos', () => {
    const mockOnDelete = jest.fn();
    const mockOnCheckbox = jest.fn();

    const { getAllByTestId } = render(
      <NavigationContainer>
        <TodoList
          todos={[
            {
              id: '1',
              title: 'foo',
              completed: false,
              version: 1,
              createdAt: 1652465498245,
              updatedAt: undefined
            },
            {
              id: '2',
              title: 'bar',
              completed: false,
              version: 1,
              createdAt: 1652465498246,
              updatedAt: undefined
            },
            {
              id: '3',
              title: 'baz',
              completed: false,
              version: 1,
              createdAt: 1652465498247,
              updatedAt: undefined
            }
          ]}
          handleDeleteOnPress={mockOnDelete}
          handleCheckboxOnChange={mockOnCheckbox}
        />
      </NavigationContainer>
    );

    const todos = getAllByTestId('todo-item');
    expect(todos).toHaveLength(3);
  });
});
