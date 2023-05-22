# Clean Architecture: Typescript and React

Ao empregar uma arquitetura limpa, você pode projetar aplicativos com acoplamento muito baixo e independente de detalhes técnicos de implementação, como bancos de dados e estruturas. Dessa forma, o aplicativo se torna fácil de manter e flexível para mudar. Também se torna intrinsecamente testável.

## Estrutura de pastas

A estrutura de pastas/grupos do projeto assume a seguinte forma:

├── Core
├── Data
├── Domain
└── Presentation

# Camada de Domínio: model, usecase e Repository

Vamos começar com a Camada de Domínio.

Da mesma forma, a camada de domínio do nosso projeto deve especificar e descrever O QUE nosso aplicativo faz. Nesta pasta, usaríamos modelos, interfaces de repositório e casos de uso.

├── Core
├── Data
├── Presentation
└── Domain
├── Model
│ ├── Todo.ts
│ └── User.ts
├── Repository
│ ├── TodoRepository.ts
│ └── UserRepository.ts
└── UseCase
├── Todo
│ ├── GetTodos.ts
│ ├── GetTodo.ts
│ ├── DeleteTodo.ts
│ ├── UpdateTodo.ts
│ └── CreateTodo.ts
└── User
├── GetUsers.ts
├── GetUser.ts
├── DeleteUser.ts
├── UpdateUser.ts
└── CreateUser.ts
Modelo : um modelo normalmente representa um objeto do mundo real relacionado ao problema. Nesta pasta, normalmente manteríamos classes para representar objetos. por exemplo, Todo, Usuário, Produto, etc.
Repositório : Contêiner para todas as interfaces do repositório. O repositório é um local central para manter todas as operações específicas do modelo. Nesse caso, a interface do repositório Todo descreveria os métodos do repositório. A implementação real do repositório será mantida na camada de dados.
UseCases : Container para listar todas as funcionalidades do nosso aplicativo. por exemplo, Obter Todos, Excluir Todo, Criar Todo, Atualizar Todo

# Domain: Model

src/Domain/Model/Todo.ts

interfaces, nas palavras mais simples, descrevem a estrutura do objeto, o que significa que descreve como o objeto deve se parecer.
src/Domain/Model/Todo.ts

```javascript
export interface Todo {
  id: number;
  title: string;
  isComplete: boolean;
}
```

src/test/Todo.test.tsx

```javascript
import React from "react";
import { render, screen } from "@testing-library/react";
import { Todo } from "../Domain/Model/Todo";

test("renders learn react link", () => {
  const todo = {
    id: 1,
    title: "Fazer um usecase",
    isComplete: false,
  };

  function getTodoDetail(todo: Todo) {
    return `${todo.id} ${todo.title} ${todo.isComplete}`;
  }

  expect(getTodoDetail(todo)).toBe("1 Fazer um usecase false");
});
```

guia markdown: https://docs.pipz.com/central-de-ajuda/learning-center/guia-basico-de-markdown#open
