let dropdownLoaded=!1;class HeaderDropdown extends window.BAO.CustomElement(){connectedCallback(){dropdownLoaded||window.BAO.sectionRenderer.fetch("header","/?view=dropdown").then(res=>{dropdownLoaded=!0;const myself=window.BAO.sectionRenderer.convertToDOM(res.header).querySelector(this.localName);this.outerHTML=myself.outerHTML}).catch(()=>{})}}customElements.get("header-dropdown")||customElements.define("header-dropdown",HeaderDropdown);
//# sourceMappingURL=/cdn/shop/t/50/assets/header-dropdown.js.map?v=126011793471482027991707734732