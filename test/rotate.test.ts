import {beforeEach, describe, expect, it} from '@jest/globals';
import Sll from '../src';

describe( '========== Rotate ==========' , () => {

  let sll;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
  } );

  it( 'length 의 값은 변하지 않는다' , ()=> {
    sll.rotate( 2 );
    expect( sll.length ).toBe( 4 );
  } );

  it( 'Head Node 는 rotate index 가 된다' , () => {
    sll.rotate( 2 );
    expect( sll.head.val ).toBe( 15 );
  } );

  it( 'Tail Node 는 rotate index - 1 가 된다' , () => {
    sll.rotate( 2 );
    expect( sll.tail.val ).toBe( 10 );
  } );

  it( '음수로 호출하면 Tail Node 부터 앞으로 변경한다' , () => {
    sll.rotate( -100 );
    expect( sll.head.val ).toBe( 5 );
  } );

  it( '-1 로 호출하면 Tail Node 가 된다' , () => {
    sll.rotate( -1 );
    expect( sll.head.val ).toBe( 20 );
  } );

} );