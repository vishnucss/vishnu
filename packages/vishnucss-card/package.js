Package.describe({
	name: 'vishnucss:card',
	version: '1.0.2',
	summary: '',
	git: 'https://github.com/vishnucss/vishnu.git',
	documentation: 'README.md'
})

Package.onUse((api) => {
	api.versionsFrom('METEOR@1.0')
	api.addFiles([
		'dist/vishnu.card.css'
	], 'client')
})