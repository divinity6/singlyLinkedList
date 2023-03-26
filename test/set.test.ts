import {beforeEach, describe, expect, it} from '@jest/globals';
import Sll from '../src';

describe( '========== Set ==========' , () => {
  let isSet;
  let sll;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
    isSet = sll.set( 1 , 30 );
  } );

  it( 'length 의 값은 변하지 않는다' , ()=> {

    expect( sll.length ).toBe( 4 );
  } );

  it( '반환 값은 성공 여부를 반환한다' , () => {
    expect( isSet ).toBe( true );
  } );

  it( '기존 위치의 index 번째 값을 업데이트 한다' , () => {
    expect( sll.get( 1 ).val ).toBe( 30 );
  } );

  it( 'Tail Node 의 값은 변하지 않는다' , () => {
    expect( sll.tail.val ).toBe( 20 );
  } );

  it( '음수 값으로 호출하면 false 를 반환한다' , () => {
    expect( sll.set( -1 ) ).toBe( false );
  } );

  it( 'index 를 벗어난 값으로 호출하면 false 을 반환한다' , () => {
    expect( sll.set( 100 ) ).toBe( false );
  } );

} );