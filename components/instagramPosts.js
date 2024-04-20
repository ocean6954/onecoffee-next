import React, { useEffect, useState } from 'react'
import styles from 'styles/instagramPosts.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
import reelIcon from 'images/icon/reel.png'

const InstagramPosts = ({ posts }) => {
  return (
    <div className={styles.postWrapper}>
      {posts.business_discovery.media.data.map((media, index) => {
        {
          media.media_type === 'VIDEO' && (
            <div className={styles.card}>
              <div className={styles.media}>
                <div className={styles.iconContainer}>
                  <Image src={reelIcon} layout="responsive" width="100%" />
                </div>
                <Image
                  src={media.thumbnail_url}
                  alt=""
                  fill
                  priority
                  blurDataURL="data:image/png;base64,..."
                  className={styles.image}
                />
                {/* <button onClick={toggleVideo}>Click</button> */}
              </div>
              {/* {showVideo && (
                  <ReactPlayer
                    url={media.media_url} // 相対パスを指定
                    controls
                    width="100%"
                    height="100%"
                  />
                )} */}
            </div>
          )
        }
        {
          media.media_type === 'IMAGE' && (
            <div className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={media.media_url}
                  alt=""
                  fill
                  priority
                  blurDataURL="data:image/png;base64,..."
                  className={styles.image}
                />
                {/* <button onClick={toggleVideo}>Click</button> */}
              </div>
            </div>
          )
        }
        {
          media.media_type === 'CAROUSEL_ALBUM' && (
            <div className={styles.card}>
              <Splide aria-label="インスタグラムの投稿">
                {media.children.data.map((child) => (
                  <SplideSlide className={styles.media}>
                    <Image
                      src={child.media_url}
                      alt="インスタグラムの投稿です"
                      fill
                      priority
                      blurDataURL="data:image/png;base64,..."
                      className={styles.image}
                    />
                  </SplideSlide>
                ))}
              </Splide>
              <p className={styles.caption}>{media.caption}</p>
            </div>
          )
        }
      })}
    </div>
  )
}

export default InstagramPosts
