import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import reelIcon from 'images/icon/reel.png'
import styles from 'styles/instagram.module.css'

const Post = ({ posts }) => {
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
              <>
                {media.children.data.map((child, childIndex) => (
                  <>
                    {child.media_type === 'IMAGE' && (
                      <div key={childIndex} className={styles.post}>
                        <Image
                          src={child.media_url}
                          alt="インスタグラムの投稿です"
                          fill
                          priority
                          blurDataURL="data:image/png;base64,..."
                          className={styles.image}
                        />
                        <p>{media.caption}</p>
                      </div>
                    )}
                    {child.media_type === 'VIDEO' && (
                      <video controls>
                        <source src={child.media_url} type="video/mp4" />
                      </video>
                    )}
                  </>
                ))}
              </>
            )}
          </>
        ))}
      </div>
    </>
  )
}

export default Post
