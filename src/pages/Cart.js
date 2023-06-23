import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// useSelector: 스토어의 값을 가져오는 역할을 하는 훅 
import { changeName, changeYear, deleteItem, addCount, subCount } from './store'


export default function Cart() {
//const state = useSelector((state)=>{return state}) store에 있는 state를 가져오는 훅
  const state = useSelector((state)=>state) // 특정 state를 가져오고싶으면 state.@@으로 설정하면 된다.
  const dispatch = useDispatch() // 스테이트를 변경, 디스페치로 체인지네임을 호출
  return (
    <div>
      <h2><span style={{color:'blue', fontWeight:'blod'}}>({state.user.name})</span>님의 장바구니</h2>
        <button onClick={()=>dispatch(changeName())}>닉네임 보이기</button>
        <h3>회원가입기간 : {state.user.memberYear}년</h3>
        <button onClick={()=>dispatch(changeYear(1))}>+</button>
        <button onClick={()=>dispatch(changeYear(-1))}>-</button>
        <Table striped bordered hover>
        <thead>
        <tr>
          <th>#</th>
          <th>상품명</th>
          <th>개수</th>
          <th>변경</th>
        </tr>
        </thead>
        <tbody>
        {
          state.cart.map((item,i)=>{
            return (
              <tr key={i}>
                <td>{state.cart[i].id}</td>
                <td>{state.cart[i].title}</td>
                <td>{state.cart[i].count}</td>
                <td>
                  <button onClick={()=>dispatch(addCount(state.cart[i].id))}>+</button>
                  <button onClick={()=>dispatch(subCount(state.cart[i].id))}>-</button>
                  <button onClick={()=>dispatch(deleteItem(state.cart[i].id))}>삭제</button>
                </td>
              </tr>
            )
          })
        }
        </tbody>
        </Table>
    </div>
  )
}

