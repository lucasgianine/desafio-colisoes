# Desafio "Detecção de Colisão"
 Desafio criado pelo professor <b>Caio Henrique dos Santos</b>, este desafio foi concluído e, subí-lo no GitHub é uma forma de mostrar o que estamos aprendendo e como estamos usando na prática o que é passado em sala de aula. <br>

#### Esse desafio foi feito apenas com <b>IF/ELSE</b>, fiz uma versão com Operadores Lógicos, acesse aqui: <a href="logicaOperadores.js">logicaOperadores.js<a>.

 Para entender mais sobre o desafio, leia o case clicando <a href="caseColisoes.pdf">aqui</a>.

 ## Processo
 Para estruturar o desafio, reescrevi o caso utilizando palavras chaves para entender melhor cada parte do processo, como se fosse uma lista do que fazer primeiro.
  Criei 8 entradas de números, sendo elas:
 #### <img src="https://user-images.githubusercontent.com/125743142/230657608-f196edcf-8533-4e00-9959-7c787b05ed3f.png"/>
 Ao clicar no botão, aparecerá abaixo dele uma das saídas: 1 caso houver colisão, e 0 caso NÃO houver colisão.
 Dentro dessa função - que foi chamada após o ato de clicar no botão - há as varíaveis que foram criadas para guardar os números informados pelo usuário nas entradas, que serão útil em toda lógica e na criação das estruturas de decisão.

 ## Lógica
  Com o processo estruturado, iniciei a parte lógica, para isso era necessário entender o padrão que existia dentro desse case. Para que os objetos se encontrassem, um devia invadir o espaço do outro, ou seja, a segunda linha de alguma forma deveria entrar dentro da primeira, e assim, criar um retângulo.

  Iniciei a estrutura de decisão (if) para verificar se os eixos X0 seja menor que o X1, e Y0 seja também menor que o Y1, era um desafio que o uso dos operadores lógicos não era permitido, então tive que verificar isso em cada uma das linhas, após essa validação. 

  A parte do padrão entra nesse momento, onde criei novamente uma estrutura de decisão (if/else) dentro de cada uma das validações anteriores, e nesse caso eu coloquei que <b>SE</b>:
   #### • O X0 da primeira linha, tinha que ser maior que o X1 da segunda linha;
   #### • O Y0 da primeira linha tinha que ser maior que o Y1 da senhda linha;
   #### • O X1 da primeira linha, tinha que ser maior que o X0 da segunda linha;
   #### • O Y1 da primeira linha, tinha que ser maior que o Y0 da segunda linha;
 pois só nesses casos existiria uma colisão entre a primeira e segunda linha, <b>SENÃO</b> não haveria colisão.

## Cenários de testes
Primeiro:
#### <img src="https://user-images.githubusercontent.com/125743142/230657616-e51a2d19-0513-42cc-8f77-6b506d568ff3.PNG"/>
Segundo:
#### <img src="https://user-images.githubusercontent.com/125743142/230657617-81863dec-d7cf-4f92-8c56-220e301f53cd.PNG"/>
Terceiro:
#### <img src="https://user-images.githubusercontent.com/125743142/230657613-26e21ae0-1cc0-4a6a-93be-10d059373082.PNG"/>

## Guia
#### Entendendo o case: <a href="caseColisoes.pdf">caseColisoes.pdf</a>;
#### Código completo: <a href="desafioColisoes.html">desafioColisoes.html</a>;
#### Cenário com Operadores lógicos (Não usado no desafio): <a href="logicaOperadores.js">logicaOperadores.js</a>