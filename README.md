# Carteira de Bitcoin Testnet

Este projeto demonstra como criar e usar uma carteira de Bitcoin na rede Testnet. O objetivo é facilitar o aprendizado e a experimentação com Bitcoin sem o risco de usar fundos reais.

## Ferramentas Utilizadas

- Node.js
- Bibliotecas JavaScript: `bip32`, `bip39`, `bitcoinjs-lib`
- Electrum Wallet (para a interface de usuário da carteira)

## Configuração do Ambiente

## Passos Iniciais

1. **Estruturar o Projeto:**

    - Garantir que todas as dependências necessárias estejam instaladas, como bip39 e bitcoinjs-lib, que aparentemente você já está utilizando.

2. **Desenvolver o Script de Criação da Carteira:**

    - Seu script já está gerando a carteira, a chave privada e o endereço. Podemos expandir isso para incluir funções adicionais conforme necessário, como importação para o software gerenciador.

3. **Testar e Validar:**
    - Testar o script para garantir que as chaves e endereços estão sendo gerados corretamente.
        - Validar a importação dessas informações no software gerenciador de carteiras.

4. **Documentação:**

    - Documentar todos os passos e funcionalidades no README do projeto para facilitar a compreensão e utilização por outros desenvolvedores.

## Instalação das dependências

1. **Instalação do node_modules:**

    - Garantir que todas as dependências necessárias estejam listadas no seu package.json e instaladas corretamente. Você pode rodar o seguinte comando para instalar todas as dependências listadas:

        npm install

2. **Desenvolvimento do Código:**

    - Continuar a expandir o código no seu arquivo createWallet.js, assegurando que ele possa gerar todas as informações necessárias e testar essas funcionalidades.
    - Se houver necessidade de debugar ou verificar informações durante o desenvolvimento, use console.log para ajudar.

3. **Testes:**

    - Criar alguns testes simples para verificar se a carteira e as chaves estão sendo geradas corretamente. Isso pode ser feito usando algum framework de teste para Node.js, como Mocha ou Jest.

4. **Documentação:**

    - Atualizar o README.md com instruções detalhadas sobre como configurar o ambiente, executar o script e quais resultados esperar. Isso ajudará qualquer pessoa que venha a usar ou contribuir para o seu projeto.

5. **Versionamento:**

    - Certifique-se de manter o controle de versão adequado com commits claros e descritivos no GitHub para acompanhar as alterações e permitir que outras pessoas entendam o histórico do projeto.

## Instalação do software e bibliotecas

1. **Instalação de Node.js e NPM**:

   - Visite [Node.js](https://nodejs.org/) para instruções de instalação.

2. **Instalação das Bibliotecas Necessárias**

   - npm install bip32 bip39 bitcoinjs-lib

   1. *Atualização do npm*

        - Considerando que há uma nova versão do npm disponível, seria bom atualizá-lo para garantir que você esteja usando as funcionalidades mais recentes e as correções de segurança. Você pode fazer isso com:

            - npm install -g npm@10.8.2

## Geração de Carteira

O script *createWallet.js* realiza as seguintes tarefas:

- Gera uma frase de sementes (mnemonic).
- Deriva uma chave privada e um endereço de Bitcoin.
- Exibe a frase de sementes, chave privada, e endereço de Bitcoin.

## Para executar o script

    node src/createWallet.js

    - Isso deve gerar uma saída no console com os detalhes da carteira, incluindo endereço, chave privada e semente (mnemonic).

## Esclarecimentos Adicionais sobre os Script

1. *createWallet.js*

    **Explicações Adicionais:**

    - BIP32: Biblioteca para gerenciamento de carteiras HD, que permite criar múltiplas chaves a partir de uma única semente.
    - BIP39: Padrão usado para gerar a frase de semente (mnemonic) que pode ser usada para recuperar a carteira.
    - BitcoinJS-Lib: Uma das bibliotecas mais populares para programação de Bitcoin em JavaScript, que suporta várias funcionalidades incluindo criação de carteiras, assinaturas de transações e mais.
    - BIP44: Especificação que define como as carteiras multi-moeda devem derivar suas chaves.

2. *package.json*

    - Arquivo de configuração usado para definir as propriedades de um projeto Node.js.
    - Ele informa ao npm (Node Package Manager) como o projeto deve ser tratado, quais são as dependências necessárias para o projeto funcionar e pode definir scripts para executar tarefas comuns como testes.

        {
        "name": "btcwallet",  // Nome do seu projeto. É assim que seu pacote será identificado.
        "version": "1.0.0",  // Versão atual do projeto. Útil para controle de versão e distribuição.
        "description": "",  // Uma breve descrição do seu projeto. Bom para explicar o que seu projeto faz.
        "main": "index.js",  // O ponto de entrada principal do seu projeto. É o arquivo que será executado quando o projeto for iniciado.
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"  // Define um script de teste. Aqui, é apenas um placeholder que falha.
        },
        "keywords": [],  // Palavras-chave associadas ao seu projeto. Útil para descoberta em repositórios como o npm.
        "author": "",  // O autor do projeto. Pode ser seu nome ou o nome da sua organização.
        "license": "ISC",  // A licença sob a qual o projeto é distribuído.
        "dependencies": {
            "bip32": "^2.0.6",  // Dependência para o pacote bip32, com uma versão específica.
            "bip39": "^3.0.4",  // Dependência para o pacote bip39, com uma versão específica.
            "bitcoinjs-lib": "^6.0.1",  // Dependência para o pacote bitcoinjs-lib, com uma versão específica.
            "btcwallet": "file:"  // Parece haver um erro aqui; 'btcwallet' não é um pacote padrão e você está apontando para um arquivo local sem especificar qual arquivo.
        }
        }

    - Observação - o JSON não suporta comentários de bloco ou de linha diretamente dentro do arquivo. Os comentários acima são apenas ilustrativos para uma melhor compreensão.

## Configuração da Carteira Electrum

1. Instalação do Electrum

    - Baixe o Electrum em Electrum.org.

2. Importação da Carteira

    - Inicie o Electrum e escolha 'Importar endereços ou chaves privadas'.
    - Use a frase de sementes gerada pelo createWallet.js para criar uma carteira.

## Teste com Faucet de Testnet

1. Obter Bitcoins de Testnet:

    - Use o endereço gerado para solicitar bitcoins de Testnet de uma faucet, como mempool.co Testnet Faucet.

2. Monitorar e Usar a Carteira:

    - Verifique as transações na aba 'Histórico' do Electrum.
    - Pratique o envio de bitcoins para outros endereços de Testnet.

## Considerações Finais

Este projeto é apenas para fins educacionais e não deve ser usado com Bitcoin real. Assegure-se de seguir as melhores práticas de segurança, especialmente ao gerenciar criptomoedas.

Para outras informações, favor consultar o arquivo " Outras Orientações Interessantes.pdf " em anexo.
