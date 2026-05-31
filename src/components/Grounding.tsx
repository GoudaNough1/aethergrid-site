import styles from "./Grounding.module.css";

export function Grounding() {
	return (
		<section className={styles.grounding}>
			<div className={styles.divider} aria-hidden="true" />

			<p className={styles.statement}>
				Four products under one mark. <em>The training platform, the apps, the client work, the desktop tools - all designed and operated by the same hands.</em>
			</p>

			<div className={styles.nums}>
				<div className={styles.num}><span className={styles.numv}>04</span><span className={styles.numk}>product lines</span></div>
				<div className={styles.num}><span className={styles.numv}>500+</span><span className={styles.numk}>lessons live</span></div>
				<div className={styles.num}><span className={styles.numv}>2026</span><span className={styles.numk}>established</span></div>
				<div className={styles.num}><span className={styles.numv}>NJ</span><span className={styles.numk}>United States</span></div>
			</div>

			<div className={styles.contact}>
				<div className={styles.cline}>Tell us what you are building.</div>
				<a href="mailto:info@aethergrid.net" className={styles.clink}>info@aethergrid.net</a>
			</div>

			<div className={styles.footer}>
				<span>© 2026 Aethergrid LLC</span>
				<span>New Jersey</span>
			</div>
		</section>
	);
}
