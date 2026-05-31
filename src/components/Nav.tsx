import styles from "./Nav.module.css";

export function Nav() {
	return (
		<nav className={styles.nav}>
			<div className={styles.brand}>Aethergrid</div>
			<div className={styles.subnav}>
				<span className={styles.link}>Studio</span>
				<span className={styles.divider} aria-hidden="true">·</span>
				<span className={styles.link}>Work</span>
				<span className={styles.divider} aria-hidden="true">·</span>
				<a href="mailto:info@aethergrid.net" className={styles.link}>Contact</a>
			</div>
		</nav>
	);
}
