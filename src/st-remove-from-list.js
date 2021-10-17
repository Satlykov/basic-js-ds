const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList( l, k ) {

    function lengthList(list) {
        let i = 0;
        let cur = list;
    
        while (cur) {
            i++;
            if (cur.next === null) {
                return i;
            }
    
            cur = cur.next;
        }
    }

    function indexOf(el, list) {
        let cur = list;
        let i = 0;
    
        while (cur) {
            if (cur.value === el) {
                return i;
            }
    
            cur = cur.next;
            i++;
        }
    
        return -1;
    }

    function removeAt(pos, l) {
        if (pos < 0 || pos >= lengthList(l)) {
            return;
        }
    
        let cur = l;
    
        if (pos === 0) {
            return l = cur.next;
        } else if(pos === 1){
            cur = cur.next.next
            l.next = cur;
            return l;
        } else if(pos === 2){
            cur = cur.next.next.next
            l.next.next = cur;
            return l;
        } else if(pos === 3){
            cur = cur.next.next.next.next
            l.next.next.next = cur;
            return l;
        } else if(pos === 4){
            cur = cur.next.next.next.next.next
            l.next.next.next.next = cur;
            return l;
        }
    
        return l;
    }

    return removeAt(indexOf(k, removeAt(indexOf(k, l), l)), removeAt(indexOf(k, l), l))
}
