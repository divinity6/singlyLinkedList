import { NodeI , SinglyLinkedListI } from '../types';

class Node<T> implements NodeI<T> {

    public val : T;
    public next : NodeI<T>;

    constructor( val : T ) {
        this.val = val;
        this.next = null;
    }
}

export default class SinglyLinkedList<T> implements SinglyLinkedListI<T> {

    public head : NodeI<T>;
    public tail : NodeI<T>;
    public length : number;

    public constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    public push( val : T ) : this {
        const newNode = new Node( val );

        if ( 0 === this.length ){
            this.head = newNode;
        }
        else {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        this.length += 1;

        return this;
    }

    public pop() : NodeI<T> | void {
        if ( 0 === this.length ){
            return;
        }

        let removeNode = this.head;
        let newTailNode = removeNode;

        for ( let count = 0; count < this.length - 1; count += 1 ){
            newTailNode = removeNode;
            removeNode = removeNode.next;
        }

        this.tail = newTailNode;

        this.tail.next = null;

        this.length -= 1;

        if ( 0 === this.length ){
            this.head = null;
            this.tail = null;
        }

        return removeNode;
    }

    public shift() : NodeI<T> | void {
        if ( 0 === this.length ){
            return;
        }
        else if ( 1 === this.length ){
            this.tail = null;
        }

        const beforeHead = this.head;
        this.head = beforeHead.next;

        this.length -= 1;

        return beforeHead;
    }

    public unshift( val : T ) : this {
        const newNode = new Node( val );
        if ( 0 === this.length ){
            this.tail = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;

        this.length += 1;

        return this;
    }

    public get( index : number ) : NodeI<T> | null {
        if ( 0 === this.length || 0 > index || index >= this.length ){
            return null;
        }

        let foundNode = this.head;
        for ( let count = 0; count < index; count += 1 ){
            foundNode = foundNode.next;
        }
        return foundNode;
    }

    public set( index : number , val : T ) : boolean {
        const foundNode = this.get( index );

        if ( foundNode ){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    public insert( index : number , val : T ) : boolean {
        if ( 0 > index || index > this.length ){
            return false;
        }
        else if ( 0 === index ){
            this.unshift( val );
            return true;
        }
        else if ( index === this.length ){
            this.push( val );
            return true;
        }

        const newNode = new Node( val );
        const prevNode = this.get( index - 1 );
        const nextNode = prevNode.next;
        prevNode.next = newNode;
        newNode.next = nextNode;

        this.length += 1;

        return true;
    }

    public remove( index : number ) : NodeI<T> | void {
        if ( 0 === this.length || 0 > index || index >= this.length ){
            return;
        }

        if ( 0 === index ){
            return this.shift();
        }
        else if ( this.length - 1 === index ){
            return this.pop();
        }

        const beforeNode = this.get( index - 1 );
        const removeNode = beforeNode.next;
        beforeNode.next = removeNode.next;
        this.length -= 1;

        return removeNode;
    }

    public rotate( index : number ) : NodeI<T> | null {
        if ( 0 === this.length ){
            return null;
        }

        const _startIndex = index % this.length;
        let _endIndex;
        let startIndex = ( 0 === _startIndex ) ? index : _startIndex;
        let endIndex = startIndex - 1;

        if ( 0 > index ){
            startIndex = this.length + startIndex;
            _endIndex =  startIndex - 1;
            endIndex = 0 > _endIndex ? ( this.length - 1 ) : _endIndex;
        }

        const beforeHead = this.head;
        let currentNode = this.head;
        let foundNode = null;

        for ( let count = 0; count < this.length; count += 1 ){
            if ( startIndex === count ){
                this.head = currentNode;
                foundNode = currentNode;
            }
            else if ( endIndex === count ){
                this.tail = currentNode;
            }

            if ( ( this.length - 1 ) === count ){
                currentNode.next = beforeHead;
            }
            currentNode = currentNode.next;
        }

        this.tail.next = null;

        return foundNode;
    }

    public reverse() : this {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;

        let prev = null;
        let next;

        for ( let count = 0; count < this.length; count += 1 ){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        return this;
    }

}