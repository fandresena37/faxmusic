const{getElements,parseInteger}=window.BAO.Utils;class SectionAsync extends window.BAO.CustomElement(){static get observedAttributes(){return["section-id","url","loading","cache-key","cache-expiry"]}static get requiredAttributes(){return["section-id"]}connectedCallback(){super.connectedCallback(),!this.useCache&&this.isLazy&&this.isIntersectionObserverSupported?(this.intersectionObserverCallback=this.intersectionObserverCallback.bind(this),this.observer.observe(this)):this.renderSection()}async renderSection(){this.isBusy=!0;const cachedHtml=this.cachedHtml,html=cachedHtml||await this.sectionRenderer.fetchSingle(this.sectionId,this.sectionUrl);this.sectionHTML=this.sectionRenderer.getInnerHtml(html),this.isBusy=!1,this.useCache&&!cachedHtml&&this.storeHtmlInCache(html)}removeParentElement(){(this.parentIdentifier?this.closest(this.parentIdentifier):this).remove()}intersectionObserverCallback(entries){entries?.[0]?.isIntersecting&&(this.renderSection(),this.observer.disconnect())}get observer(){return new IntersectionObserver(this.intersectionObserverCallback)}get sectionId(){return this.getAttribute("section-id")}set sectionHTML(html){if(!html){this.removeParentElement();return}this.innerHTML=html,this.enableDependantElements()}enableDependantElements(){getElements(`[data-await='${this.sectionId}']`).forEach(el=>el.disabled=!1)}storeHtmlInCache(html){const item={value:html,expiry:new Date().getTime()+this.cacheExpiryInMilliseconds};localStorage.setItem(this.cacheKey,JSON.stringify(item))}get sectionHTML(){return this.innerHTML}set isBusy(isBusy){this.setAttribute("aria-busy",String(isBusy))}get isBusy(){return this.getAttribute("aria-busy")==="true"}get sectionRenderer(){return window.BAO.sectionRenderer}get url(){return this.getAttribute("url")?.replace("[[query_parameters]]",window.location.search)}get parentIdentifier(){return this?.dataset?.parentIdentifier}get sectionUrl(){return this.url||`${window.location.pathname}${window.location.search}`}get isLazy(){return this.getAttribute("loading")==="lazy"}get useCache(){return this.hasAttribute("cache-key")}get cacheKey(){return this.getAttribute("cache-key")}get cacheExpiry(){return parseInteger(this.getAttribute("cache-expiry"))}get cacheExpiryInMilliseconds(){return this.cacheExpiry*36e5}get cachedHtml(){const itemString=localStorage.getItem(this.cacheKey);if(!itemString)return null;const item=JSON.parse(itemString);return new Date().getTime()>item.expiry?(localStorage.removeItem(this.cacheKey),null):item.value}get isIntersectionObserverSupported(){return"IntersectionObserver"in window}}customElements.get("section-async")||customElements.define("section-async",SectionAsync);
//# sourceMappingURL=/cdn/shop/t/50/assets/section-async.js.map?v=83069833829608609601707734780
