/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if (lists.length === 0 ) {
        return null;
    }
    while (lists.length > 1) {
        let a = lists.shift(); 
        let b = lists.shift(); 
        const h = mergeLists(a, b);
        lists.push(h);
    }
    return lists[0];
};

var mergeLists = function(list1, list2) {
    let dummy = new ListNode(null);
    let head = dummy;
    
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            head.next = list1
            list1 = list1.next;
        } else {
            head.next = list2;
            list2 = list2.next;
        }
        head = head.next;
    }
    if (list1 !== null) head.next = list1;
    if (list2 !== null) head.next = list2;
    
    return dummy.next;
}; 