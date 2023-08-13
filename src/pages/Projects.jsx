import ProjectList from '../components/Projects/ProjectList'
import { useEffect, useState } from "react";
import '../components/Projects/Project.css'
import {
    featuredProjects, WebProjects, MobileProjects, UXCaseStudies, AnimeProjects
} from '../components/Projects/ProjectsData';






export default function Projects() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'featured',
            title: 'Featured',
        },
        {
            id: 'web',
            title: 'Web Projects',
        },
        {
            id: 'mobile',
            title: 'Mobile Projects',
        },
        {
            id: 'ux',
            title: 'UX Case Studies',
        },
        {
            id: 'design',
            title: 'Anime Projects',
        }
    ];


    useEffect(() => {
        switch (selected) {
            case 'featured':
                setData(featuredProjects);
                break;
            case 'web':
                setData(WebProjects);
                break;
            case 'mobile':
                setData(MobileProjects);
                break;
            case 'ux':
                setData(UXCaseStudies);
                break;
            case 'design':
                setData(AnimeProjects);
                break;
            default:
                setData(featuredProjects);
        }

    }, [selected])

    return (
        <div className='project' id='project'>
            <h1 className='project__header'>PORTFOLIO</h1>
            <ul className="project__pills">
                {list.map((item) => (
                    < ProjectList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} />
                ))}
            </ul>
            <div className='container__project'>
                {data.map((d) => (
                    <div className="item">
                        <img className='project__img' src={d.img} alt="" />
                        {/* <h3 className='project__name'> {d.title} </h3> */}
                        <a href={d.link} className='project__name' target='_blank' rel="noreferrer">{d.title}</a>
                        <div className='project__button'>
                            <a href={d.github} className='project__button1' target='_blank' rel="noreferrer">Github</a>
                        </div>
                        <div className='project__button'>
                            <a href={d.link} className='project__button2' target='_blank' rel="noreferrer">Link</a>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}






