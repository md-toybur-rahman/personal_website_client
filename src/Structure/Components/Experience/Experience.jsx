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
						<h1>November 2023 - January 2024</h1>
						<h1 className='text-md md:text-xl pt-4'>
							∘ Created and implemented reports using Crystal Reports. <br /> <br />
							∘ Conducted project testing and issue identification. <br /> <br />
							∘ Interacted with clients to gather requirements and relay them to the development team.
						</h1>

					</div>
				</div>
			</div>


			{/* next section */}
			<div className='mt-10 grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-20 pb-10'>
				<div data-aos="fade-right" data-aos-duration="1500" className='flex md:hidden mt-4'>
					{/* <img className='rounded-lg h-[250px]' src="https://i.ibb.co/dGKcNkL/IMG-4111-copy.jpg" alt="" /> */}
					<img className='rounded-lg h-[250px] object-cover' src="https://cdn.sanity.io/images/tlr8oxjg/production/3283b10ee349faee71b1bb5f4c48acf001870ce6-2912x1632.png?w=3840&q=80&fit=clip&auto=format" alt="" />
				</div>
				<div data-aos="fade-right" data-aos-duration="1500" className='hidden md:flex justify-center'>
					{/* <img className='rounded-lg h-[450px]' src="https://i.ibb.co/dGKcNkL/IMG-4111-copy.jpg" alt="" /> */}
					<img className='rounded-lg h-[350px] object-cover' src="https://cdn.sanity.io/images/tlr8oxjg/production/3283b10ee349faee71b1bb5f4c48acf001870ce6-2912x1632.png?w=3840&q=80&fit=clip&auto=format" alt="" />
				</div>
				<div data-aos="fade-left" data-aos-duration="1500" className='col-span-2'>
					<div className='mb-5'>
						<h1 className='text-4xl md:text-7xl font-bold mb-3'>Strengths</h1>
						<hr />
					</div>
					<div>
						<h1 className='font-semibold text-md md:text-xl pt-4'>∘ HTML, CSS, and Tailwind CSS: Crafting responsive and visually appealing projects. <br /> <br />
							∘ JavaScript Expertise: Developing efficient and maintainable web applications, achieving notable performance improvements. <br /> <br />
							∘ Cross-functional Teamwork: Proven experience in collaborating with diverse teams for feature development. <br /> <br />
							∘ Self-starter: Demonstrated ability to work independently and manage multiple projects simultaneously, ensuring timely and accurate results.</h1>

					</div>
				</div>
			</div>

			{/* next section */}
			<div className='mt-10 grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-20 pb-10'>
				<div data-aos="fade-left" data-aos-duration="1500" className='flex md:hidden mt-4'>
					{/* <img className='rounded-lg h-[250px]' src="https://i.ibb.co/dGKcNkL/IMG-4111-copy.jpg" alt="" /> */}
					<img className='rounded-lg h-[250px]' src="https://media.licdn.com/dms/image/D5622AQGPptRdUkk7aw/feedshare-shrink_800/0/1700511388963?e=2147483647&v=beta&t=j-m4PyV1VQgEyfMJ95A-hwuMOwNI5VJPGAXJKOAstkQ" alt="" />
				</div>
				<div data-aos="fade-right" data-aos-duration="1500" className='col-span-2'>
					<div className='mb-5'>
						<h1 className='text-4xl md:text-7xl font-bold mb-3'>Passions</h1>
						<hr />
					</div>
					<div>
						<h1 className='font-semibold text-md md:text-xl pt-4'>
							∘ Coding Challenges and Problem Solving: Enthusiastic about tackling complex problems through innovative coding solutions. <br /> <br />
							∘ Learning New Technologies: Continuously exploring and implementing the latest technologies to stay ahead in the field.
						</h1>

					</div>
				</div>
				<div data-aos="fade-left" data-aos-duration="1500" className='hidden md:flex justify-center'>
					{/* <img className='rounded-lg h-[450px]' src="https://i.ibb.co/dGKcNkL/IMG-4111-copy.jpg" alt="" /> */}
					<img className='rounded-lg h-[350px] object-cover' src="https://media.licdn.com/dms/image/D5622AQGPptRdUkk7aw/feedshare-shrink_800/0/1700511388963?e=2147483647&v=beta&t=j-m4PyV1VQgEyfMJ95A-hwuMOwNI5VJPGAXJKOAstkQ" alt="" />
				</div>
			</div>
		</div>
	);
};

export default Experience;