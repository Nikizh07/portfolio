import {
    faCss3Alt,
    faGithub,
    faGitAlt,
    faHtml5,
    faJs,
    faPython,
    faReact,
} from "@fortawesome/free-brands-svg-icons";
import {
    faBolt,
    faCloud,
    faCode,
    faDatabase,
    faGlobe,
    faLaptopCode,
    faLanguage,
    faServer,
    faWind,
} from "@fortawesome/free-solid-svg-icons";

const data = {
    skills: [
        {
            name: "Programming Languages",
            content: [
               {name: "Python" , icon: faPython},
               {name: "Javascript" , icon: faJs},
               {name: "Golang" , icon: faCode}
        
            ]
        },
        {
            name: "Web Frontend",
            content: [
                {name: "Html" , icon: faHtml5},
                {name: "Css" , icon: faCss3Alt},
                {name: "React" , icon: faReact},
                {name: "Tailwind" , icon: faWind}
            ]
        },
        {
            name: "Web Backend",
            content: [
                {name: "Flask" , icon: faServer},
                {name: "FastApi" , icon: faBolt}
            ]
        },
        {
            name: "Databases",
            content: [
                {name: "Mongodb" , icon: faDatabase},
                {name: "Sqlite" , icon: faDatabase}
            ]
        },
        {
            name: "Cloud",
            content: [
                {name: "Heroku" , icon: faServer},
                {name: "Netlify" , icon: faCloud},
                {name: "Vercel" , icon: faCloud}
            ]
        },
        {
            name: "Tools",
            content: [
                {name: "Git" , icon: faGitAlt},
                {name: "Github" , icon: faGithub},
                {name: "VsCode" , icon: faLaptopCode}

            ]
        },
        {
            name: "Human Languages",
            content: [
                {name: "Tamil" , icon: faLanguage},
                {name: "English" , icon: faGlobe}
            ]
        }
    ]
}

export default  data;
