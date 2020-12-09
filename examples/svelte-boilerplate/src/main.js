import App from './App.svelte';

import '@vishnucss/vishnu/dist/vishnu.min.css'

const app = new App({
	target: document.body,
	props: {
		name: 'Vishnu'
	}
});

export default app;
