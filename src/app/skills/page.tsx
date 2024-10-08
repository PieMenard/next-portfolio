'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { motion } from 'framer-motion';
import {
  FaCss3,
  FaGit,
  FaGithub,
  FaHtml5,
  FaJs,
  FaReact,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiNextdotjs,
  SiPostman,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

const skills = {
  title: 'My Skills',
  description:
    "These are the web dev tools with which I've worked the most and are my go to tools as of right now.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css',
    },
    {
      icon: <FaJs />,
      name: 'javascript',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js ',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <SiPrisma />,
      name: 'prisma',
    },
    {
      icon: <SiMongodb />,
      name: 'mongodb',
    },
    {
      icon: <FaGit />,
      name: 'git',
    },
    {
      icon: <FaGithub />,
      name: 'github',
    },
    {
      icon: <SiPostman />,
      name: 'postman',
    },
  ],
};

const SkillsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: 'easeIn' },
      }}
      className="mb-8"
    >
      <div className="w-full h-full px-52">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold">{skills.title}</h3>
            <p className="max-w-[1000px] text-wrap mx-auto xl:mx-0">
              {skills.description}
            </p>
          </div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-5">
            {skills.skillList.map((skill, index) => (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                      <div className="text-6xl group-hover:text-accent transition-all duration-500">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="capitalize">
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;
