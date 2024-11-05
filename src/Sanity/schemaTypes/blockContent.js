import {defineType, defineField, defineArrayMember} from 'sanity'

export const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'Heading 1', value: 'h1'},
        {title: 'Heading 2', value: 'h2'},
        {title: 'Heading 3', value: 'h3'},
        {title: 'Heading 4', value: 'h4'},
      ],
      marks: {
        decorators: [
          {title: 'Bold', value: 'strong'},
          {title: 'Italic', value: 'em'},
          {title: 'Underline', value: 'underline'},
        ],
        annotations: [
          // Annotation for adding CSS classes
          {
            name: 'class',
            type: 'object',
            title: 'CSS Class',
            fields: [
              {
                name: 'className',
                type: 'string',
                title: 'CSS Class Name',
                description: 'Füge eine CSS-Klasse hinzu',
              },
            ],
          },
          // Annotation for adding links
          {
            name: 'link',
            type: 'object',
            title: 'Link',
            fields: [
              {
                name: 'href',
                type: 'url',
                title: 'URL',
              },
              {
                name: 'blank',
                type: 'boolean',
                title: 'In neuem Tab öffnen',
                description: 'Öffnet diesen Link in einem neuen Tab',
              },
            ],
          },
        ],
      },
    },
    // Custom block for SVG icons via URL
    {
      type: 'object',
      name: 'svgIcon',
      title: 'SVG Icon',
      fields: [
        {
          name: 'url',
          title: 'SVG URL',
          type: 'url',
          description: 'URL des SVG-Icons',
        },
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Alternative Beschreibung für das Icon',
        },
        {
          name: 'class',
          title: 'CSS Class',
          type: 'string',
          description: 'CSS-Klasse für das SVG-Icon',
        },
      ],
      preview: {
        select: {
          title: 'url',
          subtitle: 'class',
        },
        prepare({title, subtitle}) {
          return {
            title: title || 'Kein Icon URL',
            subtitle: subtitle ? `Class: ${subtitle}` : 'Keine CSS-Klasse',
          }
        },
      },
    },
    // Custom block for direct insertion of SVG code
    {
      type: 'object',
      name: 'svgCode',
      title: 'SVG Code',
      fields: [
        {
          name: 'code',
          title: 'SVG Code',
          type: 'text',
          description: 'Füge den SVG-Code direkt ein',
        },
        {
          name: 'class',
          title: 'CSS Class',
          type: 'string',
          description: 'CSS-Klasse für das eingebettete SVG',
        },
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Beschreibung für das Bild für Barrierefreiheit und SEO',
        },
      ],
      preview: {
        select: {
          title: 'code',
          subtitle: 'class',
        },
        prepare({title, subtitle}) {
          return {
            title: title ? 'SVG Code' : 'Kein SVG Code',
            subtitle: subtitle ? `Class: ${subtitle}` : 'Keine CSS-Klasse',
          }
        },
      },
    },
    {
      type: 'image',
      name: 'imageWithClass',
      title: 'Image with CSS Class',
      options: {hotspot: true},
      accept: 'image/svg+xml',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative Beschreibung für das Bild',
        },
        {
          name: 'className',
          type: 'string',
          title: 'CSS Class',
        },
        {
          name: 'customStyles',
          type: 'string',
          title: 'Custom Styles',
          description: 'Füge individuelle CSS-Stile für dieses Bild hinzu (z.B. width, transform)',
        },
      ],
      preview: {
        select: {
          title: 'alt',
          media: 'asset',
        },
      },
    },
  ],
})
