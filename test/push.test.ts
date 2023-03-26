import {beforeEach, describe, expect, it} from '@jest/globals';
import Sll from '../src';

describe( '========== Push ==========' , ()=> {

  let sll;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
  } );

  it( 'length 의 값은 push 메서드를 호출한 만큼이 된다' , ()=> {
    expect( sll.length ).toBe( 4 );
  } );

  it( 'Tail Node 의 next 값은 null 이 된다' , () => {
    expect( sll.tail.next ).toBe( null );
  } );

  it( 'Head Node 의 값은 첫 번째로 push 한 값이 된다' , () => {
    expect( sll.head.val ).toBe( 5 );
  } );

  it( 'Tail Node 의 값은 마지막으로 push 한 값이 된다' , () => {
    expect( sll.tail.val ).toBe( 20 );
  } );

} );