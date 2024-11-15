import{u as h,j as r,M as c}from"./Renderer-CUnkCmbS.js";import"./index-DJO9vBfz.js";const m=`# Markdown Example

Try the table of contents to check the difference.

## Table Of Contents

## Ahri

Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. 

Once a powerful yet wayward predator, Ahri is now traveling the world in search of remnants of her ancestors while also trying to replace her stolen memories with ones of her own making.

### ABILITIES

#### Essence Theft

*PASSIVE*

After killing 9 minions or monsters, Ahri heals.

After taking down an enemy champion, Ahri heals for a greater amount.


#### Orb of Deception

*Q*

Ahri sends out and pulls back her orb, dealing magic damage on the way out and true damage on the way back.

#### Fox-Fire

*W*

Ahri gains a brief burst of Move Speed and releases three fox-fires, that lock onto and attack nearby enemies.

#### Charm

*E*

Ahri blows a kiss that damages and charms an enemy it encounters, instantly stopping movement abilities and causing them to walk harmlessly towards her.

#### Spirit Rush

*R*

Ahri dashes forward and fires essence bolts, damaging nearby enemies. 

Spirit Rush can be cast up to three times before going on cooldown, and gains additional recasts when taking down enemy champions.`,u={title:"Example"},n=()=>{const l=h();return r.jsx("div",{ref:l,children:r.jsx(c,{markdownString:m})})},e=()=>r.jsx("div",{children:r.jsx(c,{markdownString:m})});n.__docgenInfo={description:"",methods:[],displayName:"WithInternalLinkHandler"};e.__docgenInfo={description:"",methods:[],displayName:"WithoutInternalLinkHandler"};var a,t,o;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  const containerRef = useInternalLinkHandler<HTMLDivElement>();
  return <div ref={containerRef}>
            <MarkdownRenderer markdownString={markdown_content} />
        </div>;
}`,...(o=(t=n.parameters)==null?void 0:t.docs)==null?void 0:o.source}}};var s,i,d;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <div>
            <MarkdownRenderer markdownString={markdown_content} />
        </div>;
}`,...(d=(i=e.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const g=["WithInternalLinkHandler","WithoutInternalLinkHandler"];export{n as WithInternalLinkHandler,e as WithoutInternalLinkHandler,g as __namedExportsOrder,u as default};
