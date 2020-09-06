import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  router: {
    base: 'https://github.com/vishnucss/vishnu'
  },
  loading: { color: '#8549b9' },
  liveEdit: false
})
