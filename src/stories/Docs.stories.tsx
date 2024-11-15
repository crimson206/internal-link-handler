import React from 'react'
import { useInternalLinkHandler } from "../linkHandler/linkHandler";
import { MarkdownRenderer } from './Renderer'
import markdown_content from '../../README.md?raw'

export default {
    title: "Docs"
}

export const ReadMe = () => {

    const containerRef = useInternalLinkHandler<HTMLDivElement>();

    return (
        <div ref={containerRef}>
            <MarkdownRenderer markdownString={markdown_content}/>
        </div>
    )
}