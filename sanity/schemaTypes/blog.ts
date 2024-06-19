import { title } from "process";
import { blob } from "stream/consumers";

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      }
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image'
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small description'
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        }
      ]
    }
  ]
}