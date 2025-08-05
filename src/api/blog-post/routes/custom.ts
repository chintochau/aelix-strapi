module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/blog-post/:slug',
            handler: 'blog-post.findOne',
            config: {
                auth:false
            },
        }
    ]
}