module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Documentation',
      link: {
        type: 'doc',
        id: 'v2/index',
      },
      items: [
        {
          type: 'link',
          label: 'Getting started',
          href: '/v2/getting-started',
          description: 'Setup and run the project locally',
        },
        {
          type: 'link',
          label: 'Working with SaaS Boilerplate',
          href: '/working-with-sb',
        },
        {
          type: 'link',
          label: 'Amazon Web Services',
          href: '/v2/aws',
        },
        {
          type: 'link',
          label: 'Tutorials',
          href: '/tutorials',
        },
        {
          type: 'link',
          label: 'API Reference',
          href: '/v2/api-reference',
        },
        {
          type: 'link',
          label: 'What is SaaS Boilerplate',
          href: '/introduction',
        },
        {
          type: 'link',
          label: 'Old docs (v1)',
          href: '/v1',
        },
      ],
    },
  ],
  apiReferenceSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'v2/api-reference/index',
      },
      items: [
        {
          type: 'category',
          label: 'back-end',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'v2/api-reference/backend/index',
          },
          items: [
            'v2/api-reference/backend/commands',
            'v2/api-reference/backend/graphql-mutations',
          ],
        },
        {
          type: 'category',
          label: 'webapp',
          link: {
            type: 'doc',
            id: 'v2/api-reference/webapp/index',
          },
          collapsed: false,
          items: [
            'v2/api-reference/webapp/commands',
            'v2/api-reference/webapp/utils',
            'v2/api-reference/webapp/components',
          ],
        },
        {
          type: 'category',
          label: 'webapp-core',
          link: {
            type: 'doc',
            id: 'v2/api-reference/webapp-core/index',
          },
          collapsed: false,
          items: [
            'v2/api-reference/webapp-core/utils',
            'v2/api-reference/webapp-core/components',
            'v2/api-reference/webapp-core/hooks',
          ],
        },
        {
          type: 'category',
          label: 'webapp-api-client',
          link: {
            type: 'doc',
            id: 'v2/api-reference/webapp-api-client/index',
          },
          collapsed: false,
          items: [
            'v2/api-reference/webapp-api-client/commands',
            'v2/api-reference/webapp-api-client/hooks',
          ],
        },
        {
          type: 'category',
          label: 'webapp-emails',
          link: {
            type: 'doc',
            id: 'v2/api-reference/webapp-emails/index',
          },
          collapsed: false,
          items: ['v2/api-reference/webapp-emails/commands'],
        },
        {
          type: 'category',
          label: 'tools',
          link: {
            type: 'doc',
            id: 'v2/api-reference/tools/index',
          },
          collapsed: false,
          items: ['v2/api-reference/tools/commands'],
        },
        'v2/api-reference/env',
        'v2/api-reference/env-files',
      ],
    },
  ],
  gettingStartedSidebar: [
    {
      type: 'category',
      label: 'Getting started',

      link: {
        type: 'doc',
        id: 'v2/getting-started/index',
      },
      items: [
        'v2/getting-started/run-project/run-new-project',
        'v2/getting-started/run-project/run-existing-project',
        {
          type: 'link',
          label: 'Tutorials',
          href: '/tutorials',
        },
      ],
    },
  ],
  awsSidebar: [
    {
      type: 'category',
      label: 'AWS',
      link: {
        type: 'doc',
        id: 'v2/aws/index',
      },
      items: [
        {
          type: 'category',
          label: 'Deploy to AWS',
          link: {
            type: 'doc',
            id: 'v2/aws/deploy-to-aws/index',
          },
          items: [
            'v2/aws/deploy-to-aws/create-env-stage-in-repo',
            'v2/aws/deploy-to-aws/configure-aws-credentials',
            'v2/aws/deploy-to-aws/configure-hosted-zone',
            'v2/aws/deploy-to-aws/create-runtime-env-vars',
            'v2/aws/deploy-to-aws/run-deployment-commands',
          ],
        },
        {
          type: 'category',
          label: 'Continuous integration',
          link: {
            type: 'doc',
            id: 'v2/aws/cicd/index',
          },
          items: [
            'v2/aws/cicd/trigger-cicd-manually',
            'v2/aws/cicd/auto-deploy',
            'v2/aws/cicd/configure-cicd-notifications',
            'v2/aws/cicd/setup-docker-hub',
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'doc',
            id: 'v2/aws/guides/index',
          },
          items: ['v2/aws/guides/aws-exec'],
        },
        {
          type: 'category',
          label: 'Architecture',
          link: {
            type: 'doc',
            id: 'v2/aws/architecture/index',
          },
          items: [
            'v2/aws/architecture/system-architecture',
            'v2/aws/architecture/cicd-architecture',
          ],
        },
      ],
    },
  ],
  tutorialsSidebar: [
    {
      type: 'category',
      label: 'Tutorials',

      link: {
        type: 'generated-index',
        title: 'Tutorials',
        description: 'TODO: >Tutorials description<',
        slug: '/tutorials',
      },
      items: [
        'v2/tutorials/deploy-to-aws',
        'v2/tutorials/crud',
        'v2/tutorials/deploy-to-production',
      ],
    },
  ],
  introductionSidebar: [
    {
      type: 'category',
      label: 'What is SaaS Boilerplate?',

      link: {
        type: 'generated-index',
        title: 'What is SaaS Boilerplate?',
        description: 'TODO: >What is SaaS Boilerplate? description<',
        slug: '/introduction',
      },
      items: [
        'v2/introduction/the-problem',
        'v2/introduction/architecture',
        'v2/introduction/stack-description',
        {
          type: 'category',
          label: 'Features',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'v2/introduction/features/index',
          },
          items: [
            'v2/introduction/features/auth',
            'v2/introduction/features/emails',
            'v2/introduction/features/notifications',
            'v2/introduction/features/openai',
            'v2/introduction/features/payments',
            'v2/introduction/features/iac',
            'v2/introduction/features/cicd',
            'v2/introduction/features/cms',
            'v2/introduction/features/admin',
            'v2/introduction/features/e2e',
            'v2/introduction/features/graphql',
            'v2/introduction/features/assets',
            'v2/introduction/features/workers',
            'v2/introduction/features/crud',
            'v2/introduction/features/dev-tools',
          ],
        },
        {
          type: 'category',
          label: 'Coding standards',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'v2/introduction/coding-standards/index',
          },
          items: [
            {
              type: 'category',
              label: 'Formatters',
              collapsed: false,
              link: {
                type: 'doc',
                id: 'v2/introduction/coding-standards/formatters/index',
              },
              items: [
                'v2/introduction/coding-standards/formatters/black',
                'v2/introduction/coding-standards/formatters/prettier',
              ],
            },
            {
              type: 'category',
              label: 'Linters',
              collapsed: false,
              link: {
                type: 'doc',
                id: 'v2/introduction/coding-standards/linters/index',
              },
              items: [
                'v2/introduction/coding-standards/linters/ruff',
                'v2/introduction/coding-standards/linters/eslint',
              ],
            },
          ],
        },
        'v2/introduction/development',
      ],
    },
  ],
  workingWithSidebar: [
    {
      type: 'category',
      label: 'Working with SaaS Boilerplate',

      link: {
        type: 'generated-index',
        title: 'Working with SaaS Boilerplate',
        description: 'TODO: >description<',
        slug: '/working-with-sb',
      },
      items: [
        {
          type: 'category',
          label: 'Generic guides',
          link: {
            type: 'generated-index',
            title: 'Generic guides',
            description: 'TODO: >description<',
            slug: '/working-with-sb/guides',
          },
          collapsed: false,
          items: [
            {
              type: 'category',
              label: 'Web app',

              link: {
                type: 'generated-index',
                title: 'Web app generic guides',
                description: 'TODO: >description<',
                slug: '/working-with-sb/guides/web-app',
              },
              items: [
                {
                  type: 'doc',
                  id: 'v2/working-with-sb/guides/web-app/create-react-component',
                  label: 'Add React component',
                },
                {
                  type: 'doc',
                  id: 'v2/working-with-sb/guides/web-app/new-route',
                  label: 'Add route component',
                },
              ],
            },
            {
              type: 'category',
              label: 'Back-end',

              link: {
                type: 'generated-index',
                title: 'Back-end generic guides',
                description: 'TODO: >description<',
                slug: '/working-with-sb/guides/backend',
              },
              items: [
                {
                  type: 'doc',
                  id: 'v2/working-with-sb/guides/backend/backend-model',
                  label: 'Create new model',
                },
              ],
            },

            'v2/working-with-sb/guides/real-time-data',
          ],
        },
        {
          type: 'category',
          label: 'Project structure',

          link: {
            type: 'generated-index',
            title: 'Project structure',
            description: 'TODO: >description<',
            slug: '/working-with-sb/project-structure',
          },
          items: [
            'v2/working-with-sb/project-structure/create-web-lib',
            'v2/working-with-sb/project-structure/remove-web-lib',
            'v2/working-with-sb/project-structure/env-files',
            'v2/working-with-sb/project-structure/create-nx-command',
          ],
        },
        {
          type: 'category',
          label: 'Working with GraphQL',
          link: {
            type: 'generated-index',
            title: 'Working with GraphQL',
            description: 'TODO: >description<',
            slug: '/working-with-sb/graphql',
          },
          items: [
            {
              type: 'category',
              label: 'Conventions',

              link: {
                type: 'generated-index',
                title: 'Conventions',
                description: 'TODO: >description<',
                slug: '/working-with-sb/graphql/conventions',
              },
              items: [
                'v2/working-with-sb/graphql/conventions/nodes-connections',
                'v2/working-with-sb/graphql/conventions/paging',
                'v2/working-with-sb/graphql/conventions/errors-format',
              ],
            },
            {
              type: 'category',
              label: 'Web app',

              link: {
                type: 'generated-index',
                title: 'Web app',
                description: 'TODO: >description<',
                slug: '/working-with-sb/graphql/web-app',
              },
              items: [
                {
                  type: 'doc',
                  id: 'v2/working-with-sb/graphql/web-app/component-with-query',
                  label: 'Fetch data from back-end',
                },
                {
                  type: 'doc',
                  id: 'v2/working-with-sb/graphql/web-app/form-with-mutation',
                  label: 'Form component with mutation',
                },
                'v2/working-with-sb/graphql/web-app/update-schema',
                'v2/working-with-sb/graphql/web-app/use-fragments',
                'v2/working-with-sb/graphql/web-app/naming-conventions',
                'v2/working-with-sb/graphql/web-app/use-api-form',
                'v2/working-with-sb/graphql/web-app/subscriptions',
              ],
            },
            {
              type: 'category',
              label: 'Backend',

              link: {
                type: 'generated-index',
                title: 'Web app',
                description: 'TODO: >description<',
                slug: '/working-with-sb/graphql/backend',
              },
              items: [
                {
                  type: 'doc',
                  id: 'v2/working-with-sb/graphql/backend/adding-new-mutation',
                  label: 'Add a new mutation',
                },
                {
                  type: 'doc',
                  id: 'v2/working-with-sb/graphql/backend/working-with-serializers',
                  label: 'Working with serializers',
                },
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'In-app notification module',
          link: {
            type: 'doc',
            id: 'v2/working-with-sb/notifications/index',
          },
          items: ['v2/working-with-sb/notifications/create-notification'],
        },
        {
          type: 'category',
          label: 'Assets management',

          link: {
            type: 'generated-index',
            title: 'Assets management',
            description: 'TODO: >description<',
            slug: '/working-with-sb/asset-management',
          },
          items: [
            'v2/working-with-sb/asset-management/file-upload',
            'v2/working-with-sb/asset-management/create-signed-url',
          ],
        },
        {
          type: 'category',
          label: 'User module / Authentication and authorization',
          link: {
            type: 'doc',
            id: 'v2/working-with-sb/users/index',
          },
          items: [
            'v2/working-with-sb/users/create-profile-field',
            'v2/working-with-sb/users/create-oauth-method',
            'v2/working-with-sb/users/admin-page',
            'v2/working-with-sb/users/create-role',
          ],
        },
        {
          type: 'category',
          label: 'Payments (Stripe integration)',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'v2/working-with-sb/payments/index',
          },
          items: [
            'v2/working-with-sb/payments/one-time-payment-form',
            'v2/working-with-sb/payments/subscription-access',
            'v2/working-with-sb/payments/create-subscription-plan',
          ],
        },
        {
          type: 'category',
          label: 'Contentful',

          link: {
            type: 'generated-index',
            title: 'Contentful',
            description: 'TODO: >description<',
            slug: '/working-with-sb/contentful',
          },
          items: [
            'v2/working-with-sb/contentful/demo-item-model',
            'v2/working-with-sb/contentful/sync-data',
          ],
        },
        {
          type: 'category',
          label: 'Writing tests',

          link: {
            type: 'generated-index',
            title: 'Writing tests',
            description: 'TODO: >description<',
            slug: '/working-with-sb/tests',
          },
          items: [
            'v2/working-with-sb/tests/webapp',
            'v2/working-with-sb/tests/backend',
            'v2/working-with-sb/tests/e2e',
          ],
        },
        {
          type: 'category',
          label: 'Emails',

          link: {
            type: 'generated-index',
            title: 'Emails',
            description: 'TODO: >description<',
            slug: '/working-with-sb/emails',
          },
          items: [
            'v2/working-with-sb/emails/build-emails',
            'v2/working-with-sb/emails/create-email-template',
            'v2/working-with-sb/emails/send-email',
          ],
        },
        {
          type: 'category',
          label: 'Async workers',
          link: {
            type: 'generated-index',
            title: 'Async workers',
            slug: '/working-with-sb/async-workers',
          },
          items: [
            'v2/working-with-sb/async-workers/run-async-job',
            'v2/working-with-sb/async-workers/create-sls-package',
          ],
        },
        {
          type: 'category',
          label: 'Devtools',

          link: {
            type: 'generated-index',
            title: 'Devtools',
            description: 'TODO: >description<',
            slug: '/working-with-sb/dev-tools',
          },
          items: [
            'v2/working-with-sb/dev-tools/version-matrix',
            'v2/working-with-sb/dev-tools/mailcatcher',
            'v2/working-with-sb/dev-tools/sentry',
            'v2/working-with-sb/dev-tools/ssh-into-container',
            'v2/working-with-sb/dev-tools/plop',
          ],
        },
        {
          type: 'category',
          label: 'Configure IDE and editors',

          link: {
            type: 'generated-index',
            title: 'Configure IDE and editors',
            description: 'TODO: >description<',
            slug: '/working-with-sb/ide-editors',
          },
          items: [
            'v2/working-with-sb/ide-editors/configure-pycharm',
            'v2/working-with-sb/ide-editors/configure-vscode',
          ],
        },
      ],
    },
  ],
  v1Sidebar: [
    {
      type: 'category',
      label: 'Old docs - to (re)move',

      link: {
        type: 'generated-index',
        title: 'Getting started',
        description: 'Old docs',
        slug: '/v1/',
      },
      items: [
        {
          type: 'category',
          label: 'Getting started',

          link: {
            type: 'generated-index',
            title: 'Getting started',
            description:
              'Learn about the most important SaaS Boilerplate concepts!',
            slug: '/v1/index',
          },
          items: [
            'v1/getting-started/fresh-project-setup',
            'v1/getting-started/launch-existing-project',
          ],
        },
        {
          type: 'category',
          label: 'Architecture',
          items: ['v1/intro/architecture', 'v1/intro/cicd-architecture'],
        },
        {
          type: 'category',
          label: 'Setup AWS Infrastructure',
          items: [
            'v1/setup-aws/infrastructure-components',
            'v1/setup-aws/initial-setup',
            'v1/setup-aws/environment-stage',
            'v1/setup-aws/auto-deploy',
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          items: [
            'v1/guides/aws-exec',
            'v1/guides/git-flow',
            'v1/guides/aws-manual-deploy',
            'v1/guides/configure-cicd-slack-notifications',
            'v1/guides/sonar-cloud-integration',
          ],
        },
        {
          type: 'category',
          label: 'Features',
          items: [
            'v1/features/sentry',
            'v1/features/emails',
            'v1/features/notifications',
            {
              type: 'category',
              label: 'Payments',
              items: [
                'v1/features/payments/stripe-intro',
                {
                  type: 'category',
                  label: 'One time payment',
                  items: [
                    'v1/features/payments/one-time/create-payment-intent',
                    'v1/features/payments/one-time/complete-payment',
                  ],
                },
                {
                  type: 'category',
                  label: 'Subscriptions',
                  items: [
                    'v1/features/payments/subscriptions/intro',
                    'v1/features/payments/subscriptions/create-plan',
                    'v1/features/payments/subscriptions/free-trial',
                    'v1/features/payments/subscriptions/grace-period',
                  ],
                },
                'v1/features/payments/stripe-webhooks',
              ],
            },
            'v1/features/assets-management',
            'v1/features/crud-generator',
            'v1/features/django-rest-api',
            {
              type: 'category',
              label: 'SSO',
              items: [
                'v1/features/sso/general',
                'v1/features/sso/facebook',
                'v1/features/sso/google',
              ],
            },
            {
              type: 'category',
              label: 'CMS',
              items: [
                'v1/features/cms/contentful-migrations',
                'v1/features/cms/contentful-webapp',
                'v1/features/cms/contentful-backend',
              ],
            },
            {
              type: 'category',
              label: 'GraphQL',
              items: [
                'v1/features/graphql/subscriptions',
                'v1/features/graphql/relay',
              ],
            },
            {
              type: 'category',
              label: 'Async Workers',
              items: ['v1/features/async-workers/delete-state-machine'],
            },
            {
              type: 'category',
              label: 'Dev tools',
              items: [
                'v1/features/dev-tools/global-tools',
                'v1/features/dev-tools/status-dashboard',
                'v1/features/dev-tools/mailcatcher',
              ],
            },
            'v1/features/xray',
          ],
        },
        {
          type: 'category',
          label: 'Docusaurus',
          items: ['v1/docusaurus/style-guide', 'v1/docusaurus/example'],
        },
      ],
    },
  ],
};
