Package.describe({
	name: 'vishnucss:card',
	version: '1.0.7',
	summary: 'Card toolkit with modern css.',
	git: 'https://github.com/vishnucss/vishnu.git',
	documentation: 'README.md'
})

Package.onUse((api) => {
	api.versionsFrom('METEOR@1.0')
	api.addFiles([
		'dist/vishnu.card.css'
	], 'client')
})
