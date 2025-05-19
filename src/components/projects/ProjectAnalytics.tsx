import React from 'react';
import { Project } from '../../types/project';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';

interface ProjectAnalyticsProps {
  project: Project;
}

const ProjectAnalytics: React.FC<ProjectAnalyticsProps> = ({ project }) => {
  // Sample data - in a real app, this would come from the backend
  const timelineData = [
    { name: 'Planning', planned: 20, actual: 25 },
    { name: 'Foundation', planned: 30, actual: 35 },
    { name: 'Framing', planned: 25, actual: 20 },
    { name: 'Electrical', planned: 15, actual: 15 },
    { name: 'Plumbing', planned: 20, actual: 25 },
    { name: 'Finishes', planned: 15, actual: 0 },
  ];

  const progressData = [
    { name: 'Week 1', planned: 5, actual: 3 },
    { name: 'Week 2', planned: 10, actual: 7 },
    { name: 'Week 3', planned: 15, actual: 12 },
    { name: 'Week 4', planned: 20, actual: 15 },
    { name: 'Week 5', planned: 25, actual: 20 },
    { name: 'Week 6', planned: 30, actual: 23 },
    { name: 'Week 7', planned: 40, actual: 30 },
    { name: 'Week 8', planned: 45, actual: 35 },
  ];

  const budgetData = [
    { name: 'Materials', planned: 120000, actual: 125000 },
    { name: 'Labor', planned: 85000, actual: 90000 },
    { name: 'Equipment', planned: 40000, actual: 38000 },
    { name: 'Permits', planned: 15000, actual: 15000 },
    { name: 'Other', planned: 25000, actual: 27000 },
  ];

  const riskFactors = [
    { name: 'Weather', value: 75 },
    { name: 'Resource', value: 45 },
    { name: 'Technical', value: 60 },
    { name: 'Financial', value: 30 },
    { name: 'Schedule', value: 85 },
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Timeline Analysis */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Timeline Analysis (Days)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={timelineData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`${value} days`, undefined]}
                />
                <Legend />
                <Bar dataKey="planned" name="Planned" fill="#3B82F6" />
                <Bar dataKey="actual" name="Actual" fill="#F97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Progress Tracking */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Progress Tracking (% Complete)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={progressData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="planned" name="Planned" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="actual" name="Actual" stroke="#F97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Budget Analysis */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Budget Analysis</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={budgetData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                <Tooltip 
                  formatter={(value) => [formatCurrency(value as number), undefined]}
                />
                <Legend />
                <Bar dataKey="planned" name="Planned" fill="#3B82F6" />
                <Bar dataKey="actual" name="Actual" fill="#F97316" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Risk Assessment */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Risk Assessment</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={riskFactors}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, 'Risk Factor']} />
                <Area type="monotone" dataKey="value" name="Risk Level" fill="#F43F5E" stroke="#E11D48" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* AI Predictions Section */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">AI-Driven Predictions</h3>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
            Powered by ConstructAI
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Projected Completion</h4>
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Nov 15, 2025</span>
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
                +12 days
              </span>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Budget Forecast</h4>
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">$1,235,000</span>
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300">
                +$35,000
              </span>
            </div>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Risk Score</h4>
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900 dark:text-white">Medium</span>
              <div className="ml-3 flex-1">
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div className="bg-amber-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">65%</span>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">AI Insights</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <p className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                Potential scheduling conflict detected in Electrical phase starting Aug 15. Recommend reassessing contractor availability.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <p className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                Weather forecast indicates clear conditions for the next 14 days, favorable for foundation curing phase.
              </p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <p className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                Based on similar projects, consider ordering steel materials 2 weeks earlier than planned to avoid potential supply chain delays.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectAnalytics;