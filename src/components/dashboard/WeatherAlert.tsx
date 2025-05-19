import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface WeatherAlertProps {
  location: string;
  forecast: string;
  impact: 'Low' | 'Medium' | 'High';
  projects: string[];
}

const WeatherAlert: React.FC<WeatherAlertProps> = ({
  location,
  forecast,
  impact,
  projects,
}) => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  const getImpactColor = () => {
    switch (impact) {
      case 'Low':
        return 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-300';
      case 'Medium':
        return 'text-orange-800 bg-orange-100 dark:bg-orange-900/20 dark:text-orange-300';
      case 'High':
        return 'text-red-800 bg-red-100 dark:bg-red-900/20 dark:text-red-300';
      default:
        return 'text-yellow-800 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-300';
    }
  };

  return (
    <div className={`rounded-md p-4 ${getImpactColor()}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <div className="ml-3 flex-1 md:flex md:justify-between">
          <p className="text-sm">
            <strong>Weather Alert:</strong> {forecast} forecasted at {location}. May impact {projects.join(', ')}.
          </p>
          <p className="mt-3 text-sm md:mt-0 md:ml-6">
            <button className="font-medium hover:underline">
              View details
            </button>
          </p>
        </div>
        <button 
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 ml-2"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default WeatherAlert;