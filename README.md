<h1 align="center">
    Pokedex
</h1>

<p align="center">
  <a href="#ℹ%EF%B8%8F-about">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-packages">Packages</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Começando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#%EF%B8%8F-customize">Customizar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## ℹ️ About

<div align="center">

  <p align="center">
   Este é um projeto feito para SoftExpert, onde pokemons podem ser buscados e listados, aparecendo com os respectivos pokemons o seus gifs(alternando para
   costas ao passar o mouse) e nomes, como também ao clicar em um determinado pokemon, ir direto para os seus detalhes, com informações básicas
   como dimensões e habilidades. Foi construido funções para lidar com os dados da https://pokeapi.co/, pois precisava-se estruturar de forma
   correta as informações que seriam consumidas e mostradas em tela.
  </p>

</div>

## 🖥 Packages

O projeto foi iniciado com os seguintes pacotes:

- [Dotenv](http://npmjs.com/package/dotenv)
- [React](https://pt-br.reactjs.org/)
- [React DOM](https://pt-br.reactjs.org/docs/react-dom.html)
- [React Router Dom](https://reacttraining.com/react-router/web/)
- [Styled Components](https://styled-components.com/)
- [Typescript](https://www.typescriptlang.org/)

Nas dependências dev, o Webpack, Jest, Fast Refresh, Eslint and Prettier estão configuradas.

## 🚀 Getting started

Primeiramente você precisa ter `node` e` yarn` (ou `npm`) instalados em sua máquina.

_Se você decidir usar o npm, não se esqueça de deletar yarn.lock nas pastas_

Pressione o botão `Usar este modelo` no Github e crie seu próprio repositório.

Clone seu repo em sua máquina local.

1. `git clone my-app`
2. `cd my-app`
3. `yarn` ou `npm install`
4. `yarn start` ou `npm run start`

Para executar os testes, depois que as dependências forem instaladas, execute `yarn test`.

`yarn test: watch` para continuar testando, observando as mudanças.

`yarn test: cobertura` para gerar o relatório de cobertura de teste nos arquivos.

## ✏️ Customize

Você tem a liberdade de alterar tudo em seu projeto, desde as configurações do Webpack, Jest e até mesmo criar novas estruturas.

Exemplo de rota particular:

<details>
  <summary>Route.tsx</summary>

```ts
import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  // Você pode armazenar dados do usuário de outra maneira e apenas recuperá-los aqui

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
```

</details>

Feito com 💟 por Hiago Lincon 👋
