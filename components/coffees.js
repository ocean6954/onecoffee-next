import Character from 'components/character'
import styles from 'styles/coffees.module.css'
import Container from 'components/container'
import onebreHi from 'images/onebre-hi.jpg'
import Ueue from 'pages/coffee/ueue'
import { getAllSlugs } from 'lib/api'

export default function Coffees() {
  return <div className={styles.grid}>{/* <Ueue /> */}</div>
}

// export async function getStaticPaths() {
//   const allSlugs = await getAllSlugs()

//   return {
//     paths: allSlugs.map(({ slug }) => `/blog`),
//   }
// }
