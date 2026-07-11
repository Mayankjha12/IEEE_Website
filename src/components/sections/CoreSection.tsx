"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const executiveCouncil = [
  {
    name: "Akshat Kacodia",
    role: "Vice Chairperson",
    imageUrl: "/team/akshat.jpg",
    linkedinUrl: "https://www.linkedin.com/in/akshat-kacodia-554450293/",
  },
  {
    name: "Sakshi Sahu",
    role: "Vice Chairperson",
    imageUrl: "/team/sakshi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/sakshi-sahu-ss",
  },

  {
    name: "Aditya Mishra",
    role: "Chairperson",
    imageUrl: "/team/aditya_mishra.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aditya-mishra-bb44ab2b9",
  },
  {
    name: "Diya Joshi",
    role: "Vice Chairperson",
    imageUrl: "/team/diya.jpg",
    linkedinUrl: "https://www.linkedin.com/in/diya-joshi19/",
  },
  {
    name: "Uday Goswami",
    role: "Vice Chairperson",
    imageUrl: "/team/uday.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/uday-goswami-91070b288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
];

const generalSecretaries = {
  title: "General Secretaries",
  members: [
    {
      name: "Aman Singh",
      role: "General Secretary",
      imageUrl: "/team/aman_singh.jpeg",
      linkedinUrl: "https://www.linkedin.com/in/aman-singh-a5b5b428b/",
    },
    {
      name: "Aryan Shekhar",
      role: "General Secretary",
      imageUrl: "/team/aryan_s.jpeg",
      linkedinUrl:
        "https://www.linkedin.com/feed/?lipi=urn%3Ali%3Apage%3Ap_mwlite_my_network%3BKGTo7d8wQWuJRUZ0HYuYxw%3D%3D",
    },
    {
      name: "Ritesh Singh Chaudhary",
      role: "General Secretary",
      imageUrl: "/team/ritesh.jpeg",
      linkedinUrl: "http://www.linkedin.com/in/ritesh-singh-chaudhary-rsc",
    },
    {
      name: "Praket Mehta",
      role: "General Secretary",
      imageUrl: "/team/praket.jpg",
      linkedinUrl: "https://www.linkedin.com/in/praket-mehta-679176260/",
    },
  ],
};

const departmentHeads = {
  title: "Department Heads",
  departments: [
    {
      name: "Technical Affairs",
      members: [
        {
          name: "Bhuwan Chandra Pandey",
          imageUrl: "/team/bhuwan.jpg",
          linkedinUrl: "https://www.linkedin.com/in/bhuwan-chandra-pandey/",
        },
        {
          name: "Shubham Tandon",
          imageUrl: "/team/shubham.jpg",
          linkedinUrl: "https://www.linkedin.com/in/shubham-t1920/",
        },
        {
          name: "Dheeraj Sharma",
          imageUrl: "/team/dheeraj.jpg",
          linkedinUrl: "https://www.linkedin.com/in/greatnerve/",
        },
      ],
    },
    {
      name: "Creative",
      members: [
        {
          name: "Anushka Jarwal",
          imageUrl: "/team/anushka.jpg",
          linkedinUrl:
            "https://www.linkedin.com/in/anushka-jarwal-17939b309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Kaushiki Chhabra",
          imageUrl: "/team/kaushiki.jpg",
          linkedinUrl:
            "https://www.linkedin.com/in/kaushikichhabra?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Mrinal Sharma",
          imageUrl: "/team/mrinal.webp",
          linkedinUrl:
            "https://www.linkedin.com/in/mrinal-sharma-92376b287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
      ],
    },
    {
      name: "Design",
      members: [
        {
          name: "Aditya Yadav",
          imageUrl: "/team/aditya_yadav.jpg",
          linkedinUrl:
            "https://www.linkedin.com/in/aditya-yadav-712519306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Pavni Aggarwal",
          imageUrl: "/team/pavni.jpg",
          linkedinUrl: "https://www.linkedin.com/in/pavni-aggarwal-abjhbqja/",
        },
        {
          name: "Manik",
          imageUrl: "/team/manik.png",
          linkedinUrl:
            "https://www.linkedin.com/in/manik-bhushan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
      ],
    },
    {
      name: "External Relations",
      members: [
        {
          name: "Aman Kumar",
          imageUrl: "/team/aman_kr.jpg",
          linkedinUrl: "https://www.linkedin.com/in/aman-kumar-39b561294",
        },
        {
          name: "Kartik Kapil",
          imageUrl: "/team/kartik.jpeg",
          linkedinUrl:
            "https://www.linkedin.com/in/kartik-kapil-a2b32b269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Daivik Awasthi",
          imageUrl: "/team/daivik.jpg",
          linkedinUrl: "https://www.linkedin.com/in/daivik-awasthi",
        },
      ],
    },
    {
      name: "Operations",
      members: [
        {
          name: "Devansh Thakur",
          imageUrl: "/team/devansh.jpeg",
          linkedinUrl:
            "https://www.linkedin.com/in/devansh-thakur-588569224?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        },
        {
          name: "Haaris Chaudhary",
          imageUrl: "/team/haaris.jpeg",
          linkedinUrl: "http://www.linkedin.com/in/hc0311",
        },
      ],
    },
    {
      name: "Sponsorship",
      members: [
        {
          name: "Mayank Gupta",
          imageUrl: "/team/mayank.jpg",
          linkedinUrl:
            "https://www.linkedin.com/in/mayankgupta120404?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          name: "Kundan Bansal",
          imageUrl: "/team/kundan.jpeg",
          linkedinUrl: "http://linkedin.com/in/kundanbansal1",
        },
      ],
    },
  ],
};

const societies = [
  {
    name: "Power and Energy Society (PES)",
    type: "Chapter",
    members: [
      {
        name: "Lakshya Bhatnagar",
        role: "Chairperson",
        imageUrl: "/team/lakshya.jpg",
        linkedinUrl: "https://www.linkedin.com/in/lakshya-bhatnagar-b815b9297",
      },
      {
        name: "Aniket Negi",
        role: "Vice Chairperson",
        imageUrl: "/team/aniket.jpg",
        linkedinUrl: "https://www.linkedin.com/in/aniketnegs/",
      },
      {
        name: "Anandini Kashyap",
        role: "Secretary",
        imageUrl: "/team/anandini.jpg",
        linkedinUrl: "https://www.linkedin.com/in/anandini-kashyap-nsut/",
      },
    ],
  },
  {
    name: "Industry Applications Society (IAS)",
    type: "Chapter",
    members: [
      {
        name: "Eugal Shokeen",
        role: "Chairperson",
        imageUrl: "/team/eugal.jpg",
        linkedinUrl:
          "https://www.linkedin.com/in/eugal-shokeen-a134b12a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        name: "Sujal Gulia",
        role: "Vice Chairperson",
        imageUrl: "/team/sujal.jpg",
        linkedinUrl:
          "https://www.linkedin.com/in/sujal-gulia-7543b12ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
  {
    name: "Women in Engineering (WIE)",
    type: "Affinity Group",
    members: [
      {
        name: "Shriya Devarakonda",
        role: "Chairperson",
        imageUrl: "/team/shriya.jpeg",
        linkedinUrl: "http://www.linkedin.com/in/shriya-devarakonda-7a451628b",
      },
      {
        name: "Khushneet Kaur",
        role: "Vice Chairperson",
        imageUrl: "/team/khushneet.jpg",
        linkedinUrl: "http://www.linkedin.com/in/khushneet-kaur-b4b194248",
      },
    ],
  },
  {
    name: "Computer Society (CS)",
    type: "Chapter",
    members: [
      {
        name: "Adesh Kumar Pal",
        role: "Chairperson",
        imageUrl: "/team/adesh.jpg",
        linkedinUrl: "https://www.linkedin.com/in/adeclak",
      },
      {
        name: "Aryan Baibaswata",
        role: "Vice Chairperson",
        imageUrl: "/team/aryan_b.jpg",
        linkedinUrl: "https://www.linkedin.com/in/aryan-baibaswata-299267281",
      },
      {
        name: "Yash Garg",
        role: "Secretary",
        imageUrl: "/team/yashg.jpg",
        linkedinUrl: "https://www.linkedin.com/in/yashgarg2006/",
      },
    ],
  },
  {
    name: "Circuits and Systems Society (CASS)",
    type: "Chapter",
    members: [
      {
        name: "Vaibhav Kumar Rajput",
        role: "Chairperson",
        imageUrl: "/team/vaibhav.jpeg",
        linkedinUrl:
          "https://www.linkedin.com/in/vaibhav-rajput06?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
      {
        name: "Aditi Sharma",
        role: "Vice Chairperson",
        imageUrl: "/team/aditi.jpg",
        linkedinUrl:
          "https://www.linkedin.com/in/aditi-sharma-85610728b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
    ],
  },
  {
    name: "Robotics and Automation Society (RAS)",
    type: "Chapter",
    members: [
      {
        name: "Yash Sharma",
        role: "Chairperson",
        imageUrl: "/team/yash.jpg",
        linkedinUrl: "http://www.linkedin.com/in/yashsharma2402",
      },
      {
        name: "Manas Kumar",
        role: "Vice Chairperson",
        imageUrl: "/team/manas.jpg",
        linkedinUrl: "https://www.linkedin.com/in/manaskumar3003",
      },
    ],
  },
];

const seniorMembers = {
  title: "Senior Executive Members",
  members: [
    {
      name: "Dipshu Rakheja",
      role: "Senior Executive",
      imageUrl: "/team/dipshu.jpg",
      linkedinUrl:
        "https://www.linkedin.com/in/dipshu-rakheja-132bb1288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Hardik Vohra",
      role: "Senior Executive",
      imageUrl: "/team/hardik.jpg",
      linkedinUrl: "https://www.linkedin.com/in/hardik-vohra-52ba59195",
    },
    {
      name: "Love Kumar",
      role: "Senior Executive",
      imageUrl: "/team/love1.jpg",
      linkedinUrl:
        "https://www.linkedin.com/in/love-kumar-210240165?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
  ],
};

const MemberCard = ({
  name,
  role,
  imageUrl,
  linkedinUrl,
  delay = 0,
}: {
  name: string;
  role?: string;
  imageUrl: string;
  linkedinUrl?: string;
  delay?: number;
}) => (
  <motion.div
    className="text-center transform hover:scale-105 transition-transform duration-300 w-full max-w-[220px] mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="relative inline-block w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <Image
          src={imageUrl}
          alt={`Portrait of ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, 220px"
          className="object-cover rounded-xl shadow-lg hover:ring-4 hover:ring-cyan-400 transition"
        />
      </a>
    </div>
    <h3 className="mt-4 text-lg font-bold text-white">{name}</h3>
    {role && <p className="text-sm text-cyan-300">{role}</p>}
  </motion.div>
);

const SectionDivider = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => (
  <motion.div
    className="relative mb-14 mt-20 px-4 sm:px-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-700" />
    </div>
    <div className="relative flex justify-center">
      <span className="bg-black px-6 text-center">
        <h2 className="text-3xl sm:text-3xl font-bold text-cyan-300 tracking-wide drop-shadow-lg">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg sm:text-2xl text-gray-400 mt-2">{subtitle}</p>
        )}
      </span>
    </div>
  </motion.div>
);

const CoreSection = () => {
  return (
    <section
      className="bg-black text-white min-h-screen font-sans"
      id="core-section"
    >
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <motion.div
          className="text-center mb-20 px-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-cyan-400 mb-3 drop-shadow-lg">
            Meet the Core Team
          </h1>
          <p className="text-lg w-[75vw] m-auto sm:text-xl text-gray-300 font-medium">
            Our core section is a group of dedicated individuals who work
            tirelessly to make the organization a success.
          </p>
        </motion.div>

        <SectionDivider title="Executive Council" />
        <div className="mt-12 flex flex-col lg:flex-wrap justify-center lg:gap-8">
          <div className="flex items-center justify-center order-0 lg:translate-y-0">
            {executiveCouncil
              .filter((person) => person.role === "Chairperson")
              .map((person, index) => (
                <motion.div
                  key={person.name}
                  className="flex flex-col items-center scale-[0.95] hover:scale-100 transition ease-in-out"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="relative overflow-hidden hover:ring-4 hover:ring-cyan-400 rounded-xl shadow-2xl flex items-center justify-center size-48 aspect-square sm:w-54 lg:size-60 mx-12">
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={person.imageUrl}
                        alt={`Portrait of ${person.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 220px"
                        className="object-cover rounded-xl"
                        priority
                      />
                    </a>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="text-xl pb-1 font-semibold text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm text-cyan-300">{person.role}</p>
                  </div>
                </motion.div>
              ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 lg:mt-0 lg:flex-row lg:items-start lg:gap-8 lg:ml-4">
            {executiveCouncil
              .filter((person) => person.role !== "Chairperson")
              .map((person, index) => (
                <motion.div
                  key={person.name}
                  className="flex flex-col items-center scale-100 hover:scale-105 transition ease-in-out"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="relative overflow-hidden hover:ring-4 hover:ring-cyan-400 rounded-xl shadow-2xl flex items-center justify-center  w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={person.imageUrl}
                        alt={`Portrait of ${person.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 220px"
                        className="object-cover rounded-xl aspect-square w-40 h-40"
                        priority
                      />
                    </a>
                  </div>
                  <div className="mt-3 text-center">
                    <h3 className="text-xl pb-1 font-semibold text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm text-cyan-300">{person.role}</p>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        <SectionDivider title={generalSecretaries.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 px-4">
          {generalSecretaries.members.map((member, idx) => (
            <MemberCard key={member.name} {...member} delay={idx * 0.05} />
          ))}
        </div>

        <SectionDivider title={departmentHeads.title} />
        <div className="space-y-16">
          {departmentHeads.departments.map((dept, deptIdx) => {
            const isTwo = dept.members.length === 2;
            const gridCols = isTwo
              ? "grid-cols-1 sm:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

            return (
              <motion.div
                key={dept.name}
                className="px-4 flex justify-center items-center flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: deptIdx * 0.1, duration: 0.5 }}
              >
                <h3 className="text-center text-2xl p-6 font-bold text-cyan-200 mb-6 tracking-wide">
                  {dept.name} Team
                </h3>
                <div
                  className={`grid ${gridCols} gap-y-12 gap-x-8 justify-items-center w-full max-w-5xl`}
                >
                  {dept.members.map((member, i) => (
                    <MemberCard
                      key={member.name}
                      {...member}
                      delay={i * 0.08}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {societies.map((society, sIdx) => {
          const isTwo = society.members.length === 2;
          const gridCols = isTwo
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

          return (
            <div key={society.name} className="px-4">
              <SectionDivider title={society.name} subtitle={society.type} />
              <motion.div
                className={`grid ${gridCols} gap-10 justify-items-center max-w-5xl mx-auto`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: sIdx * 0.1, duration: 0.5 }}
              >
                {society.members.map((member, i) => (
                  <MemberCard key={member.name} {...member} delay={i * 0.08} />
                ))}
              </motion.div>
            </div>
          );
        })}

        <SectionDivider title={seniorMembers.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 max-w-4xl mx-auto">
          {seniorMembers.members.map((member, i) => (
            <MemberCard key={member.name} {...member} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreSection;
