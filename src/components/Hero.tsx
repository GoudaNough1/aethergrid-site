"use client";

import { useState } from "react";
import { AethergridMark } from "@/components/AethergridMark";
import styles from "./Hero.module.css";

type PillarKey = "academy" | "play" | "design" | "software";

const pillars: {
	cls: string;
	key: PillarKey;
	name: string;
	desc: string;
	status: string;
	href?: string;
}[] = [
	{ cls: "pAcad", key: "academy", name: "Academy", desc: "Career-track MSP training, live and operating", status: "live", href: "https://academy.aethergrid.net" },
	{ cls: "pPlay", key: "play", name: "Play", desc: "Consumer mobile applications", status: "building" },
	{ cls: "pDesign", key: "design", name: "Design", desc: "Sites and brands, built to your brief", status: "in studio" },
	{ cls: "pSoft", key: "software", name: "Software", desc: "Desktop tools - Sigil, Aria", status: "building" },
];

const conduits: { key: PillarKey; x1: number; y1: number; x2: number; y2: number; delay: string }[] = [
	{ key: "academy", x1: 180, y1: 245, x2: 389, y2: 305, delay: "0s" },
	{ key: "play", x1: 720, y1: 245, x2: 479, y2: 266, delay: "1.4s" },
	{ key: "design", x1: 180, y1: 500, x2: 300, y2: 451, delay: "2.8s" },
	{ key: "software", x1: 720, y1: 500, x2: 570, y2: 498, delay: "4.2s" },
];

export function Hero() {
	const [hoveredPillar, setHoveredPillar] = useState<PillarKey | null>(null);

	const lineClass = (key: PillarKey) => {
		if (!hoveredPillar) return styles.conduitLine;
		return `${styles.conduitLine} ${hoveredPillar === key ? styles.conduitLineActive : styles.conduitLineDimmed}`;
	};

	const dotClass = (key: PillarKey) => {
		if (!hoveredPillar) return styles.conduitDot;
		return `${styles.conduitDot} ${hoveredPillar === key ? styles.conduitDotActive : styles.conduitDotDimmed}`;
	};

	return (
		<section className={styles.hero}>
			<div className={styles.canvas}>
				<svg
					className={styles.conduits}
					viewBox="0 0 900 720"
					preserveAspectRatio="xMidYMid meet"
					aria-hidden="true"
				>
					{conduits.map((c) => (
						<line key={c.key} className={lineClass(c.key)} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2} />
					))}
					{conduits.map((c) => (
						<line
							key={`${c.key}-pulse`}
							className={styles.conduitPulse}
							style={{ animationDelay: c.delay }}
							x1={c.x1}
							y1={c.y1}
							x2={c.x2}
							y2={c.y2}
						/>
					))}
					{conduits.map((c) => (
						<circle key={c.key} className={dotClass(c.key)} cx={c.x2} cy={c.y2} r="3.5" />
					))}
				</svg>

				<div className={styles.markWrap}>
					<AethergridMark className={styles.mark} />
				</div>

				<div className={styles.pillars}>
					{pillars.map((pillar) => {
						const content = (
							<>
								<div className={styles.pillarName}>{pillar.name}</div>
								<div className={styles.pillarDesc}>{pillar.desc}</div>
								<div className={styles.pillarStat}>
									<span className={styles.statDot} />
									{pillar.status}
								</div>
							</>
						);
						const className = `${styles.pillar} ${styles[pillar.cls]}`;
						const onMouseEnter = () => setHoveredPillar(pillar.key);
						const onMouseLeave = () => setHoveredPillar(null);
						return pillar.href ? (
							<a key={pillar.cls} href={pillar.href} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
								{content}
							</a>
						) : (
							<div key={pillar.cls} className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
								{content}
							</div>
						);
					})}
				</div>

				<div className={styles.editorial}>
					Aethergrid is a studio. <em>The mark is the system.</em>
				</div>

				<div className={styles.scrollHint}>
					<span className={styles.arrow}>↓</span>
				</div>
			</div>
		</section>
	);
}
