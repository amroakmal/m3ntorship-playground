"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pickly_posts_client_1 = require("pickly-posts-client");
const postsApi = new pickly_posts_client_1.PostsApi({ basePath: "http://127.0.0.1:4010" });
postsApi.getPosts().then(res => {
    console.log(res.data);
});
