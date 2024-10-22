import { useEffect, useState } from 'react';
import './Projects.css'
import useTitle from '../../Hooks/useTitle';
import { Link } from 'react-router-dom';
import { MdArrowForward } from 'react-icons/md';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [projectPhoto, setProjectPhoto] = useState('');
    // const [animation, setAnimation] = useState('fade-right');        
    useEffect(() => {
        fetch('ProjectsData.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    useTitle('Projects');
    const [isHover, setIsHover] = useState(true);
    const [visibleProjects, setVisibleProjects] = useState(3);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [clickedProject, setClickedProject] = useState(null);
    const TabHandler = () => {
        const frontEndTabHr = document.getElementById('frontEndTabHr');
        const backEndTabHr = document.getElementById('backEndTabHr');
        const frontEndTabContent = document.getElementById('frontEndTabContent');
        const backEndTabContent = document.getElementById('backEndTabContent');

        if (frontEndTabContent.classList.contains('flex')) {
            frontEndTabContent.classList.remove('flex');
            frontEndTabContent.classList.add('hidden');
            backEndTabContent.classList.add('flex');
            backEndTabContent.classList.remove('hidden');
            frontEndTabHr.style.width = '0px';
            backEndTabHr.style.width = '100%';
        }
        else {
            backEndTabContent.classList.remove('flex');
            backEndTabContent.classList.add('hidden');
            frontEndTabContent.classList.add('flex');
            frontEndTabContent.classList.remove('hidden');
            backEndTabHr.style.width = '0px';
            frontEndTabHr.style.width = '100%';
        }
    }

    return (
        <div className='p-5 flex items-center justify-center flex-col w-full'>
            <div className='flex items-center justify-center mt-10'>
                <div className='flex items-center gap-8'>
                    <div onClick={TabHandler} className='option w-fit cursor-pointer'>
                        <h1 className=''>Front-End Project</h1>
                        <hr style={{ width: '100%' }} id='frontEndTabHr' className='option_hr' />
                    </div>
                    <div onClick={TabHandler} className='option w-fit cursor-pointer'>
                        <h1 className=''>Full-Stack Project</h1>
                        <hr id='backEndTabHr' className='option_hr' />
                    </div>
                </div>
            </div>
            <div className="min-h-[70vh] h-fit flex md:items-center md:justify-center mt-10 w-full">
                <div id="frontEndTabContent" className="flex flex-col-reverse md:flex-row gap-5 items-center w-full h-[70vh] md:h-fit">
                    <div className="w-full md:w-1/3 flex-grow md:h-[60vh] overflow-y-scroll shadow-xl shadow-[#254756] p-5 rounded-2xl" style={{ scrollbarWidth: 'none' }}>
                        {projects.filter(project => project.project_type == 'Front-End').slice(0, visibleProjects).map((project, index) => (
                            <div
                                key={index}
                                className='rounded-lg shadow-md shadow-[#254756] mb-5 px-5 py-2 w-full'
                                onClick={() => { { setHoveredProject(null); setClickedProject(project); setIsHover(false); } }}
                                onMouseEnter={() => { if(isHover) {setHoveredProject(project); setClickedProject(null);} }}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div
                                    className="option text-2xl rounded-lg cursor-pointer w-fit"
                                >
                                    <h1 className='text-xl md:text-2xl'>{project.project_name}</h1>
                                    <hr className='option_hr' />
                                </div>
                            </div>
                        ))}
                        {visibleProjects < projects.filter(project => project.project_type == 'Front-End').length && (
                            <button to='/projects' className='flex items-center gap-2 md:gap-4 md:text-xl mt-5 py-2 px-5' onClick={() => setVisibleProjects(projects.filter(project => project.project_type == 'Front-End').length)}>
                                <MdArrowForward className='md:text-2xl'></MdArrowForward>
                                <div className='option'>
                                    <h1>See All</h1>
                                    <hr className='option_hr' />
                                </div>
                            </button>
                        )}
                    </div>
                    <div className={`w-2/3 items-center md:justify-center flex-grow ${clickedProject ? 'hidden' : 'flex'}`}>
                        {hoveredProject ? (
                            <div className={`grid grid-cols-1 gap-10 w-[600px] h-[350px]`}>
                                {
                                    hoveredProject.image.map(url => <img
                                        src={`${url}`}
                                        alt={hoveredProject.project_name}
                                        className="h-full w-full rounded-lg shadow-md"
                                        data-aos="fade-left"
                                    />)
                                }

                            </div>
                        ) : (
                            <div className="min-h-[200px] md:text-2xl max-w-lg text-center">Hover over a project to see the image and click for more details</div>
                        )}
                    </div>
                    <div onMouseEnter={() => setIsHover(true)} className={`w-2/3 md:items-center md:justify-center min-h-[200px] ${clickedProject ? 'flex' : 'hidden'}`}>
                        {clickedProject ? (
                            <div>
                                <iframe
                                    src={clickedProject.live_link}
                                    title="Live Link"
                                    width="100%"
                                    height="350px"
                                    className="hidden md:block mt-4 border-2 rounded-xl w-[600px]"
                                />
                                <div className='mt-5'>
                                    <h1>Project Name: {clickedProject.project_name}</h1>
                                    <h1>Project Category: {clickedProject.category}</h1>
                                    <h1>Features: </h1>
                                    {

                                    }
                                    <h1>Used Technologies: </h1>
                                    <h1>Live Link: <Link to={clickedProject.live_link} target='_blank'>Click Here</Link></h1>
                                </div>
                            </div>
                        ) : ''}
                    </div>
                </div>
                <div id="backEndTabContent" className="hidden flex-col-reverse md:flex-row gap-5 items-center w-full h-[70vh] md:h-fit">
                    <div className="w-full md:w-1/3 flex-grow md:h-[60vh] overflow-y-scroll pr-2 shadow-xl shadow-[#254756] p-5 rounded-2xl" style={{ scrollbarWidth: 'none' }}>
                        {projects.filter(project => project.project_type == 'Full-Stack').slice(0, visibleProjects).map((project, index) => (
                            <div
                                key={index}
                                className='rounded-lg shadow-md shadow-[#254756] mb-5 px-5 py-2 w-full'
                                onClick={() => { { setHoveredProject(null); setClickedProject(project); setIsHover(false); } }}
                                onMouseEnter={() => { if(isHover) {setHoveredProject(project); setClickedProject(null)} }}
                                onMouseLeave={() => setHoveredProject(null)}
                            >
                                <div
                                    className="option text-2xl rounded-lg cursor-pointer w-fit"
                                >
                                    <h1 className='text-xl md:text-2xl'>{project.project_name}</h1>
                                    <hr className='option_hr' />
                                </div>
                            </div>
                        ))}
                        {visibleProjects < projects.filter(project => project.project_type == 'Full-Stack').length && (
                            <button to='/projects' className='flex items-center gap-2 md:gap-4 md:text-xl mt-5 py-2 px-5' onClick={() => setVisibleProjects(projects.filter(project => project.project_type == 'Full-Stack').length)}>
                                <MdArrowForward className='md:text-2xl'></MdArrowForward>
                                <div className='option'>
                                    <h1>See All</h1>
                                    <hr className='option_hr' />
                                </div>
                            </button>
                        )}
                    </div>
                    <div className={`w-2/3 items-center md:justify-center flex-grow ${clickedProject ? 'hidden' : 'flex'}`}>
                        {hoveredProject ? (
                            <div className={`grid grid-cols-1 gap-10 w-[600px] h-[350px]`}>
                                {
                                    hoveredProject.image.map(url => <img
                                        src={`${url}`}
                                        alt={hoveredProject.project_name}
                                        className="h-full w-full rounded-lg shadow-md"
                                        data-aos="fade-left"
                                    />)
                                }

                            </div>
                        ) : (
                            <div className="min-h-[200px] md:text-2xl max-w-lg text-center">Hover over a project to see the image and click for more details</div>
                        )}
                    </div>
                    <div onMouseEnter={() => setIsHover(true)} className={`w-2/3 md:items-center md:justify-center min-h-[200px] ${clickedProject ? 'flex' : 'hidden'}`}>
                        {clickedProject ? (
                            <div>
                                <iframe
                                    src={clickedProject.live_link}
                                    title="Live Link"
                                    width="100%"
                                    height="350px"
                                    className="hidden md:block mt-4 border-2 rounded-xl w-[600px]"
                                />
                                <div className='mt-5'>
                                    <h1>Project Name: {clickedProject.project_name}</h1>
                                    <h1>Project Category: {clickedProject.category}</h1>
                                    <h1>Features: </h1>
                                    {

                                    }
                                    <h1>Used Technologies: </h1>
                                    <h1>Live Link: <Link to={clickedProject.live_link} target='_blank'>Click Here</Link></h1>
                                </div>
                            </div>
                        ) : ''}
                    </div>
                </div>
                
                
            </div>
        </div>
    );
};

export default Projects;