/**
 * project-portfolio controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::project-portfolio.project-portfolio', ({ strapi }) => ({
  async findOne(ctx) {
    const { slug } = ctx.params;
    
    const entity = await strapi.db.query('api::project-portfolio.project-portfolio').findOne({
      where: { slug },
      populate: {
        images: true,
        hero_image: true
      }
    });

    if (!entity) {
      return ctx.notFound('Portfolio not found');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));
