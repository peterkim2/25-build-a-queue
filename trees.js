'use strict';

const Queue = require('./queue.js');

module.exports = Tree;

function Tree(val) {
  this.val = val;
  this.children = [];
}

let logArray = [];

Tree.prototype.print = function() {
  let q = new Queue();
  q.enqueue(this);

  while(q.head) {
    let cur = q.dequeue();
    logArray.push(cur.val);
    console.log(cur.val);
    cur.children.forEach(function(child) {
      q.enqueue(child);
    });
  }
  return logArray;
};
