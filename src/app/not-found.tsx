import Link from "next/link";
import { AethergridMark } from "@/components/AethergridMark";
import styles from "./not-found.module.css";

export const metadata = {
	title: "Page not found",
};

export default function NotFound() {
	return (
		<section className={styles.wrap}>
			<AethergridMark className={styles.mark} />
			<h1 className={styles.title}>Page not found</h1>
			<p className={styles.subtitle}>The path you followed doesn&apos;t exist on this grid.</p>
			<Link href="/" className={styles.link}>Return home →</Link>
		</section>
	);
}
