import React, { useState } from 'react';
import { Project } from '../../types/project';
import { Plus, ChevronDown, ChevronUp, CheckCircle, Circle, Clock, AlertTriangle } from 'lucide-react';

interface ProjectTasksProps {
  project: Project;
}

const ProjectTasks: React.FC<ProjectTasksProps> = ({ project }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(['Planning', 'Foundation']);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  // Sample task data - in a real app, this would come from the backend
  const taskCategories = [
    {
      name: 'Planning',
      tasks: [
        { id: 1, name: 'Site analysis', status: 'completed', dueDate: '2025-06-10' },
        { id: 2, name: 'Architectural drawings', status: 'completed', dueDate: '2025-06-15' },
        { id: 3, name: 'Permits and approvals', status: 'completed', dueDate: '2025-06-20' },
      ]
    },
    {
      name: 'Foundation',
      tasks: [
        { id: 4, name: 'Excavation', status: 'completed', dueDate: '2025-06-25' },
        { id: 5, name: 'Foundation pouring', status: 'in-progress', dueDate: '2025-07-05' },
        { id: 6, name: 'Curing', status: 'not-started', dueDate: '2025-07-15' },
      ]
    },
    {
      name: 'Structural Framework',
      tasks: [
        { id: 7, name: 'Steel frame installation', status: 'not-started', dueDate: '2025-07-20' },
        { id: 8, name: 'Floor slab construction', status: 'not-started', dueDate: '2025-08-01' },
        { id: 9, name: 'Roof framing', status: 'not-started', dueDate: '2025-08-15' },
      ]
    },
    {
      name: 'Exterior Work',
      tasks: [
        { id: 10, name: 'External wall construction', status: 'not-started', dueDate: '2025-08-20' },
        { id: 11, name: 'Window installation', status: 'not-started', dueDate: '2025-09-01' },
        { id: 12, name: 'Exterior painting', status: 'not-started', dueDate: '2025-09-15' },
      ]
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'delayed':
        return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default:
        return <Circle className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Project Tasks</h3>
        <button 
          className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Plus className="h-4 w-4 mr-1" />
          Add Task
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <span className="text-blue-600 dark:text-blue-400 text-lg font-semibold mr-2">
              {project.completedTasks}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-lg font-semibold">
              / {project.totalTasks} Complete
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mr-2">
              Progress:
            </span>
            <div className="w-48 bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${(project.completedTasks / project.totalTasks) * 100}%` }}
              ></div>
            </div>
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              {Math.round((project.completedTasks / project.totalTasks) * 100)}%
            </span>
          </div>
        </div>

        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {taskCategories.map((category) => (
            <div key={category.name} className="bg-white dark:bg-gray-800">
              <button
                className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-750 focus:outline-none"
                onClick={() => toggleCategory(category.name)}
              >
                <div className="flex items-center">
                  {expandedCategories.includes(category.name) ? (
                    <ChevronUp className="h-5 w-5 text-gray-400 mr-2" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 mr-2" />
                  )}
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {category.name}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-24 mr-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${(category.tasks.filter(t => t.status === 'completed').length / category.tasks.length) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {category.tasks.filter(t => t.status === 'completed').length}/{category.tasks.length}
                  </span>
                </div>
              </button>

              {expandedCategories.includes(category.name) && (
                <div className="px-4 py-2 space-y-1">
                  {category.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="flex items-center p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-750"
                    >
                      <div className="mr-2">
                        {getStatusIcon(task.status)}
                      </div>
                      <div className="flex-1 ml-2">
                        <p className={`text-sm ${
                          task.status === 'completed' 
                            ? 'text-gray-500 dark:text-gray-400 line-through' 
                            : 'text-gray-900 dark:text-white'
                        }`}>
                          {task.name}
                        </p>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Due: {new Date(task.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTasks;