import React from 'react';
import { Project } from '../../types/project';
import { Users, Calendar, Clock, DollarSign, Map, Building } from 'lucide-react';

interface ProjectOverviewProps {
  project: Project;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ project }) => {
  return (
    <div className="space-y-6">
      {/* Project Details */}
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Project Overview</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            Key information and project details.
          </p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Project Type</h4>
                  <p className="mt-1 text-sm text-gray-900 dark:text-white">{project.type || 'Commercial Building'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Map className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</h4>
                  <p className="mt-1 text-sm text-gray-900 dark:text-white">{project.location || '123 Construction Ave, Boston, MA'}</p>
                </div>
              </div>
              <div className="flex items-start">
                <DollarSign className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Budget</h4>
                  <p className="mt-1 text-sm text-gray-900 dark:text-white">${project.budget.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</h4>
                  <p className="mt-1 text-sm text-gray-900 dark:text-white">
                    {new Date(project.startDate).toLocaleDateString()} - {new Date(project.endDate).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Team Size</h4>
                  <p className="mt-1 text-sm text-gray-900 dark:text-white">{project.teamSize} members</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Estimated Completion</h4>
                  <div className="mt-1 flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(project.completedTasks / project.totalTasks) * 100}%` }}></div>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {Math.round((project.completedTasks / project.totalTasks) * 100)}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Project Description</h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {project.description || `
              This commercial building project involves the construction of a 12-story office tower in downtown Boston. 
              The building will feature modern architectural design with glass facades, energy-efficient systems, and 
              state-of-the-art facilities. The project aims to achieve LEED Gold certification through sustainable 
              construction practices and materials.
              
              The construction includes underground parking, ground floor retail spaces, and office spaces on the upper floors.
              Special considerations have been made for seismic resistance and environmental impact.
            `}
          </p>
        </div>
      </div>

      {/* Project Team */}
      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Project Team</h3>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'Alex Johnson', role: 'Project Manager', avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=random' },
              { name: 'Sarah Williams', role: 'Lead Architect', avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams&background=random' },
              { name: 'Mike Chen', role: 'Structural Engineer', avatar: 'https://ui-avatars.com/api/?name=Mike+Chen&background=random' },
              { name: 'Emily Davis', role: 'Site Supervisor', avatar: 'https://ui-avatars.com/api/?name=Emily+Davis&background=random' },
            ].map((member, index) => (
              <li key={index} className="flex items-center space-x-3 py-2">
                <img className="h-10 w-10 rounded-full" src={member.avatar} alt={member.name} />
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{member.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{member.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;