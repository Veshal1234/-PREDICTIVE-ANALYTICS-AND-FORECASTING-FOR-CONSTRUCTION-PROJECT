import React from 'react';

interface ProjectStatusCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
  bgColor: string;
  textColor: string;
}

const ProjectStatusCard: React.FC<ProjectStatusCardProps> = ({
  title,
  value,
  icon,
  bgColor,
  textColor,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`flex-shrink-0 rounded-md p-3 ${bgColor}`}>
            {icon}
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                {title}
              </dt>
              <dd>
                <div className={`text-lg font-medium ${textColor}`}>
                  {value}
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatusCard;