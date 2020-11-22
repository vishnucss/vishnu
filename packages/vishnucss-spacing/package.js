Package.describe({
  name: 'vishnucss:spacing',
  version: '1.1.0',
  summary: 'Spacing toolkit with modern css.',
  git: 'https://github.com/vishnucss/vishnu.git',
  documentation: 'README.md'
})

Package.onUse((api) => {
  api.versionsFrom('METEOR@1.0')
  api.addFiles([
    'dist/vishnu.spacing.css'
  ], 'client')
})
