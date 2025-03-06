
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Lightbulb, CheckCircle, Target, Tool, Puzzle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { projectsData } from '../components/Projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectIndex = id ? parseInt(id) : -1;
  const project = projectIndex >= 0 ? projectsData[projectIndex] : null;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-3xl font-medium mb-4">Project Not Found</h1>
            <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/#projects" 
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Image */}
      <div className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6">
          <span className="text-sm font-medium uppercase tracking-wider mb-3 bg-primary/80 px-3 py-1 rounded-full">
            {project.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-medium text-center max-w-4xl">{project.title}</h1>
        </div>
      </div>
      
      <main className="flex-grow py-16 px-6 md:px-10 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium transition-transform hover:translate-x-[-5px]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          
          <div className="mb-12 space-y-8">
            {/* Overview Section */}
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed first-letter:text-3xl first-letter:font-medium first-letter:mr-1">
                {project.description}
              </p>
              
              {project.fullDescription && project.fullDescription.map((paragraph, index) => (
                <p key={index} className="my-4">{paragraph}</p>
              ))}
            </div>
            
            {/* Project Details Sections with Icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {project.challenges && (
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border/50 transform transition-transform hover:translate-y-[-5px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 p-2 rounded-full">
                      <Lightbulb className="h-5 w-5 text-red-600" />
                    </div>
                    <h2 className="text-xl font-medium">Challenges</h2>
                  </div>
                  <p className="text-muted-foreground">{project.challenges}</p>
                </div>
              )}
              
              {project.solutions && (
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border/50 transform transition-transform hover:translate-y-[-5px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <Puzzle className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-medium">Solutions</h2>
                  </div>
                  <p className="text-muted-foreground">{project.solutions}</p>
                </div>
              )}
              
              {project.results && (
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border/50 transform transition-transform hover:translate-y-[-5px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <h2 className="text-xl font-medium">Results</h2>
                  </div>
                  <p className="text-muted-foreground">{project.results}</p>
                </div>
              )}
              
              {project.technologies && (
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border/50 transform transition-transform hover:translate-y-[-5px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <Tool className="h-5 w-5 text-purple-600" />
                    </div>
                    <h2 className="text-xl font-medium">Tools & Technologies</h2>
                  </div>
                  <p className="text-muted-foreground">{project.technologies}</p>
                </div>
              )}
              
              {project.methodologies && (
                <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-border/50 transform transition-transform hover:translate-y-[-5px]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-amber-100 p-2 rounded-full">
                      <Target className="h-5 w-5 text-amber-600" />
                    </div>
                    <h2 className="text-xl font-medium">Methodologies</h2>
                  </div>
                  <p className="text-muted-foreground">{project.methodologies}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
