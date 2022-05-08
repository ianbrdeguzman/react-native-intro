import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from '../../utils/nanoid';

export enum Filter {
  ALL = 'all',
  COMPLETED = 'completed',
  ACTIVE = 'active'
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  version: number;
  createdAt: number;
  updatedAt?: number;
}

export interface InitialState {
  todos: Todo[];
  text: string;
  filter: Filter;
  query: string;
}

const initialState: InitialState = {
  todos: [],
  text: '',
  filter: Filter.ALL,
  query: ''
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: nanoid(),
          title: action.payload.trim(),
          completed: false,
          version: 1,
          createdAt: Date.now()
        }
      ];
      state.text = '';
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: string; title: string }>
    ) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.title = action.payload.title.trim();
        todo.version = todo.version + 1;
        todo.updatedAt = Date.now();
      }
      state.text = '';
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
    changeInput: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
    changeFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
    changeQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    initTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    }
  }
});

export const {
  addTodo,
  updateTodo,
  deleteTodo,
  completeTodo,
  changeInput,
  changeFilter,
  changeQuery,
  initTodos
} = todoSlice.actions;

export default todoSlice.reducer;
