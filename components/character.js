/** @jsxImportSource @emotion/react */

import { css, jsx } from '@emotion/react'
// import './styles.css'
import { useState } from 'react'
import Image from 'next/image'

export default function Character({ color, character }) {
  // console.log('useState')

  // const [color, setColor] = useState('blue')

  // const handleClick = () => {
  //   console.log('handleClick')
  //   setColor((prev) => (prev === 'red' ? 'blue' : 'red'))
  // }

  console.log(character.src)

  const style = (color) =>
    css`
      &:hover {
        background-color: ${color};
      }
    `

  return (
    <>
      <div css={[style(color)]}>
        <Image
          src={character}
          alt=""
          layout="fixed"
          sizes="(min-width: 768px) 250px, 20vw"
          placeholder="blur"
        />
      </div>
    </>
  )
}
