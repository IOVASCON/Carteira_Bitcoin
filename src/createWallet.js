// Importando as dependências necessárias para o projeto.
const bip32 = require('bip32')  // Usado para operações de carteira hierárquica determinística (HD Wallet).
const bip39 = require('bip39')  // Usado para manipulação de mnemonics, que são frases usadas como sementes.
const bitcoin = require('bitcoinjs-lib')  // Biblioteca principal para operações com Bitcoin.

// Definindo a rede para a qual a carteira será criada.
// `bitcoin.networks.testnet` se refere à rede de teste do Bitcoin, utilizada para desenvolvimento e testes.
const network = bitcoin.networks.testnet

// Caminho de derivação da carteira HD. Esse é um padrão conhecido como BIP44.
// 'm/49'/1'/0'/0' é específico para carteiras SegWit enroladas em P2SH na rede Testnet.
const path = `m/49'/1'/0'/0` 

// Geração do mnemonic, que é uma sequência de palavras usada para gerar a chave privada.
let mnemonic = bip39.generateMnemonic()  // Gera uma nova frase mnemonic aleatória.
const seed = bip39.mnemonicToSeedSync(mnemonic)  // Converte o mnemonic em uma semente binária.

// Criando a raiz da carteira HD a partir da semente gerada acima.
let root = bip32.fromSeed(seed, network)  // Cria o nó raiz da carteira HD para a rede especificada.

// Derivando uma conta específica a partir do caminho de derivação.
let account = root.derivePath(path)  // Acessa o caminho de derivação especificado para criar uma conta.
let node = account.derive(0).derive(0)  // Deriva o primeiro par de chaves (chave pública e privada) para a conta.

// Gerando o endereço Bitcoin a partir da chave pública derivada.
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,  // Chave pública derivada usada para gerar o endereço.
    network: network,        // Especifica que o endereço deve ser gerado para a rede Testnet.
}).address  // `address` é o endereço Bitcoin resultante.

// Exibindo os resultados no console.
console.log("Carteira gerada")
console.log("Endereço: ", btcAddress)  // Mostra o endereço Bitcoin gerado.
console.log("Chave privada:", node.toWIF())  // Mostra a chave privada no formato Wallet Import Format (WIF).
console.log("Seed:", mnemonic)  // Mostra o mnemonic gerado.
