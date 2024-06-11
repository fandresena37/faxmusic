const{getElement,viewportSize}=window.BAO.Utils;class LazyVideo extends window.BAO.CustomElement(){static get styles(){return`
      :host {
        display: block;

        opacity: 0;
      
        transition: opacity 1s ease;
      }
      :host([loaded]) {
        opacity: 1;
      }
    `}connectedCallback(){super.connectedCallback(),this.video=getElement("video",{context:this}),this.observer=new IntersectionObserver(this.onEntry.bind(this),{threshold:0}),this.observer.observe(this.video)}onEntry([entry],observer){if(entry.isIntersecting){this.video.dataset?.poster&&this.video.setAttribute("poster",this.video.dataset.poster);for(const source in this.video.children){const videoSource=this.video.children[source];typeof videoSource.tagName=="string"&&videoSource.tagName==="SOURCE"&&(videoSource.src=videoSource.dataset.src)}this.video.load(),observer.unobserve(this.video),this.setAttribute("loaded",""),!(viewportSize()!=="xs"||this.video.hasAttribute("autoplay")===!1)&&this.video.paused&&document.addEventListener("touchstart",()=>{this.video.paused&&this.video.play()})}}}customElements.get("lazy-video")||customElements.define("lazy-video",LazyVideo);
//# sourceMappingURL=/cdn/shop/t/50/assets/lazy-video.js.map?v=99222758119870618961707734737
