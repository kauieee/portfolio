export const navItems = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "The intersection of AI, ethics, and human-centered design is where I love to explore and create.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/ai-duo.webp",
      spareImg: "",
    },
    {
      id: 2,
      title: "Passionate about developing AI solutions that tackle global challenges.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      // title: "My Tech Stack",
      description: "My Digital DNA includes",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "My code is so clean, it squeaks when you compile it.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.webp",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building an application to ship to 1000 users",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.webp",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Tasty Trails",
      des: "A MERN Stack application that enhances community collaboration and minimizes food waste.",
      img: "/tasty-trails.webp",
      iconLists: ["/sass.svg", "/js.svg", "/ts.svg", "/re.svg", "/exp.svg", "/mongo.svg"],
      link: "https://github.com/kaushik-manivannan/tasty-trails",
    },
    {
      id: 2,
      title: "Hire & Seek",
      des: "A Spring Boot application that simplifies the job application process for both candidates and employers.",
      img: "/hire-and-seek.webp",
      iconLists: ["/java.svg", "/thymeleaf.svg", "/spring-boot.svg", "hibernate.svg", "mysql.svg"],
      link: "https://github.com/kaushik-manivannan/hire-and-seek",
    },
    {
      id: 3,
      title: "Smart Parking Management System",
      des: "Comprehensive Oracle SQL based database-driven solution that addresses urban parking challenges.",
      img: "/parking.webp",
      iconLists: ["/oracle.svg", "/sql-dev.svg"],
      link: "https://github.com/kaushik-manivannan/Smart-Parking-Management-System",
    },
    {
      id: 4,
      title: "Pathfinding Visualizer",
      des: "An interactive tool that showcases various pathfinding algorithms in action.",
      img: "/pathfinding.webp",
      iconLists: ["/html.svg", "/css.svg", "/js.svg"],
      link: "https://github.com/kaushik-manivannan/pathfinding-visualizer",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/kaushik-manivannan"
    },
    {
      id: 2,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/kaushik-manivannan/"
    },
    {
      id: 3,
      img: "/leetcode.svg",
      link: "https://leetcode.com/u/kaushik_manivannan/"
    },
  ];

  export const leftLists = [
    "React",
    "Typescript",
    "Next.js"
  ]

  export const rightLists = [
    "Java",
    "Spring Boot",
    "AWS"
  ]

  export const flipWords = [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python"
  ]

  export const experiences = [
    {
      title: "Master of Science in Software Engineering Systems",
      company_name: "Northeastern University",
      icon: "northeastern.webp",
      iconBg: "#fff",
      date: "Sep 2023 - May 2025",
      points: [
        "CGPA: 3.84",
        "Relevant Coursework: Object Oriented Design, Web Design and User Experience Engineering, Data Management and Database Design, Enterprise Software Design, Program Structures and Algorithms"
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Tata Consultancy Services",
      icon: "tcs.webp",
      iconBg: "#fff",
      date: "Aug 2021 - Feb 2023",
      points: [
        "Spearheaded the front-end development of a Single Page Application (SPA) using Angular, revolutionizing the customer verification process for an insurance firm by replacing their traditional call center process with a streamlined digital system",
        "Streamlined user verification process, slashing average confirmation times from 10+ minutes to just 3 minutes (70% faster) through digital self-service workflows, handling 2,000+ verification requests per day",
        "Integrated Tensorflow-powered AI facial detection and MediaRecorder Web API for seamless real-time video capture, achieving a 98% accuracy rate in user verification",
        "Engineered responsive user interfaces supporting seamless usage across 6 device categories while achieving 97% accessibility compliance with WCAG 2.1 standards, enabling support for disability needs",
        "Refactored critical sections of Java code to leverage multithreading, resulting in a 40% improvement in CPU utilization efficiency and a 50% reduction in processing times for concurrent user requests",
        "Orchestrated the development of 5 junior developers by promoting Agile development methodologies, pair programming and personalized code review sessions within the team, speeding up project delivery by 30% and minimizing bug reports by 40%"
      ],
    }
  ];