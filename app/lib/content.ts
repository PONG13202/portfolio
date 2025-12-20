export const profile = {
  name: "Chanathip Puapanwong",
  // role: "Junior Web Developer",
  location: "Hua Hin, Thailand",
  email: "chanathip.ppw@gmail.com",

  education: [
    {
      school: "Rajamangala University of Technology Rattanakosin",
      campus: "Wang Klai Kangwon Campus",
      program: "Bachelor of Technology in Information Technology and Digital Innovation",
      department: "Faculty of Industry and Technology",
      year: "2024 - 2025",
      gpa: "3.89",
      logo: "/edu/2.png",        // ← ใส่รูปโลโก้ที่ public/edu/rmutr.png
    },
    {
      school: "Wang Klai Kangwon Industrial and Community Education College",
      campus: "",
      program: "High Vocational Certificate",
      department: "Digital Business Technology",
      year: "2022 - 2023",
      gpa: "3.98",
      logo: "/edu/1.jpg",         // ← โลโก้วิทยาลัย
    },
  ],

  links: {
    github: "https://github.com/PONG13202",
    Facebook: "https://www.facebook.com/chanathip.puapanwong?locale=th_TH",
    // Telephone: "097-235-1715",
    resume: "/Resume-Chanathip.pdf",
  },
};



export const experience = [
  {
    title: "IT Support & Programmer Intern",
    company: "Hua Hin Hospital",
    period: "2023",
    image: "/HH.png",
    imageAlt: "Internship photo",
    description:
      "Worked as an IT Support & Programmer Intern at Hua Hin Hospital. Assisted with system maintenance, troubleshooting, and developing internal tools.",

    gallery: ["/1.jpg", "/2.jpg", "/4.jpg", "/5.jpg"],
    bullets: ["IT Support", "Programmer"],
  },
  {
    title: "Administrative Assistant",
    company: "Thailand Post, Hua Hin",
    period: "2021",
    image: "/th.jpg",
    imageAlt: "Data entry work photo",
    description:
      "Worked as an administrative data entry assistant. Entered and verified shipment/customer information, managed document records, and supported daily office operations.",
    gallery: ["/a3.jpg", "/a2.jpg", "/a4.jpg",],
    bullets: [
      "Data Entry",
      "Document Management",
      "Office Support",
    ],
  },
];

export const projects = [
  {
    name: "Reservation & Food Ordering Web Application",
    description: "Real-time table booking + menu ordering for a hotel restaurant.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Express.js", "Prisma", "Socket.IO", "PostgreSQL", "OAuth 2.0"],
    href: "https://sailom-fe.vercel.app",
    images: [
      "/Certi/c (1).jpg",
      "/EndPro/1 (1).png",
      "/EndPro/1 (4).png",
      "/EndPro/1 (8).png",
      "/EndPro/1 (2).png",
      "/EndPro/1 (5).png",
      "/EndPro/1 (3).png",
      "/EndPro/1 (6).png",
      "/EndPro/1 (7).png",
    ],
    imageAlt: "Reservation & Food Ordering preview",
  },
{
  name: "Public Relations Web Application",
  description:
    "A web application for promoting the seasonal Pha Nam Yod waterfall, including news, reviews, maps, and an admin dashboard.",
  tags: ["Javascript","React.js", "Express.js", "Bootstrap 5", "Prisma", "PostgreSQL", "OAuth 2.0"],
  href: "https://github.com/stars/PONG13202/lists/public-relations-web-app",
  images: [
    "/Certi/AUCC.png",
    "/MiniPro/1 (1).png",
    "/MiniPro/1 (6).png",
    "/MiniPro/1 (3).png",
    "/MiniPro/1 (4).png",
    "/MiniPro/1 (5).png",
    // "/MiniPro/1 (2).png",
  ],
  imageAlt: "Pha Nam Yod Website preview"
},
{
  name: "OTOP Web Application",
  description:
    "A promotional web application featuring Ayutthaya’s OTOP products, local traditions, cultural festivals, and major tourist attractions, complete with an admin dashboard for content management.",
  tags: ["PHP", "Bootstrap 5", "MySQL"],
  href: "https://github.com/stars/PONG13202/lists/otop",
  images: [
    "/Dynamic/1.png",
    "/Dynamic/6.png",
    "/Dynamic/3.png",
    "/Dynamic/2.png",
    "/Dynamic/4.png",
    "/Dynamic/5.png",
    
  ],
  imageAlt: "Ayutthaya OTOP and Tourism Website preview"
}
];
export const personalProjects = [
  {
  name: "Maintenance Request System",
  description:
    "A full-stack maintenance reporting system built with TypeScript, Bun, Next.js, PostgreSQL, and Prisma. Includes user role management, repair ticket creation, status tracking, and an admin dashboard.",
  tags: ["TypeScript", "Bun", "Next.js", "Tailwind", "PostgreSQL", "Prisma"],
  href: "https://github.com/stars/PONG13202/lists/maintenance-request-system",
  images: [
    "/Rep/1.png",
    "/Rep/2.png",
    "/Rep/3.png",
    "/Rep/4.png",
  ],
  imageAlt: "Maintenance Request System preview",
}
,
{
  name: "Dormitory Management System",
  description:
    "A full-featured dormitory management system built with Laravel, Livewire, and Bootstrap 5. Includes room management, tenant records, billing, payment tracking, maintenance requests, and an admin dashboard.",
  tags: ["Laravel", "Livewire", "PHP", "Bootstrap 5", "MySQL"],
  href: "https://github.com/stars/PONG13202/lists/dormitory-management-system",
  images: [
    "/Apt/1.png",
    "/Apt/2.png",
    "/Apt/4.png",
    "/Apt/3.png",
    "/Apt/5.png",
    "/Apt/6.png",
  ],
  imageAlt: "Dormitory Management System preview",
},
{
  name: "Mobile Shop Management System",
  description:
    "A full-stack mobile shop management system built with the MERN stack. Features product inventory management, sales handling, and admin dashboard.",
  tags: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Next.js", "Tailwind"],
  href: "https://github.com/stars/PONG13202/lists/mobile-shop-management-system",
  images: [
    "/Mob/1.png",
    "/Mob/2.png",
    "/Mob/3.png",
  ],
  imageAlt: "Mobile Shop MERN System preview",
},
];

export const certificates = [
  {
    name: "RMUTR × SusLab International Conference 2025",
    description: "Participation in The 9th RMUTR Conference & The 4th RICE & Sus-LaB 6 International Conference (2025)",
    href: "https://rmutrcon.rmutr.ac.th/2025/th/",
    images: ["/Certi/c (1).jpg",
      "/Certi/c (3).jpg",
      "/Certi/c (5).jpg",
      "/Certi/c (8).jpg",
    ],
    imageAlt: "RMUTR SusLab 2025 Conference Poster"
  },
  {
    name: "AUCC 2025 – Research Presentation",
    description: "Certificate of Good-Level Research Presentation at AUCC 2025",
    href: "https://www.aucc-conf.org/",
    images: ["/Certi/AUCC.png",
      "/Certi/AUCC-2.jpg",
      "/Certi/AUCC-3.jpg",
      "/Certi/AUCC-1.jpg",
    ],
    imageAlt: "AUCC 2025 Research Presentation Certificate"
  }
];

export const skills = [
  "Node.js",
  "TypeScript",
  "Javascript",
  "BUN",
  "PHP",
  "SQL",
  "Next.js",
  "React.js",
  "Elysia",
  "Express",
  "REST API",
  "HTML / CSS",
  "Tailwind CSS",
  "Bootstrap 5",
  "PostgreSQL",
  "MySQL",
  "Git & GitHub",
  "Docker",
  "Postman",
  "Basic VPS (Linux)",
  "Vercel"
];
