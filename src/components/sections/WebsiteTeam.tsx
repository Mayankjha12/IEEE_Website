"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const seniorHeads = [
  {
    name: "Mayank Kumar Jha",
    img: "/team/mayank.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/mayank-kumar-jha-6b4658328/",
    role : "Head of Technology",
  },
  {
    name: "Shubham Khatri",
    img: "/team/shubham.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/shubham3155/",
    role : "Head of Technology",
  },
  {
    name: "Aarohi Jain",
    img: "/team/Aarohi.jpg",
    linkedinUrl: "https://www.linkedin.com/in/aarohi-jain-415945326/",
    role: "General Secretary",
  },
  {
    name: "Hemang Bhat",
    img: "/team/Hemang_Bhat.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/hemangbhat/",
    role: "Vice President",
  },
];

const execommsMembers = [
  {
    name: "Riya Khohal",
    role: "Execomm",
    img: "/team/Riya_Khohal.jpg",
  },
  {
    name: "Pari Kataria",
    role: "Execomm",
    img: "/team/Pari_Kataria.jpg",
  },
  {
    name: "Piyush Aggarwal",
    role: "Execomm",
    img: "/team/Piyush_Aggarwal.jpg",
  },
  {
    name: "Yashika",
    role: "Execomm",
    img: "/team/Yashika.png",
  },
  {
    name: "Ishaan Vachher",
    role: "Execomm",
    img: "/team/Ishaan_Vachher.jpg",
  },
  {
    name: "Tanmay",
    role: "Execomm",
    img: "/team/Tanmay_M.jpg",
  },
  {
    name: "Sheel Rana",
    role: "Execomm",
    img: "/team/Sheel.jpg",
  },
  {
    name: "Sabhya Goel",
    role: "Execomm",
    img: "/team/Sabhya_Goel.jpg",
  },
  {
    name: "Aanya Parbat",
    role: "Execomm",
    img: "/team/Aanya_Parbat.jpg",
  },
  {
    name: "Aryan Malhotra",
    role: "Execomm",
    img: "/team/Aryan_Malhotra.jpg",
  },
  {
    name: "Bhavy Minocha",
    role: "Execomm",
    img: "/team/Bhavy_Minocha.jpeg",
  },
  {
    name: "Deepika",
    role: "Execomm",
    img: "/team/Deepika.jpg",
  },
  {
    name: "Khushi Shrivastava",
    role: "Execomm",
    img: "/team/Khushi_Shrivastava.jpeg",
  },
  {
    name: "Kritika Madan",
    role: "Execomm",
    img: "/team/Kritika_Madan.jpg",
  },
  {
    name: "Kumar Om",
    role: "Execomm",
    img: "/team/Kumar_Om.jpeg",
  },
  {
    name: "Manav Goel",
    role: "Execomm",
    img: "/team/Manav_Goel.jpg",
  },
  {
    name: "Moksh Jindal",
    role: "Execomm",
    img: "/team/Moksh_Jindal.jpg",
  },
  {
    name: "Nishka Choudhury",
    role: "Execomm",
    img: "/team/Nishka_Choudhury.jpeg",
  },
  {
    name: "Niyati Katiyan",
    role: "Execomm",
    img: "/team/Niyati.jpg",
  },
  {
    name: "Poonam",
    role: "Execomm",
    img: "/team/Poonam.jpg",
  },
  {
    name: "Raksha",
    role: "Execomm",
    img: "/team/Raksha.jpg",
  },
  {
    name: "Satwik",
    role: "Execomm",
    img: "/team/Satwik.jpg",
  },
  {
    name: "Snehal",
    role: "Execomm",
    img: "/team/Snehal.png",
  },
  {
    name: "Tanvi Ravi",
    role: "Execomm",
    img: "/team/Tanvi_Ravi.jpg",
  },
  {
    name: "Tunishi Singal",
    role: "Execomm",
    img: "/team/Tunishi_Singal.jpg",
  },
  {
    name: "Vikas Prajapati",
    role: "Execomm",
    img: "/team/Vikas_Prajapati.jpeg",
  },
  {
    name: "Yashita",
    role: "Execomm",
    img: "/team/Yashita.jpeg",
  },
  {
  name: "Abhimanyu Sharma",
  role: "Execomm",
  img: "/team/Abhimanyu Sharma.jpg",
},
{
  name: "Alok Mourya",
  role: "Execomm",
  img: "/team/Alok Mourya.jpeg",
},
{
  name: "Aryan Sahu",
  role: "Execomm",
  img: "/team/Aryan Sahu.png",
},
{
  name: "Harshita",
  role: "Execomm",
  img: "/team/Harshita Ahirwar.jpg",
},
{
  name: "Kartik Bansal",
  role: "Execomm",
  img: "/team/Kartik Bansal.jpg",
},
{
  name: "Lavya",
  role: "Execomm",
  img: "/team/Lavya.jpeg",
},
{
  name: "Mansaran Kaur",
  role: "Execomm",
  img: "/team/Mansaran Kaur.jpeg",
},
{
  name: "Navani Smiju",
  role: "Execomm",
  img: "/team/Navani Smiju.jpg",
},
{
  name: "Parth Goel",
  role: "Execomm",
  img: "/team/Parth Goel.jpeg",
},
{
  name: "Pulkit Singh",
  role: "Execomm",
  img: "/team/Pulkit Singh.jpeg",
},
{
  name: "Rajeev Kumar",
  role: "Execomm",
  img: "/team/Rajeev Kumar.png",
},
{
  name: "Shourya",
  role: "Execomm",
  img: "/team/Shourya.png",
},
{
  name: "Suraj Kumar",
  role: "Execomm",
  img: "/team/Suraj Kumar.jpg",
},
{
  name: "Vishal Singh",
  role: "Execomm",
  img: "/team/VISHAL SINGH.jpg",
},
{
  name: "Yash Jakhar",
  role: "Execomm",
  img: "/team/Yash Jakhar.jpeg",
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
