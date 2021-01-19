class Bank {
    static getData = () => {
        var accountDetails = {
            userone: { acno: 1000, balance: 1000, username: "one", password: "on" },
            usertwo: { acno: 1001, balance: 10000, username: "ne", password: "o" },
            userthree: { acno: 1002, balance: 10009, username: "e", password: "one" }
        }
        return accountDetails
    }
    static login = () => {
        let uname = document.querySelector("#username").value
        let pwd = document.querySelector("#password").value
        let dataset = Bank.getData()
        if (uname in dataset) {
            if (dataset[uname].password == pwd) {
                alert("login successful")
                window.location.href = "userhome.html"
            }
            else {
                alert("incorrect password")
            }
        }
        else {
            alert("no user exist with provided username")

        }
    }
    static deposit = () => {
       let uname = document.querySelector("#uname").value
       let pwd = document.querySelector("#pwd").value
        let amt = Number(document.querySelector("#amt").value)
        let dataset = Bank.getData()
       if (uname in dataset) {
           if (dataset[uname].password == pwd) {

                dataset[uname].balance += amt
                alert("your account credited with amount " + amt + "aval bal=" + dataset[uname].balance)
            }
            else {
               alert("incorrect password")
            }
        }
        else
         {
            alert("no user exist")
        }
    }
    static withdraw = () => {
    let uname = document.querySelector("#uname").value
    let pwd = document.querySelector("#pwd").value
    let amt = Number(document.querySelector("#amt").value)
    let dataset = Bank.getData()
    if (uname in dataset) {
        if (dataset[uname].password == pwd) {
            if (dataset[uname].balance >= amt) {

                dataset[uname].balance -= amt
                alert("your account debited with amount " + amt +"aval bal=" +dataset[uname].balance)
            }
        }
        else {
            alert("insufficint balance")
        }
    }
    else {
        alert("no user exist with provided username")
    }
}
}




