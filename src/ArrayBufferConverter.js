export default class ArrayBufferConverter {

    buffer;

    constructor() {
        this.buffer = null;
    }

    load(buffer) {
        this.buffer = buffer;
    }
    toString() {
        return String.fromCharCode(...new Uint16Array(this.buffer));
    }
}