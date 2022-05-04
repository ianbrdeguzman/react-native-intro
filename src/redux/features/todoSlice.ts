import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface InitialState {
  todos: Todo[];
  text: string;
}

const initialState: InitialState = {
  todos: [
    { id: 0, title: 'buy groceries', completed: false },
    { id: 1, title: 'wash car', completed: false },
    { id: 2, title: 'study react native', completed: false }
  ],
  text: ''
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: state.todos.length + 1,
          title: action.payload,
          completed: false
        }
      ];
      state.text = '';
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    changeInput: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    }
  }
});

export const { addTodo, deleteTodo, completeTodo, changeInput } =
  todoSlice.actions;

export default todoSlice.reducer;
