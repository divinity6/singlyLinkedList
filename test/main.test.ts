import { describe , expect , it } from "@jest/globals";
import { test } from "../src";

describe( 'test 확인' , () => {

  it( "test 함수는 hello word 를 출력합니다" , ()=> {
    expect( test() ).toBe( "hello word" )
  } )
} )