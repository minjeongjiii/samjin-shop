/* 리덕스 관리파일, 컴포넌트가 아님*/

import { configureStore, createSlice } from "@reduxjs/toolkit";

//스테이트 만들기 createSlice
// user_state
const user = createSlice ({
  name: 'user',
  initialState: {name:'홍길동', memberYear:1}, // initialState초기값
  reducers: {
    /* changeName() {
            return '이순신'
        } */
        /* changeName(state) {
            return state + ' : Green'
        } 자기가 가진 값을 가지고 변경하겠다 */
    changeName(state) {
      state.name =  state.name + ' : Green'
    },
    changeYear(state, action) {
      state.memberYear += action.payload
    } // action 변경함수를 받음, 더하기빼기가 되면서 메모리 값자체가 변경, 엑션을 처리할때 나오는 정보를 받음 → [payload] 변경함수를 처리할때 어떻게 처리된건지 메세지를 보냄
    //디스패치가 변경을 요청 어떤 메세지를 넣어서 요청 그 요청메세지를 받는 것이 페이로드, {엑션.페이로드} 함께 붙여야함
  }
})
/* reducers: {
    changeName() {
        return '이순신'
    }
} 변경함수 */
// action함수 사용 → 객체, 배열일 경우에는 메모리에 저장된 값을 가져오면 되기 때문에 리턴을 이용할 필요가 없다.


// cart_state
const cart = createSlice({
  name: 'cart',
  initialState: [], // 초기값, 처음에 장바구니가 비어있다가 유저가 장바구니에 상품을 넣어야 데이터 추가
  reducers: {
    addItem(state, action) { // 상태변경함수, addItem 상품추가 함수 (state현재상타, action변경액션)
      //state.push(action.payload) // 장바구니에 누르는 항목들이 state에 들어감
      const index = state.findIndex((findId) => { //내가가진 인덱스와 파인드인덱스가 같다면 true를 내보내고 파인드 인덱스가 인덱스 번호를 찾는다????
        return findId.id === action.payload.id
      })
      if(index > -1) { //index>-1 인덱스가 존재한다. 카운트를 증가한다.
        state[index].count++
      } else { //index=<-1 인덱스가 존재하지 않는다. 카운트를 증가x.
        state.push(action.payload)
      }
    }, //addItem
    deleteItem(state, action) {
      const index = state.findIndex((findId) => { 
        return findId === action.payload
      }) // 뒤에 id붙이면 오류뜸
      state.splice(index,1)
    }, //deleteItem
    addCount(state, action){
      const index = state.findIndex((findId)=>{
        return findId.id === action.payload
      })
      state[index].count++
    },
    subCount(state, action) {
      const index = state.findIndex((findId) => { 
        return findId.id === action.payload
      })
      if(state[index].count > 1) 
        state[index].count--
    }
  }
})

export const { addItem, deleteItem, addCount, subCount } = cart.actions // actionst상태변경 
export const { changeName, changeYear } = user.actions // .actions: 유저라는 함수의 변경함수 action을 내보냄, changeName, changeYear를 변경함수로 내보내겠다.

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer 
  }
}) //.reducer를 붙여야 내보내진다. state만 내보냄
