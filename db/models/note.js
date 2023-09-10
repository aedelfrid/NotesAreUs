// create a class for a note
const uuid = require('uuid')

class noteObj {
    constructor(title, text) {
        this.id = uuid.v4();
        this.title = title;
        this.text = text;
    };
};

module.exports = noteObj