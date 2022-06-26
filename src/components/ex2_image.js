import React from 'react'

export default function ex2_image(props) {
  return (
    <div>
        <img src="/logo512.png" height="100" alt="" />
        <img src="/images/small.jpg" height="100" alt="" />
        {props.image && <img src={props.image} height="100" alt="" />}
    </div>
  )
}
