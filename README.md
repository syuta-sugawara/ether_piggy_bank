# lx-tech-exam-for-sugawara

# Piggy_bank

### REQUIREMENTS

このアプリケーションでは下記のtoolを使用します.

* metamask
* Ganache version 1.2.1
* node v8.12.0 
* Truffle v5.0.0  
* Solidity v0.5.0 
* web3.js@1.0.0-beta.36 
* jquery v3.2.1 
* bootstrap v4.1.3 

Ganacheとmetamaskは事前にインストールしてください。

https://truffleframework.com/ganache

https://metamask.io/


### Installation

始めに下記をインストールしてください

* node v8.12.0 
* Truffle v5.0.0  

```sh
$　brew install node@8.12.0
$　node --version　// check the node version
$  npm uninstall -g truffle // If you already have truffle installed
$  npm install -g truffle@5.0.0
```

### Development

git clone後、
ganacheを起動し下記を行ってください。

```sh
$ npm install
$ truffle migrate --reset // --resetは念のため
```

migrate後、画面上に示された
コントラクトアドレスを
src/index.jsの14行目にあるpiggyBankAddressの変数に格納し直してください。

その後下記の操作を行い、メタマスクがインストールされたブラウザでアプリケーションの起動を確認してください。
```sh
$ npm run dev
```

####  Usage(　動作確認　) 

まずmetamaskへganache内のアカウントのインポートと
custome RPCでHTTP://127.0.0.1:7545へ接続してください。

metamaskでアカウントを変えた場合はその都度
ブラウザでリロードを行ってください。

下記の手順でアプリケーションが使用可能です。

１、貯金箱を作る
name a box id欄にboxidを指定し
decide target figureで目標額を指定。
その後create a piggy bank　のボタンをクリック

２、貯金箱に入金
which box?欄でboxidを指定。
how much do you wanna deposit?欄でいくら入金する指定。
deposit money ボタンをクリック

３,出金
boxidを指定し出金。

他人のboxへ入金できないこと、
一度出金を行ったboxへ再度入金できないことを確認してください。


下記のエラーがでた場合は
アカウントをリセットしてください
Error: the tx doesn't have the correct nonce. account has nonce of: 0 tx has nonce of: 2

### Author
syuta sugawara
