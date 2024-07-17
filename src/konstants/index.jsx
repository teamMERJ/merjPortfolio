import { CalculatorIcon, HomeIcon, UserIcon } from "@heroicons/react/outline";
import { Award, AwardIcon, BookText, BookTextIcon, BriefcaseBusiness, BriefcaseBusinessIcon, CircleUserIcon, EarthLock, EarthLockIcon,  GraduationCap,  GraduationCapIcon,  LayoutDashboard, LogOutIcon, Medal, MessageCircleCode } from "lucide-react";


  const K = {
    NAVLINKS: [
        {
            name: "Overview",
            path: "",
        },
        {
            name: "Profile",
            path: "profile",
            Icon: <UserIcon width={20} height={20} />
        },
        {
            name: "Education",
            path: "education",
            Icon: <UserIcon width={20} height={20} />
        },
        {
            name: "Skills",
            path: "skills",
            Icon: <HomeIcon width={20} height={20} />
        },
        {
            name: "Experiences",
            path: "experience",
            Icon: <CalculatorIcon width={20} height={20} />
        },
        {
            name: "Projects",
            path: "projects",
            Icon: <Medal width={20} height={20} />
        },
        {
            name: "Achievements",
            path: "achievements",
            Icon: <Medal width={20} height={20} />
        },

        {
            name: "Log Out",
            path: "/",
            Icon: <LogOutIcon width={20} height={20} />
        },

    ],

        OVERVIEW: [
            {
                icon: <GraduationCapIcon/>,
                text: "Education",
                total: 5,
            },
            {
                icon: <EarthLockIcon/>,
                text: "Projects",
                total: 10,
            },
            {
                icon: <BriefcaseBusinessIcon/>,
                text: "Experience",
                total: 30,
            },
            {
                icon: <BookTextIcon/>,
                text: "Skills",
                total: 30,
            },
            {
                icon: <AwardIcon/>,
                text: "Achievements",
                total: 30,
            },
           
        ],

    SKILLS: [
        {
            name:"HTML",
            levelOfProciency: "Advanced",
        },
        {
            name:"CSS",
            levelOfProciency: "Advanced",
        },
        {
            name:"JavaScript",
            levelOfProciency: "Intermediate",
        },
        {
            name:"TypeScript",
            levelOfProciency: "Beginner",
        },
        {
            name:"React",
            levelOfProciency: "Beginner",
        },
    ]


};

export default K;
