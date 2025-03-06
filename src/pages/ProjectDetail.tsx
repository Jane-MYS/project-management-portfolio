
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
      <main className="flex-grow py-32 px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/#projects" 
            className="inline-flex items-center gap-2 text-primary hover:underline mb-8 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
          
          <div className="mb-12">
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-medium mt-2 mb-8">{project.title}</h1>
            
            <div className="aspect-video w-full rounded-lg overflow-hidden mb-8">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">{project.description}</p>
              
              {project.fullDescription && project.fullDescription.map((paragraph, index) => (
                <p key={index} className="my-4">{paragraph}</p>
              ))}
              
              {project.challenges && (
                <>
                  <h2 className="text-2xl font-medium mt-8 mb-4">Challenges</h2>
                  <p>{project.challenges}</p>
                </>
              )}
              
              {project.solutions && (
                <>
                  <h2 className="text-2xl font-medium mt-8 mb-4">Solutions</h2>
                  <p>{project.solutions}</p>
                </>
              )}
              
              {project.results && (
                <>
                  <h2 className="text-2xl font-medium mt-8 mb-4">Results</h2>
                  <p>{project.results}</p>
                </>
              )}
              
              {project.technologies && (
                <>
                  <h2 className="text-2xl font-medium mt-8 mb-4">Tools & Technologies</h2>
                  <p>{project.technologies}</p>
                </>
              )}
              
              {project.methodologies && (
                <>
                  <h2 className="text-2xl font-medium mt-8 mb-4">Methodologies</h2>
                  <p>{project.methodologies}</p>
                </>
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
