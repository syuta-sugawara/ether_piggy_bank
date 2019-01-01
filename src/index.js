var userAccount;
var piggyBankAddress ;
var PiggyBankContract ;
var PiggyBankInstance;

function set() {
    web3.eth.getAccounts(function(err,accounts){
        userAccount = accounts[0];
    });
        console.log(userAccount)
}

function startApp() {
    piggyBankAddress = '0xEa6294cDB3F810215ebAcd76367365F1C611f422';
    PiggyBankContract = new web3.eth.Contract(PiggyBankABI,piggyBankAddress);
    set()
}

window.addEventListener('load', function() {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        console.log("Metamusk is active")
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
            alert("Metamusk is not active")
        }
    startApp()
})

function create(){
    event.preventDefault();
    var _boxId = document.getElementById("boxId").value;
    var _targetFigure = document.getElementById("targetFigure").value;
    return PiggyBankContract.methods.createBox(_boxId, _targetFigure).send(
            {from : userAccount, gas: 1000000000},
            (err,res) => {
                     if(!err){
                        console.log(res)
                        alert("success. you've created your piggy bank")
                       }else{
                        console.log(err)
                        alert("you failed to create your box")
                       }
                    }
                );
}     

function deposit(){
    event.preventDefault();
    var whichBox = document.getElementById("whichBox").value;
    var howMuch = document.getElementById("howMuch").value;
    return PiggyBankContract.methods.deposit(whichBox, howMuch).send(
           {from:userAccount, value:howMuch},
            function (err, result) {
            if(!err){
                    console.log(result)
                     alert("Successfully, you've deposited.")
                }else{
                    console.log(err)
                    alert("you failed to deposit your money.\n you should choose your box.\n In addtion, after withdrawing, you can't deposit your money to the box you used before.")
                }
            }
        )
}

function withdrawMoney(){
    event.preventDefault();
    var chooseBox = document.getElementById("chooseBox").value;
    return PiggyBankContract.methods.withdraw(chooseBox).send(
       {from:userAccount, gas:3000000},
       function (err, result) {
            if(!err){
                console.log(result)
                alert("Successfully you've withdrawn your money and broke your piggy bank.\n you can't use it again.")
            }else{
                console.log(err)
                alert("you failed to withdraw")
            }
        });
}

      