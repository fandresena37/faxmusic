const{getElement,getOffsetTop,viewportSize,prefersReducedMotion,isTouchDevice}=window.BAO.Utils;class MagneticButton extends window.BAO.CustomElement(){connectedCallback(){this.isEnabled&&(super.connectedCallback(),this.button=getElement("a, button",{context:this}),this.button&&(this.mousePosition={x:0,y:0},this.buttonPosition={top:0,left:0,width:0,height:0},this.renderedStyles={x:0,y:0},this.calculateTriggerArea(),this.isTicking=!1,this.requestTick=this.requestTick.bind(this),this.updateEl=this.updateEl.bind(this),this.updateEl()))}setupListeners(){this.isEnabled&&(super.setupListeners(),this.handleMouseMove=this.handleMouseMove.bind(this),this.listeners.add(window,"mousemove",this.handleMouseMove),this.handleResize=this.handleResize.bind(this),this.listeners.add(window,"resize",this.handleResize),this.onCarouselCreated=this.onCarouselCreated.bind(this),window.BAO.eventBus.addEventListener(window.BAO.EVENTS.CAROUSEL.CREATED,this.onCarouselCreated))}handleMouseMove(event){this.mousePosition.x=event.clientX,this.mousePosition.y=event.clientY,this.requestTick()}handleResize(){this.calculateTriggerArea()}requestTick(){this.isTicking||requestAnimationFrame(this.updateEl),this.isTicking=!0}updateEl(){this.isTicking=!1,this.magnetiseButton()}onCarouselCreated(){this.calculateTriggerArea()}magnetiseButton(){(this.dataset?.area==="large"?this.distance(this.mousePosition.x,this.mousePosition.y+window.scrollY,this.buttonPosition.left+this.buttonPosition.width/2,getOffsetTop(this.button)+this.buttonPosition.height/2):this.distance(this.mousePosition.x,window.scrollY+this.mousePosition.y,this.buttonPosition.left+this.buttonPosition.width/2,getOffsetTop(this.button)+this.buttonPosition.height/2))<this.distanceToTrigger?(this.renderedStyles.x=(this.mousePosition.x-(this.buttonPosition.left+this.buttonPosition.width/2))*.3,this.renderedStyles.y=(this.mousePosition.y+window.scrollY-(getOffsetTop(this.button)+this.buttonPosition.height/2))*.3):(this.renderedStyles.x=0,this.renderedStyles.y=0),this.button.style.transform=`translate3d(${this.renderedStyles.x}px, ${this.renderedStyles.y}px, 0)`}calculateTriggerArea(){this.rect=this.button.getBoundingClientRect(),this.buttonPosition={left:this.rect.left,width:this.rect.width,height:this.rect.height},this.distanceToTrigger=this.dataset?.area==="large"?this.rect.width*2:this.rect.width*.65}distance=(x1,y1,x2,y2)=>{const a=x1-x2,b=this.dataset?.area==="large"?y1-y2:(y1-y2)*2;return Math.hypot(a,b)};get isEnabled(){return!isTouchDevice()&&!prefersReducedMotion()&&viewportSize()!=="xs"}}customElements.get("magnetic-button")||customElements.define("magnetic-button",MagneticButton);
//# sourceMappingURL=/cdn/shop/t/50/assets/magnetic-button.js.map?v=151549873208066715421707734740
