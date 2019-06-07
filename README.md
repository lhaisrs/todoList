# Todo List - Hack Grrl Workshop

Um simples tutorial explicando como criar um aplicativo Ionic v.4 conectando com Firebase (usando Firebase Auth e Firebase Firestore) e realizando o deploy como PWA.

## Requisitos

Para realização deste workshop, você precisa ter o [Node.js](https://nodejs.org/en/download/) instalado na sua máquina (computador ou notebook).
Acessa a página de [download](https://nodejs.org/en/download/) do Node.js e escolha o seu sistema operacional: *Windows, Ubuntu ou MacOS* e siga as instruções para realização do download.

Obs.: Para a instalação do node.js, escolha a versão **LTS**

Após a realização do download, verifique se o node.js está instalado no seu computador.
Para isso, abra o terminal (ou comando de linha) na sua máquina seguindo as instruções abaixo:

* [MacOS](https://pt.wikihow.com/Abrir-o-Terminal-no-Mac)
* [Windows](https://pt.wikihow.com/Abrir-o-Prompt-de-Comando-no-Windows)
* [Ubuntu](https://pt.wikihow.com/Abrir-uma-Janela-do-Terminal-no-Ubuntu)

Após abrir o terminal, escreva o seguinte comando abaixo para verificar se o node.js está instalado no seu computador: 

`node -v`

Após a execução do comando, deve aparecer a versão do node.js instalado na sua máquina.


## O que vamos desenvolver?

## Introdução à Ionic

#### O que é Ionic?

#### Comparação com outros frameworks

#### Vantagens e Desvantages

## O que há de novo na versão 4.0?

#### Usando Ionic como PWA: Uma boa escolha?

## Instalando o Ionic

Após instalar o node.js, você instala automaticamente o [npm](https://www.npmjs.com/) também conhecido como **gerenciador de pacotes do node.js**.
Você pode checar se você tem o npm instalado, executando o seguinte comando abaixo no seu terminal:

`npm -v`

Após a checagem, para instalar o Ionic basta executar o comando abaixo no seu terminal:

`npm install -g ionic`

Você pode ver com calma mais informações sobre a instalação do Ionic [aqui](https://ionicframework.com/docs/installation/cli)

## Criando o projeto Ionic

## Rodando o projeto: ionic serve

## Configurando o Firebase

#### Criando uma conta do Firebase

#### Criando um projeto no Firebase

#### Usando AngularFire para conectar o aplicativo com o Firebase

###### Instalando o AngularFire

###### Criando as variáveis de ambiente do Firebase

#### Habilitando o login via email no Firebase

## Criando o login

#### Criando uma nova página para realizar o login

###### Configurando login.page.html

###### Configurando login.page.ts: Conexão com FirebaseAuth

###### Criando o método de login

##### Atualiando as rotas do aplicativo

###### Configurando para inicializar a aplicação com login

#### Melhorias

## Criando a home

#### Criando uma nova página para ser a home

#### Configurando home.page.html: Adicionando o botão de adicionar atividades

#### Configurando home.page.ts: Navegar para adicionar atividades

#### Atualizando as rotas do aplicativo

## Adicionando atividades

##### Criando uma nova página para adicionar atividades

#### Configurando add.page.html

#### Configurando add.page.ts: Conexão com FirebaseFirestore

#### Criando o método de criação das atividades

## Lendo as atividades

#### Criando o método de leitura das atividades em home.page.ts

## Boas práticas com Firebase: Observables

## Tornando a minha aplicação em um PWA

#### O que é um PWA - Progressive Web App?

#### Services Workers - O que é e Como funcionam?

#### Adicionando o @angular/pwa

## Realizando o deploy da aplicação

## Bônus: Avaliando o seu aplicativo PWA