const{debounce}=window.BAO.Utils;class CartItem extends window.BAO.CustomElement(){constructor(){super(),this._loading=!1,this.sections=this.inPushCart?window.BAO.sectionRenderer.pushCartSections:this.onCartPage?window.BAO.sectionRenderer.cartSections:[]}setupListeners(){super.setupListeners(),this.removeLineItem=this.removeLineItem.bind(this),this.onQuantityChange=this.onQuantityChange.bind(this),this.debouncedOnQuantityChange=debounce(event=>{this.onQuantityChange(event)},500),this.els?.remove?.exists&&this.listeners.add(this.els.remove.element,"click",this.removeLineItem),this.listeners.add(this,window.BAO.EVENTS.QUANTITY_ADJUSTER.CHANGE,this.debouncedOnQuantityChange)}async removeLineItem(e){e.preventDefault(),this.loading=!0;const state=await window.BAO.Cart.removeItem(this.dataset.key,{sections:this.mappedSections});this.loading=!1,"sections"in state&&this.renderSections(state.sections)}async onQuantityChange(e){this.loading=!0;const state=await window.BAO.Cart.updateQuantity(this.dataset.key,e.detail.value,{sections:this.mappedSections});if(this.loading=!1,"sections"in state&&this.renderSections(state.sections),state.status===422){const myEvent=new CustomEvent(window.BAO.EVENTS.QUANTITY_ADJUSTER.ERROR,{detail:{quantity:Number(this.els.quantity.element.dataset.lineItemQuantity)},bubbles:!0});this.dispatchEvent(myEvent)}}get mappedSections(){return this.sections.map(s=>s.section)}get loading(){return this._loading}set loading(val){this._loading=val,this.inPushCart&&(this.pushCart.loading=val),this.setAttribute("aria-busy",val.toString())}get pushCart(){return this.closest("push-cart")}get inPushCart(){return this.pushCart!=null}get cart(){return this.closest("cart-items")}get onCartPage(){return this.cart!=null}}customElements.get("cart-item")||customElements.define("cart-item",CartItem);
//# sourceMappingURL=/cdn/shop/t/50/assets/cart-item.js.map?v=24871631755626552161707734708
