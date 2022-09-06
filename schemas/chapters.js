export default {
    title: 'Chapters',
    name: 'chapters',
    type: 'object',
    fields: [
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
      },
      {
        name: 'chapters',
        title: 'Chapters',
        type: 'array',
        of: [{type: 'Chapter'}],
      },
    ],
  }
  