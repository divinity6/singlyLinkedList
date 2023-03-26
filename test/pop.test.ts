import {beforeEach, describe, expect, it} from '@jest/globals';
import Sll from '../src';

describe( '========== Pop ==========' , ()=> {

  let sll;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
    sll.pop();
  } );

  it( 'length 의 값은 pop 메서드를 호출한 만큼 줄어든다' , ()=> {
    expect( sll.length ).toBe( 3 );
  } );

  it( 'Tail Node 의 다음 값은 null 이 된다' , () => {
    expect( sll.tail.next ).toBe( null );
  } );

  it( 'Head Node 의 값은 변하지 않는다' , ()=> {
    expect( sll.head.val ).toBe( 5 );
  } );

  it( 'Tail Node 의 값은 마지막 push 이전 값이 된다' , () => {
    expect( sll.tail.val ).toBe( 15 );
  } );

  describe( '가진 Node 의 갯수 보다 많이 pop 을 호출했을 경우' , ()=> {

    beforeEach( ()=> {
      sll.pop();
      sll.pop();
      sll.pop();
      sll.pop();
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

  } );
} );