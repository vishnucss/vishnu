Package.describe({
	name: 'vishnucss:toggle',
	version: '1.1.1',
	summary: 'Toggle toolkit with modern css.',
	git: 'https://github.com/vishnucss/vishnu.git',
	documentation: 'README.md'
})

Package.onUse((api) => {
	api.versionsFrom('METEOR@1.0')
	api.addFiles([
		'dist/vishnu.toggle.css'
	], 'client')
})
