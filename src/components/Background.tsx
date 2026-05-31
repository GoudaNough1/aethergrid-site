"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

export default function Background() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const dpr = window.devicePixelRatio || 1;
		const radius = 180 * dpr;
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let nodes: Node[] = [];
		let frame = 0;
		let resizeTimer = 0;

		const build = () => {
			const cssWidth = window.innerWidth;
			const cssHeight = window.innerHeight;
			canvas.width = cssWidth * dpr;
			canvas.height = cssHeight * dpr;
			const count = Math.max(40, Math.min(120, Math.round((cssWidth * cssHeight) / 17000)));
			nodes = Array.from({ length: count }, () => ({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				vx: (Math.random() - 0.5) * 0.35 * dpr,
				vy: (Math.random() - 0.5) * 0.35 * dpr,
			}));
		};

		const render = () => {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			ctx.lineWidth = 1;
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const dx = nodes[i].x - nodes[j].x;
					const dy = nodes[i].y - nodes[j].y;
					const d = Math.hypot(dx, dy);
					if (d < radius) {
						ctx.strokeStyle = `rgba(220, 38, 38, ${0.08 * (1 - d / radius)})`;
						ctx.beginPath();
						ctx.moveTo(nodes[i].x, nodes[i].y);
						ctx.lineTo(nodes[j].x, nodes[j].y);
						ctx.stroke();
					}
				}
			}

			ctx.fillStyle = "rgba(220, 38, 38, 0.28)";
			for (const node of nodes) {
				ctx.beginPath();
				ctx.arc(node.x, node.y, 2 * dpr, 0, Math.PI * 2);
				ctx.fill();
			}
		};

		const step = () => {
			for (const node of nodes) {
				node.x += node.vx;
				node.y += node.vy;
				if (node.x <= 0 || node.x >= canvas.width) node.vx = -node.vx;
				if (node.y <= 0 || node.y >= canvas.height) node.vy = -node.vy;
			}

			render();
			frame = requestAnimationFrame(step);
		};

		const onResize = () => {
			clearTimeout(resizeTimer);
			resizeTimer = window.setTimeout(() => {
				build();
				if (prefersReducedMotion) render();
			}, 150);
		};

		build();
		if (prefersReducedMotion) {
			render();
		} else {
			step();
		}
		window.addEventListener("resize", onResize);

		return () => {
			cancelAnimationFrame(frame);
			window.removeEventListener("resize", onResize);
			clearTimeout(resizeTimer);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			aria-hidden="true"
			style={{
				position: "fixed",
				inset: 0,
				width: "100%",
				height: "100%",
				zIndex: 0,
				pointerEvents: "none",
				opacity: 0.65,
			}}
		/>
	);
}
