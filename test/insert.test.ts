import {beforeEach, describe, expect, it} from '@jest/globals';
import Sll from '../src';

describe( '========== Insert ==========' , () => {

  let sll;
  let isInsert;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
    isInsert = sll.insert( 1 , 30 );
  } );

  it( 'length 의 값은 set 메서드를 호출한 만큼 증가한다' , ()=> {

    expect( sll.length ).toBe( 5 );
  } );

  it( '반환 값은 성공 여부를 반환한다' , () => {
    expect( isInsert ).toBe( true );
  } );

  it( '기존 위치의 index 번째 값은 뒤로 밀려난다' , () => {
    expect( sll.get( 2 ).val ).toBe( 10 );
  } );

  it( 'Tail Node 의 값은 변하지 않는다' , () => {
    expect( sll.tail.val ).toBe( 20 );
  } );

  it( '음수 값으로 호출하면 false 를 반환한다' , () => {
    expect( sll.insert( -1 ) ).toBe( false );
  } );

  it( 'index 를 벗어난 값으로 호출하면 false 을 반환한다' , () => {
    expect( sll.insert( 100 ) ).toBe( false );
  } );

} );
