import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Calendar, DollarSign, Users, AlertTriangle } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getProgressColor = () => {
    const progress = (project.completedTasks / project.totalTasks) * 100;
    if (progress < 25) return 'bg-red-500';
    if (progress < 50) return 'bg-amber-500';
    if (progress < 75) return 'bg-blue-500';
    return 'bg-green-500';
  };

  const getStatusBadge = () => {
    switch (project.status) {
      case 'planning':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300';
      case 'active':
        return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
      case 'completed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
      case 'on-hold':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  const progressPercentage = Math.round((project.completedTasks / project.totalTasks) * 100);

  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg transition-all hover:shadow-md">
      <div className="relative">
        {project.isDelayed && (
          <div className="absolute top-2 right-2 flex items-center p-1.5 rounded-md bg-amber-100 dark:bg-amber-900/30">
            <AlertTriangle className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <span className="ml-1 text-xs font-medium text-amber-600 dark:text-amber-400">Delayed</span>
          </div>
        )}
        <img 
          src={project.image || "https://images.pexels.com/photos/158551/architecture-construction-build-building-158551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} 
          alt={project.name}
          className="h-40 w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadge()}`}>
              {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
            </span>
            <h3 className="mt-1 text-lg font-medium text-white">{project.name}</h3>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-4">
        <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">{project.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 text-gray-400 mr-1.5" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(project.startDate)}
            </span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 text-gray-400 mr-1.5" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(project.endDate)}
            </span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 text-gray-400 mr-1.5" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              ${project.budget.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 text-gray-400 mr-1.5" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {project.teamSize} members
            </span>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Progress</span>
            <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className={`${getProgressColor()} h-2 rounded-full`} style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-end">
          <Link
            to={`/projects/${project.id}`}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;