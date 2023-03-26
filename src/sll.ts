import { LinkedList , Node }     from '../types';
import { SllNode }              from './node';
import LinkedListIterator     from './listIterator';

/** SinglyLinkedList */
export default class Sll<T> implements LinkedList<T> {

  public head : Node<T>;
  public tail : Node<T>;
  private _length : number;

  public get length() : number {
    return this._length;
  }

  public constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  /** 마지막 Node 를 삽입합니다 */
  public push( val : T ) : this {

    const newNode = new SllNode( val );

    if ( 0 === this._length ){
      this.head = newNode;
    }
    else {
      this.tail.next = newNode;
    }

    this.tail = newNode;

    this._length += 1;

    return this;
  }

  /** 마지막 Node 를 제거합니다 */
  public pop() : Node<T> | void {
    if ( 0 === this._length ){
      return;
    }

    let removeNode = this.head;
    let newTailNode = removeNode;

    for ( let count = 0; count < this._length - 1; count += 1 ){
      newTailNode = removeNode;
      removeNode = removeNode.next;
    }

    this.tail = newTailNode;

    this.tail.next = null;

    this._length -= 1;

    if ( 0 === this._length ){
      this.head = null;
      this.tail = null;
    }

    return removeNode;
  }

  /** 첫번째 Node 를 제거합니다 */
  public shift() : Node<T> | void {
    if ( 0 === this._length ){
      return;
    }
    else if ( 1 === this._length ){
      this.tail = null;
    }

    const beforeHead = this.head;
    this.head = beforeHead.next;

    this._length -= 1;

    return beforeHead;
  }

  /** 첫번째 Node 를 삽입합니다 */
  public unshift( val : T ) : this {
    const newNode = new SllNode( val );
    if ( 0 === this._length ){
      this.tail = newNode;
    }
    newNode.next = this.head;
    this.head = newNode;

    this._length += 1;

    return this;
  }

  /** index Node 를 반환합니다 */
  public get( index : number ) : Node<T> | null {
    if ( 0 === this._length || 0 > index || index >= this._length ){
      return null;
    }

    let foundNode = this.head;
    for ( let count = 0; count < index; count += 1 ){
      foundNode = foundNode.next;
    }
    return foundNode;
  }

  /** index Node 를 설정합니다 */
  public set( index : number , val : T ) : boolean {
    const foundNode = this.get( index );

    if ( foundNode ){
      foundNode.val = val;
      return true;
    }
    return false;
  }

  /** index Node 를 삽입합니다 */
  public insert( index : number , val : T ) : boolean {
    if ( 0 > index || index > this._length ){
      return false;
    }
    else if ( 0 === index ){
      this.unshift( val );
      return true;
    }
    else if ( index === this._length ){
      this.push( val );
      return true;
    }

    const newNode = new SllNode( val );
    const prevNode = this.get( index - 1 );
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;

    this._length += 1;

    return true;
  }

  /** index Node 를 제거합니다 */
  public remove( index : number ) : Node<T> | void {
    if ( 0 === this._length || 0 > index || index >= this._length ){
      return;
    }

    if ( 0 === index ){
      return this.shift();
    }
    else if ( this._length - 1 === index ){
      return this.pop();
    }

    const beforeNode = this.get( index - 1 );
    const removeNode = beforeNode.next;
    beforeNode.next = removeNode.next;
    this._length -= 1;

    return removeNode;
  }

  /** index 부터 재정렬 후 index Node 를 반환합니다 */
  public rotate( index : number ) : Node<T> | null {
    if ( 0 === this._length ){
      return null;
    }

    const _startIndex = index % this._length;
    let _endIndex;
    let startIndex = ( 0 === _startIndex ) ? index : _startIndex;
    let endIndex = startIndex - 1;

    if ( 0 > index ){
      startIndex = this._length + startIndex;
      _endIndex =  startIndex - 1;
      endIndex = 0 > _endIndex ? ( this._length - 1 ) : _endIndex;
    }

    const beforeHead = this.head;
    let currentNode = this.head;
    let foundNode = null;

    for ( let count = 0; count < this._length; count += 1 ){
      if ( startIndex === count ){
        this.head = currentNode;
        foundNode = currentNode;
      }
      else if ( endIndex === count ){
        this.tail = currentNode;
      }

      if ( ( this._length - 1 ) === count ){
        currentNode.next = beforeHead;
      }
      currentNode = currentNode.next;
    }

    this.tail.next = null;

    return foundNode;
  }

  /** list 를 뒤집습니다 */
  public reverse() : this {
    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let prev = null;
    let next;

    for ( let count = 0; count < this._length; count += 1 ){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }

  public [ Symbol.iterator ]() : IterableIterator<Node<T>> {
    return new LinkedListIterator<T>( this );
  }

}