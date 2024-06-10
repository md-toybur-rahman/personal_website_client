import { useEffect, useState } from 'react';
import './Projects.css'
import useTitle from '../../Hooks/useTitle';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [projectPhoto, setProjectPhoto] = useState('');
    // const [animation, setAnimation] = useState('fade-right');        
    useEffect(() => {
        fetch('ProjectsData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    useTitle('Projects')
    return (
        <div data-aos="fade-down" data-aos-duration="1500" className='h-[90vh] grid grid-cols-1 items-center justify-center'>
            <div className='grid md:grid-cols-2 items-center md:gap-10'>
                <div className='image_container'>
                    {projectPhoto ? <img data-aos="fade-right" data-aos-duration="1500" className='XYZ' src={projectPhoto} /> : <></>}
                </div>
                <div>
                    <div className='flex items-center justify-between px-5 md:px-10 md:mb-5'>
                        <h1 className='text-3xl md:text-7xl'>Projects</h1>
                        <h1 className='text-2xl md:text-5xl'>{projects.length}</h1>
                    </div>
                    <div>
                        {
                            projects.map(project => <div className='ABC' key={project.id}>
                                <Link target='blank' to={project.live_link}>
                                    <hr />
                                    <div onMouseOut={() => setProjectPhoto('')} onMouseOver={() => setProjectPhoto(project.image)} className='flex items-center justify-between px-5 md:px-10 py-2 md:py-5 text-lg md:text-2xl font-bold'>
                                        <h1>{project.project_name}</h1>
                                        <h1>{project.category}</h1>
                                    </div>
                                </Link>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;