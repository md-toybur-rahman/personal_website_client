import React from 'react';

const About = () => {

    return (
        <div data-aos="fade-down" data-aos-duration="1500" className='flex flex-col justify-center min-h-[90vh] mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-20 pb-10'>
                <div data-aos="fade-left" data-aos-duration="1500" className='flex md:hidden mt-4'>
                    {/* <img className='rounded-lg h-[250px]' src="https://i.ibb.co/dGKcNkL/IMG-4111-copy.jpg" alt="" /> */}
                    <img className='rounded-lg h-[250px]' src="https://i.ibb.co/zHTgWJJ/crop-pic.jpg" alt="" />
                </div>
                <div data-aos="fade-right" data-aos-duration="1500" className='col-span-2'>
                    <div className='mb-5'>
                        <h1 className='text-4xl md:text-7xl font-bold mb-3'>About</h1>
                        <hr />
                    </div>
                    <div>
                        <h1 className='font-semibold text-md md:text-xl pt-4'>I am a dedicated Front End Developer with over 18 months of professional experience and more than 5 years working with HTML, CSS, and JavaScript. I have a strong foundation in front-end development and specialize in creating responsive, user-friendly interfaces. My expertise extends to using modern tools and frameworks like React, Tailwind CSS, and Bootstrap.

                            In addition to front-end development, I have experience with back-end technologies such as Node.js, Express.js, and MongoDB. I am committed to efficient time management and target-oriented work, making me a reliable and effective developer. My skills in communication, collaboration, and technical documentation further enhance my ability to deliver high-quality projects.</h1>

                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1500" className='hidden md:flex justify-center'>
                    {/* <img className='rounded-lg h-[450px]' src="https://i.ibb.co/dGKcNkL/IMG-4111-copy.jpg" alt="" /> */}
                    <img className='rounded-lg h-[350px]' src="https://i.ibb.co/zHTgWJJ/crop-pic.jpg" alt="" />
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

export default About;