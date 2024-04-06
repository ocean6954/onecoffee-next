import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import reelIcon from 'images/icon/reel.png'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import styles from 'styles/instagramPosts.module.css'
// import '@splidejs/react-splide/css'
// import '@splidejs/react-splide/css/skyblue'
// import '@splidejs/react-splide/css/sea-green'
// import '@splidejs/react-splide/css/core'
// import 'styles/splide-core.min.css'
const InstagramPosts = ({ posts }) => {
  return (
    <>
      <div className={styles.postWrapper}>
        {posts.business_discovery.media.data.map((media, index) => (
          <>
            {media.media_type === 'VIDEO' && (
              <div key={index} className={styles.post}>
                <div className={styles.iconContainer}>
                  <Image src={reelIcon} layout="responsive" width="100%" />
                </div>
                <Image
                  src={media.thumbnail_url}
                  alt=""
                  fill
                  // width="100"
                  // height="80"
                  priority
                  blurDataURL="data:image/png;base64,..."
                  className={styles.image}
                />
                {/* <ReactPlayer
                    url={media.media_url} // 相対パスを指定
                    controls
                    width="100%"
                    height="100%"
                  /> */}
                <p>{media.caption}</p>
              </div>
            )}
            {media.media_type === 'IMAGE' && (
              <div key={index} className={styles.post}>
                <Image
                  src={media.media_url}
                  alt="インスタグラムの投稿です"
                  responsive
                  width="100"
                  // height={900}
                  priority
                  blurDataURL="data:image/png;base64,..."
                />
                <p>{media.caption}</p>
              </div>
            )}
            {media.media_type === 'CAROUSEL_ALBUM' && (
              <Splide aria-label="インスタグラムの投稿">
                {media.children.data.map((child, childIndex) => (
                  // <div key={childIndex} className={styles.post}>
                  <SplideSlide className={styles.post}>
                    <Image
                      src={child.media_url}
                      alt="インスタグラムの投稿です"
                      fill
                      priority
                      blurDataURL="data:image/png;base64,..."
                      className={styles.image}
                    />
                  </SplideSlide>
                  /* <p>{media.caption}</p> */
                  // </div>
                ))}
              </Splide>
            )}
          </>
        ))}
      </div>
    </>
  )
}

export default InstagramPosts
