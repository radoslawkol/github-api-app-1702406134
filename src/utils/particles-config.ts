export const particlesOptions = {
	background: {
		color: {
			value: "rgb(238, 234, 237)",
		},
	},
	fpsLimit: 120,
	interactivity: {
		events: {
			onClick: {
				enable: true,
				mode: "push",
			},
			onHover: {
				enable: true,
				mode: "repulse",
			},
			resize: {
				enable: true,
				mode: "push",
			},
		},
		modes: {
			push: {
				quantity: 4,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
		},
	},
	particles: {
		color: {
			value: "#333333",
		},
		links: {
			color: "#333333",
			distance: 150,
			enable: true,
			opacity: 0.5,
			width: 1,
		},
		move: {
			enable: true,
			outModes: {
				default: "bounce" as const,
			},
			random: false,
			speed: 6,
			straight: false,
		},
		number: {
			density: {
				enable: true,
				area: 800,
			},
			value: 80,
		},
		opacity: {
			value: 0.5,
		},
		shape: {
			type: "circle",
		},
		size: {
			value: { min: 1, max: 5 },
		},
	},
	detectRetina: true,
};
