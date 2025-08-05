/**
 * blog-post controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::blog-post.blog-post', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    
    const entity = await strapi.db.query('api::blog-post.blog-post').findOne({
      where: { slug },
      populate: {
        featured_image: true,
        team_member: true,
        tags: true,
        project_portfolios: true,
        blog_category: true,
        seo:true
      }
    });

    if (!entity) {
      return ctx.notFound('Blog Post not found');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));
