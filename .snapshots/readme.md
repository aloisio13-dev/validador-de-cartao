# Validador de Cartão de Crédito

## Objetivo

Este programa tem como objetivo validar números de cartões de crédito e identificar a bandeira associada ao cartão com base em um arquivo PDF que contém informações sobre as bandeiras.

## Funcionalidades

- **Extração de bandeiras**: Lê um arquivo PDF para identificar as bandeiras de cartões suportadas.
- **Validação de número de cartão**: Verifica se o número do cartão é válido usando o algoritmo de Luhn.
- **Identificação da bandeira**: Determina a bandeira do cartão com base nas informações extraídas do PDF.

## Pré-requisitos

- Node.js instalado na máquina.
- Dependências do projeto instaladas (veja abaixo).

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/seu-usuario/validador-de-cartao.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd validador-de-cartao
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Dependências

- `pdf-parse`: Biblioteca para extração de texto de arquivos PDF.

  ```bash
  npm install pdf-parse
  ```

## Como usar

1. Certifique-se de que o arquivo PDF com as bandeiras (`Bandeiracard.png.pdf`) está no caminho correto:

   `
   c:\Users\NOTE ALOISIO\OneDrive\Documentos\GitHub\validador-de-cartao\.snapshots\src\assets\Bandeiracard.png.pdf
   `

2. Execute o programa:

   ```bash
   node .snapshots/src/extract_bandeiras.js
   ```

3. Insira o número do cartão no código para validação:

   ```javascript
   const cardNumber = 4111111111111111"; // Substitua pelo número do cartão
   ```

## Exemplo de Saída

Se o número do cartão for válido e a bandeira for encontrada:

`
Bandeiras encontradas no arquivo:

- Visa
O número do cartão 4111111111111111 é válido.

`

Se o número do cartão for inválido:

Bandeiras encontradas no arquivo:

- Visa
O número do cartão 4111111111111111 é inválido.

`

Se nenhuma bandeira for encontrada no arquivo:

`
Nenhuma bandeira encontrada no arquivo.

`

## Estrutura do Projeto

`
validador-de-cartao/
├── .snapshots/
│   ├── src/
│   │   ├── assets/
│   │   │   └── Bandeiracard.png.pdf
│   │   └── extract_bandeiras.js
│   └── readme.md
`

## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests para melhorias no projeto.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
