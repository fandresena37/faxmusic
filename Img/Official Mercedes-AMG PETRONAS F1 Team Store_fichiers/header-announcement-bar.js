const KeenSlider=window.KeenSlider,{useAutoplay}=window.BAO.Carousel.plugins;class AnnouncementBar extends window.BAO.CustomElement(){static get requiredElements(){return["slides","slide"]}connectedCallback(){super.connectedCallback(),document.documentElement.style.setProperty("--Announcement_Height",`${this.els.body.element.offsetHeight}px`),this.setAttribute("loaded",""),!(this.els.slide.elements.length<2)&&(this.carousel=this.setupCarousel())}setupCarousel(){return this.onSlideChanged=this.onSlideChanged.bind(this),new KeenSlider(this.els.slides.element,{selector:this.els.slide.selector,loop:!0,renderMode:"custom",slideChanged:this.onSlideChanged},[useAutoplay(4,{pauseOnHover:!0})])}onSlideChanged(instance){const currentSlide=instance.track.details.rel;this.els.slide.elements.forEach((slide,index)=>{slide.setAttribute("aria-hidden",index!==currentSlide)})}}customElements.get("announcement-bar")||customElements.define("announcement-bar",AnnouncementBar);
//# sourceMappingURL=/cdn/shop/t/50/assets/header-announcement-bar.js.map?v=11239115551660704571707734730