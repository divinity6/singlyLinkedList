import { NodeI , SllI } from "../types";
/**
 * - Iterator 프로토콜을 만족하는 iterable 객체 입니다
 */
export default class LinkedListIterator<T> implements IterableIterator<NodeI<T>> {

    private list : SllI<T>;

    private currentNode : NodeI<T>;

    public constructor( list ) {
        this.list = list;
        this.currentNode = list.head;
    }

    public next = () : IteratorResult<NodeI<T>,NodeI<T>> => {
        const currentNode = this.currentNode;
        if ( currentNode ){
            this.currentNode = currentNode.next;
            return { value : currentNode , done : false };
        }
        return { value : currentNode , done : true };
    }

    [Symbol.iterator](): IterableIterator<NodeI<T>> {
        return;
    }
}