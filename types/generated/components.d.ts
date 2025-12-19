import type { Schema, Struct } from '@strapi/strapi';

export interface SharedFaQuestion extends Struct.ComponentSchema {
  collectionName: 'components_shared_fa_questions';
  info: {
    displayName: 'FAQuestion';
  };
  attributes: {
    answer: Schema.Attribute.Text & Schema.Attribute.Required;
    question: Schema.Attribute.String & Schema.Attribute.Required;
    relatedLinks: Schema.Attribute.Component<'shared.link', false>;
    requiresAuth: Schema.Attribute.Boolean;
  };
}

export interface SharedFaqCategory extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_categories';
  info: {
    displayName: 'FAQCategory';
  };
  attributes: {
    icon: Schema.Attribute.String & Schema.Attribute.Required;
    Questions: Schema.Attribute.Component<'shared.fa-question', true>;
    requiresAuth: Schema.Attribute.Boolean;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'FAQLink';
  };
  attributes: {
    redirect: Schema.Attribute.String;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['route', 'url']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.fa-question': SharedFaQuestion;
      'shared.faq-category': SharedFaqCategory;
      'shared.link': SharedLink;
    }
  }
}
