import Component from  './component.js';
import Banner from  './banner.js';
import Grid from  './grid.js';
import Reset from  './reset.js';
import './navbar.css';
import './main.css';

export default class Main extends Component {
    static getRootClass() {
        return '.main';
    }

    constructor(root) {
        super(root);

        this.whichTurn = "O";
        this.banner = new Banner(root.querySelector('.banner'));

        this.grid = new Grid(root.querySelector('.grid'));
        this.grid.on('click', this.handleCellClick.bind(this));
        this.grid.on('finish', this.handleFinishGame.bind(this));

        this.reset = new Reset(root.querySelector('.reset'));
        this.reset.on('click', this.handleResetClick.bind(this));

        this.grid.setTurn(this.whichTurn);
    }

    handleCellClick() {
        console.log('SwitchTurn')
        switch (this.whichTurn) {
            case "O": 
                this.whichTurn = "X";
                break;
            case "X":
                this.whichTurn = "O";
                break;
        }
        this.banner.switchTurn(this.whichTurn);
        this.grid.setTurn(this.whichTurn);
    }

    handleFinishGame(firer, mode) {
        if(mode === "win") {
            console.log("Game Won");
            this.banner.setScore(this.whichTurn);
        }
        else if(mode === "tie") {} // for later use

        this.whichTurn = "O";  
        this.grid.reset(this.whichTurn);
        this.banner.turn.setTurn(this.whichTurn);
    }

    handleResetClick() {
        console.log("Reseting");
        this.whichTurn = "O";
        this.grid.reset(this.whichTurn);
        this.banner.reset();
    }
}

window.onload = function() {
    const body = document.querySelector('body');
    new Main(body);
};
