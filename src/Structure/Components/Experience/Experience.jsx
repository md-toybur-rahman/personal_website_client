import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
	return (
		<div data-aos="fade-down" data-aos-duration="1500" className='flex flex-col justify-center min-h-[90vh] mt-20'>
			<div className='mb-5'>
				<h1 className='text-4xl md:text-7xl font-bold mb-3'>Experience</h1>
				<hr />
			</div>
			<div className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 pb-10'>

				<div data-aos="fade-right" data-aos-duration="1500" className='col-span-5'>
					<div>
						<h1 className='text-md md:text-xl font-semibold'>Front End Developer</h1>
						<h1 className='text-md md:text-xl font-semibold'>Kites Developer LTD. (Remote)</h1>
						<h1>September 2023 - April 2024</h1>
						<h1 className='text-md md:text-xl pt-4'>
							∘ Designed and developed front-end solutions using HTML, CSS, Tailwind CSS, JavaScript, and React. <br /> <br />
							∘ Customized and optimized websites for enhanced performance. <br /> <br />
							∘ Developed various web components such as landing pages, puzzle games, forms, and voting platforms.
						</h1>

					</div>
				</div>
				<div className='w-1 h-full bg-gray-300 mx-auto hidden md:block'></div>
				<div data-aos="fade-left" data-aos-duration="1500" className='flex justify-end col-span-5'>
				<div>
						<h1 className='text-md md:text-xl font-semibold'>Application Specialist</h1>
						<h1 className='text-md md:text-xl font-semibold'>Progeny Technologies LTD. (Onsite Internship)</h1>
						<h1>November 2022 - January 2023</h1>
						<h1 className='text-md md:text-xl pt-4'>
							∘ Created and implemented reports using Crystal Reports. <br /> <br />
							∘ Conducted project testing and issue identification. <br /> <br />
							∘ Interacted with clients to gather requirements and relay them to the development team.
						</h1>

					</div>
				</div>
			</div>
			<div className='mb-5'>
				<h1 className='text-4xl md:text-7xl font-bold mb-3'>Certifications</h1>
				<hr />
			</div>
			<div className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 pb-10'>

				<div data-aos="fade-right" data-aos-duration="1500" className='col-span-5'>
					<div>
						<h1 className='text-md md:text-xl font-semibold'>Complete Web Development</h1>
						<h1>January 2023 - June 2023</h1>
						<h1 className='text-md md:text-xl pt-4'>
							∘  Advanced programming and web development concepts covering both front-end and back-end technologies. Course provider: Programming Hero.
						</h1>

					</div>
				</div>
				<div className='w-1 h-full bg-gray-300 mx-auto hidden md:block'></div>
				<div data-aos="fade-left" data-aos-duration="1500" className='flex justify-end col-span-5'>
				<div>
						<h1 className='text-md md:text-xl font-semibold'>Graphics Design</h1>
						<h1>February 2018 - May 2018</h1>
						<h1 className='text-md md:text-xl pt-4'>
							∘ Learned graphics design related works like logo design, banner design, picture editing, etc.
						</h1>

					</div>
				</div>
			</div>
			<div className='mb-5'>
				<h1 className='text-4xl md:text-7xl font-bold mb-3'>Volunteering</h1>
				<hr />
			</div>
			<div className='grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 pb-10'>

				<div data-aos="fade-right" data-aos-duration="1500" className='col-span-5'>
					<div>
						<h1 className='text-md md:text-xl font-semibold'>Member</h1>
						<h1 className='text-md md:text-xl font-semibold'>Social Youth Club</h1>
						<h1>2023 - Present</h1>
						<h1 className='text-md md:text-xl pt-4'>
							∘ Working for youth generations and social developments.
						</h1>

					</div>
				</div>
				<div className='w-1 h-full bg-gray-300 mx-auto hidden md:block'></div>
				<div data-aos="fade-left" data-aos-duration="1500" className='flex justify-end col-span-5'>
				<div>
						<h1 className='text-md md:text-xl font-semibold'>Vice President</h1>
						<h1 className='text-md md:text-xl font-semibold'>English Language Club)</h1>
						<h1>February 2019 - October 2020</h1>
						<h1 className='text-md md:text-xl pt-4'>
							∘ Worked for students' English proficiency and team management.
						</h1>

					</div>
				</div>
			</div>
		</div>
	);
};

export default Experience;