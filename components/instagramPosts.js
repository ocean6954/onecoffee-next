import React, { Fragment } from 'react'
import styles from 'styles/instagramPosts.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from 'next/image'
// import reelIcon from 'images/icon/reel.png'

const InstagramPosts = ({ posts }) => {
  return (
    <>
      <h2 className={styles.head2}>Instagram</h2>
      <div className={styles.postWrapper}>
        {posts.business_discovery.media.data.map((media) => (
          <Fragment key={media.id}>
            {/* {console.log(`media情報です${media}`)} */}
            {media.media_type === 'VIDEO' && (
              <div className={styles.media}>
                {/* <div className={styles.iconContainer}>
                <Image
                  src={reelIcon}
                  layout="responsive"
                  width="100%"
                  alt="動画アイコン"
                />
              </div> */}
                <Image
                  src={media.thumbnail_url}
                  alt="インスタグラムの投稿です"
                  fill
                  priority
                  blurDataURL="data:image/png;base64,..."
                  className={styles.image}
                />
                {/* <button onClick={toggleVideo}>Click</button> */}
                {/* {showVideo && (
                  <ReactPlayer
                    url={media.media_url} // 相対パスを指定
                    controls
                    width="100%"
                    height="100%"
                  />
                )} */}
              </div>
            )}
            {media.media_type === 'IMAGE' && (
              <div className={styles.media}>
                <Image
                  src={media.media_url}
                  alt="インスタグラムの投稿です"
                  fill
                  priority
                  blurDataURL="data:image/png;base64,..."
                  className={styles.image}
                />
                {/* <button onClick={toggleVideo}>Click</button> */}
              </div>
            )}
            {media.media_type === 'CAROUSEL_ALBUM' && (
              <Splide aria-label="インスタグラムの投稿">
                {media.children.data.map((child) => (
                  <SplideSlide className={styles.media} key={child.id}>
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
            )}
          </Fragment>
        ))}
      </div>
    </>
  )
}

export default InstagramPosts
