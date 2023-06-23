import React from 'react'
import { useParams } from 'react-router-dom'
import { addItem } from './store'
import { useDispatch } from 'react-redux'
// → React Router 훅(hook), 현재 경로의 동적 파라미터 값을 추출하는 데 사용

export default function Detail(props) {
  const {best} = props
  const {id} = useParams()
  const dispatch =  useDispatch()
  return (
    <div>
      <h2>Detail Page</h2>
      <img src={best[id].image} alt='img' style={{width:280}}/>
      <h4>{best[id].title}</h4>
      <p>{best[id].price}</p>
      <button onClick={()=>{
        dispatch(addItem({id:best[id].id,title:best[id].title,count:1})) 
      }}>장바구니</button>
    </div>
  )
}; // const { id } = useParams(); useParams 훅을 사용하여 동적 파라미터 값 추출
