// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    category: { type: "string", required: true }
    // slug: {type:"string", required: true } this requires you to write the slug in manually
  },
  computedFields: {
    // url: { type: "string", resolve: (post) => `/posts/${post._raw.flattenedPath}` }, you only need this if you are using the contentlayer example page.tsx that uses post.url
    slug: { type: "string", resolve: (post) => post._raw.flattenedPath }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "posts", documentTypes: [Post] });
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-P5MHPXHR.mjs.map
