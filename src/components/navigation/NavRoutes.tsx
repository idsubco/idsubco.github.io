import { IconifyIcon } from "@iconify/react";
import React from "react";
// component
import Iconify from "../Iconify";

/** ENSURE TO UPDATE routes.tsx  */

// @ts-ignore
const getIcon = (name: string | IconifyIcon) => <Iconify icon={name} width={22} height={22} />;

const navRoutes = [
    {
        title: "home",
        path: "/",
        icon: getIcon("ant-design:home-filled"),
        children: [
            {
                title: "About",
                path: "#about",
                icon: getIcon("mdi:about-variant"),
            },
            {
                title: "The Team",
                path: "#team",
                icon: getIcon("fluent:people-team-16-filled"),
            },
            {
                title: "Events",
                path: "#testimonials",
                icon: getIcon("dashicons:testimonial"),
            },
        ],
    },
    {
        title: "Projects",
        path: "/",
        icon: getIcon("ic:round-miscellaneous-services"),
        children: [
            {
                title: "Solar Bench Project",
                path: "/solar_bench",
                icon: getIcon("ic:outline-solar-power"),
            },
            {
                title: "Campus Waste Initiative",
                path: "/campus_waste_initiative",
                icon: getIcon("maki:waste-basket"),
            },
            {
                title: "Solar Decathlon",
                path: "/solar_decathlon",
                icon: getIcon("ic:outline-solar-power"),
            },
        ],
    },
    
];

export default navRoutes;
