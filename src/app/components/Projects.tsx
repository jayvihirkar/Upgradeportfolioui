import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern full-stack e-commerce platform with real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzY1NzUxMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard with interactive charts, data visualization, and comprehensive reporting features for business intelligence.',
    tech: ['React', 'TypeScript', 'D3.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1748609160056-7b95f30041f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY1Njk3NTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Mobile Fitness App',
    description: 'Cross-platform mobile fitness application with workout tracking, progress analytics, and personalized training plans.',
    tech: ['React Native', 'Firebase', 'Redux', 'Express'],
    image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1NzEzMjI2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Portfolio CMS',
    description: 'Custom content management system for creative professionals with drag-and-drop interface, image optimization, and SEO tools.',
    tech: ['Next.js', 'PostgreSQL', 'Prisma', 'AWS'],
    image: 'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzY1NjkyMDk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, y }}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="relative max-w-4xl w-full h-[600px] overflow-hidden group">
        {/* Blurred background image */}
        <motion.div
          className="absolute inset-0"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${project.image})`,
              filter: 'blur(20px) brightness(0.4)',
              transform: 'scale(1.1)',
            }}
          />
        </motion.div>

        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, margin: '-100px' }}
          >
            <div className="text-sm text-gray-400 mb-2">Project {String(index + 1).padStart(2, '0')}</div>
            <h2 className="text-5xl md:text-6xl mb-6">{project.title}</h2>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.link && (
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Visit Site
                </button>
              )}
              {project.github && (
                <button className="flex items-center gap-2 px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors">
                  <Github className="w-4 h-4" />
                  View Code
                </button>
              )}
            </div>
          </motion.div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-7xl md:text-9xl mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              backgroundPosition: {
                duration: 8,
                repeat: Infinity,
                ease: 'linear'
              }
            }}
            style={{
              backgroundSize: '200% 100%'
            }}
          >
            Projects
          </motion.h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work, showcasing modern web development and creative solutions.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 text-gray-500"
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </div>

      {/* Projects */}
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}

      {/* Footer */}
      <div className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl md:text-7xl mb-6">Let's Work Together</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing.
          </p>
          <a
            href="mailto:jay@example.com"
            className="inline-block px-12 py-4 bg-white text-black hover:bg-gray-200 transition-colors text-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </div>
  );
}