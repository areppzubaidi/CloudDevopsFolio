import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Nur Ariff",
  title: "Hi all, I'm Ariff 👋",
  subTitle: emoji(
    "A passionate System Administrator & Cloud Engineer 💻☁️ who loves automating tasks, optimizing systems, and building secure infrastructure. Experienced in managing Windows Server environments, deploying Docker apps, and tinkering with home labs."
  ),
  resumeLink: "https://your-resume-link.com", // Replace with your real resume
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/nurariff",
  linkedin: "https://www.linkedin.com/in/nurariff/",
  gmail: "nurariff@example.com",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "SYSADMIN & CLOUD ENTHUSIAST WHO LOVES TO LEARN, AUTOMATE AND BUILD",
  skills: [
    emoji("⚡ Deploy and maintain secure Windows & Linux servers"),
    emoji("⚡ Automate deployments using PowerShell, Ansible & Bash"),
    emoji("⚡ Build & manage Docker containers and self-hosted apps"),
    emoji("⚡ Setup home labs for GPO, pfSense, Kubernetes and more")
  ],
  softwareSkills: [
    { skillName: "Windows Server", fontAwesomeClassname: "fas fa-server" },
    { skillName: "Linux", fontAwesomeClassname: "fab fa-linux" },
    { skillName: "PowerShell", fontAwesomeClassname: "fas fa-terminal" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
    { skillName: "Kubernetes", fontAwesomeClassname: "fas fa-network-wired" },
    { skillName: "Terraform", fontAwesomeClassname: "fas fa-code" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git" },
    { skillName: "Azure", fontAwesomeClassname: "fab fa-microsoft" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universiti Pendidikan Sultan Idris (UPSI)",
      logo: require("./assets/images/upsiLogo.png"), // Add your logo to the assets
      subHeader: "Bachelor's Degree in Teaching English as a Second Language (TESL)",
      duration: "2014 - 2018",
      desc: "Graduated with a strong interest in education and later pivoted into IT, where I found my true passion in systems and infrastructure.",
      descBullets: [
        "Led various student activities and tech-enabled learning projects"
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Sysadmin & Infrastructure", progressPercentage: "90%" },
    { Stack: "DevOps & Automation", progressPercentage: "70%" },
    { Stack: "Cloud & Networking", progressPercentage: "60%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "System Administrator (L2 Support)",
      company: "ZurichGlobal",
      companylogo: require("./assets/images/zurichLogo.png"),
      date: "2022 – Present",
      desc: "Managing and supporting a multi-country environment with focus on AD, Intune, DNS, and file servers. Also involved in migration projects from TFS to ServiceNow and from RDS to AVD.",
      descBullets: [
        "Built home server lab for testing GPO, Docker, pfSense and Kubernetes",
        "Created automation scripts to speed up onboarding process"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: true
};

const bigProjects = {
  title: "Projects",
  subtitle: "SOME FUN LABS & TOOLS I BUILT IN MY HOMELAB",
  projects: [
    {
      image: require("./assets/images/pfsenseLogo.png"),
      projectName: "pfSense Lab Setup",
      projectDesc: "Virtualized pfSense firewall for lab environment with WAN/LAN rules",
      footerLink: [
        { name: "View Project", url: "https://github.com/nurariff/pfsense-lab" }
      ]
    },
    {
      image: require("./assets/images/dockerLogo.webp"),
      projectName: "Dockerized Media Server",
      projectDesc: "Used Plex, Pi-hole, MiniDLNA, and more via Docker on Ubuntu server",
      footerLink: [
        { name: "GitHub Repo", url: "https://github.com/nurariff/homelab-docker" }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements & Certifications 🏅"),
  subtitle: "Certifications and milestones from my career journey",
  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Administrator Associate",
      subtitle: "Passed in 2024. Gained hands-on experience with Azure services.",
      image: require("./assets/images/azureLogo.png"),
      imageAlt: "Azure Logo",
      footerLink: [
        { name: "View Certification", url: "https://www.credly.com/badges/your-badge" }
      ]
    },
    {
      title: "Docker Essentials",
      subtitle: "Completed Docker training and built personal projects with containers.",
      image: require("./assets/images/dockerLogo.webp"),
      imageAlt: "Docker Logo",
      footerLink: []
    }
  ],
  display: true
};

const blogSection = {
  title: "Tech Writings",
  subtitle: "Sharing my journey into Sysadmin & Cloud Engineering",
  display: false // Turn true once you have blog links to share
};

export {
  splashScreen,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection
};
