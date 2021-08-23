
export default class Component {

    static getRootClass() {
        return '.component';
    }

    constructor(root) {
        this.root = root;
        this.handlers  = {};
    }

    on(event, handler) {
        this.handlers[event] = handler;
    }

    fire(event, ...args) {
        this.handlers[event](this, ...args);
    }
}
