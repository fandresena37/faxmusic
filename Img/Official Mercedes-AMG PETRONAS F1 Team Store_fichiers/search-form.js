class SearchForm extends window.BAO.CustomElement(){static get styles(){return`
      :host {
        display: block;
      }
    `}static get requiredElements(){return["input"]}setupListeners(){super.setupListeners(),this.onTriggerClick=this.onTriggerClick.bind(this),this.onBodyClick=this.onBodyClick.bind(this),this.handleMobileNavTrigger=this.handleMobileNavTrigger.bind(this),this.listeners.add(this.els.input.element,"click",this.onTriggerClick),this.listeners.add(document.body,"click",this.onBodyClick),this.els?.cancel?.element&&(this.onCancelClick=this.onCancelClick.bind(this),this.listeners.add(this.els.cancel.element,"click",this.onCancelClick)),window.BAO.eventBus.addEventListener(window.BAO.EVENTS.MOBILE_MENU.RENDERED,this.handleMobileNavTrigger)}handleMobileNavTrigger(){const mobileTrigger=this.externalEls["mobile-search-trigger"].element;mobileTrigger&&mobileTrigger.addEventListener("click",e=>{e.stopImmediatePropagation(),document.querySelector('[data-site-drawers-el="backdrop"]').click();const inputId=window.BAO.MediaBreakpoints.isSm?"#header-search":"#mobile-header-search",activeSearchInput=document.querySelector(`${this.els.input.selector}${inputId}`);activeSearchInput&&(activeSearchInput.click(),activeSearchInput.focus())})}onTriggerClick(){this.isActive=!0}onCancelClick(){this.isActive=!1,this.els.input.element.value=""}onBodyClick(event){event.target.closest(".hd-Banner_SearchField")||event.target.closest(".kuPreventDocumentClick")||this.isActive&&(this.isActive=!1)}get isActive(){return this.hasAttribute("active")}set isActive(val){val?this.setAttribute("active",""):this.removeAttribute("active"),document.body.classList.toggle("util-SiteOverflowed",val),document.body.classList.toggle("util-KlevuActive",val),document.body.classList.toggle("util-HideChat",val)}}customElements.get("search-form")||customElements.define("search-form",SearchForm);
//# sourceMappingURL=/cdn/shop/t/50/assets/search-form.js.map?v=178392873701830269091707734778
