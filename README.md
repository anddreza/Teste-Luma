## 📍Passos para instalação do projeto em sua máquina: 

<img src="editar_site.png" width="600"/>
	
Informações sobre instalação e configuração: 
* Foram utilizados aqui: Git, Cypress, Javascript 
* Iremos testar o site: https://magento2-demo.magebit.com/
* Sistema Operacional usado: Linux Ubuntu 20.04
### Passos para seguir e realizar a instalação corretamente: 

1. Criar uma pasta para o projeto;

2. Antes da instalação do Cypress é necessário inciar um projeto node;

⚠️ **OBSERVAÇÃO: É importante também nesse passo verificar a versão do node instalado na máquina, necessário utilizar a versão 18.12.1, para isso use o comando nvm use 18.12.1;**

3. Escrever em seu terminal: 
```sh
yarn init
```

Caso não funcione:
```sh
npm init 
```

package name: Teste-Luma
version: (1.0.0) -> nesse caso é somente dar enter
description: Processo seletivo WEBJUMP
entry-point: (index.js) -> nesse caso é somente dar enter
test command: -> nesse caso é somente dar enter
git repository: -> nesse caso é somente dar enter
keywords: cypress, luma, webjump
author: Andreza Silva (acresce o nome do dono da máquina)
license: (ISC) MIT (escrever MIT)

4. Ao realizar todas a descrições corretamente será possível visualizar um arquivo package.json;

5. A seguir escreva em seu terminal: 

```sh
yarn add cypress -D
```

Caso não funcione:
```sh
npm install cypress -D
```

o yarn vai no Cypress e verifica todos os pacotes para serem instalados corretamente;

6. Após esse comando terá pastas como: *node_modules*, *package.json*, *yarn.lock*;

7. Verificar qual versão do Cypress foi instalado, pois é necessário que seja a 12.2.0, caso seja uma versão superior então faça o comando: 

```sh
yarn remove cypress
```

Caso não funcione:
```sh
npm uninstall cypress
```

8. Para instalação da versão correta utilize:
```sh
yarn add cypress@12.2.0 -D
```

Caso não funcione:
```sh
npm i cypress@12.2.0 --save-dev
```

9. Para finalmente abrir o cypress necessário escrever no terminal
```sh
yarn cypress open 
```
Caso não funcione então:

```sh
npx cypress open
```

10. Quando aberto a interface gráfica verificar detalhes do Cypress, então clique em Cypress
11. Nesse caso vamos seguir clicando em E2E Testing
12. Visualizar as configurations files 
13. Em seguida escolha o seu navegador - necessário usar o Chrome 
14. Clique em specs e crie uma nova clicando em 'create new empty spec'


### Observações para manutenção de código:
- Criar classes todas com PascalCase, não camelCase;


### Leituras no futuro para visualizar o tooltip error message:
https://stackoverflow.com/questions/75436358/how-to-get-this-element-from-an-email-type-input-with-cypress

https://glebbahmutov.com/blog/form-validation-in-cypress/