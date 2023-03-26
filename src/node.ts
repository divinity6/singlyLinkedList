import { Node } from '../types';

export class SllNode<T> implements Node<T> {

  public val : T;
  public next : Node<T>;

  public constructor( val : T ) {
    this.val = val;
    this.next = null;
  }
}