Package.describe({
	name: 'vishnucss:grid',
	version: '1.0.2',
	summary: 'Grid system toolkit with modern css',
	git: 'https://github.com/vishnucss/vishnu.git',
	documentation: 'README.md'
})

Package.onUse((api) => {
	api.versionsFrom('METEOR@1.0')
	api.addFiles([
		'dist/vishnu.grid.css'
	], 'client')
})