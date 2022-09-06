export default {
    name: 'chapter',
    title: 'Chapter',
    type: 'object',
    fields: [
      {
        title: 'Number',
        name: 'number',
        type: 'string',
      },
      {
        title: 'Title',
        name: 'title',
        type: 'string',
      },
      {
        name: 'gallery',
        type: 'document',
        title: 'Gallery',
        fields: [
          {
            name: 'images',
            type: 'array', // supports drag'n'drop of multiple files
            options: {
              layout: 'grid'
            },
            of: [{
              type: 'image'
            }]
          }
        ]
    }
    ],
  }