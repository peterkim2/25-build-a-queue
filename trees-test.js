'use strict';

const Tree = require('./trees.js');

let t = new Tree('A');
t.children.push(new Tree('B'), new Tree('C'));
t.children[0].children.push(new Tree('D'), new Tree('E'));
t.children[1].children.push(new Tree('F'), new Tree('G'));

describe('Tree Print', () => {
  it('should equal printed tree', done => {
    t.print() === [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ];
    done();
  });
});

console.assert(t.print() == 'A,B,C,D,E,F,G');
console.log('Test passing!');
