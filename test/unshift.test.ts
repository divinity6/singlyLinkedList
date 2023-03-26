import {beforeEach, describe, expect, it} from '@jest/globals';
import Sll from '../src';

describe( '========== Unshift ==========' , () => {

  let sll;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
    sll.unshift( 30 );
  } );

  it( 'length 의 값은 unshift 메서드를 호출한 만큼이 된다' , ()=> {
    expect( sll.length ).toBe( 5 );
  } );

  it( '2 index Node 의 값은 이전 Node 가 된다' , () => {
    expect( sll.head.next.next.val ).toBe( 10 );
  } )

  it( 'Head Node 의 값은 unshift 한 값이 된다' , () => {
    expect( sll.head.val ).toBe( 30 );
  } )

  it( 'Tail Node 의 값은 변하지 않는다' , () => {
    expect( sll.tail.val ).toBe( 20 );
  } )
} );
