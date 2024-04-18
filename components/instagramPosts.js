import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import reelIcon from 'images/icon/reel.png'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styles from 'styles/instagramPosts.module.css'
import parse from 'html-react-parser'
import ReactPlayer from 'react-player'
import Card from 'components/card'

const InstagramPosts = ({ posts }) => {
  const [showVideo, setShowVideo] = useState(false)

  const toggleVideo = () => {
    setShowVideo(!showVideo)
  }
  return (
    <div className={styles.postWrapper}>
      {posts.business_discovery.media.data.map((media, index) => (
        <Card media={media} />
      ))}
    </div>
  )
}

export default InstagramPosts
