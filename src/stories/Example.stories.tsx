import React from 'react'
import { useInternalLinkHandler } from "../linkHandler/linkHandler";
import { MarkdownRenderer } from './Renderer'
import markdown_content from './md_content.md?raw'

export default {
    title: "Example"
}

export const WithInternalLinkHandler = () => {

    const containerRef = useInternalLinkHandler<HTMLDivElement>();

    return (
        <div ref={containerRef}>
            <MarkdownRenderer markdownString={markdown_content}/>
        </div>
    )
}

export const WithoutInternalLinkHandler = () => {

    return (
        <div>
            <MarkdownRenderer markdownString={markdown_content}/>
        </div>
    )
}