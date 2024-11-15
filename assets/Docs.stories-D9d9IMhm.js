import{u as i,j as e,M as l}from"./Renderer-CUnkCmbS.js";import"./index-DJO9vBfz.js";const s=`# Internal Link Handler

A React component and hook for handling internal links with smooth scrolling behavior.

## Installation

\`\`\`bash
npm install @crimson206/internal-link-handler
# or
yarn add @crimson206/internal-link-handler
\`\`\`

## Features

- Smooth scrolling to internal anchor links
- Available as both a React component and a hook
- TypeScript support
- Easy integration with existing React projects
- Works with dynamically generated content

## Usage

### Using the Hook

\`\`\`tsx
import { useInternalLinkHandler } from '@crimson206/internal-link-handler';

function MyComponent() {
  const containerRef = useInternalLinkHandler<HTMLDivElement>();

  return (
    <div ref={containerRef}>
      <a href="#section1">Go to Section 1</a>
      <div id="section1">
        <h2>Section 1</h2>
        {/* Content */}
      </div>
    </div>
  );
}
\`\`\`

### Using the Component

\`\`\`tsx
import { InternalLinkHandler } from '@crimson206/internal-link-handler';

function MyComponent() {
  return (
    <InternalLinkHandler>
      <a href="#section1">Go to Section 1</a>
      <div id="section1">
        <h2>Section 1</h2>
        {/* Content */}
      </div>
    </InternalLinkHandler>
  );
}
\`\`\`

## Demo

Check out the live examples:
- [With Internal Link Handler](https://crimson206.github.io/internal-link-handler/?path=/story/example--with-internal-link-handler)
- [Without Internal Link Handler](https://crimson206.github.io/internal-link-handler/?path=/story/example--without-internal-link-handler)

## API Reference

### useInternalLinkHandler

\`\`\`tsx
function useInternalLinkHandler<T extends HTMLElement>(
  externalRef?: React.RefObject<T>
): React.RefObject<T>
\`\`\`

#### Parameters

- \`externalRef\` (optional): A ref object to use instead of creating a new one

#### Returns

- A ref object to attach to your container element

### InternalLinkHandler

\`\`\`tsx
const InternalLinkHandler: React.FC<{
  children: React.ReactNode;
}>
\`\`\`

#### Props

- \`children\`: React nodes to be rendered within the handler

## License

MIT`,h={title:"Docs"},n=()=>{const o=i();return e.jsx("div",{ref:o,children:e.jsx(l,{markdownString:s})})};n.__docgenInfo={description:"",methods:[],displayName:"ReadMe"};var t,r,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const containerRef = useInternalLinkHandler<HTMLDivElement>();
  return <div ref={containerRef}>
            <MarkdownRenderer markdownString={markdown_content} />
        </div>;
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const m=["ReadMe"];export{n as ReadMe,m as __namedExportsOrder,h as default};
