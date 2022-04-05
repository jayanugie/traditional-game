const rockCom = document.getElementById("rockCom");
const paperCom = document.getElementById("paperCom");
const scissorsCom = document.getElementById("scissorsCom");
const rockPlayer1 = document.getElementById("rockPlayer1");
const paperPlayer1 = document.getElementById("paperPlayer1");
const scissorsPlayer1 = document.getElementById("scissorsPlayer1");
const player1 = [rockPlayer1, paperPlayer1, scissorsPlayer1];


for(let selection of player1) {

    selection.addEventListener("click", () => {

        selection.classList.add("highlight");

        const start = new Start();
        start.setPlayer1Option = selection;
        start.setComOption = start.comBrain();
        start.winCalculation();

        const waitResult = document.getElementById("result");
        waitResult.classList.add("result");
        waitResult.textContent = "..."

        setTimeout(() => {
            waitResult.textContent = start.matchResult();
        }, 500);

        refresh.addEventListener("click", function(){
            waitResult.classList.remove("result");
            waitResult.textContent = null;
        });
        
        if(player1[0] !== selection){
            player1[0].classList.remove("highlight");
        } 
        if (player1[1] !== selection) {
            player1[1].classList.remove("highlight");
        }
        if (player1[2] !== selection) {
            player1[2].classList.remove("highlight");
        }

        document.querySelector("p.vs").style.display = "none";
    });

    clearHistory(selection);
}


class Start {
    constructor() {
        this.player1Name = "PLAYER1"
        this.comName = "COM"
        this.player1Option;
        this.comOption;
        this.winner = ""
    }

    get getComOption() {
        return this.comOption;
    }

    set setComOption(option) {
        this.comOption = option;
    }

    get getPlayer1Option() {
        return this.player1Option;
    }

    set setPlayer1Option(option) {
        this.player1Option = option;
    }

    comBrain() {
        const option = [rockCom, paperCom, scissorsCom];
        const com = option[Math.floor(Math.random() * option.length)];
        for(let opsi of option) {
            com.classList.add("highlight");
            if(opsi !== com){
                opsi.classList.remove("highlight");
            }
        }
        clearHistory(com);
        return com;
    }

    winCalculation() {
        if (this.comOption == paperCom && this.player1Option == scissorsPlayer1) {
            console.log(`Player 1 chooses Scissors` + `\n` + `COM chooses Paper` + `\n` + `Player 1 Win!`);
            return this.winner = this.player1Name;
        } else if (this.comOption == paperCom && this.player1Option == rockPlayer1) {
            console.log(`Player 1 chooses Rock` + `\n` + `COM chooses Paper` + `\n` + `COM Win!`);
            return this.winner = this.comName;
        } else if (this.comOption == scissorsCom && this.player1Option == paperPlayer1) {
            console.log(`Player 1 chooses Paper` + `\n` + `COM chooses Scissors` + `\n` + `COM Win!`);
            return this.winner = this.comName;
        } else if (this.comOption == scissorsCom && this.player1Option == rockPlayer1) {
            console.log(`Player 1 chooses Rock` + `\n` + `COM chooses Scissors` + `\n` + `Player 1 Win!`);
            return this.winner = this.player1Name;
        } else if (this.comOption == rockCom && this.player1Option == paperPlayer1) {
            console.log(`Player 1 chooses Paper` + `\n` + `COM chooses Rock` + `\n` + `Player 1 Win!`);
            return this.winner = this.player1Name;
        } else if (this.comOption == rockCom && this.player1Option == scissorsPlayer1) {
            console.log(`Player 1 chooses Scissors` + `\n` + `COM chooses Rock` + `\n` + `COM Win!`);
            return this.winner = this.comName;
        } else {
            console.log(`Both are the same` + `\n` + `DRAW!`);
            return this.winner = "DRAW";
        }
    }

    matchResult() {
        if (this.winner != "DRAW") {
            return `${this.winner} WIN`;
        } else {
            return `DRAW`;
        }
    }
}


function clearHistory(item) {
    const refresh = document.getElementById("refresh");
    refresh.addEventListener("click", function() {
        item.classList.remove("highlight");
        console.clear();
        document.querySelector("p.vs").style.display = "inline";
        
    });
}



