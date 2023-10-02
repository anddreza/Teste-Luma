📍Passos para instalação do projeto em sua máquina: 

#### Foram utilizados aqui: Git, Cypress, Javascript 
Iremos testar o site: https://magento2-demo.magebit.com/

#### Passos para seguir e realizar a instalação corretamente: 

1. Crie uma pasta onde ficará o projeto;

2. Antes da instalação do Cypress é necessário inciar um projeto node;

3. Escrever em seu terminal: 
3.1. 'yarn init', 
3.2. caso não funcione pode ser npm init 
OBSERVAÇÃO: É importante também nesse passo verificar a versão do node instalado na máquina, necessário utilizar a versão 18.12.1, para isso use o comando nvm use 18.12.1;

4. Ao realizar todas a descrições corretamente será possível visualizar um arquivo package.json;

5. A seguir escreva em seu terminal: 
5.1 'yarn add cypress -D', o yarn vai no cypress e verifica todos os pacotes para serem instalados corretamente;

6. Após esse comando você terá que ter uma pasta node_modules com várias pastas, package.json, yarn.lock;

7. Verificar qual versão do Cypress foi instalado, pois é necessário que seja a 12.2.0, caso seja uma versão superior então faça o comando: 
7.1 yarn remove cypress; 
7.2 Caso não funcione: npm uninstall cypress;

8. Para instalação a versão correta utilize:
8.1 yarn add cypress@12.2.0 -D
8.2 Caso não funcione npm i cypress@12.2.0 --save-dev

9. Para finalmente abrir o cypress necessário escrever no terminal
9.1 yarn cypress open 
9.2 Caso não funcione então npx cypress open

10. Quando aberto a interface gráfica verificar detalhes do Cypress, então clique em Cypress

11. Nesse caso vamos seguir clicando em E2E Testing

12. Visualizar as configurations files 

13. Em seguida escolha o seu navegador - necessário usar o Chrome 

14. Clique em specs e crie uma nova clicando em 'create new empty spec'


Observações para manutenção de código:
- Criar classes todas com PascalCase, não camelCase;