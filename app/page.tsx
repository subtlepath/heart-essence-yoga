import Image from "next/image";
import styles from "./page.module.css";
import danaJpeg from "../public/dana.jpeg"
import eamonJpeg from "../public/eamon.jpeg"

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

      <div className={styles.images}>
        <Image src={danaJpeg} alt="Dana" width={400} height={400} />
        <Image src={eamonJpeg} alt="Eamon" width={400} height={400} />
      </div>
    </main>
  );
}
