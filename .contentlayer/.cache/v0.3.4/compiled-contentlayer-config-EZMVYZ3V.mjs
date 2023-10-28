// contentlayer.config.ts
import {
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { rehypeAccessibleEmojis } from "rehype-accessible-emojis";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";
import rehypeCodeTitles from "rehype-code-titles";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    subtitle: { type: "string", required: false },
    description: { type: "string", required: false },
    category: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" }, required: false },
    date: { type: "date", required: true },
    // isPublished: { type: 'boolean', required: true },
    imgUrl: { type: "string", required: false },
    thumbnail: { type: "string", required: false }
  },
  computedFields: {
    url: { type: "string", resolve: (post) => `${post._raw.flattenedPath}` }
  }
}));
var contentSource = makeSource({
  // 마크다운 파일이 저장되어 있는 루트 폴더
  contentDirPath: "posts",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeCodeTitles,
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark"
        }
      ],
      [
        rehypeExternalLinks,
        {
          target: ["_blank"],
          rel: ["noreferrer noopener"]
        }
      ],
      // rehypeHighlight,
      rehypeAccessibleEmojis
    ]
  }
});
var contentlayer_config_default = contentSource;
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-EZMVYZ3V.mjs.map
