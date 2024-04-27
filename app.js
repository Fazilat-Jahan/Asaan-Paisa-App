#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 100000;
let pin = [];
let myAcc = [];
let cpin;
let OTP = 1234;
let condition = true;
async function easyApp() {
    let username = await inquirer.prompt({
        name: "user",
        message: "Please Insert Your Name:",
        type: "input"
    });
    console.log(`\n Hey ${username.user}! Welcome to Asann Paisa App \n`);
    let pinset = await inquirer.prompt({
        name: "pins",
        type: "number",
        message: "Please Set Your Pin:"
    });
    pin.push(pinset.pins);
    console.log(`\n Pin Set Successfully \n`);
    let acc = await inquirer.prompt({
        name: "aname",
        type: "input",
        message: "Enter Your Account Number:"
    });
    myAcc.push(acc.aname);
    console.log(`\n`);
    while (condition) {
        let list = await inquirer.prompt([{
                name: "listed",
                message: "Select Operations:",
                type: "list",
                choices: ["Transfer Money", "Received Money", "Bill Payments", "Mobile Packages", "Cash Back", "Mobile Load", "Asaan Loan", "Exit"],
            }]);
        if (list.listed == "Transfer Money") {
            cpin = await inquirer.prompt({
                name: "cpins",
                type: "input",
                message: "Enter Your Pin:",
            });
            if (cpin.cpins == pin) {
                console.log(`\n Your Pin is Correct \n`);
                let money = await inquirer.prompt([{
                        name: "trans",
                        type: "number",
                        message: "Enter Your Amount For Transfer:",
                    },
                    {
                        name: "receive",
                        type: "input",
                        message: "Enter Receiver's Name:",
                    },
                    {
                        name: "bank",
                        type: "input",
                        message: "Enter Receiver's Account Number:",
                    },
                ]);
                if (money.trans > myBalance) {
                    console.log(`\n Insufficient Amount \n`);
                }
                else {
                    console.log(`\n Transaction Successful To ${money.receive}'s Account ${money.bank}`);
                    myBalance -= money.trans;
                    console.log(`\n Your Remaining Balance is ${myBalance}`);
                    console.log(chalk.bold(`\n Transaction Receipt: \n Sender Name:${username.user}\n Sender's Account Number: ${myAcc} \n Amount Transferred: ${money.trans} \n Receiver Name: ${money.receive} \n Receiver Account Number: ${money.bank} \n`));
                }
            }
            else {
                console.log(`\n Your Pin Is Incorrect \n`);
            }
        }
        else if (list.listed == "Received Money") {
            cpin = await inquirer.prompt({
                name: "cpins",
                type: "number",
                message: "Enter Your Pin"
            });
            if (cpin.cpins == pin) {
                console.log(`\n Your Pin Is Correct \n`);
                let moneyy = await inquirer.prompt([{
                        name: "sender",
                        type: "number",
                        message: "Enter Your Amount To Received From Sender:",
                    },
                    {
                        name: "sname",
                        type: "input",
                        message: "Enter Sender's Name:"
                    },
                    {
                        name: "account",
                        type: "input",
                        message: "Enter Sender's Account Number:",
                    },
                    {
                        name: "sotp",
                        type: "number",
                        message: "Enter Sender's OTP:"
                    }
                ]);
                if (moneyy.sotp == OTP) {
                    console.log(`\n You've Sucessfully Received ${moneyy.sender} from ${moneyy.account}`);
                    myBalance += moneyy.sender;
                    console.log(`\n Your Updated Balance Is ${myBalance}`);
                    console.log(chalk.bold(`\n Transaction Receipt: \n Sender Name: ${moneyy.sname} \n Sender Account Number: ${moneyy.account} \n Amount Received: ${moneyy.sender} \n Receiver Name: ${username.user} \n Receiver Account Number: ${myAcc}\n`));
                }
                else {
                    console.log(`\n Sender OTP Is Incorrect`);
                }
            }
            else {
                console.log(`\n Your Pin Is Incorrect`);
            }
        }
        else if (list.listed == "Bill Payments") {
            let bill = await inquirer.prompt([{
                    name: "pay",
                    type: "list",
                    message: "Choose Your Bill Category",
                    choices: ["Electricity Bill", "Gas Bill", "Internet Bill", "Water Bill", "LandLine Bill"],
                }]);
            if (bill.pay == "Electricity Bill") {
                let elec = await inquirer.prompt([{
                        name: "board",
                        type: "input",
                        message: "Enter Electric Board e.g: K-Electric, PESCO, FESCO, etc:"
                    },
                    {
                        name: "account",
                        type: "input",
                        message: "Enter Electric Bill Consumer Number:"
                    },
                    {
                        name: "amnt",
                        type: "number",
                        message: "Enter Electric Bill Amount:"
                    }
                ]);
                console.log(`\n`);
                cpin = await inquirer.prompt({
                    name: "cpins",
                    type: "number",
                    message: "Please Enter Your Pin:"
                });
                if (cpin.cpins == pin) {
                    console.log(`\nYour Pin Is Correct`);
                    if (elec.tric > myBalance) {
                        console.log(`\n Insufficient Amount \n`);
                    }
                    else {
                        console.log(`\n Transaction Successful To Account ${elec.account}`);
                        myBalance -= elec.amnt;
                        console.log(`\n Your Remaining Balance is ${myBalance}`);
                        console.log(chalk.bold(`\n Electric Bill Payment Receipt: \n Board Name: ${elec.board}  \n Consumer Name:${username.user} \n Consumer Number: ${elec.account}  \n Consumer Account Number: ${myAcc}  \n Amount Transferred: ${elec.amnt} \n`));
                    }
                }
                else {
                    console.log(`Your Pin Is Incorrect`);
                }
            }
            else if (bill.pay == "Gas Bill") {
                let gas = await inquirer.prompt([{
                        name: "board",
                        type: "input",
                        message: "Enter Gas Board e.g: SSGC, SNGPL etc:"
                    },
                    {
                        name: "account",
                        type: "input",
                        message: "Enter Gas Bill Consumer Number:"
                    },
                    {
                        name: "amnt",
                        type: "number",
                        message: "Enter Gas Bill Amount:"
                    }
                ]);
                console.log(`\n`);
                cpin = await inquirer.prompt({
                    name: "cpins",
                    type: "number",
                    message: "Please Enter Your Pin:"
                });
                if (cpin.cpins == pin) {
                    console.log(`\n Your Pin Is Correct`);
                    if (gas.amnt > myBalance) {
                        console.log(`\n Insufficient Amount \n`);
                    }
                    else {
                        console.log(`\n Transaction Successful To Account ${gas.account}`);
                        myBalance -= gas.amnt;
                        console.log(`\n Your Remaining Balance is ${myBalance}`);
                        console.log(chalk.bold(`\n Gas Bill Payment Receipt: \n Board Name: ${gas.board}  \n Consumer Name:${username.user} \n Consumer Number: ${gas.account}  \n Consumer Account Number: ${myAcc}  \n Amount Transferred: ${gas.amnt} \n`));
                    }
                }
                else {
                    console.log(`Your Pin Is Incorrect`);
                }
            }
            else if (bill.pay == "Internet Bill") {
                let net = await inquirer.prompt([{
                        name: "board",
                        type: "input",
                        message: "Enter Internet Provider e.g: Storm Fiber, PTCL, Optix etc:"
                    },
                    {
                        name: "account",
                        type: "input",
                        message: "Enter Internet Consumer Number:"
                    },
                    {
                        name: "amnt",
                        type: "number",
                        message: "Enter Internet Bill Amount:"
                    }
                ]);
                console.log(`\n`);
                cpin = await inquirer.prompt({
                    name: "cpins",
                    type: "number",
                    message: "Please Enter Your Pin:"
                });
                if (cpin.cpins == pin) {
                    console.log(`\n Your Pin Is Correct`);
                    if (net.amnt > myBalance) {
                        console.log(`\n Insufficient Amount \n`);
                    }
                    else {
                        console.log(`\n Transaction Successful To Account ${net.account}`);
                        myBalance -= net.amnt;
                        console.log(`\n Your Remaining Balance is ${myBalance}`);
                        console.log(chalk.bold(`\n Internet Bill Payment Receipt: \n Service Provider: ${net.board}  \n Consumer Name:${username.user} \n Consumer Number: ${net.account}  \n Consumer Account Number: ${myAcc}  \n Amount Transferred: ${net.amnt} \n`));
                    }
                }
                else {
                    console.log(`Your Pin Is Incorrect`);
                }
            }
            else if (bill.pay == "Water Bill") {
                let water = await inquirer.prompt([{
                        name: "board",
                        type: "input",
                        message: "Enter Water Board e.g: KW&SC, WSSP, etc:"
                    },
                    {
                        name: "account",
                        type: "input",
                        message: "Enter Water Bill Consumer Number:"
                    },
                    {
                        name: "amnt",
                        type: "number",
                        message: "Enter Water Bill Amount:"
                    }
                ]);
                console.log(`\n`);
                cpin = await inquirer.prompt({
                    name: "cpins",
                    type: "number",
                    message: "Please Enter Your Pin:"
                });
                if (cpin.cpins == pin) {
                    console.log(`\n Your Pin Is Correct`);
                    if (water.amnt > myBalance) {
                        console.log(`\n Insufficient Amount \n`);
                    }
                    else {
                        console.log(`\n Transaction Successful To Account ${water.board}`);
                        myBalance -= water.amnt;
                        console.log(`\n Your Remaining Balance is ${myBalance}`);
                        console.log(chalk.bold(`\n Water Bill Payment Receipt: \n Board Name: ${water.board}  \n Consumer Name:${username.user} \n Consumer Number: ${water.account}  \n Consumer Account Number: ${myAcc}  \n Amount Transferred: ${water.amnt} \n`));
                    }
                }
                else {
                    console.log(`Your Pin Is Incorrect`);
                }
            }
            else if (bill.pay == "LandLine Bill") {
                let landline = await inquirer.prompt([{
                        name: "board",
                        type: "input",
                        message: "Enter landLine Service Provider e.g: PTCL, VFONE, etc:"
                    },
                    {
                        name: "account",
                        type: "input",
                        message: "Enter landLine Bill Consumer Number:"
                    },
                    {
                        name: "amnt",
                        type: "number",
                        message: "Enter landLine Bill Amount:"
                    }
                ]);
                console.log(`\n`);
                cpin = await inquirer.prompt({
                    name: "cpins",
                    type: "number",
                    message: "Please Enter Your Pin:"
                });
                if (cpin.cpins == pin) {
                    console.log(`\n Your Pin Is Correct`);
                    if (landline.amnt > myBalance) {
                        console.log(`\n Insufficient Amount \n`);
                    }
                    else {
                        console.log(`\n Transaction Successful To Account ${landline.board}`);
                        myBalance -= landline.amnt;
                        console.log(`\n Your Remaining Balance is ${myBalance}`);
                        console.log(chalk.bold(`\n landLine Bill Payment Receipt: \n Service Provider: ${landline.board}  \n Consumer Name:${username.user} \n Consumer Number: ${landline.account}  \n Consumer Account Number: ${myAcc}  \n Amount Transferred: ${landline.amnt} \n`));
                    }
                }
                else {
                    console.log(`Your Pin Is Incorrect`);
                }
            }
        }
        else if (list.listed == "Mobile Packages") {
            let mob = await inquirer.prompt([{
                    name: "package",
                    type: "list",
                    message: "Choose Your Operator",
                    choices: ["Telenor", "Jazz", "Zong", "Ufone"],
                }]);
            if (mob.package == "Telenor") {
                let telenor = await inquirer.prompt({
                    name: "bundle",
                    type: "list",
                    message: "Choose Your Bundle",
                    choices: ["All In One Weekly (cost 2000)", "Weekly Data (cost 1500)", "Weekly Call (cost 1000)", "Weekly Sms (cost 500)"]
                });
                if (telenor.bundle == "All In One Weekly (cost 2000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (2000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n All In One Weekly Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 2000;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Data (cost 1500)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (1500 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly Data Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 1500;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Call (cost 1000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (1000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly Call Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 1000;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Sms (cost 500)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (500 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly SMS Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 500;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
            }
            if (mob.package == "Jazz") {
                let telenor = await inquirer.prompt({
                    name: "bundle",
                    type: "list",
                    message: "Choose Your Bundle",
                    choices: ["All In One Weekly (cost 2000)", "Weekly Data (cost 1500)", "Weekly Call (cost 1000)", "Weekly Sms (cost 500)"]
                });
                if (telenor.bundle == "All In One Weekly (cost 2000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (2000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n All In One Weekly Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 2000;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Data (cost 1500)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (1500 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly Data Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 1500;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Call (cost 1000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (1000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly Call Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 1000;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Sms (cost 500)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (500 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly SMS Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 500;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
            }
            if (mob.package == "Zong") {
                let telenor = await inquirer.prompt({
                    name: "bundle",
                    type: "list",
                    message: "Choose Your Bundle",
                    choices: ["All In One Weekly (cost 2000)", "Weekly Data (cost 1500)", "Weekly Call (cost 1000)", "Weekly Sms (cost 500)"]
                });
                if (telenor.bundle == "All In One Weekly (cost 2000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (2000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n All In One Weekly Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 2000;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Data (cost 1500)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (1500 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly Data Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 1500;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Call (cost 1000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (1000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly Call Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 1000;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Sms (cost 500)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (500 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly SMS Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 500;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
            }
            if (mob.package == "Ufone") {
                let telenor = await inquirer.prompt({
                    name: "bundle",
                    type: "list",
                    message: "Choose Your Bundle",
                    choices: ["All In One Weekly (cost 2000)", "Weekly Data (cost 1500)", "Weekly Call (cost 1000)", "Weekly Sms (cost 500)"]
                });
                if (telenor.bundle == "All In One Weekly (cost 2000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (2000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n All In One Weekly Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 2000;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Data (cost 1500)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (1500 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly Data Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 1500;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Call (cost 1000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (1000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly Call Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 1000;
                            console.log(`\n Your Remaining Balance is ${myBalance} \n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (telenor.bundle == "Weekly Sms (cost 500)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (500 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Weekly SMS Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 500;
                            console.log(`\n Your Remaining Balance is ${myBalance}\n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
            }
        }
        else if (list.listed == "Cash Back") {
            console.log(`\nIf You Choose "All In One" Mobile Bundle From "Cash Back" Tab, You Will Get 20% Cash Back`);
            console.log(`\nIf You Choose "Internet Billing" From "Cash Back" Tab, You Will Get 20% Cash Back\n`);
            let cashback = await inquirer.prompt({
                name: "back",
                type: "list",
                message: "Choose To Get 20% Cash Back",
                choices: ["Mobile Package Bundle", "Internet Billing"]
            });
            if (cashback.back == "Mobile Package Bundle") {
                let mob = await inquirer.prompt([{
                        name: "package",
                        type: "list",
                        message: "Choose Your Operator",
                        choices: ["Telenor > All In One Weekly (cost 2000)", "Jazz > All In One Weekly (cost 2000)", "Zong > All In One Weekly (cost 2000)", "Ufone > All In One Weekly (cost 2000)"],
                    }]);
                if (mob.package == "Telenor > All In One Weekly (cost 2000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (2000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Telenor's All In One Weekly Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 2000 * 0.8;
                            console.log(`\n Congratulations ${username.user}! You Get 20% Cash Back`);
                            console.log(`\n Your Remaining Balance is ${myBalance} \n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (mob.package == "Jazz > All In One Weekly (cost 2000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (2000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Jazz's All In One Weekly Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 2000 * 0.8;
                            console.log(`\n Congratulations ${username.user}! You Get 20% Cash Back`);
                            console.log(`\n Your Remaining Balance is ${myBalance} \n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (mob.package == "Zong > All In One Weekly (cost 2000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (2000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Zong's All In One Weekly Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 2000 * 0.8;
                            console.log(`\n Congratulations ${username.user}! You Get 20% Cash Back`);
                            console.log(`\n Your Remaining Balance is ${myBalance} \n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
                if (mob.package == "Ufone > All In One Weekly (cost 2000)") {
                    let sim = await inquirer.prompt({
                        name: "number",
                        type: "number",
                        message: "Enter Sim Number:"
                    });
                    console.log(`\n`);
                    cpin = await inquirer.prompt({
                        name: "cpins",
                        type: "number",
                        message: "Please Enter Your Pin:"
                    });
                    if (cpin.cpins == pin) {
                        console.log(`\n Your Pin Is Correct`);
                        if (2000 > myBalance) {
                            console.log(`\n Insufficient Amount \n`);
                        }
                        else {
                            console.log(`\n Ufone's All In One Weekly Bundle Successfully Subscribe On ${sim.number}`);
                            myBalance -= 2000 * 0.8;
                            console.log(`\n Congratulations ${username.user}! You Get 20% Cash Back`);
                            console.log(`\n Your Remaining Balance is ${myBalance} \n`);
                        }
                    }
                    else {
                        console.log(`Your Pin Is Incorrect`);
                    }
                }
            }
            if (cashback.back == "Internet Billing") {
                let net = await inquirer.prompt([{
                        name: "board",
                        type: "input",
                        message: "Enter Internet Provider e.g: Storm Fiber, PTCL, Optix etc:"
                    },
                    {
                        name: "account",
                        type: "input",
                        message: "Enter Internet Consumer Number:"
                    },
                    {
                        name: "amnt",
                        type: "number",
                        message: "Enter Internet Bill Amount:"
                    }
                ]);
                console.log(`\n`);
                cpin = await inquirer.prompt({
                    name: "cpins",
                    type: "number",
                    message: "Please Enter Your Pin:"
                });
                if (cpin.cpins == pin) {
                    console.log(`\n Your Pin Is Correct`);
                    if (net.amnt > myBalance) {
                        console.log(`\n Insufficient Amount \n`);
                    }
                    else {
                        console.log(`\n Transaction Successful To Account ${net.account}`);
                        myBalance -= net.amnt * 0.8;
                        console.log(`\n Congratulations ${username.user}! You Get 20% Cash Back`);
                        console.log(`\n Your Remaining Balance is ${myBalance}`);
                        console.log(chalk.bold(`\n Internet Bill Payment Receipt: \n Service Provider: ${net.board}  \n Consumer Name:${username.user} \n Consumer Number: ${net.account}  \n Consumer Account Number: ${myAcc}  \n Amount Transferred: ${net.amnt} \n`));
                    }
                }
                else {
                    console.log(`Your Pin Is Incorrect`);
                }
            }
        }
        else if (list.listed == "Mobile Load") {
            let si = await inquirer.prompt({
                name: "numbr",
                type: "number",
                message: "Enter Sim Number:"
            });
            let load = await inquirer.prompt({
                name: "num",
                type: "number",
                message: "Enter Load Amount:"
            });
            console.log(`\n`);
            cpin = await inquirer.prompt({
                name: "cpins",
                type: "number",
                message: "Please Enter Your Pin:"
            });
            if (cpin.cpins == pin) {
                console.log(`\n Your Pin Is Correct`);
                if (load.num > myBalance) {
                    console.log(`\n Insufficient Amount \n`);
                }
                else {
                    console.log(`\n Successfully ${load.num} Load On ${si.numbr}`);
                    myBalance -= load.num;
                    console.log(`\n Your Remaining Balance is ${myBalance} \n`);
                }
            }
            else {
                console.log(`Your Pin Is Incorrect`);
            }
        }
        else if (list.listed == "Asaan Loan") {
            if (myBalance >= 20000) {
                console.log(`\nYour Current Balance Is Greater Than 20000 So You Are Not Eligible For Asaan Loan \n`);
            }
            else {
                let loan = await inquirer.prompt({
                    name: "loan",
                    type: "number",
                    message: "Enter Loan Amount"
                });
                cpin = await inquirer.prompt({
                    name: "cpins",
                    type: "number",
                    message: "Please Enter Your Pin:"
                });
                if (cpin.cpins == pin) {
                    console.log(`\n Your Pin Is Correct`);
                    myBalance += loan.loan;
                    console.log(`\n You've Successfully Get Your Asaan Loan on ${myAcc}`);
                    console.log(`\n Your Your Updated Balance is ${myBalance}`);
                }
                else {
                    console.log(`Your Pin Is Incorrect`);
                }
            }
        }
        else if (list.listed == "Exit") {
            condition = false;
            console.log(`\n Thanks ${username.user}! For Used Asaan Paisa App`);
        }
    }
}
easyApp();
