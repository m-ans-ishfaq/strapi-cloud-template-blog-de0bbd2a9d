import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksEmotion extends Struct.ComponentSchema {
  collectionName: 'components_blocks_emotions';
  info: {
    displayName: 'Emotion';
  };
  attributes: {
    emotion: Schema.Attribute.Component<'types.emotion-type', false>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
  };
}

export interface BlocksMatchOption extends Struct.ComponentSchema {
  collectionName: 'components_blocks_match_options';
  info: {
    displayName: 'Match Option';
  };
  attributes: {
    left: Schema.Attribute.String;
    right: Schema.Attribute.String;
  };
}

export interface BlocksOption extends Struct.ComponentSchema {
  collectionName: 'components_blocks_options';
  info: {
    displayName: 'Option';
    icon: 'chartCircle';
  };
  attributes: {
    option: Schema.Attribute.String & Schema.Attribute.Required;
    reason: Schema.Attribute.String;
  };
}

export interface BlocksStackOption extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stack_options';
  info: {
    displayName: 'Stack Option';
    icon: 'file';
  };
  attributes: {
    illustration: Schema.Attribute.Media<'images'>;
    order: Schema.Attribute.Integer & Schema.Attribute.Required;
    statement: Schema.Attribute.String;
  };
}

export interface BlocksTfOption extends Struct.ComponentSchema {
  collectionName: 'components_blocks_tf_options';
  info: {
    displayName: 'TF Option';
  };
  attributes: {
    boolean: Schema.Attribute.Boolean & Schema.Attribute.Required;
    negativeReason: Schema.Attribute.String;
    statement: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SlideAnalogy extends Struct.ComponentSchema {
  collectionName: 'components_slide_analogies';
  info: {
    displayName: 'Analogy';
    icon: 'archive';
  };
  attributes: {
    analogy: Schema.Attribute.RichText & Schema.Attribute.Required;
    orientation: Schema.Attribute.Enumeration<['Vertical', 'Horizontal']>;
    point: Schema.Attribute.RichText & Schema.Attribute.Required;
  };
}

export interface SlideDiagram extends Struct.ComponentSchema {
  collectionName: 'components_slide_diagrams';
  info: {
    displayName: 'Diagram';
    icon: 'envelop';
  };
  attributes: {
    illustration: Schema.Attribute.Media<'images' | 'videos'> &
      Schema.Attribute.Required;
    text: Schema.Attribute.RichText;
  };
}

export interface SlideFunFact extends Struct.ComponentSchema {
  collectionName: 'components_slide_fun_facts';
  info: {
    displayName: 'Fun Fact';
    icon: 'code';
  };
  attributes: {
    character: Schema.Attribute.Relation<
      'oneToOne',
      'api::character.character'
    >;
    characterDialogue: Schema.Attribute.Text;
    characterEmotion: Schema.Attribute.Component<'types.emotion-type', false>;
    fact: Schema.Attribute.Text & Schema.Attribute.Required;
    illustration: Schema.Attribute.Media<'images' | 'videos'>;
  };
}

export interface SlideHeading extends Struct.ComponentSchema {
  collectionName: 'components_slide_headings';
  info: {
    displayName: 'Heading';
    icon: 'code';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SlideMatching extends Struct.ComponentSchema {
  collectionName: 'components_slide_matchings';
  info: {
    displayName: 'Matching';
  };
  attributes: {
    illustration: Schema.Attribute.Media<'images'>;
    options: Schema.Attribute.Component<'blocks.match-option', true>;
    statement: Schema.Attribute.String;
  };
}

export interface SlideMcq extends Struct.ComponentSchema {
  collectionName: 'components_slide_mcqs';
  info: {
    displayName: 'MCQ';
    icon: 'chartBubble';
  };
  attributes: {
    a: Schema.Attribute.Component<'blocks.option', false>;
    b: Schema.Attribute.Component<'blocks.option', false>;
    c: Schema.Attribute.Component<'blocks.option', false>;
    correctOption: Schema.Attribute.Enumeration<['a', 'b', 'c', 'd']> &
      Schema.Attribute.Required;
    d: Schema.Attribute.Component<'blocks.option', false>;
    duration: Schema.Attribute.Integer;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SlidePointToPonder extends Struct.ComponentSchema {
  collectionName: 'components_slide_point_to_ponders';
  info: {
    displayName: 'Point To Ponder';
  };
  attributes: {
    character: Schema.Attribute.Relation<
      'oneToOne',
      'api::character.character'
    >;
    point: Schema.Attribute.String;
  };
}

export interface SlideSimulation extends Struct.ComponentSchema {
  collectionName: 'components_slide_simulations';
  info: {
    displayName: 'Simulation';
  };
  attributes: {
    simulationId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
  };
}

export interface SlideSlice extends Struct.ComponentSchema {
  collectionName: 'components_slide_slices';
  info: {
    displayName: 'Slice';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface SlideStack extends Struct.ComponentSchema {
  collectionName: 'components_slide_stacks';
  info: {
    displayName: 'Stack';
    icon: 'feather';
  };
  attributes: {
    blocks: Schema.Attribute.Component<'blocks.stack-option', true>;
    illustration: Schema.Attribute.Media<'images'>;
    statement: Schema.Attribute.String;
  };
}

export interface SlideStory extends Struct.ComponentSchema {
  collectionName: 'components_slide_stories';
  info: {
    displayName: 'Story';
  };
  attributes: {
    scenes: Schema.Attribute.Component<'types.story-scene', true>;
  };
}

export interface SlideTrueFalse extends Struct.ComponentSchema {
  collectionName: 'components_slide_true_falses';
  info: {
    displayName: 'True False';
    icon: 'file';
  };
  attributes: {
    exercises: Schema.Attribute.Component<'blocks.tf-option', true>;
  };
}

export interface TypesEmotionType extends Struct.ComponentSchema {
  collectionName: 'components_types_emotion_types';
  info: {
    displayName: 'Emotion Type';
  };
  attributes: {
    emotionType: Schema.Attribute.Enumeration<
      ['sad', 'happy', 'joy', 'sorrow', 'angry', 'frustrated']
    >;
  };
}

export interface TypesStoryScene extends Struct.ComponentSchema {
  collectionName: 'components_types_story_scenes';
  info: {
    displayName: 'Story Scene';
    icon: 'earth';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    character: Schema.Attribute.Relation<
      'oneToOne',
      'api::character.character'
    >;
    dialogue: Schema.Attribute.RichText;
    emotion: Schema.Attribute.Component<'types.emotion-type', false>;
    orientation: Schema.Attribute.Enumeration<
      ['Top Left', 'Top Right', 'Bottom Left', 'Bottom Right']
    > &
      Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.emotion': BlocksEmotion;
      'blocks.match-option': BlocksMatchOption;
      'blocks.option': BlocksOption;
      'blocks.stack-option': BlocksStackOption;
      'blocks.tf-option': BlocksTfOption;
      'slide.analogy': SlideAnalogy;
      'slide.diagram': SlideDiagram;
      'slide.fun-fact': SlideFunFact;
      'slide.heading': SlideHeading;
      'slide.matching': SlideMatching;
      'slide.mcq': SlideMcq;
      'slide.point-to-ponder': SlidePointToPonder;
      'slide.simulation': SlideSimulation;
      'slide.slice': SlideSlice;
      'slide.stack': SlideStack;
      'slide.story': SlideStory;
      'slide.true-false': SlideTrueFalse;
      'types.emotion-type': TypesEmotionType;
      'types.story-scene': TypesStoryScene;
    }
  }
}
