const { PostsApi } = require('../client');

const postsAPI = new PostsApi({basePath: "http://localhost:4010"});

postsAPI.getPosts().then((value) => {
    console.log(value.data);
})
