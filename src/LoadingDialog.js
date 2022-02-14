class LoadingDialog {
  constructor ({ target }) {
    this.props = {}
    const loadingDialog = document.createElement('div')
    loadingDialog.classList.add('game__loading')
    target.appendChild(loadingDialog)
    this.loadingDialog = loadingDialog
  }

  setProps (nextProps) {
    this.props = { ...this.props, ...nextProps }
    this.render()
  }

  render () {
    const { isLoading } = this.props

    if (isLoading) {
      this.loadingDialog.innerHTML = `
        <div>Loading...</div>
      `
      window.setTimeout(() => {
        this.loadingDialog.classList.add('show')
      }, 100)
    } else {
      this.loadingDialog.innerHTML = ''
      this.loadingDialog.classList.remove('show')
    }
  }
}

export default LoadingDialog
