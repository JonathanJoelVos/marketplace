const { buildConfig } = require("payload/config");
const { slateEditor } = require("@payloadcms/richtext-slate");
const { mongooseAdapter } = require("@payloadcms/db-mongodb");
const { webpackBundler } = require("@payloadcms/bundler-webpack");
const path = require("path");

module.exports = buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
  collections: [],
  routes: {
    admin: "/sell",
  },
  admin: {
    bundler: webpackBundler(),
    meta: {
      titleSuffix: "- Jojo",
      favicon: "/favicon.ico",
      ogImage: "/thumbnail.jpg",
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
});
