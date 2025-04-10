# Estudo de React
 > aqui eu vou buscar deixar algumas coisas explicadas para que o Ruan do futuro volte aqui, leia e entenda.

Eu estou acompanhando essa playlist de aula: [[ReactJS] - Netflix Clone](https://www.youtube.com/playlist?list=PL_Axpn7FrXHSqH662YsTVbsbbqPQkrbhH)

## como funciona

O react compila numa forma de bundle todo o jsx para que o navegador entenda a linguagem. Ele joga o bundle(arquivo compilado) na tag root no index

### Manifest.json

> Possibilita criar atalho de aplicativo na tela inicial(de trabaalho) no dispositivo mobile.

## bootstrap

`<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'>`

## state 

> Armazena variáveis do componente. Quando muda algo lá dentro, a tela atualiza sozinha. diferente de variáveis que não re-renderizam

## Hooks

> { Hooks } são umas funções que deixam os componentes usarem coisas do React, tipo state e efeitos, sem precisar de classe. É tipo um "atalho" pra fazer o React funcionar mais fácil.

### Spread operator

Spread (...) espalha os valores de um array ou objeto em outro lugar.
`const nums = [1, 2, 3];` <br> 
`const maisNums = [...nums, 4, 5]; // [1, 2, 3, 4, 5]`

## Adicionando HTML

'eu nn precisei importar o bootstrap, mas tbm nn está funcionando tudo como deveria

## Componentização

Alguns elementos que se repetia a estrutura, foram transformados em elementos

## Rotas

Foi necessário instalar o [Router Module](https://reactrouter.com/start/framework/installation)
`yarn add react-router-dom`

> No entanto o vídeo está um pouco atrasado e foi necessário fazer algumas modificações para o Router v6, como Switch nn é mais usado

### Axios

modulo para fazer requições a API

`yarn add axios`


## Recurperando os dados da api

>[ALERT] Não vai mostrar as imagens pq nn tem mais o local que elas estávam armazenadas

---
---
---
---
# React

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
