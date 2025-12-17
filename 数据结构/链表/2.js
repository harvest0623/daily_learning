function ListNode(val) {
    this.val = val;
    this.next = null;
}
const node1 = new ListNode(1); // {val: 1, next: null}
node1.next = new ListNode(2);// {val: 1, next: {val: 2, next: null}}
