import React from 'react';

import api from '../../assets/icons/api.svg'

import algo from '../../assets/icons/algo.svg'
import computer from '../../assets/icons/computer.svg'
import repair from '../../assets/icons/repair.svg'
import puzzle from '../../assets/icons/puzzle.svg'


const skills = [
    {
        icon: computer,
        title: "Frontend Development",
        about: ["I can build a beautiful and scalable SPA using ",<strong key={2}>HTML, CSS and React Javascript</strong>]
    },
    {
        icon: repair,
        title: "Backend  Development",
        about: ["handle database, server, api using and ",<strong>NodeJs,Mysql,MangoDB,Postgress</strong>]
    },
    {
        icon: api,
        title: "API Development",
        about: ["I can develop robust REST API using", <strong key={1}> NodeJs,MangoDB </strong>]
    },
    {
        icon: algo,
        title: "Competitive Coder",
        about: ["a daily problem solver in",<strong key={3}> HackerRank and Leetcode</strong>]
    },
    {
        icon: puzzle,
        title: "UI/UX designer",
         about: ["Minimalistic user friendly UI For User Using",<strong> ReactJs</strong>]
    },
    {
        icon: computer,
        title: "Whatever",
        // about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!"
    },
]

export default skills;