"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const executiveCouncil = [
  {
    name: "Tushti Arora",
    role: "Vice Chairperson",
    imageUrl: "/team/TushtiArora.jpg",
    linkedinUrl: "https://www.linkedin.com/in/tushtiarora",
  },
  {
    name: "Hemang Bhat",
    role: "Vice Chairperson",
    imageUrl: "/team/Hemang_Bhat.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/hemangbhat",
  },

  {
    name: "Bhaavin Jain",
    role: "Chairperson",
    imageUrl: "/team/Bhaavin.jpg",
    linkedinUrl: "https://www.linkedin.com/in/bhaavin-jain/",
  },
  {
    name: "Gunn Aggarwal",
    role: "Vice Chairperson",
    imageUrl: "/team/Gunn.jpg",
    linkedinUrl: "https://www.linkedin.com/in/gunn-aggarwal-aa9421321/",
  },
  {
    name: "Samanvaya Gupta",
    role: "Vice Chairperson",
    imageUrl: "/team/Samanvaya.jpg",
    linkedinUrl:
      "https://www.linkedin.com/in/samanvaya-gupta-00a3b3352?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
];

const generalSecretaries = {
  title: "General Secretaries",
  members: [
    {
      name: "Aarohi Jain",
      role: "General Secretary",
      imageUrl: "/team/Aarohi.jpg",
      linkedinUrl: "https://www.linkedin.com/in/aarohi-jain-415945326",
    },
    {
      name: "Fareh Umama",
      role: "General Secretary",
      imageUrl: "/team/Fareh.jpg",
      linkedinUrl:
        "https://www.linkedin.com/in/fareh-umama/",
    },
    {
      name: "MD Aftab Ansari",
      role: "General Secretary",
      imageUrl: "/team/Aftab.jpg",
      linkedinUrl: "https://www.linkedin.com/in/md-aftab-ansari-58174a301/",
    },
    {
      name: "Aakarsh Thukral",
      role: "General Secretary",
      imageUrl: "/team/Aakarsh.jpg",
      linkedinUrl: "https://www.linkedin.com/in/aakarsh-thukral-90ba4a319/",
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
          name: "Mayank Kumar Jha",
          imageUrl: "/team/mayank.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/mayank-kumar-jha-6b4658328/",
        },
        {
          name: "Shubham Khatri",
          imageUrl: "/team/shubham.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/shubham3155/",
        },
      ],
    },
    {
      name: "Creative",
      members: [
        {
          name: "Vanshika Goyal",
          imageUrl: "/team/Vanshika.jpg",
          linkedinUrl:
            "https://www.linkedin.com/in/vanshika-goyal6",
        },
        {
          name: "Gunika Anand",
          imageUrl: "/team/Gunika.jpg",
          linkedinUrl:
            "https://www.linkedin.com/in/gunika-anand-7942ab275?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        },
        {
          name: "Anam Shoeb",
          imageUrl: "/team/Anam.jpeg",
          linkedinUrl:
            "https://in.linkedin.com/in/anam-shoeb-73a4b1335",
        },
      ],
    },
    {
      name: "Design",
      members: [
        {
          name: "Jay Singh Sikarwar",
          imageUrl: "/team/jay singh.jpg",
          linkedinUrl:
            "https://www.linkedin.com/in/jay-singh-sikarwar-2a4a28334/",
        },
        {
          name: "Sidhant Choudhary",
          imageUrl: "/team/pavni.jpg",
          linkedinUrl: "https://www.linkedin.com/in/pavni-aggarwal-abjhbqja/",
        },
      ],
    },
    {
      name: "External Relations",
      members: [
        {
          name: "Deldan Chosdon",
          imageUrl: "/team/Deldan.PNG",
          linkedinUrl: "https://www.linkedin.com/in/deldan-chosdon-b9490731b/",
        },
        {
          name: "Samya Wadhwa",
          imageUrl: "/team/samya.jpeg",
          linkedinUrl:
            "https://www.linkedin.com/in/samya-wadhwa-8a8427322/",
        },
        {
          name: "Janya Goel",
          imageUrl: "/team/Janya.jpg",
          linkedinUrl: "https://www.linkedin.com/in/janyagoel/",
        },
      ],
    },
    {
      name: "Operations",
      members: [
        {
          name: "Vaibhav Ranjan",
          imageUrl: "/team/Vaibhav_Ranjan.jpg",
          linkedinUrl:
            "https://www.linkedin.com/in/vaibhav-ranjan-65403a224/",
        },
        {
          name: "Ayush Yadav",
          imageUrl: "/team/Ayush_yadav.jpeg",
          linkedinUrl: "https://www.linkedin.com/in/ayushyadav-2007-nsut/",
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
        name: "Ruhansh Bansal",
        role: "Chairperson",
        imageUrl: "/team/Ruhansh.jpg",
        linkedinUrl: "https://www.linkedin.com/in/ruhanshbansal/",
      },
      {
        name: "Pratik Biswal",
        role: "Vice Chairperson",
        imageUrl: "/team/Pratik.jpg",
        linkedinUrl: "https://www.linkedin.com/in/saipratik/",
      },
      {
        name: "Sudhit Popli",
        role: "Secretary",
        imageUrl: "/team/Sudhit.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/sudhit-popli-a2a9731ab",
      },
    ],
  },
  {
    name: "Industry Applications Society (IAS)",
    type: "Chapter",
    members: [
      {
        name: "Punit",
        role: "Chairperson",
        imageUrl: "/team/Punit.JPG",
        linkedinUrl:
          "https://www.linkedin.com/in/punit0809/",
      },
      {
        name: "Vihaan Narayan",
        role: "Vice Chairperson",
        imageUrl: "/team/Vihaan.jpeg",
        linkedinUrl:
          "https://www.linkedin.com/in/vihaan-narayan-286427349/"
      },
    ],
  },
  {
    name: "Women in Engineering (WIE)",
    type: "Affinity Group",
    members: [
      {
        name: "Vanshika Joras",
        role: "Chairperson",
        imageUrl: "/team/shriya.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/vanshika-joras-703949323/"
      },
      {
        name: "Akansha Gupta",
        role: "Vice Chairperson",
        imageUrl: "/team/khushneet.jpg",
        linkedinUrl: "https://www.linkedin.com/in/akansha-gupta-1b672431b/",
      },
    ],
  },
  {
    name: "Computer Society (CS)",
    type: "Chapter",
    members: [
      {
        name: "Tanmay Agarwal",
        role: "Chairperson",
        imageUrl: "/team/Tanmay.jpg",
        linkedinUrl: "https://www.linkedin.com/in/tanmay-agarwal6626/",
      },
      {
        name: "Tijil Gupta",
        role: "Vice Chairperson",
        imageUrl: "/team/aryan_b.jpg",
        linkedinUrl: "https://www.linkedin.com/in/tijil-gupta/",
      },
      {
        name: "Riyansh Jain",
        role: "Secretary",
        imageUrl: "/team/yashg.jpg",
        linkedinUrl: "https://www.linkedin.com/in/riyansh-jain-201796292/",
      },
    ],
  },
  {
    name: "Circuits and Systems Society (CASS)",
    type: "Chapter",
    members: [
      {
        name: "Saanch Mehta",
        role: "Chairperson",
        imageUrl: "/team/Saanch.jpeg",
        linkedinUrl:
          "https://www.linkedin.com/in/saanch-mehta-45a6a4323/",
      },
      {
        name: "Vedika Rawat",
        role: "Vice Chairperson",
        imageUrl: "/team/Vedika.jpg",
        linkedinUrl:
          "https://www.linkedin.com/in/vedikarawat/",
      },
    ],
  },
  {
    name: "Robotics and Automation Society (RAS)",
    type: "Chapter",
    members: [
      {
        name: "Ozair Ali",
        role: "Chairperson",
        imageUrl: "/team/Ozair.jpg",
        linkedinUrl: "https://www.linkedin.com/in/ozair-ali-180812285/",
      },
      {
        name: "Paras Arora",
        role: "Vice Chairperson",
        imageUrl: "/team/Paras.jpeg",
        linkedinUrl: "https://www.linkedin.com/in/paras-arora-a75614255/",
      },
    ],
  },
];

const seniorMembers = {
  title: "Senior Executive Members",
  members: [
    {
      name: "Shikha Verma",
      role: "Senior Executive",
      imageUrl: "/team/dipshu.jpg",
      linkedinUrl:
        "https://www.linkedin.com/in/shikha-verma-431753342/",
    },
    {
      name: "Himanshi Meena",
      role: "Senior Executive",
      imageUrl: "/team/hardik.jpg",
      linkedinUrl: "https://www.linkedin.com/in/himanshi-meena-623a37342/",
    },
    {
      name: "Vaibhav Singh",
      role: "Senior Executive",
      imageUrl: "/team/Vaibhav.jpg",
      linkedinUrl:
        "https://www.linkedin.com/in/vaibhav-singh-91119b25a/",
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
