import { describe , expect , it , beforeEach } from "@jest/globals";
import SinglyLinkedList from "../src";

describe( "----------------- SinglyLinkedList Unit Test -----------------" , () => {

  let sll;

  beforeEach( () => {
    sll = new SinglyLinkedList<number>();
    sll.push( 5 );
    sll.push( 10 );
    sll.push( 15 );
    sll.push( 20 );
  } );

  describe( "========== Push ==========" , ()=> {

    it( "length 의 값은 push 메서드를 호출한 만큼이 된다" , ()=> {
      expect( sll.length ).toBe( 4 );
    } );

    it( "Tail Node 의 next 값은 null 이 된다" , () => {
      expect( sll.tail.next ).toBe( null );
    } )

    it( "Head Node 의 값은 첫 번째로 push 한 값이 된다" , () => {
      expect( sll.head.val ).toBe( 5 );
    } )

    it( "Tail Node 의 값은 마지막으로 push 한 값이 된다" , () => {
      expect( sll.tail.val ).toBe( 20 );
    } )

  } );

  describe( "========== Pop ==========" , ()=> {

    beforeEach( () => sll.pop() );

    it( "length 의 값은 pop 메서드를 호출한 만큼 줄어든다" , ()=> {
      expect( sll.length ).toBe( 3 );
    } );

    it( "Tail Node 의 다음 값은 null 이 된다" , () => {
      expect( sll.tail.next ).toBe( null );
    } );

    it( "Head Node 의 값은 변하지 않는다" , ()=> {
      expect( sll.head.val ).toBe( 5 );
    } );

    it( "Tail Node 의 값은 마지막 push 이전 값이 된다" , () => {
      expect( sll.tail.val ).toBe( 15 );
    } );

    describe( "가진 Node 의 갯수 보다 많이 pop 을 호출했을 경우" , ()=> {

      beforeEach( ()=> {
        sll.pop();
        sll.pop();
        sll.pop();
        sll.pop();
      } );

      it( "length 최대 값 이후를 삭제해도 0 이된다" , () => {
        expect( sll.length ).toBe( 0 );
      } );

      it( "Head Node 의 값은 null 이 된다" , () => {
        expect( sll.head ).toBe( null );
      } );

      it( "Tail Node 의 값은 null 이 된다" , () => {
        expect( sll.tail ).toBe( null );
      } );
    } )
  } );

  describe( "========== Shift ==========" , () => {
    beforeEach( () => sll.shift() );

    it( "length 의 값은 shift 메서드를 호출한 만큼 줄어든다" , ()=> {
      expect( sll.length ).toBe( 3 );
    } );

    it( "2 index Node 의 값은 그 다음 Node 가 된다" , () => {
      expect( sll.head.next.next.val ).toBe( 20 );
    } );

    it( "Head Node 의 값은 다음 Node 가 된다" , ()=> {
      expect( sll.head.val ).toBe( 10 );
    } );

    it( "Tail Node 의 값은 마지막 값은 변하지 않는다" , () => {
      expect(sll.tail.val).toBe(20);
    } );

    describe( "가진 Node 의 갯수 보다 많이 shift 를 호출했을 경우" , ()=> {

      beforeEach( ()=> {
        sll.shift();
        sll.shift();
        sll.shift();
        sll.shift();
      } );

      it( "length 최대 값 이후를 삭제해도 0 이된다" , () => {
        expect( sll.length ).toBe( 0 );
      } );

      it( "Head Node 의 값은 null 이 된다" , () => {
        expect( sll.head ).toBe( null );
      } );

      it( "Tail Node 의 값은 null 이 된다" , () => {
        expect( sll.tail ).toBe( null );
      } );
    } )
  } );

  describe( "========== Unshift ==========" , () => {

    beforeEach( ()=> sll.unshift( 30 ) );

    it( "length 의 값은 unshift 메서드를 호출한 만큼이 된다" , ()=> {
      expect( sll.length ).toBe( 5 );
    } );

    it( "2 index Node 의 값은 이전 Node 가 된다" , () => {
      expect( sll.head.next.next.val ).toBe( 10 );
    } )

    it( "Head Node 의 값은 unshift 한 값이 된다" , () => {
      expect( sll.head.val ).toBe( 30 );
    } )

    it( "Tail Node 의 값은 변하지 않는다" , () => {
      expect( sll.tail.val ).toBe( 20 );
    } )
  } );

  describe( "========== Get ==========" , () => {

    let node;

    beforeEach( ()=> { node = sll.get( 1 ) } );

    it( "length 의 값은 변하지 않는다" , ()=> {

      expect( sll.length ).toBe( 4 );
    } );

    it( "반환한 Node 는 index 번째 값이다" , () => {
      expect( node.val ).toBe( 10 );
    } )

    it( "Head Node 의 값은 변하지 않는다" , () => {
      expect( sll.head.val ).toBe( 5 );
    } )

    it( "Tail Node 의 값은 변하지 않는다" , () => {
      expect( sll.tail.val ).toBe( 20 );
    } )

    it( "음수 값으로 호출하면 null 을 반환한다" , () => {
      expect( sll.get( -1 ) ).toBe( null );
    } )

    it( "index 를 벗어난 값으로 호출하면 null 을 반환한다" , () => {
      expect( sll.get( 100 ) ).toBe( null );
    } )
  } );

  describe( "========== Set ==========" , () => {
    let isSet;

    beforeEach( ()=> { isSet = sll.set( 1 , 30 ) } );

    it( "length 의 값은 변하지 않는다" , ()=> {

      expect( sll.length ).toBe( 4 );
    } );

    it( "반환 값은 성공 여부를 반환한다" , () => {
      expect( isSet ).toBe( true );
    } );

    it( "기존 위치의 index 번째 값을 업데이트 한다" , () => {
      expect( sll.get( 1 ).val ).toBe( 30 );
    } );

    it( "Tail Node 의 값은 변하지 않는다" , () => {
      expect( sll.tail.val ).toBe( 20 );
    } );

    it( "음수 값으로 호출하면 false 를 반환한다" , () => {
      expect( sll.set( -1 ) ).toBe( false );
    } );

    it( "index 를 벗어난 값으로 호출하면 false 을 반환한다" , () => {
      expect( sll.set( 100 ) ).toBe( false );
    } );

  } );

  describe( "========== Insert ==========" , () => {
    let isInsert;

    beforeEach( ()=> { isInsert = sll.insert( 1 , 30 ) } );

    it( "length 의 값은 set 메서드를 호출한 만큼 증가한다" , ()=> {

      expect( sll.length ).toBe( 5 );
    } );

    it( "반환 값은 성공 여부를 반환한다" , () => {
      expect( isInsert ).toBe( true );
    } )

    it( "기존 위치의 index 번째 값은 뒤로 밀려난다" , () => {
      expect( sll.get( 2 ).val ).toBe( 10 );
    } )

    it( "Tail Node 의 값은 변하지 않는다" , () => {
      expect( sll.tail.val ).toBe( 20 );
    } )

    it( "음수 값으로 호출하면 false 를 반환한다" , () => {
      expect( sll.insert( -1 ) ).toBe( false );
    } )

    it( "index 를 벗어난 값으로 호출하면 false 을 반환한다" , () => {
      expect( sll.insert( 100 ) ).toBe( false );
    } )
  } );

  describe( "========== Remove ==========" , () => {
    let node;

    beforeEach( ()=> { node = sll.remove( 1 ) } );

    it( "length 의 값은 remove 메서드를 호출한 만큼 감소한다" , ()=> {
      expect( sll.length ).toBe( 3 );
    } );

    it( "제거한 Node 를 반환한다" , () => {
      expect( node.val ).toBe( 10 );
    } );

    it( "기존 위치의 index 번째 값을 제거한다" , () => {
      expect( sll.get( 1 ).val ).toBe( 15 );
    } );

    it( "이전 위치의 Node 는 다음 Node 를 바라본다" , () => {
      expect( sll.get( 0 ).next.val ).toBe( 15 );
    } );

    it( "음수 값으로 호출하면 undefined 를 반환한다" , () => {
      expect( sll.remove( -1 ) ).toBe( undefined );
    } );

    it( "index 를 벗어난 값으로 호출하면 undefined 을 반환한다" , () => {
      expect( sll.remove( 100 ) ).toBe( undefined );
    } );
  } );

  describe( "========== Rotate ==========" , () => {

    it( "length 의 값은 변하지 않는다" , ()=> {
      sll.rotate( 2 );
      expect( sll.length ).toBe( 4 );
    } );

    it( "Head Node 는 rotate index 가 된다" , () => {
      sll.rotate( 2 );
      expect( sll.head.val ).toBe( 15 );
    } );

    it( "Tail Node 는 rotate index - 1 가 된다" , () => {
      sll.rotate( 2 );
      expect( sll.tail.val ).toBe( 10 );
    } );

    it( "음수로 호출하면 Tail Node 부터 앞으로 변경한다" , () => {
      sll.rotate( -100 );
      expect( sll.head.val ).toBe( 5 );
    } );

    it( "-1 로 호출하면 Tail Node 가 된다" , () => {
      sll.rotate( -1 );
      expect( sll.head.val ).toBe( 20 );
    } );
  } );

  describe( "========== Reverse ==========" , () => {
    beforeEach( () => sll.reverse() );

    it( "length 의 값은 변하지 않는다" , ()=> {
      expect( sll.length ).toBe( 4 );
    } );

    it( "Head Node 의 값은 Tail Node 의 값이된다" , () => {
      expect( sll.head.val ).toBe( 20 );
    } );

    it( "Tail Node 의 값은 Head Node 가 된다" , () => {
      expect( sll.tail.val ).toBe( 5 );
    } );

    it( "sll 의 값을 역순으로 정렬한다" , () => {
      expect( sll.get( 2 ).val ).toBe( 10 );
    } );
  } );


} )