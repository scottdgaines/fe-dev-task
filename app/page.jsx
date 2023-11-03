import Image from "next/image";
import styles from "./page.module.css";
import FetchData from "./components/global/FetchData";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <svg width="100%" height="100%" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_648_20210)">
            <path
              d="M28.5 26.1398L22.4133 19.9858L14.5 27.9858"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_648_20210">
              <rect width="42" height="44.8767" fill="white" transform="translate(0.5 0.98584)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <FetchData />
    </main>
  );
}
