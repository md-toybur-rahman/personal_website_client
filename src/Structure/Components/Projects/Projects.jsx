import { useEffect, useState } from 'react';
import './Projects.css'
import useTitle from '../../Hooks/useTitle';

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
        <div data-aos="fade-down" data-aos-duration="1500" className='px-20 h-[90vh] grid grid-cols-1 items-center justify-center'>
            <div className='grid grid-cols-2 items-center gap-10'>
                <div className='image_container'>
                    {projectPhoto ? <img data-aos="fade-right" data-aos-duration="1500" className='XYZ' src={projectPhoto} /> : <></>}
                </div>
                <div>
                    <div className='flex items-center justify-between px-10 mb-5'>
                        <h1 className='text-7xl'>WORK</h1>
                        <h1 className='text-5xl'>{projects.length}</h1>
                    </div>
                    <div>
                        {
                            projects.map(project => <div className='ABC' key={project.id}>
                                <div>
                                    <hr />
                                    <div onMouseOut={() => setProjectPhoto('')} onMouseOver={() => setProjectPhoto(project.image)} className='flex items-center justify-between px-10 py-5 text-2xl font-bold'>
                                        <h1>{project.project_name}</h1>
                                        <h1>{project.category}</h1>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;