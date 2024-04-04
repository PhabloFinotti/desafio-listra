# Desafio Listra

Nesse desafio era esperado que o candidato criasse um projeto seguindo o visual proposto no Figma e que fizesse suas funcionalidades com NextJS para o Front-end e Laravel como API Back-end. Incluindo testes unitários com Jest e PHPUnit.

## Instruções

  1. Clonar o projeto `git clone https://github.com/PhabloFinotti/desafio-listra`
  2. Acessar a pasta do projeto `cd desafio-listra`
  3. Instalar as dependências e rodar ambos os projetos
      - Front-end
        ```sh
        cd front
        npm install
        npm run dev
        ```
      - Back-end
        ```sh
        cd back
        composer install
        php artisan serve --port=8000
        ```

## Atenção

O projeto front-end espera que o back end esteja na porta `8000`, caso essa porta já esteja em uso, altere o comando de inicialização do back-end e altere a porta no arquivo `desafio-listra/front/.env.local`.
