import React, { createRef } from 'react'

const randomColor = () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16)
    let color = 'bg-[#' + randomColor + ']'
    return color
}

const Skill = ({ title, value, color }) => {
    console.log('color:' + color)
    
    return (
        <div className="py-4">
        <div className="w-5/6 m-auto flex my-1">
            <p className="text-2xl w-1/2 font-sans">
                {title}
            </p>
            <p className="text-2xl w-1/2 text-right font-sans">
                {value}%
            </p>
            </div>
            <div id="bar" className="w-5/6 bg-gray-200 m-auto">
                <div className={`h-1 bg-blue-500`} style={{width: value + '%'}}></div>
            </div>
            
        </div>
    )
}

const Skills = () => {
    return (
        <div className="mt-10">
            <p className="flex justify-center text-6xl font-sans text-center">Skills</p>
            <div className="mx-auto sm:w-1/2 w-5/6 border-4 border-blue-500 mt-10 sm:py-8 py-4">
                <Skill title="HTML" value={80} color={randomColor()}></Skill>
                <Skill title="CSS" value={50} color={randomColor()}></Skill>
                <Skill title="JavaScript" value={100} color={randomColor()}></Skill>
                <Skill title="Python" value={90} color={randomColor()}></Skill>
                <Skill title="C++" value={100} color={randomColor()}></Skill>
            </div>
        </div>
    )
}

export default Skills
