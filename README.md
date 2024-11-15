# Internal Link Handler

A React solution for handling anchor links in rendered Markdown content, preventing unwanted iframe navigation in environments like Storybook.

## Motivation

When rendering Markdown content in Storybook or similar iframe-based environments, clicking internal anchor links (e.g., table of contents links) often causes unintended navigation within the iframe instead of smoothly scrolling to the target section. This library provides a simple solution by intercepting anchor link clicks and implementing smooth scrolling behavior within the content container.

## Installation

```bash
npm install @crimson206/internal-link-handler
# or
yarn add @crimson206/internal-link-handler
```

## Features

- Prevents iframe navigation issues with internal links
- Implements smooth scrolling to anchor targets
- Available as both a React component and a hook
- TypeScript support
- Easy integration with existing React projects
- Works with dynamically generated content

## Usage

### Using the Hook

```tsx
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
```

### Using the Component

```tsx
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
```

## Demo

Check out the live examples:
- [With Internal Link Handler](https://crimson206.github.io/internal-link-handler/?path=/story/example--with-internal-link-handler)
- [Without Internal Link Handler](https://crimson206.github.io/internal-link-handler/?path=/story/example--without-internal-link-handler)

## API Reference

### useInternalLinkHandler

```tsx
function useInternalLinkHandler<T extends HTMLElement>(
  externalRef?: React.RefObject<T>
): React.RefObject<T>
```

#### Parameters

- `externalRef` (optional): A ref object to use instead of creating a new one

#### Returns

- A ref object to attach to your container element

### InternalLinkHandler

```tsx
const InternalLinkHandler: React.FC<{
  children: React.ReactNode;
}>
```

#### Props

- `children`: React nodes to be rendered within the handler

## License

MIT
