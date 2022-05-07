export const routes = {
  list: 'Todos - List',
  add: 'Todos - Add',
  edit: 'Todos - Edit'
} as const;

export type RootStackParamList = {
  [routes.list]: {};
  [routes.add]: {};
  [routes.edit]: { todoId: number };
};
