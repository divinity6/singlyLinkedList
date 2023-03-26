import {beforeEach, describe, expect, it} from '@jest/globals';
import Sll from '../src';

describe( '========== Reverse ==========' , () => {

  let sll;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
    sll.reverse();
  } );

  it( 'length 의 값은 변하지 않는다' , ()=> {
    expect( sll.length ).toBe( 4 );
  } );

  it( 'Head Node 의 값은 Tail Node 의 값이된다' , () => {
    expect( sll.head.val ).toBe( 20 );
  } );

  it( 'Tail Node 의 값은 Head Node 가 된다' , () => {
    expect( sll.tail.val ).toBe( 5 );
  } );

  it( 'sll 의 값을 역순으로 정렬한다' , () => {
    expect( sll.get( 2 ).val ).toBe( 10 );
  } );
} );