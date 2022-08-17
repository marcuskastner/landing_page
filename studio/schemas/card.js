export default {
  name: 'card',
  type: 'document',
  title: 'Card',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      title: 'Tech',
      name: 'tech',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      name: 'github',
      title: 'Github',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
  ],
};
