class OverlayMenu {
  selectors = {
    root: '[data-js-overlay-menu]',
    dialog: '[data-js-menu-dialog]',
    burgerButton: '[data-js-overlay-menu-burger-button]',
    menuLink: '[data-js-menu-link]',
  }

  stateClasses = {
    isActive: 'is-active',
    isLock: 'is-lock',
  }

  constructor() {
    this.rootElement = document.querySelector(this.selectors.root)
    this.dialogElement = this.rootElement.querySelector(this.selectors.dialog)
    this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton)
    this.menuLinkElements = this.rootElement.querySelectorAll(this.selectors.menuLink)
    this.bindEvents()
  }

  onBurgerButtonClick = () => {
    this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
    this.dialogElement.open = !this.dialogElement.open
    document.documentElement.classList.toggle(this.stateClasses.isLock)
  }

  onMenuLinkClick = () => {
    this.closeMenu()
  }

  closeMenu() {
    this.burgerButtonElement.classList.remove(this.stateClasses.isActive)
    this.dialogElement.open = false
    document.documentElement.classList.remove(this.stateClasses.isLock)
  }

  bindEvents() {
    this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
    this.menuLinkElements.forEach(link => {
      link.addEventListener('click', this.onMenuLinkClick)
    })
  }
}

export default OverlayMenu
