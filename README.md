## SinglyLinkedList-JS

---

자바스크립트로 구현한 단반향 연결 구조인 singlyLinkedList 자료구조입니다


### Installation

---

````powershell
npm i sll-js --save
````

### Using

````javascript

import Sll from 'sll-js';

const sll = new Sll();

sll.push( 100 ).push( 300 );

````

### properties

````typescript

head : NodeI<T>;      // 첫 번째 Node 입니다

tail : NodeI<T>;      // 마지막 Node 입니다

length : number;      // linkedList 의 길이입니다

````

### Methods

---

````javascript
push( val : T ) : this;                         // 마지막 Node 를 삽입합니다
pop() : NodeI<T> | void;                        // 마지막 Node 를 제거합니다
shift() :  NodeI<T> | void;                     // 첫번째 Node 를 제거합니다
unshift( val : T ) : this;                      // 첫번째 Node 를 삽입합니다
get( index : number ) : NodeI<T> | null;        // index Node 를 반환합니다

set( index : number , val : T ) : boolean;      // index Node 를 설정합니다
insert( index : number , val : T ) : boolean;   // index Node 를 삽입합니다
remove( index : number ) : NodeI<T> | void;     // index Node 를 제거합니다
rotate( index : number ) : NodeI<T> | null ;    // index 부터 재정렬 후 index Node 를 반환합니다
reverse() : this; 
````



