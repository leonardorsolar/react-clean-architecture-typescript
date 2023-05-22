import React from 'react';
import { render, screen } from '@testing-library/react';
import { Todo } from '../Domain/Model/Todo'

test('renders learn react link', () => {
  const todo = {
    id: 1,
    title: "Fazer um usecase",
    isComplete: false,
}

function getTodoDetail(todo: Todo) {
  return `${todo.id} ${todo.title} ${todo.isComplete}`;
}

console.log(getTodoDetail(todo));

  expect(getTodoDetail(todo)).toBe("1 Fazer um usecase false")
});
