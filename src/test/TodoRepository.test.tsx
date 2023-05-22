import React from 'react';
import { render, screen } from '@testing-library/react';
import { Todo } from '../Domain/Model/Todo'
import { TodoRepository } from '../Domain/Repository/TodoRepository'

test('Deve utilizar a interface', () => {
  const todo = {
    id: 1,
    title: "Fazer um usecase",
    isComplete: false,
}

class TodoRepositoryImpl implements TodoRepository{
  dataSource: any;

  async getTodos(): Promise<Todo[]> {
    return this.dataSource.getTodos();
}

}

  //expect(this.getTodos()).toBe("1 Fazer um usecase false")
});
