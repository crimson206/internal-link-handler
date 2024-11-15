import React, { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";

export interface MarkdownRendererProps {
  markdownString: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  markdownString,
}) => {

  const rehypePlugins = [
    rehypeSlug,
  ];

  return (
    <div >
      <ReactMarkdown
        remarkPlugins={[
          [remarkToc, { heading: "Table Of Contents", tight: true }],
        ]}
        rehypePlugins={rehypePlugins}
      >
        {markdownString}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
