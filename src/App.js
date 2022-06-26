import React, { useState } from 'react'
import CounterClassComponent from './CounterClassComponent';
import CounterFunctionalComponent from './CounterFunctionalComponent';
import Ex1Style from "./components/ex1_style"
import Ex2Img from "./components/ex2_image"
import Ex3Props from "./components/ex3_props"
import Ex4Destructuring from "./components/ex4_destructuring"

export default () => {
  let var1 = 0;
  const var2 = "hello";
  const var3 = false;
  const [count, setCount] = useState(0)
  const submit = () => {
    alert("SubmitHeyHey")
  }

  return (
    <div>
      <h1>codemobile {var1}</h1>
      <h1>codemobile {var2}</h1>
      <h1>codemobile {var3 && "Yes"}</h1>
      {var3 ? <h1>YES</h1> : <h1>NO</h1>}

      <h1>codemobile {count}</h1>
      <button onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}>ADD
      </button>
      <CounterClassComponent />
      <CounterFunctionalComponent />
      <Ex1Style />
      <Ex2Img />
      <Ex2Img image="https://www.codemobiles.com/biz/images/banner_pospos.jpg?dummy=1626693188" />
      <Ex3Props count={count} color="#f00" />
      <Ex4Destructuring usernameHint="Username" passwordHint="password" />
      <Ex4Destructuring handleSubmit={() => {
        alert("HeyHey")
      }} />
      <Ex4Destructuring handleSubmit={submit} />
    </div>
  )

}



