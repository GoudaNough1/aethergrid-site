"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorFollower() {
	const dotRef = useRef<HTMLDivElement>(null);
	const [enabled, setEnabled] = useState(true);

	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setEnabled(false);
			return;
		}

		const dot = dotRef.current;
		if (!dot) return;

		let targetX = -100;
		let targetY = -100;
		let currentX = -100;
		let currentY = -100;
		let shown = false;
		let frame = 0;

		const onMouseMove = (e: MouseEvent) => {
			targetX = e.clientX;
			targetY = e.clientY;
			if (!shown) {
				dot.style.opacity = "1";
				shown = true;
			}
		};

		const onMouseLeave = () => {
			dot.style.opacity = "0";
		};

		const tick = () => {
			currentX += (targetX - currentX) * 0.25;
			currentY += (targetY - currentY) * 0.25;
			dot.style.transform = `translate(${currentX - 7}px, ${currentY - 7}px)`;
			frame = requestAnimationFrame(tick);
		};

		window.addEventListener("mousemove", onMouseMove);
		document.addEventListener("mouseleave", onMouseLeave);
		tick();

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("mousemove", onMouseMove);
			document.removeEventListener("mouseleave", onMouseLeave);
		};
	}, []);

	if (!enabled) return null;

	return (
		<div
			ref={dotRef}
			aria-hidden="true"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				width: 14,
				height: 14,
				borderRadius: "50%",
				background: "#ff3838",
				mixBlendMode: "lighten",
				pointerEvents: "none",
				zIndex: 50,
				opacity: 0,
				transform: "translate(-100px, -100px)",
				transition: "opacity 200ms ease-out",
				boxShadow: "0 0 18px rgba(255, 56, 56, 0.85), 0 0 36px rgba(220, 38, 38, 0.5)",
				willChange: "transform",
			}}
		/>
	);
}
