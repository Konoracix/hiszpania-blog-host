import Image from "next/image";
import styles from "./page.module.css";
import { VT323 } from 'next/font/google'
import { Poppins } from "next/font/google";
import Post from '@/components/Post/Post'
import Link from "next/link";

const vt323 = VT323({ subsets: ['latin'], weight: '400' })
// const poppins = Poppins({weight: '400', subsets: ['latin']})

export default function Home() {
  // return <div className={styles.imageContainer} >
		return <>

			{/* <div className={poppins.className}> */}
			<div>
				
				<div className={styles.mainPageTitle}>Zagraniczne praktyki zawodowe w ZSŁ</div>
			</div>
			{/* </div> */}

			<div className={styles.flags}>
				<img className={styles.flag} src="flaga-hiszpania.png"></img>
				<img className={styles.unia} src="unia.png"></img>
				{/* <img className={styles.flag} src="logo-zsl.png"></img> */}
				<img className={styles.flag} src="flaga-polska.png"></img>
			</div>

			<div className={styles.mainImageContainer}>
				<img className={styles.mainImage} src="main.jpg" alt="asd" />
			</div>
			<h1 style={{padding: "5.3vh 0"}}>Posty</h1>
			<div className={styles.blogContainer}>
				<Post title="Ja po siłowni :)" src="post1.jpeg">Jest pompa!!! 💪💪🏋️‍♂️🏋️‍♂️🏋️‍♂️. Łapa siedzi. MASŁO!!!! 🔥z💃</Post>
				<Link style={{ textDecoration: 'none', color: 'black'}} href={'/tytus'}>
					<Post title="Tytus" src="post2.jpg">Jan Rzepicha</Post>
				</Link>
				<Post title="To ja" src="post3.png">Ja przed każdym niemieckim😢😿</Post>
				<Post title="Trzech typów podcast odcinek nr 1.mp4" src="post4.jpg">
					Witajcie misie kolorowe! 🐻 Czas na kolejny odcinek naszego podcastu 3 typów podcast! 🎧 Dziś przygotowaliśmy dla was coś naprawdę ekscytującego! 🌟 Rozmawialiśmy między innymi o jednej takiej co poleciała na e46, o wojnie w Izraelu i o przepisach na gotowane jajka 🥚🍳.
				</Post>
			</div>
		</>
	// </div>
}
