## Tipo de Dados

- Informações que podem ser em textos, números, booleanos (valores lógicos: verdadeiro ou falso) ou dados mais estruturados

## Variáveis

Uma caixinha onde guardamos um tipo de dado para usar mais tarde.

# Declaro e atribuo valor

let boasVindas = "Fala, Dev!";
boasVindas = "Fala, Dev! Beleza?";

# Constante não pode mudar o valor

const serHumano = true;
serHumano = false; // Erro, não pode mudar o valor de uma constante

# Tipo de dados

- **String**: texto
""
''
``
- **Number**: número
1
1.2
- **Boolean**: verdadeiro ou falso
true
false

## Funções

Funções são blocos de código que podem ser executados várias vezes, sem precisar repetir
o código.

○ **Agrupamento de código**
○ **Reutilização de código**
○ **Maior manutenção e escalabilidade do código**
○ **Mini programas dentro do programa maior**
○ **Toda linguagem oferece muitas opções**

// Usando uma função

alert('Fala, Dev!')

// Criando uma função

function sayHello(name) {
  console.log('Olá ' + name)
  }

sayHello("Lucas") // Olá Lucas

## Objetos

No java Script tudo é objeto.

○ **Atributos**
  São as propriedades de um objeto
○ **Métodos**
  São as funcionalidades de um objeto

// Criando um objeto

const person = {
  age: 18,
  drive: function() {}
}

// Usando um objeto

person.drive()