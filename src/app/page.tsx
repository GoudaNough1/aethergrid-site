const products = [
	{
		num: "01",
		name: "Academy",
		desc: "Career-track training for the managed services industry. Launched 2024. Used by MSP technicians.",
		live: true,
		href: "https://academy.aethergrid.net",
	},
	{
		num: "02",
		name: "Play",
		desc: "Consumer mobile applications, mobile first. First titles in development under the Aethergrid Play imprint.",
		live: false,
	},
	{
		num: "03",
		name: "Websites",
		desc: "Production websites and design starting points for technical teams. Built deliberately, hosted to scale.",
		live: false,
	},
	{
		num: "04",
		name: "Software",
		desc: "Desktop tools shipped under the Aethergrid name. Sigil, a self-hosted chat. Aria, an overlay assistant.",
		live: false,
	},
];

const stats = [
	{ value: "580", label: "Lessons published" },
	{ value: "11", label: "Career-track modules" },
	{ value: "4", label: "Product lines in production" },
	{ value: "1", label: "Sole member" },
];

function RedSquare({ size = 6 }: { size?: number }) {
	return (
		<span
			className="inline-block shrink-0 bg-accent"
			style={{ width: size, height: size }}
		/>
	);
}

function Eyebrow({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex items-center gap-[10px]">
			<RedSquare />
			<span className="font-mono text-[12px] font-medium tracking-[0.08em] text-fg-dim uppercase">
				{children}
			</span>
		</div>
	);
}

function Rule() {
	return <hr className="border-0 h-px bg-rule m-0" />;
}

export default function Home() {
	return (
		<div className="min-h-screen">
			{/* Nav */}
			<nav className="flex items-center justify-between px-[36px] py-[22px] border-b-2 border-accent">
				<div className="flex items-center gap-[10px]">
					<img src="/aethergrid-mark.svg" alt="Aethergrid" width={22} height={22} style={{ display: "block" }} />
					<span className="text-[14px] font-medium tracking-[-0.01em] text-fg-bright">
						Aethergrid
					</span>
				</div>
				<div className="hidden md:flex items-center gap-[28px]">
					{["Products", "Studio", "Work", "Press", "Contact"].map((item) => (
						<span key={item} className="text-[13px] text-fg-dim">
							{item}
						</span>
					))}
				</div>
				<span className="font-mono text-[11px] text-fg-muted tracking-[0.04em]">
					Est. 2026
				</span>
			</nav>

			{/* Hero */}
			<section className="px-[36px] pt-[84px] pb-[92px]">
				<div className="flex items-center gap-[10px] mb-[28px]">
					<RedSquare />
					<span className="font-mono text-[11px] text-fg-dim tracking-[0.1em]">
						Aethergrid LLC &middot; Livingston, New Jersey
					</span>
				</div>
				<h1 className="text-[64px] font-medium tracking-[-0.035em] leading-[1.02] text-fg-bright max-w-[560px] mb-[28px]">
					A software studio building tools across the stack.
				</h1>
				<p className="text-[17px] leading-[1.55] text-muted max-w-[480px] mb-[36px]">
					Aethergrid produces four product lines: training for the managed
					services industry, consumer mobile applications, production websites,
					and desktop software.
				</p>
				<div className="flex items-center gap-[28px]">
					<a
						href="#products"
						className="text-[14px] text-fg border-b border-accent pb-[3px]"
					>
						See products &rarr;
					</a>
					<a
						href="#contact"
						className="text-[14px] text-fg border-b border-accent pb-[3px]"
					>
						Reach the studio &rarr;
					</a>
				</div>
			</section>

			<Rule />

			{/* Product lines */}
			<section id="products" className="px-[36px] pt-[52px] pb-[64px]">
				<div className="flex items-center justify-between mb-[36px]">
					<Eyebrow>Product lines</Eyebrow>
					<span className="font-mono text-[11px] text-[#555]">
						Four / Updated 2026
					</span>
				</div>
				<div>
					{products.map((product, i) => {
						const rowClasses = `grid grid-cols-1 md:grid-cols-[36px_140px_1fr_110px] gap-x-[24px] gap-y-[8px] py-[24px] border-t border-rule items-baseline ${
							i === products.length - 1 ? "border-b" : ""
						}`;
						const inner = (
							<>
								<span className="font-mono text-[13px] font-medium text-accent">
									{product.num}
								</span>
								<span className="text-[22px] font-medium tracking-[-0.02em] text-fg-bright">
									{product.name}
								</span>
								<span className="text-[14px] text-fg-dim leading-[1.55]">
									{product.desc}
								</span>
								<span className="md:text-right">
									{product.live ? (
										<span className="text-accent text-[16px]">&rarr;</span>
									) : (
										<span className="font-mono text-[11px] text-fg-muted tracking-[0.06em]">
											Coming soon
										</span>
									)}
								</span>
							</>
						);

						if (product.live) {
							return (
								<a
									key={product.num}
									href={product.href}
									target="_blank"
									rel="noopener noreferrer"
									className={`${rowClasses} no-underline cursor-pointer transition-[background] duration-[120ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:bg-[rgba(201,32,32,0.04)]`}
									style={{ color: "inherit", textDecoration: "none" }}
								>
									{inner}
								</a>
							);
						}

						return (
							<div key={product.num} className={rowClasses}>
								{inner}
							</div>
						);
					})}
				</div>
			</section>

			{/* Studio */}
			<section className="px-[36px] pt-[52px] pb-[80px]">
				<div className="mb-[36px]">
					<Eyebrow>On the studio</Eyebrow>
				</div>
				<div className="max-w-[640px]">
					<p className="text-[15px] leading-[1.65] text-muted m-0 mb-[16px]">
						The studio takes work one product line at a time. Foundations are
						laid before features. Products ship when finished, not when
						announced.
					</p>
					<p className="text-[15px] leading-[1.65] text-muted m-0">
						All four product lines are built and operated under the same roof,
						by the same hands, with the same regard for craft.
					</p>
				</div>
			</section>

			<Rule />

			{/* Numbers */}
			<section className="px-[36px] py-[56px]">
				<div className="mb-[36px]">
					<Eyebrow>By the numbers</Eyebrow>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-[36px]">
					{stats.map((stat) => (
						<div key={stat.label}>
							<div className="text-[44px] font-medium tracking-[-0.035em] leading-[1] text-fg-bright">
								{stat.value}
							</div>
							<div className="text-[13px] text-fg-dim mt-[10px]">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</section>

			<Rule />

			{/* Contact */}
			<section
				id="contact"
				className="px-[36px] pt-[64px] pb-[80px] grid grid-cols-1 md:grid-cols-2 gap-[56px]"
			>
				<div>
					<div className="mb-[24px]">
						<Eyebrow>Reach the studio</Eyebrow>
					</div>
					<p className="text-[26px] font-medium leading-[1.25] tracking-[-0.015em] text-fg mb-[24px]">
						For partnerships, press, and direct inquiries.
					</p>
					<div className="text-[15px] leading-[1.8]">
						<div className="text-fg">info@aethergrid.net</div>
						<div className="text-fg">Aethergrid LLC</div>
						<div className="text-fg-dim">Livingston, New Jersey</div>
					</div>
				</div>
				<div>
					<div className="mb-[24px]">
						<Eyebrow>Follow</Eyebrow>
					</div>
					<div className="text-[15px] leading-[1.8]">
						<div>
							<a
								href="https://linkedin.com/company/aethergrid-llc"
								target="_blank"
								rel="noopener"
								className="text-fg no-underline"
							>
								LinkedIn &#8599;
							</a>
						</div>
						<div className="flex items-center gap-[6px]">
							<span className="text-fg-muted">Press kit</span>
							<span className="font-mono text-[11px] text-fg-muted">
								&middot; coming soon
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<div className="h-[2px] bg-accent" />
			<footer className="flex items-center justify-between px-[36px] py-[22px]">
				<div className="flex items-center gap-[10px]">
					<img src="/aethergrid-mark.svg" alt="" aria-hidden="true" width={14} height={14} style={{ display: "block" }} />
					<span className="font-mono text-[11px] text-fg-muted tracking-[0.04em]">
						&copy; Aethergrid LLC &middot; Established 2026 &middot; New Jersey
					</span>
				</div>
				<div className="flex items-center gap-[24px]">
					{["Privacy", "Terms", "Sitemap"].map((item) => (
						<span key={item} className="text-[12px] text-fg-muted">
							{item}
						</span>
					))}
				</div>
			</footer>
		</div>
	);
}
