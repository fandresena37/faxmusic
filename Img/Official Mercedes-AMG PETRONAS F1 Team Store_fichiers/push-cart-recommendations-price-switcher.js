export class PushCartRecommendationsPriceSwitcher extends window.BAO.CustomElement(){connectedCallback(){super.connectedCallback()}setupListeners(){super.setupListeners(),this.els.switcher?.exists&&this.externalEls.value?.exists&&this.els.switcher.element.addEventListener("change",this.handleVariantChange.bind(this))}handleVariantChange(e){const currentVariantId=e.currentTarget.value,currentPrice=e.currentTarget.querySelector(`option[value='${currentVariantId}']`).dataset.price;this.closest("product-form").querySelector(this.externalEls.value.selector).innerHTML=currentPrice}}customElements.get("push-cart-recommendations-price-switcher")||customElements.define("push-cart-recommendations-price-switcher",PushCartRecommendationsPriceSwitcher);
//# sourceMappingURL=/cdn/shop/t/50/assets/push-cart-recommendations-price-switcher.js.map?v=77924626565212071701707734769