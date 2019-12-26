Package.describe({
	name: 'vishnucss:utils',
	version: '1.1.0-beta.0',
	summary: 'Utils toolkit with modern css.',
	git: 'https://github.com/vishnucss/vishnu.git',
	documentation: 'README.md'
})

Package.onUse((api) => {
	api.versionsFrom('METEOR@1.0')
	api.addFiles([
		'dist/vishnu.utils.css'
	], 'client')
})
