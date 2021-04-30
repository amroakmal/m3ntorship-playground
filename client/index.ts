import { Configuration, PostsApi } from 'pickly-posts-client';

const postsApi = new PostsApi({basePath: "http://127.0.0.1:4010"} as Configuration);

postsApi.getPosts().then(res => {
    console.log(res.data);
})