Package.describe({
	name: 'vishnucss:card',
	version: '1.1.0-rc.2',
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
