export default function InstagramReactSample() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    // 自作で用意したバックエンドからインスタグラムの埋め込みコードを取得しセット（詳細は割愛）
    getPosts(setPosts)
  }, [])

  useEffect(() => {
    // 投稿の描画が終わったらスクリプトを読みこませる。
    if (posts.length > 0) {
      const script = document.createElement('script')
      script.type = 'text/javascript'

      var attr = document.createAttribute('src')
      attr.value = '//www.instagram.com/embed.js'
      script.setAttributeNode(attr)

      const head = document.getElementsByTagName('head')[0]
      head.appendChild(script)
    }
  }, [posts])

  return (
    <div>
      {posts.length > 0 && (
        <>
          {posts.map((p) => {
            return <div dangerouslySetInnerHTML={{ __html: p.instagramCode }} />
          })}
        </>
      )}
    </div>
  )
}
