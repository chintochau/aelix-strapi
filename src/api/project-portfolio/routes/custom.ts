module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/project-portfolios/:slug',
            handler: 'project-portfolio.findOne',
            config: {
                auth:false
            },
        }
    ]
}