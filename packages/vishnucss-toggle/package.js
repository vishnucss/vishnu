Package.describe({
	name: 'vishnucss:chips',
	version: '1.1.0-beta.1',
	summary: 'Chips toolkit with modern css.',
	git: 'https://github.com/vishnucss/vishnu.git',
	documentation: 'README.md'
})

Package.onUse((api) => {
	api.versionsFrom('METEOR@1.0')
	api.addFiles([
		'dist/vishnu.chips.css'
	], 'client')
})
