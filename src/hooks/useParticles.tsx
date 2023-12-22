import { useEffect, useMemo, useState } from "react";
import { particlesOptions } from "@utils/particles-config";
import { loadSlim } from "@tsparticles/slim";
import { initParticlesEngine } from "@tsparticles/react";

export const useParticles = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (): Promise<void> => {
		return new Promise<void>((resolve) => {
			resolve();
		});
	};
	const options = useMemo(() => particlesOptions, []);

	return {
		init,
		particlesLoaded,
		options,
	};
};
