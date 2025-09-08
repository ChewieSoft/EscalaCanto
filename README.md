# EscalaCanto

## Sobre o Projeto

O **EscalaCanto** é um sistema para auxiliar na organização de escalas de músicas para cultos, auxiliando no gerenciamento das músicas, músicos e equipes envolvidas. O objetivo principal é facilitar a administração das listas de músicas, o compartilhamento de escalas e o acompanhamento do histórico de execuções, garantindo um fluxo de trabalho mais organizado para ministérios de louvor.

Esse projeto surgiu da necessidade de amigos que desejam aprender sobre desenvolvimento de sistemas, servindo como uma aplicação prática para explorar conceitos de engenharia de software, banco de dados e desenvolvimento web ou mobile.

## Funcionalidades Principais

- 📌 **Gerenciamento de músicas**: Cadastro de músicas com informações detalhadas, como versão, tonalidade e cifra.
- 🎼 **Criação de escalas de culto**: Definição das músicas que serão tocadas em cada culto, junto com a escala de músicos e cantores.
- 📊 **Relatórios de execução**: Monitoramento das músicas mais tocadas ao longo do tempo.
- 📲 **Compartilhamento**: Envio das escalas e listas de músicas via WhatsApp para os integrantes.
- 🔎 **Pesquisa de músicas**: Busca rápida na base de dados.
- 📅 **Histórico de cultos**: Armazenamento de escalas anteriores para consulta.

## Tecnologias Utilizadas

O projeto será desenvolvido utilizando tecnologias modernas para garantir escalabilidade, segurança e boa experiência do usuário. Algumas tecnologias que podem ser usadas incluem:

- **Backend**: Node.js com Express
- **Frontend**: React, Vue.js ou uma aplicação mobile com React Native / Flutter
- **Banco de Dados**: PostgreSQL, MongoDB ou Firebase
- **Hospedagem**: AWS, Vercel, Firebase Hosting, Heroku ou Self Hosting

## Requisitos do Sistema

### Requisitos Funcionais

1. **Lista de Músicas**
   - O sistema deve manter um banco de músicas com:
     - Nome da música
     - Versão (quem canta)
     - Tonalidade
     - Cifra

2. **Escala de Culto**
   - O usuário poderá criar uma lista de músicas para cada culto, incluindo:
     - Músicas do culto (com versão e tom)
     - Quem ministrará
     - Quem cantará
     - Quem tocará (músicos)

3. **Relatórios de Execução**
   - O sistema deve gerar relatórios sobre a frequência de execução das músicas.

4. **Compartilhamento**
   - O usuário poderá enviar escalas e listas de músicas via WhatsApp para os envolvidos.

5. **Busca de Músicas**
   - Um sistema de pesquisa facilitará a busca por músicas na base de dados.

6. **Histórico de Escalas**
   - O sistema deve armazenar e permitir a consulta de escalas passadas.

### Requisitos Não Funcionais

1. **Usabilidade**: Interface intuitiva e acessível para usuários de diferentes níveis de habilidade.
2. **Performance**: Respostas rápidas para consultas e carregamento eficiente de dados.
3. **Compatibilidade**: Acesso via dispositivos móveis e desktop.
4. **Segurança**: Proteção dos dados dos usuários e informações compartilhadas.
5. **Escalabilidade**: Suporte para crescimento do número de usuários e músicas sem perda de desempenho.

---

## DevOps

- [Infra](./infra/README.md)

---

## Como Contribuir

Esse projeto é aberto para colaboração! Se você deseja aprender ou contribuir, siga os passos:

1. Faça um fork do repositório.
2. Clone o repositório ``` git clone link-repositorio ```
3. Acesse a pasta do projeto do front-end ou backend  
4. Dê o comando de ` npm install `
5. Crie uma branch para sua feature: `git checkout -b minha-feature`.
6. Implemente e faça commits organizados.
7. Envie um pull request.

Toda contribuição é bem-vinda, seja na parte de código, design, documentação ou testes! 🚀

## Licença

Este projeto está sob a licença MIT. Sinta-se livre para utilizá-lo e modificá-lo conforme necessário!

---

Se tiver dúvidas ou sugestões, fique à vontade para abrir uma issue ou entrar em contato. Vamos juntos construir algo incrível! 🎶
