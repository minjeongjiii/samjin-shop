import React from 'react'
import { Outlet } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>About Page</h1>
        <Outlet></Outlet>
    </div>
  ) 
} 
/* Outlet: 라우터 내에서 중첩된 경로를 가지는 컴포넌트들을 렌더링할 때 사용
중첩된 경로를 가지는 컴포넌트들이 자신의 부모 컴포넌트로부터 렌더링된 결과를 받을 수 있도록 해준다. */
