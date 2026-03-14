// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Dana Hagist - Data Scientist &amp; Economist",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-book-review-discipline-is-destiny-by-ryan-holiday",
        
          title: "Book Review - Discipline is Destiny by Ryan Holiday",
        
        description: "Lessons from Ryan Holiday&#39;s Stoic philosophy on self-control, daily progress, and avoiding excess.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/discipline-destiny-review/";
          
        },
      },{id: "post-course-review-cs-50-introduction-to-computer-science",
        
          title: "Course Review - CS 50: Introduction to Computer Science",
        
        description: "A week-by-week review of Harvard&#39;s CS50 covering algorithms, C, Python, SQL, and web development.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/cs50-review/";
          
        },
      },{id: "post-2023-week-1-progress-report-how-39-s-it-going",
        
          title: "2023 Week 1 Progress Report - How&#39;s it Going?",
        
        description: "A first-week check-in on my 2023 goals covering what is working, what is not, and adjustments ahead.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/progress-week-1/";
          
        },
      },{id: "post-2023-goals-looking-ahead",
        
          title: "2023 Goals - Looking Ahead",
        
        description: "My ambitious daily and weekly habit goals for 2023 focused on health, community, and creativity.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/goals-2023/";
          
        },
      },{id: "post-2022-year-in-review",
        
          title: "2022 Year in Review",
        
        description: "A look back at my 2022 daily habits, including completing an Ironman and losing over 10 pounds.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/year-review-2022/";
          
        },
      },{id: "post-book-review-extreme-ownership-by-jocko-willink-and-leif-babin",
        
          title: "Book Review - Extreme Ownership by Jocko Willink and Leif Babin",
        
        description: "Key leadership lessons from Extreme Ownership on accountability, prioritization, and simplicity.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/extreme-ownership-review/";
          
        },
      },{id: "post-my-sober-year-in-2020",
        
          title: "My Sober Year in 2020",
        
        description: "Six daily habits I built during a sober year that led to one of the most productive years of my life.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/sober-2021/";
          
        },
      },{id: "post-welcome-to-dana-data-life",
        
          title: "Welcome to Dana Data Life",
        
        description: "Introducing Dana Data Life, a blog covering data, personal growth, and life lessons.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/first-post/";
          
        },
      },{id: "post-course-review-dataquest-data-scientist-in-python",
        
          title: "Course Review - Dataquest, Data Scientist in Python",
        
        description: "An in-depth review of the Dataquest Data Scientist in Python course sequence and its strengths and weaknesses.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/dataquest-ds-python-review/";
          
        },
      },{id: "post-starting-my-journey-towards-data-science-in-2018",
        
          title: "Starting My Journey towards Data Science in 2018",
        
        description: "How I transitioned from finance to data science by building a self-directed learning curriculum.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/starting-ds-journey/";
          
        },
      },{id: "post-bridging-the-gap-between-information-technology-novice-and-confident-contributor",
        
          title: "Bridging the Gap Between Information Technology Novice and Confident Contributor",
        
        description: "A review of courses that helped me go from IT novice to confident contributor in analytics and BI.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2018/bridging-gap/";
          
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%68%61%67%69%73%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/danahagist", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/danahagist", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
