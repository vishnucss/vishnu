Package.describe({
	name: 'vishnucss:extensions',
	version: '1.0.0-beta.0',
	summary: 'Extensions packages for Vishnucss toolkit with modern css.',
	git: 'https://github.com/vishnucss/vishnu.git',
	documentation: 'README.md'
})

Package.onUse((api) => {
	api.versionsFrom('METEOR@1.0')
	api.addFiles([
		'dist/vishnu.extensions.css'
	], 'client')
})