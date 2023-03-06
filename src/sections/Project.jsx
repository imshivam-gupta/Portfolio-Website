import React from 'react'
import ProjectCard from '../components/ProjectCard';

const Project = () => {
  return (
    <div id="projects" className={"bg-gray-100 min-h-screen sm:px-6 lg:px-24 px-4"}>

        <div className="max-w-12xl mx-auto x-4  md:mt-0 pt-28 pb-12 bg-gray-100">
            <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
                Projects
            </h2>
        </div>

        <div>
          <div className="mt-8 flex justify-between items-stretch flex-wrap">
            <ProjectCard  
                imgsrc={'p1img.png'} 
                name={'Weather Scanner'} 
                description={"This website fetches the current weather data and displays it in real-time. Plus, you can add cities to your watchlist, so you're always in the know about the weather in your favorite locations"} 
                linksrc={'https://weather-scanner.netlify.app/'}
            />

            <ProjectCard  
                imgsrc={'p2img.png'} 
                name={'Portfolio'} 
                description={"My portfolio website showcases my skills and projects. From web development to algortihm designing, my website displays a diverse range of projects that I have worked on. "} 
                linksrc={'/'}
            />

            <ProjectCard  
                imgsrc={'pp3img.png'} 
                name={'Shopello'} 
                description={'Built an e-commerce site focusing more on functionailities rahter than designing.This was made with help of bootstrap and is resposnive. It Also has an admin panel includedin it'} 
                linksrc={'https://shopello-mern-app.onrender.com/'}
            />
            <ProjectCard  
                imgsrc={'p4img.png'} 
                name={'Fettle'} 
                description={'Built a sports-faciilities managmnet system for colleges. Also pitched this idea in various ideathons. And this website was ranked 3rd among 500+ teams'} 
                linksrc={'/'}
            />
            
          </div>
        </div>
        
    </div>
  )
}

export default Project
