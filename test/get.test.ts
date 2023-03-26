import {beforeEach, describe, expect, it} from '@jest/globals';
import Sll from '../src';

describe( '========== Get ==========' , () => {

  let sll;
  let node;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
    node = sll.get( 1 );
  } );

  it( 'length 의 값은 변하지 않는다' , ()=> {

    expect( sll.length ).toBe( 4 );
  } );

  it( '반환한 Node 는 index 번째 값이다' , () => {
    expect( node.val ).toBe( 10 );
  } );

  it( 'Head Node 의 값은 변하지 않는다' , () => {
    expect( sll.head.val ).toBe( 5 );
  } );

  it( 'Tail Node 의 값은 변하지 않는다' , () => {
    expect( sll.tail.val ).toBe( 20 );
  } );

  it( '음수 값으로 호출하면 null 을 반환한다' , () => {
    expect( sll.get( -1 ) ).toBe( null );
  } );

  it( 'index 를 벗어난 값으로 호출하면 null 을 반환한다' , () => {
    expect( sll.get( 100 ) ).toBe( null );
  } );
} );
