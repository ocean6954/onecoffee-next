/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react'
// import './styles.css'
import { useState } from 'react'
import styles from 'styles/coffee.module.css'

export default function Coffee({ color }) {
  // console.log('useState')

  // const [color, setColor] = useState('blue')

  // const handleClick = () => {
  //   console.log('handleClick')
  //   setColor((prev) => (prev === 'red' ? 'blue' : 'red'))
  // }
  console.log(color)
  const style = (color) =>
    css`
      &:hover {
        color: ${color};
      }
    `

  return (
    <>
      <div>
        <h1 css={[style(color)]}>Hello CodeSandbox</h1>
        {/* <button onClick={() => handleClick()}>changeColor</button> */}
      </div>
      <div>
        <img src="../images/coffees/onebre-hi.jpg" width="100%" height="80%" />
        <p style="color: #b07454">
          <img src="../images/bean2.png" width="20px" height="20px" />
          浅煎り
          <br />
          <a href="https://1coffee.base.shop/items/61415723">
            ご購入はこちら
            <img src="../images/bean1.png" width="20px" height="20px" />
          </a>
        </p>
      </div>
    </>
  )
}
