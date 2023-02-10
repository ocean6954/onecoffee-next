import styles from "styles/logo.module.css";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className={styles.logo}>
      Logo
    </Link>
  );
}
