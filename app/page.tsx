import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          src="/heart-essence-yoga.png"
          alt="Heart Essence Yoga Logo"
          width={400}
          height={533}
          priority
        />
        <p>
        Realizing our own body, speech, and mind as extraordinary sacred space.
        </p>
        <p>
          <script async src="https://js.stripe.com/v3/buy-button.js"> </script>
          <stripe-buy-button
            buy-button-id="buy_btn_1Ohe3XBiMVfLK9JCRlesga3j"
            publishable-key="pk_live_X1ZIqMyojTKZ6Jd4IA7YKhzl"
          >
          </stripe-buy-button>
        </p>
      </div>

      <div className={styles.grid}>
        <a
          href="/body"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Gentle Asanas
          </h2>
        </a>

        <a
          href="/mind"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Guided Meditation
          </h2>
        </a>

        <a
          href="/sound"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Sound Healing
          </h2>
        </a>
      </div>
    </main>
  );
}
