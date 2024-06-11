const{getElement,getElements}=window.BAO.Utils;export class SiteDrawers extends window.BAO.CustomElement(){constructor(){if(super(),this.hasAlreadyBeenUsed)throw new Error(`You can only use 1 instance of ${this.nodeName.toLowerCase()}`);this._activeDrawerKey="",this.drawers=[],window.drawers=this,this.drawerKeys.filter(key=>!this.triggerKeys.includes(key)).forEach(key=>console.info(`Drawer exists for ${key} but there is no trigger`)),window.BAO.drawers={closeDrawer:()=>{this.closeDrawer()}}}setupListeners(){super.setupListeners(),this.listeners.add(document.documentElement,"click",this.handleClick.bind(this))}handleClick(e){const EVENTS={TRIGGER:"TRIGGER",BACK:"BACK",CLOSE:"CLOSE",BACKDROP:"BACKDROP",UNKNOWN:"UNKNOWN"},eventType=e.target.closest(this.config.matches.trigger)!==null?EVENTS.TRIGGER:e.target.closest(this.config.matches.back)!==null?EVENTS.BACK:e.target.closest(this.config.matches.close)!==null?EVENTS.CLOSE:e.target.closest(this.config.matches.backdrop)!==null?EVENTS.BACKDROP:EVENTS.UNKNOWN;if(eventType!==EVENTS.UNKNOWN){if(e.preventDefault(),eventType===EVENTS.TRIGGER){const trigger=e.target.closest(this.config.matches.trigger);if(!trigger.disabled){const key=trigger.getAttribute("data-drawers-trigger");this.isSubDrawerTrigger=e.target.closest(this.config.matches.subNav),this.triggerKeys.includes(key)&&(this.isSubDrawerTrigger?(this.parentDrawerKey=this.parentDrawerKey?this.parentDrawerKey:this.activeDrawerKey,this.activeDrawerKey=key):(this.activeDrawerKey=key===this.activeDrawerKey||key===this.parentDrawerKey?"":key,this.parentDrawerKey="")),this.getParentDrawers(trigger).forEach(parentDrawer=>{parentDrawer.classList.add("drw-Drawer-active")})}}if(eventType===EVENTS.BACK){const backButton=e.target.closest(this.config.matches.back),key=backButton.getAttribute("data-drawers-back-key");this.drawers.filter(drawer=>drawer.key===key).forEach(drawer=>drawer.isOpen=!1),this.setExpanded([backButton.getAttribute("data-drawers-parent-key")])}(eventType===EVENTS.CLOSE||eventType===EVENTS.BACKDROP)&&this.closeDrawer()}}closeDrawer(){document.body.classList.remove(`drw-Drawers-${this.activeDrawerKey}`),this.isSubDrawerTrigger=!1,this.parentDrawerKey="",this.activeDrawerKey=""}setExpanded(keys){this.triggerKeys.forEach(triggerKey=>{const triggerEl=getElement(`[data-drawers-trigger='${triggerKey}']`,{context:document});triggerEl&&triggerEl.setAttribute("aria-expanded",String(keys.includes(triggerKey)))})}get triggerKeys(){return getElements("[data-drawers-trigger]").map(el=>el.getAttribute("data-drawers-trigger"))}get drawerKeys(){return getElements("[data-module-drawers-drawer]").map(el=>el.getAttribute("data-module-drawers-drawer"))}get hasAlreadyBeenUsed(){return getElement(this.nodeName.toLowerCase())!==this}get aDrawerIsOpen(){return this.drawers.some(drawer=>drawer.isOpen)}get activeDrawerKey(){return this._activeDrawerKey}set activeDrawerKey(key){this._activeDrawerKey=key,this.drawers.forEach(drawer=>drawer.isOpen=drawer.key===key),this.setExpanded([this.parentDrawerKey,key]),this.config.elements.drawers.classList.toggle(this.config.classes.activeClass,this.aDrawerIsOpen),document.body.classList.toggle(this.config.classes.siteOverflowed,this.aDrawerIsOpen),document.body.classList.toggle(this.config.classes.drawersOpenUtility,this.aDrawerIsOpen),document.body.classList.toggle(this.config.classes.hideChat,this.aDrawerIsOpen),key!==""?(this.els.drawer.element.classList.add("drw-Drawers_Drawer-active"),document.body.classList.add(`drw-Drawers-${key}`)):this.els.drawer.element.classList.remove("drw-Drawers_Drawer-active")}getParentDrawers(trigger){return(trigger.dataset.drawersParentKeys?trigger.dataset.drawersParentKeys.split(","):[]).map(drawerKey=>getElement(`[key="${drawerKey}"]`,{context:this}))}get config(){return{matches:{trigger:"[data-drawers-trigger]",subNav:"[data-drawers-sub-nav]",back:"[data-drawers-back-key]",close:"[data-drawers-close]",backdrop:'[data-site-drawers-el="backdrop"]'},classes:{activeClass:"drw-Drawers-active",activeDrawerClass:"drw-Drawer-active",siteOverflowed:"util-SiteOverflowed",hideChat:"util-HideChat",drawersOpenUtility:"util-DrawersOpen"},elements:{body:document.body||document.documentElement,backdrop:'[data-site-drawers-el="backdrop"]',drawers:document.querySelector("site-drawers")}}}}customElements.define("site-drawers",SiteDrawers);
//# sourceMappingURL=/cdn/shop/t/50/assets/site-drawers.js.map?v=162925004906844601061707734795