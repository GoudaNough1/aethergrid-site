import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Aethergrid - The mark is the system";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					height: "100%",
					background: "#0a0808",
					color: "#f0ebe6",
					fontFamily: "serif",
				}}
			>
				<div style={{ fontSize: 120, fontWeight: 500, letterSpacing: "-0.02em" }}>
					Aethergrid
				</div>
				<div style={{ fontSize: 36, fontStyle: "italic", color: "#a8a09a", marginTop: 24 }}>
					The mark is the system.
				</div>
			</div>
		),
		size
	);
}
