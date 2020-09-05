export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f53c4be080cf0094662f352',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-s66p2i8m',
                  apiId: 'a2915aaf-bc33-4bbc-8e54-8d87dd87120b'
                },
                {
                  buildHookId: '5f53c4be9282d622f3b07f5e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u6jd3epf',
                  apiId: 'f3426aab-a96c-4a9c-8555-dd7400dbe2e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Lxrd17/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u6jd3epf.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
