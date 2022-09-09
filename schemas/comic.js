import {MdLocalMovies as icon} from 'react-icons/md'

export default {
  name: 'comic',
  title: 'Comic',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'background',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'original',
      title: 'Original',
      type: 'boolean',
    },
    {
      name: 'canvas',
      title: 'Canvas',
      type: 'boolean',
    },
    {
      name: 'trending',
      title: 'Trending',
      type: 'boolean',
    },
    {
      name: 'mostwatched',
      title: 'Most Watched',
      type: 'boolean',
    },
    {
      name: 'new',
      title: 'New',
      type: 'boolean',
    },
    {
      name: 'recommended',
      title: 'Recommended',
      type: 'boolean',
    },
    {
      name: 'completed',
      title: 'Completed',
      type: 'boolean',
    },
    {
      name: 'rate',
      title: 'Rate',
      type: 'number',
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'كوميك', value: 'كوميك'},
          {title: 'مانهوا', value: 'مانهوا'},
        ]
      }
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'مستمر', value: 'مستمر'},
          {title: 'مكتمل', value: 'مكتمل'},
        ]
      }
    },
    {
      name: 'views',
      title: 'Views',
      type: 'number',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'string',
      options: {
        list: [
          {title: 'رومانسية', value: 'رومانسية' },
          {title: 'فانتازيا', value: 'فانتازيا'},
          {title: 'اكشن', value: 'اكشن'},
          {title: 'دراما', value: 'دراما'},
          {title: 'كوميديا', value: 'كوميديا' },
          {title: 'شريحة من الحياة', value: 'شريحة'},
          {title: 'خيال علمي', value: 'خيال'},
          {title: 'اثارة', value: 'اثارة' },
          {title: 'غموض', value: 'غموض'},
          {title: 'خارق', value: 'خارق'},
          {title: 'رياضة', value: 'رياضة'},
          {title: 'تاريخي', value: 'تاريخي'},
          {title: 'رعب', value: 'رعب'},
          {title: 'حميمي', value: 'حميمي'},
          {title: 'ثقافي', value: 'ثقافي'},
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [{type: 'chapter'}],
    }
  ],
  preview: {
    select: {
      title: 'title',
       media: 'poster',
    },
  },
}
