import { beforeEach , describe , expect , it } from '@jest/globals';
import Sll from '../src';

describe( '========== Iterator ==========' , ()=> {

  let sll;

  beforeEach( () => {
    sll = new Sll<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
  } );

  it( 'iteration 프로토콜을 준수합니다' , ()=>{
    expect( sll[Symbol.iterator]().next().value.val ).toBe( 5 );
  } );

  it( '첫번째 반환값의 next 는 다음 값이다' , ()=>{
    expect( sll[Symbol.iterator]().next().value.next.val ).toBe( 10 );
  } );

  it( 'iterator 로 반복할 수 있습니다', () => {
    const result = [];
    for ( const node of sll ){
      result.push( node.val );
    }
    expect( result ).toStrictEqual( [ 5 , 10 , 15 , 20 ] )
  } );

} );