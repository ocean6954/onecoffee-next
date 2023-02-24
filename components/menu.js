import styles from 'styles/menu.module.css'

export default function Menu() {
  return (
    <table className={styles.flexContainer}>
      <div className={styles.left}>
        <tr>
          <td>ワンブレンドハイ</td>
        </tr>
        <tr>
          <td>ハイロースト　キリマンジャロ</td>
        </tr>
        <tr>
          <td>コロンビア　スプレモ</td>
        </tr>
        <tr>
          <td>エチオピア　ゲイシャ</td>
        </tr>
        <tr>
          <td>タンザニア　キリマンジャロ</td>
        </tr>
        <tr>
          <td>グァテマラ　ウエウエテナンゴ</td>
        </tr>
        <tr>
          <td>ブルンジ　レッドブルボン</td>
        </tr>
        <tr>
          <td>マンデリン　ドロサングル</td>
        </tr>
        <tr>
          <td>コスタリカ　ジャガーハニー</td>
        </tr>
        <tr>
          <td>ワンブレンド</td>
        </tr>
        <tr>
          <td>フレンチキリマンジャロ</td>
        </tr>
        <tr>
          <td>ダークワン</td>
        </tr>
        <tr>
          <td>アイスコーヒー</td>
        </tr>
        <tr>
          <td>ラテ(HOT/ICE)</td>
        </tr>
        <tr>
          <td>ヒーコジェリーミルク</td>
        </tr>
      </div>
      <div className={styles.right}>
        <th>Tea</th>
        <tr>
          <td>
            アールグレイ<span>・・・¥500</span>
          </td>
        </tr>
        <tr>
          <td>
            レモングラス<span>・・・¥500</span>
          </td>
        </tr>
        <th>Sweets</th>
        <tr>
          <td>
            今週のケーキ<span>・・・¥400</span>
          </td>
        </tr>
        <tr>
          <td>
            珈琲プリン<span>・・・¥400</span>
          </td>
        </tr>
        <tr>
          <td>
            ネコチャン珈琲プリンアラモード(珈琲、紅茶付)
            <span>・・・¥1000</span>
          </td>
        </tr>
        <tr>
          <td>
            丸太sweetsプレート(珈琲、紅茶付)<span>・・・¥1200</span>
          </td>
        </tr>
      </div>
    </table>
  )
}
