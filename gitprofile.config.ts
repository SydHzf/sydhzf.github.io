// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'sydhzf', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: ['SydHzf/DataScience',
                     'SydHzf/SydHzf_portfolio',
                     'SydHzf/sydhzf.github.io',
                     'SydHzf/data-engineer-handbook',
                     'SydHzf/MicroProcessorP',
                      'SydHzf/Statistics',
                      'SydHzf/DSA',
                      'SydHzf/dapp-scaffold',
                      'SydHzf/Travel-Mate',
                      'SydHzf/AlgorithmAndDataStructureInJava',
                      'SydHzf/Python-Practice'], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['SydHzf/Airflow-Reddit-DPE', ' SydHzf/cdc-postgres','SydHzf/traveling-guider'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {},
  },
  seo: {
    title: 'Portfolio of Syed Huzaifa Ali',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'syed-huzaifa-ali-h532',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'huzaifa.ali532',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'huzaifa.ali532@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1tiPtTuOwBoqA8rjMI-AA9XHx1DTbHBus8RV9ECcmkB0/edit?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Shell Scripting', 'Python', 'SQL','Git',
    'Amazon Kinesis', 'Apache Kafka', 'Google Cloud PubSub',
    'Apache Airflow',
    'Apache Spark', 'Amazon Glue', 'Apache Beam', 'Google Cloud Dataflow',
    'Google Cloud Functions', 'Databricks', 'Docker',
    'Microsoft Power BI',
    'Amazon Bucket', 'ElasticSearch', 'Google Artifact Registry', 'Google Bucket', 'Google BigQuery', 'Redis', 'Postgres'
],
  experiences: [
    {
      company: 'StackWeavers',
      position: 'Data Engineer',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://www.stackweavers.com/',
    },
    {
      company: 'TechmaZone',
      position: 'Data Analyst',
      from: 'January 2022',
      to: 'July 2022',
      companyLink: 'https://techmazone.com/',
    },
  ],
  certifications: [
    {
      name: 'Applied Data Science with Machine Learning',
      body: '',
      year: 'January 2021',
      link: 'https://drive.google.com/file/d/1FTV5nQoF3c6avZIkmemj7unWjs3_0lzF/view?usp=drive_link',
    },
  ],
  educations: [
    {
      institution: 'University Of Karachi',
      degree: 'BSCS',
      from: '2020',
      to: '2024',
    },
    {
      institution: 'Govt. College For Men, Nazimabad',
      degree: 'Intermediate in Pre Engineering',
      from: '2017',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'About',
      conferenceName: 'Me',
      journalName: '',
      authors: '',
      link: '',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  //   {
  //     title: 'Publication Title',
  //     conferenceName: 'Conference Name',
  //     journalName: '',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'medium', // medium | dev
    username: 'huzaifa.ali532', // to hide blog section, keep it empty
    limit: 4, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'nord',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
