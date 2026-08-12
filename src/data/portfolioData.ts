/**
 * PORTFOLIO DATA CONFIGURATION - ANAS MAHMUD
 * -------------------------------------------------------------------
 * All portfolio information is stored in this file for easy customization.
 */

export interface SkillItem {
  name: string;
  category: 'Video & Editing' | 'Graphic Design' | 'Digital Marketing';
  level: 'Beginner' | 'Learning' | 'Developing';
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'Video Editing' | 'Design' | 'Digital Marketing';
}

export interface LearningExperienceItem {
  id: string;
  title: string;
  institute: string;
  location: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface PortfolioData {
  personal: {
    fullName: string;
    initials: string;
    headline: string;
    shortBio: string;
    aboutParagraph1: string;
    aboutParagraph2: string;
    location: string;
    status: string;
    course: string;
    institute: string;
    experienceLevel: string;
    profileImage: string;
    emailPlaceholder: string;
    social: {
      youtube?: string;
      facebook?: string;
      instagram?: string;
      linkedin?: string;
    };
  };
  skills: SkillItem[];
  services: ServiceItem[];
  servicesDisclaimer: string;
  learningExperience: LearningExperienceItem;
  learningAreas: string[];
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Anas Mahmud",
    initials: "AM",
    headline: "Video Editing Learner, Graphic Design Learner & Digital Marketing Learner",
    shortBio: "I am Anas Mahmud, an aspiring video editor and graphic designer from Dhaka, Bangladesh. Currently, I am learning video editing, graphic design, and digital marketing through the SBMC course at As-Sunnah Skill Development Institute.",
    aboutParagraph1: "I am Anas Mahmud, an aspiring video editor and graphic designer from Dhaka, Bangladesh. I am currently studying the SBMC — Small Business Management Course at As-Sunnah Skill Development Institute, where I am developing my knowledge of video editing, graphic design, and digital marketing.",
    aboutParagraph2: "I am passionate about creating visually engaging content and improving my creative and technical skills. As a beginner, I am continuously learning through practical assignments and creative exercises.",
    location: "Dhaka, Bangladesh",
    status: "Student & Creative Learner",
    course: "SBMC — Small Business Management Course",
    institute: "As-Sunnah Skill Development Institute",
    experienceLevel: "Beginner",
    profileImage: "https://i.postimg.cc/ygK4gGLg/photo.jpg",
    emailPlaceholder: "YOUR_EMAIL@example.com",
    social: {
      youtube: "#",
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  skills: [
    {
      name: "Adobe Premiere Pro",
      category: "Video & Editing",
      level: "Developing",
      description: "Basic video timeline editing, cutting, audio alignment, and transition adjustments."
    },
    {
      name: "Adobe Photoshop",
      category: "Graphic Design",
      level: "Developing",
      description: "Photo editing, layout composition, social media post assets, and thumbnail creation."
    },
    {
      name: "Adobe Illustrator",
      category: "Graphic Design",
      level: "Learning",
      description: "Vector graphics creation, basic logos, icons, and poster layout design."
    },
    {
      name: "Adobe After Effects",
      category: "Video & Editing",
      level: "Beginner",
      description: "Introductory motion graphics, keyframe animation, and simple title graphics."
    },
    {
      name: "Basic Digital Marketing",
      category: "Digital Marketing",
      level: "Learning",
      description: "Understanding online marketing fundamentals, content planning, and target audience basics."
    }
  ],

  services: [
    {
      id: "service-1",
      title: "YouTube Video Editing",
      description: "Basic editing support for YouTube videos, including cuts, transitions, audio arrangement, and visual improvements.",
      iconName: "Video",
      category: "Video Editing"
    },
    {
      id: "service-2",
      title: "Social Media Video Editing",
      description: "Short-form video editing for social media platforms, including reels, shorts, and promotional content.",
      iconName: "Film",
      category: "Video Editing"
    },
    {
      id: "service-3",
      title: "Poster Design",
      description: "Clean and creative poster designs for events, promotions, announcements, and social media.",
      iconName: "Image",
      category: "Design"
    },
    {
      id: "service-4",
      title: "Thumbnail Design",
      description: "Eye-catching thumbnail designs that help make video content more visually attractive.",
      iconName: "Layout",
      category: "Design"
    },
    {
      id: "service-5",
      title: "Social Media Post Design",
      description: "Basic social media graphics for announcements, promotions, branding, and content publishing.",
      iconName: "Share2",
      category: "Design"
    },
    {
      id: "service-7",
      title: "Basic Digital Marketing Support",
      description: "Basic support and learning-based assistance for digital marketing activities.",
      iconName: "TrendingUp",
      category: "Digital Marketing"
    }
  ],

  servicesDisclaimer: "Services are currently provided at a beginner and learning level while I continue developing my professional skills.",

  learningExperience: {
    id: "exp-learning-1",
    title: "Current Learning Experience",
    institute: "As-Sunnah Skill Development Institute",
    location: "Dhaka, Bangladesh",
    period: "Present (Ongoing)",
    description: "I am currently developing my skills through the SBMC — Small Business Management Course at As-Sunnah Skill Development Institute. My learning journey focuses on video editing, graphic design, motion graphics, and basic digital marketing.",
    highlights: [
      "Practical video editing exercises with Adobe Premiere Pro",
      "Graphic design assignments focusing on composition & layout",
      "Creating engaging social media graphics and short video clips",
      "Studying basic Meta marketing and audience positioning concepts",
      "Developing creative problem-solving and visual storytelling skills"
    ]
  },

  learningAreas: [
    "Practical video editing exercises",
    "Graphic design assignments",
    "Adobe Creative Cloud tools",
    "Social media content creation",
    "Basic Meta marketing concepts",
    "Creative problem-solving",
    "Visual communication"
  ]
};
