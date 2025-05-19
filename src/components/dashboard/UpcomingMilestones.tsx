import React from 'react';
import { CalendarClock } from 'lucide-react';

const UpcomingMilestones: React.FC = () => {
  // Sample data - in a real app, this would come from the backend
  const milestones = [
    {
      id: 1,
      project: 'Highland Towers',
      name: 'Foundation Completion',
      dueDate: '2025-07-25',
      status: 'on-track',
    },
    {
      id: 2,
      project: 'Metro Station',
      name: 'Structural Framework',
      dueDate: '2025-08-03',
      status: 'at-risk',
    },
    {
      id: 3,
      project: 'Harbor Bridge',
      name: 'Pillar Installation',
      dueDate: '2025-08-10',
      status: 'on-track',
    },
    {
      id: 4,
      project: 'Office Complex',
      name: 'Electrical Systems',
      dueDate: '2025-08-15',
      status: 'delayed',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'on-track':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-300">
            On Track
          </span>
        );
      case 'at-risk':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300">
            At Risk
          </span>
        );
      case 'delayed':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/20 dark:text-red-300">
            Delayed
          </span>
        );
      default:
        return null;
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

  return (
    <div className="flow-root">
      <ul className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
        {milestones.map((milestone) => (
          <li key={milestone.id} className="py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <CalendarClock className="h-6 w-6 text-blue-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {milestone.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {milestone.project}
                </p>
              </div>
              <div className="flex-shrink-0 text-sm text-gray-500 dark:text-gray-400">
                {formatDate(milestone.dueDate)}
              </div>
              <div className="flex-shrink-0">
                {getStatusBadge(milestone.status)}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMilestones;