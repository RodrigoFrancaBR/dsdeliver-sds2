# DS Delivery 
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/RodrigoFrancaBR/dsdeliver-sds2/blob/main/LICENSE) 

# Sobre o projeto

https://rfranca-sds2-front.netlify.app

O DS Delivery foi construido durante o evento Semana [DevSuperior](https://devsuperior.com), edição 2.0, ocorrido de 04/01/2021 a 10/01/2021.

DS Delivery é um projeto dividido em três aplicações (back-end) core da aplicação que expoe uma API Rest implantada na nuvem (Heroku).

Quem consome essa API é uma SPA (single page application) (front-end) que possui uma interface gráfica responsiva, permitindo ao usuário realizar pedidos em uma pizzaria.

Quem também consome essa API é a aplicação (mobile) responsável por ver os pedidos feitos pela SPA. 

## Modelo conceitual e Camadas
![Modelo Conceitual e Camadas](https://github.com/RodrigoFrancaBR/dsdeliver-sds2/blob/main/assets/modelo-conceitual-camadas.png)

## Layout web
![Web 1](https://github.com/RodrigoFrancaBR/dsdeliver-sds2/blob/main/assets/Layout%20web.PNG)

## Layout mobile
![Mobile 1](https://github.com/RodrigoFrancaBR/dsdeliver-sds2/blob/main/assets/Layout%20mobile.PNG) 

# Ferramentas e tecnologias envolvidas no desenvolvimento
## Back end
- JDK 11
- Spring Boot (web, data-jpa, validation, security, test)
- STS (Spring Tool Suite)
- Postman
- Postgresql 12 e pgAdmin
- H2 Database
- Maven
- Heroku CLI
- NPM
- Git

## Front end
- HTML / CSS / JS / TypeScript
- ReactJS
- React Native
- Expo
## Implantação em produção
- Back end: Heroku
- Front end web: Netlify
- Banco de dados: Postgresql
