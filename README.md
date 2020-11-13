# products-dashboard
Teste para vaga frontend Jr.

Nesse repositório você encontra um backend simples e uma aplicação frontend. Para roda ambos você deve ter node instalado na sua máquina e tanto na pasta do backend quanto na do frontend rodar o script de instalação (``` yarn install ```) dos pacotes node para essa aplicação.

## Como rodar o backend
Ele roda na porta 3333 do localhost quando dado o comando ```yarn start``` ou ```npm start``` de dentro do diretório /backend/

## Como rodar o frontend
Ele abre uma aba do navegador quando dado o comando ```yarn start``` ou ```npm start``` de dentro do diretório /frontend2/

## Minha Jornada

Com trabalho enorme pra entregar num prazo curto, entre outras atividades, fiquei com tempo limitado para trabalhar em cima do teste. Achei que por não ter backend como requisito seria tranquilo de puxar os dados do arquivo csv para a aplicação na forma de objetos javascript (JSON), e eu estava redondamente enganada.

Apesar de gostar muito da tecnologia React, não tive TANTO contato assim com ela. E o que eu achei que eu sabia ou tiraria de letra não foi bem assim. Surgiram várias dúvidas durante o processo sobre a melhor forma de fazer o código. Li bastante até que resolvi começar a colocar a mão na massa e fazer como eu conseguisse. 

Criei alguns componentes básicos apenas para relembrar como a tecnologia funciona e resolvi focar em trazer as informações para trabalhar em cima delas. Pois sei que essa manipulação poderia ser a parte mais trabalhosa pra mim. 

Já tinha lido sobre uma biblioteca que transformaria csv para json, parecia simples. Tentei apenas adicionar a programação a um arquivo e exportar os objetos já transformados. Tentei dessa maneira por muito tempo até descobri o problema. Os métodos de leitura com fs funcionariam apenas no server-side, e por isso nenhuma das 3 ou 4 soluções que busquei sobre csv parsing funcionavam na aplicação como um todo. 

E lá vamos nós criar um pequeno backend. Criei um app com express e logo descobri que aquilo tudo era desnecessário e confuso para o meu objetivo simples. Fui juntando as peças todas até entender os métodos envolvidos na leitura do arquivo e FINALMENTE consegui fazer meu endpoint retornar os arquivos. Mas já era meio dia e o projeto em react em si ficou de lado e nem um pouco como eu gostaria, mas fiquei feliz em solucionar meu backend. 

Pretendo dedicar mais algumas horapra deixar o meu react mais bonito e atualizá-lo aqui no meu repositório, mas com o commit desde readme, declaro entregue minha aplicação para a vaga.