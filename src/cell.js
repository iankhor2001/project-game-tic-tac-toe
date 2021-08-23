import Component from  './component.js';

import './cell.css';

export default class Cell extends Component {
    static getRootClass() {
        return '.cell';
    }

    constructor(root) {
        super(root);

        root.addEventListener("click", this.handleDomClick.bind(this));
        this.reset();
    }

    handleDomClick() {
        this.fire('cellClick',this);
    }

    reset() {
        this.root.textContent = "\xA0";
    }

    occupyCell(x) {
        this.root.textContent = x;
    }

    isOccupied() {
        if(this.root.textContent !== "\xA0")
            return true;
        else
            return false;
    }

    isMatch(x) {
        return this.root.textContent === x;
    }
}
