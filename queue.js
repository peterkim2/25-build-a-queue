'use strict';

const SinglyLinkedList = require('./singly-linked-list.js');

module.exports = SinglyLinkedList;

SinglyLinkedList.prototype.enqueue = function(val) {
  this.append(val);
  return;
};

SinglyLinkedList.prototype.dequeue = function() {
  if (this.head) {
    let prev = this.head;
    let cur = this.head.next;
    this.head = cur;
    return prev.val;
  }
  return null;
};
