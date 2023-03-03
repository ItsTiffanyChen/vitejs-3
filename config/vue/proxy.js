module.exports = function (env) {
  return {
    // My104個人頭像的路徑
    "^/static/avatar": {
      target: `${process.env.VUE_APP_DEV_HOST}:8083`
    },
    // CProfile 圖片路徑
    "^/profile": {
      target: `${process.env.VUE_APP_DEV_HOST}:8083`
    },

    // vagrant
    "^/api/cindex": {
      target: `${process.env.VUE_APP_DEV_HOST}:8080`,
      changeOrigin: true,
      pathRewrite: { "^/api/cindex": "" }
    },
    "^/api/capply": {
      target: `${process.env.VUE_APP_DEV_HOST}:8081`,
      changeOrigin: true,
      pathRewrite: { "^/api/capply": "/jobs/apply" }
    },
    "^/api/cmain/origin": {
      target: `${process.env.VUE_APP_DEV_HOST}:8082`,
      changeOrigin: true,
      pathRewrite: { "^/api/cmain/origin": "" }
    },
    "^/api/cmain": {
      target: `${process.env.VUE_APP_DEV_HOST}:8082`,
      changeOrigin: true,
      pathRewrite: { "^/api/cmain": "/jobs/main" }
    },
    "^/api/cmy104": {
      target: `${process.env.VUE_APP_DEV_HOST}:8083`,
      changeOrigin: true,
      pathRewrite: { "^/api/cmy104": "" }
    },
    "^/api/time4jobs": {
      target: `${process.env.VUE_APP_DEV_HOST}:8084`,
      changeOrigin: true,
      pathRewrite: { "^/api/time4jobs": "" }
    },
    "^/api/profile": {
      target: `${process.env.VUE_APP_DEV_HOST}:8788`,
      changeOrigin: true,
      pathRewrite: { "^/api/profile": "" }
    },

    // 其他部門API
    "^/api/reviews": {
      target: `http:${process.env.VUE_APP_REVIEWS_PROXY_API}`,
      changeOrigin: true,
      pathRewrite: { "^/api/reviews": "/api/companies" }
    },
    "^/api/104i": {
      target: process.env.VUE_APP_104I_PROXY_API,
      changeOrigin: true,
      pathRewrite: { "^/api/104i": "" }
    },
    "^/api/category": {
      target: process.env.VUE_APP_CATEGORY_PROXY_API,
      changeOrigin: true,
      pathRewrite: { "^/api/category": "" }
    },
    "^/api/blog": {
      target: process.env.VUE_APP_BLOG_PROXY_API,
      changeOrigin: true,
      pathRewrite: { "^/api/blog": "" }
    },
    "^/api/fresh/": {
      target: process.env.VUE_APP_FRESH_PROXY_API,
      changeOrigin: true,
      pathRewrite: { "^/api/fresh/": "" }
    }
  };
};
