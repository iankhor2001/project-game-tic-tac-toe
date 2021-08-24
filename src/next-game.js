import Component from  './component.js';
import ClassList from "../node_modules/classlist/classlist.js";

import './next-game.css';

export default class Turn extends Component {
    static getRootClass() {
        return '.next-game';
    }

    constructor(root) {
        super(root);
        root.addEventListener("click", this.handleBtnClick.bind(this));
        this.classList = ClassList(root);
    }

    handleBtnClick() {
        this.fire('click');
    }

    toggleDisableBtn() {
        this.classList.toggle('disabled');
    }

}
