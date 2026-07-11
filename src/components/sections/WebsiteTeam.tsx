"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const seniorHeads = [
  {
    name: "Bhuwan Chandra Pandey",
    img: "/team/bhuwan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/bhuwan-chandra-pandey/",
    role : "Head of Technology",
  },
  {
    name: "Shubham Tandon",
    img: "/team/shubham.jpg",
    linkedinUrl: "https://www.linkedin.com/in/shubham-t1920/",
    role: "Head of Technology",
  },
  {
    name: "Dheeraj Sharma",
    img: "/team/dheeraj.jpg",
    linkedinUrl: "https://www.linkedin.com/in/greatnerve/",
    role: "Head of Technology",
  },
];

const execommsMembers = [
  {
    name: "Neil Aggrawal",
    role: "Execomm",
    img: "/team/Neil_Aggarwal.jpg",
  },
  {
    name: "Aarohi Jain",
    role: "Execomm",
    img: "/team/Aarohi_Jain.jpg",
  },
  {
    name: "Vaibhavi Agarwal",
    role: "Execomm",
    img: "/team/Vaibhavi.jpg",
  },
  {
    name: "Bhoomi Gupta ",
    role: "Execomm",
    img: "/team/Bhoomi_Gupta.jpg",
  },
  {
    name: "Aradhya Singh",
    role: "Execomm",
    img: "/team/Aradhya_Singh.PNG",
  },
  {
    name: "Hemang Bhat",
    role: "Execomm",
    img: "/team/Hemang_Bhat.jpg",
  },
  {
    name: "Akansha Gupta",
    role: "Execomm",
    img: "/team/Akansha_Gupta.jpg",
  },
  {
    name: "Samarth",
    role: "Execomm",
    img: "/team/Samarth_Dagar.jpg",
  },
  {
    name: "Mayank Jha",
    role: "Execomm",
    img: "/team/Mayank_Jha.jpg",
  },
  {
    name: "Ashish",
    role: "Execomm",
    img: "/team/Ashish_Sinsinwal.jpg",
  },
  {
    name: "Vedika Rawat",
    role: "Execomm",
    img: "/team/Vedika_Rawat.jpeg",
  },
  {
    name: "Bhaavin Jain",
    role: "Execomm",
    img: "/team/Bhaavin_Jain.jpg",
  },
  {
    name: "Pawan",
    role: "Execomm",
    img: "/team/Pawan.jpg",
  },
  {
    name: "Abhav Jain",
    role: "Execomm",
    img: "/team/Abhav_Jain.JPG",
  },
  {
    name: "Aftab",
    role: "Execomm",
    img: "/team/Aftab.jpg",
  },
  {
    name: "Kajal Soni",
    role: "Execomm",
    img: "/team/Kajal_Soni.jpg",
  },
  {
    name: "Shubham Khatri",
    role: "Execomm",
    img: "/team/shubham_k.jpg",
  },
  {
    name: "Janya Goel",
    role: "Execomm",
    img: "/team/Janya_Goel.jpeg",
  },
  {
    name: "Vanshika Goyal",
    role: "Execomm",
    img: "/team/Vanshika_Goyal.jpg",
  },
  {
    name: "Tushti Arora",
    role: "Execomm",
    img: "/team/Tushti_Arora.jpg",
  },
  {
    name: "Khushi Sagar",
    role: "Execomm",
    img: "/team/Khushi_Sagar.JPG",
  },
  {
    name: "Pratik",
    role: "Execomm",
    img: "/team/Pratik_biswal.jpg",
  },
  {
    name: "Akash",
    role: "Execomm",
    img: "/team/Akash_Srivastava.jpg",
  },
  {
    name: "Jayant",
    role: "Execomm",
    img: "/team/Jayant_Garg.jpg",
  },
  {
    name: "Gunika Anand",
    role: "Execomm",
    img: "/team/gunika_anand.jpg",
  },
  {
    name: "Tanmay Agarwal",
    role: "Execomm",
    img: "/team/tanmay_agarwal.jpg",
  },
];

const TechHeadCard = ({
  name,
  role,
  img,
  delay,
}: {
  name: string;
  role: string;
  img: string;
  delay?: number;
}) => (
  <motion.div
    className="flex flex-col items-center text-center bg-black p-4 rounded-2xl shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="relative w-32 h-32 sm:w-36 sm:h-36">
      <Image
        src={img}
        alt={name}
        fill
        sizes="(max-width: 640px) 128px, 144px"
        className="rounded-full object-cover border-4 shadow-xl"
      />
    </div>
    <h3 className="mt-3 text-lg font-bold text-white">{name}</h3>
    <p className="text-sm text-cyan-300 font-medium">{role}</p>
  </motion.div>
);

const ExecommBubble = ({
  name,
  role,
  img,
  delay,
}: {
  name: string;
  role: string;
  img: string;
  delay?: number;
}) => (
  <motion.div
    className="flex flex-col items-center text-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <div className="relative w-24 h-24 sm:w-28 sm:h-28">
      <Image
        src={img}
        alt={name}
        fill
        sizes="(max-width: 640px) 96px, 112px"
        className="rounded-full object-cover shadow-md"
      />
    </div>
    <h3 className="mt-2 text-sm font-semibold text-white">{name}</h3>
    <p className="text-xs text-cyan-300 font-medium">{role}</p>
  </motion.div>
);

const WebsiteTeam = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-500 mb-12">Website Team</h2>
        <div className="flex justify-center items-start gap-8 md:gap-16 flex-wrap mb-10">
          {seniorHeads.map((person, i) => (
            <TechHeadCard key={person.name} {...person} delay={i * 0.1} />
          ))}
        </div>
        <hr className="w-3/4 md:w-1/2 mx-auto my-12 border-t border-gray-300" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10">
          {execommsMembers.map((person, i) => (
            <ExecommBubble key={person.name} {...person} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsiteTeam;
