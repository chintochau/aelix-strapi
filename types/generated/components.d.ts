import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectResults extends Struct.ComponentSchema {
  collectionName: 'components_project_results';
  info: {
    displayName: 'results';
    icon: 'star';
  };
  attributes: {
    improvement_percentage: Schema.Attribute.Decimal;
    metric_name: Schema.Attribute.String;
    metric_value: Schema.Attribute.String;
  };
}

export interface ProjectSeo extends Struct.ComponentSchema {
  collectionName: 'components_project_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.results': ProjectResults;
      'project.seo': ProjectSeo;
    }
  }
}
