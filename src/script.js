const randomDamage = () => Math.floor(Math.random() * 10) + 1;

const chooseOption = (opt1, opt2) => {
    const randNum = Math.floor(Math.random());

    return randNum ? opt1 : opt1;
}
// console.log(randomDamage());

const attackPlayer = function (health){
    return health - randomDamage();
}

// console.log(attackPlayer(10));


const logHealth = (player, health) =>
    console.log(`${player}  health:  ${health}`);

// logHealth("Marina's", 50);


const logDeath = (winner, loser) => console.log(`${winner}  defeated ${loser}`);


// logDeath("Marina", "Gabriel");


const isDead = (health) => health <= 0;



function fight(player1, player2, player1Health, player2Health){
    while (true){
        let attacker = chooseOption(player1, player2);

        if(attacker === player1){
            player2Health = attackPlayer(player2Health);
            logHealth(player2, player2Health);
            if(isDead(player2Health)){
                logDeath(player1, player2);
                break;
            }
        } else {
            player1Health = attackPlayer(player1Health);
            logHealth(player1, player1Health);
            if(isDead(player1Health)){
                logDeath(player2, player1);
                break;
            }
        }
    }
}

fight(" Marina ", " Gabriel ", 100, 100);