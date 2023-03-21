/**
 * - Iterator 프로토콜을 만족하는 iterable 객체 입니다
 */
export default class LinkedListIterator<Node> implements IterableIterator<Node> {

    private list;

    private currentNode : Node;

    constructor( list ) {
        this.list = list;
        this.currentNode = list.head;
    }

    next(): IteratorResult<Node,Node> {
        if ( this.currentNode.next ){
            this.currentNode = this.currentNode.next;
            return { value : this.currentNode , done : false };
        }
        return { value : null , done : true };
    }

    [Symbol.iterator](): IterableIterator<any> {
        return;
    }
}