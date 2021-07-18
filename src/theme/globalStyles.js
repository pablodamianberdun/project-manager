import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
	}
	*, *:before, *:after {
		box-sizing: inherit;
	}
	* {
		margin: 0;
		padding: 0;
		font-family: 'Raleway', sans-serif;
	}
	body {
		position: relative;
	}
`;

export default globalStyle;
