import Component from './component.js';
import Role from './role.js';
import Turn from './turn.js';

import './banner.css';

export default class Banner extends Component {
    static getRootClass() {
        return '.banner';
    }

    constructor(root) {
        super(root);
        this.roles = {};

        const els = root.querySelectorAll(Role.getRootClass());
        this.roles['O'] =  new Role(els[0]);
        this.roles['X'] =  new Role(els[1]);

        this.turn = new Turn(root.querySelector('.turn'));
    }

    reset() {
        this.roles['X'].reset();
        this.roles['O'].reset();
        this.turn.setTurn('O');
    }

    setScore(x) {
        this.roles[x].setScore();
    }

    gameFinished(x) {
        this.turn.gameFinished(x);
    }

    switchTurn(x) {
        this.turn.setTurn(x);
    }
}
