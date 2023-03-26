import {beforeEach, describe, expect, it} from '@jest/globals';
import Sll from '../src';

describe( '========== Remove ==========' , () => {
  let node;
  let sll;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
    node = sll.remove( 1 );
  } );

  it( 'length 의 값은 remove 메서드를 호출한 만큼 감소한다' , ()=> {
    expect( sll.length ).toBe( 3 );
  } );

  it( '제거한 Node 를 반환한다' , () => {
    expect( node.val ).toBe( 10 );
  } );

  it( '기존 위치의 index 번째 값을 제거한다' , () => {
    expect( sll.get( 1 ).val ).toBe( 15 );
  } );

  it( '이전 위치의 Node 는 다음 Node 를 바라본다' , () => {
    expect( sll.get( 0 ).next.val ).toBe( 15 );
  } );

  it( '음수 값으로 호출하면 undefined 를 반환한다' , () => {
    expect( sll.remove( -1 ) ).toBe( undefined );
  } );

  it( 'index 를 벗어난 값으로 호출하면 undefined 을 반환한다' , () => {
    expect( sll.remove( 100 ) ).toBe( undefined );
  } );
} );
