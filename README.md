# Como construi uma Calculadora em React
Nesta aplicação, eu criei uma Calculadora simples utilizando React.js.

## Componentes
Foram criados dois componentes, um para o input que exibirá o resultado das operações, e outro para os botões da calculadora.

## Estado
Utilizei o hook useState para gerenciar o estado da aplicação. Criei três estados: currentNumber, que representa o número atual digitado; firstNumber, que representa o primeiro número a ser usado na operação; e operation, que representa a operação matemática a ser realizada.

## Lógica
Ao clicar em um botão, o número correspondente é adicionado ao estado currentNumber. Quando o usuário clica em uma operação matemática (como +, -, x ou /), o estado firstNumber é atualizado com o valor de currentNumber e o estado operation é atualizado com a operação clicada. Quando o usuário clica no botão "=", a operação é realizada e o resultado é atualizado no estado currentNumber.

## Personalização
A aplicação foi construída utilizando o pacote styled-components, que permite a personalização da aparência da calculadora através da criação de estilos CSS. Você pode estilizar a aplicação de acordo com suas preferências ou necessidades, mudando as cores, tamanhos, fontes, entre outros aspectos.

Além disso, é possível adicionar novas funcionalidades, como por exemplo, torná-la uma calculadora científica. Para isso, basta implementar novos métodos e adicionar novos botões na interface.

## Conclusão
Essa calculadora é uma boa opção para quem está iniciando com o React e deseja criar uma aplicação simples com o objetivo de compreender o funcionamento básico da biblioteca. Além disso, é uma boa oportunidade para praticar a personalização de aplicações com styled-components e aprimorar seus conhecimentos.