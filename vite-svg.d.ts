declare module "*.svg" {
	import * as React from "react";

	const ReactComponent: React.FunctionComponent<
		React.ComponentProps<"svg"> & {
			title?: string;
			height?: number;
			width?: number;
			fill?: string;
		}
	>;

	export default ReactComponent;
}
