class Utils{static getElement(selector,{context=document}={}){return context.querySelector(selector)}static getElements(selector,{context=document,asArray=!0}={}){const items=context.querySelectorAll(selector);return asArray?Array.from(items):items}static doesStringContainAny(str,items=[]){return items.some(i=>str.includes(i))}static createElement(tag,options={}){const el=document.createElement(tag);return Object.entries(options).forEach(([key,value])=>{el.setAttribute(key,value)}),el}static range(amount){return[...Array(amount).keys()]}static camelize(str){return str.replace(/(?:^\w|[A-Z]|\b\w)/g,(word,index)=>index===0?word.toLowerCase():word.toUpperCase()).replace(/\s+/g,"")}static resizeImage({src,size,crop=null,scale=null}={}){if(size==null)return src;if(size==="master")return src.replace(/http(s)?:/,"");const match=src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?/i);if(match!=null){const prefix=src.split(match[0]),suffix=match[0],scaleString=scale?`@${scale}x`:"",cropString=crop?`_crop_${crop}`:"";return`${prefix[0]}_${size}${cropString}${scaleString}${suffix}`.replace(/http(s)?:/,"")}else return null}static getDefaultRequestConfig(type="json"){return{method:"POST",headers:{Accept:`application/${type}`,"Content-Type":"application/json"}}}static fetchJSON(url,config={}){return fetch(url,Object.assign({},Utils.getDefaultRequestConfig(),config)).then(response=>{if(!response.ok)throw response;return response.json()})}static fetchProductData(handle){try{return Utils.fetchJSON(`/products/${handle}.js`)}catch(e){console.error(e)}}static getOffsetTop(el,parent=document.body,offsetTop=0){return isNaN(el.offsetTop)||(offsetTop+=el.offsetTop),el.offsetParent===parent?offsetTop:Utils.getOffsetTop(el.offsetParent,parent,offsetTop)}static formatMoney(cents,format=window.theme.moneyFormat){typeof cents=="string"&&(cents=cents.replace(".",""));let value="";const placeholderRegex=/\{\{\s*(\w+)\s*\}\}/,formatString=format;function formatWithDelimiters(number,precision=2,thousands=",",decimal="."){if(isNaN(number)||number==null)return 0;number=(number/100).toFixed(precision);const parts=number.split("."),dollarsAmount=parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,`$1${thousands}`),centsAmount=parts[1]?decimal+parts[1]:"";return dollarsAmount+centsAmount}switch(formatString.match(placeholderRegex)[1]){case"amount":value=formatWithDelimiters(cents,2);break;case"amount_no_decimals":value=formatWithDelimiters(cents,0);break;case"amount_with_comma_separator":value=formatWithDelimiters(cents,2,".",",");break;case"amount_no_decimals_with_comma_separator":value=formatWithDelimiters(cents,0,".",",");break}return formatString.replace(placeholderRegex,value)}static getOrdinalForDay(day){if(day>3&&day<21)return"th";switch(day%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}static translateString(translation,variables,options={delimiters:[["{{\\s*","\\s*}}"],["%{","}"]]}){return Object.entries(variables).reduce((baseTranslation,[key,value])=>{const replacePattern=options.delimiters.map(([start,end])=>`${start}${key}${end}`).join("|");return baseTranslation.replace(new RegExp(replacePattern,"g"),value)},translation)}static debounce(fn,wait){let t;return(...args)=>{clearTimeout(t),t=setTimeout(()=>fn.apply(this,args),wait)}}static buildProperties(formData){const propertyKeyValues=[...formData.entries()].filter(([key,value])=>key.includes("properties[")&&value!=="");function propertyReducer(properties,[key,value]){const strippedKey=key.replace("properties[","").slice(0,-1);return{...properties,[strippedKey]:value}}return propertyKeyValues.reduce((properties,property)=>propertyReducer(properties,property),{})}static viewportSize(){const breakpoints={xs:window.matchMedia("(max-width: 767px)").matches,sm:window.matchMedia("(min-width: 768px) and (max-width: 900px)").matches,md:window.matchMedia("(min-width: 901px) and (max-width: 1200px)").matches,lg:window.matchMedia("(min-width: 1201px) and (max-width: 1439px)").matches,xl:window.matchMedia("(min-width: 1440px)").matches};return Object.keys(breakpoints).find(key=>breakpoints[key])}static isTouchDevice(){return!window.matchMedia("(hover: hover) and (pointer: fine)").matches}static prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}static setCookie(cname,cvalue,exdays){const d=new Date;d.setTime(d.getTime()+exdays*24*60*60*1e3);const expires=`expires=${d.toUTCString()}`;document.cookie=`${cname}=${cvalue};${expires};path=/`}static getCookie(cname){const name=`${cname}=`,ca=decodeURIComponent(document.cookie).split(";");for(let i=0;i<ca.length;i++){let c=ca[i];for(;c.charAt(0)===" ";)c=c.substring(1);if(c.indexOf(name)===0)return c.substring(name.length,c.length)}return""}}window.BAO.Utils=Utils;
//# sourceMappingURL=/cdn/shop/t/50/assets/bao-utils.js.map?v=165461420376461524101707734705