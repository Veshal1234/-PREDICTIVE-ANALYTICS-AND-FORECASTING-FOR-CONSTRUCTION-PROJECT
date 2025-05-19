import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TabsContent, TabsList, TabsTrigger, Tabs } from '../components/ui/Tabs';
import ProjectOverview from '../components/projects/ProjectOverview';
import ProjectTasks from '../components/projects/ProjectTasks';
import ProjectAnalytics from '../components/projects/ProjectAnalytics';
import ProjectFiles from '../components/projects/ProjectFiles';
import { useProject } from '../hooks/useProject';

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { project, loading, error } = useProject(id || '');
  const [activeTab, setActiveTab] = useState('overview');

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-400 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-red-700 dark:text-red-300">
              {error}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="text-center py-12">
        <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Project not found</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          The project you're looking for doesn't exist or you don't have access to it.
        </p>
        <div className="mt-6">
          <Link
            to="/projects"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = () => {
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

  return (
    <div className="space-y-6">
      {/* Project header */}
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-0">
              {project.name}
            </h1>
            <div className="flex space-x-3">
              <span className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium ${getStatusColor()}`}>
                {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
              </span>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Edit Project
              </button>
            </div>
          </div>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            {project.description}
          </p>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Start Date</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">{new Date(project.startDate).toLocaleDateString()}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">End Date</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">{new Date(project.endDate).toLocaleDateString()}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Budget</dt>
              <dd className="mt-1 text-sm text-gray-900 dark:text-white">${project.budget.toLocaleString()}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Project tabs */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="files">Files & Documents</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="p-0">
          <ProjectOverview project={project} />
        </TabsContent>
        
        <TabsContent value="tasks" className="p-0">
          <ProjectTasks project={project} />
        </TabsContent>
        
        <TabsContent value="analytics" className="p-0">
          <ProjectAnalytics project={project} />
        </TabsContent>
        
        <TabsContent value="files" className="p-0">
          <ProjectFiles project={project} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProjectDetails;