import {beforeEach, describe, expect, it} from '@jest/globals';
const { performance } = require('perf_hooks');
import SinglyLinkedList from "../src";

describe( "----------------- SinglyLinkedList Spec Test -----------------" , () => {

  const sll = new SinglyLinkedList<string>();
  const sllArr = [];
  const arr = [ "1 El" , "2 El" , "3 El" , "4 El" , "5 El" , "6 El" , "7 El" , "8 El" , "9 El" , "10 El" ];
  beforeEach( ()=> {
    sll.push( "1 El" ).push( "2 El" ).push( "3 El" ).push( "4 El" ).push( "5 El" ).push( "6 El" ).push( "7 El" ).push( "8 El" ).push( "9 El" ).push( "10 El" );

    let node = sll.head;
    for ( let i = 0;i < sll.length; i += 1 ){
      sllArr.push( node.val );
      node = node.next;
    }
  } )

  it("순서대로 값을 반환한다", function () {
    expect( sllArr ).toEqual( arr )
  });

  it("값을 제거할 경우 arr 보다 singly linked list 가 더 빠르다", function () {

    const arrStart = performance.now()
    arr.shift();
    const arrEnd = performance.now();

    const arrPerform = ( arrEnd - arrStart );

    const sllStart = performance.now()
    sllArr.shift();
    const sllEnd = performance.now();

    const sllPerform = ( sllEnd - sllStart );

    expect( sllPerform ).toBeLessThan( arrPerform );
  });
});