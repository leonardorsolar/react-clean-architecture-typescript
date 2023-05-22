import React from 'react';
import { render, screen } from '@testing-library/react';
import { Todo } from '../Domain/Model/Todo'

test('Deve tipar uma função para retornar o obejto desejado', () => {
  const todo = {
    id: 1,
    title: "Fazer um usecase",
    isComplete: false,
}

function getTodoDetail(todo: Todo) {
  return `${todo.id} ${todo.title} ${todo.isComplete}`;
}

  expect(getTodoDetail(todo)).toBe("1 Fazer um usecase false")
});
