import Component from  './component.js';

import './reset.css';

export default class Turn extends Component {
    static getRootClass() {
        return '.reset';
    }

    constructor(root) {
        super(root);
        root.addEventListener("click", this.handleResetClick.bind(this));
    }

    handleResetClick() {
        this.fire('click');
    }

}
