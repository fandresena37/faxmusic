/** Shopify CDN: Minification failed

Line 11:0 Transforming const to the configured target environment ("es5") is not supported yet
Line 13:0 Transforming const to the configured target environment ("es5") is not supported yet
Line 13:6 Transforming destructuring to the configured target environment ("es5") is not supported yet
Line 15:0 Transforming class syntax to the configured target environment ("es5") is not supported yet
Line 16:20 Transforming object literal extensions to the configured target environment ("es5") is not supported yet
Line 24:16 Transforming object literal extensions to the configured target environment ("es5") is not supported yet

**/
const KeenSlider = window.KeenSlider

const { setInitialised, useArrows, useProgress } = window.BAO.Carousel.plugins

class ProductCarousel extends window.BAO.CustomElement() {
  connectedCallback () {
    super.connectedCallback()

    if (!this.els?.slide?.exists) return

    this.carousel = this.setupCarousel()
  }

  setupCarousel () {
    return new KeenSlider(
      this.els.slides.element,
      {
        selector: this.els.slide.selector,
        loop: false,
        mode: 'snap',
        slides: {
          perView: 1.2,
          spacing: 2,
        },
        breakpoints: {
          '(min-width: 768px)': {
            slides: {
              perView: 3,
              spacing: 2,
            },
          },
          '(min-width: 1201px)': {
            slides: {
              perView: 4,
              spacing: 2,
            },
          },
        },
      },
      [
        setInitialised(),
        useArrows({
          container: this.els?.arrows?.element,
          next: this.els?.next?.element,
          previous: this.els?.previous?.element,
        }),
        useProgress({
          container: this.els?.progress?.element,
          progressbar: this.els?.progressbar?.element,
        }),
      ],
    )
  }
}

if (!customElements.get('product-carousel')) {
  customElements.define('product-carousel', ProductCarousel)
}
