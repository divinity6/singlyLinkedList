import {beforeEach, describe, expect, it} from '@jest/globals';
import Sll from '../src';

describe( '========== Shift ==========' , () => {

  let sll;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
    sll.shift();
  } );

  it( 'length 의 값은 shift 메서드를 호출한 만큼 줄어든다' , ()=> {
    expect( sll.length ).toBe( 3 );
  } );

  it( '2 index Node 의 값은 그 다음 Node 가 된다' , () => {
    expect( sll.head.next.next.val ).toBe( 20 );
  } );

  it( 'Head Node 의 값은 다음 Node 가 된다' , ()=> {
    expect( sll.head.val ).toBe( 10 );
  } );

  it( 'Tail Node 의 값은 마지막 값은 변하지 않는다' , () => {
    expect(sll.tail.val).toBe(20);
  } );

  describe( '가진 Node 의 갯수 보다 많이 shift 를 호출했을 경우' , ()=> {

    beforeEach( ()=> {
      sll.shift();
      sll.shift();
      sll.shift();
      sll.shift();
    } );

    it( 'length 최대 값 이후를 삭제해도 0 이된다' , () => {
      expect( sll.length ).toBe( 0 );
    } );

    it( 'Head Node 의 값은 null 이 된다' , () => {
      expect( sll.head ).toBe( null );
    } );

    it( 'Tail Node 의 값은 null 이 된다' , () => {
      expect( sll.tail ).toBe( null );
    } );
  } )
} );