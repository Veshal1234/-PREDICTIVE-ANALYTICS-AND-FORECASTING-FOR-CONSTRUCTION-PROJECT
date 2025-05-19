import React, { useState } from 'react';
import { useProjects } from '../hooks/useProjects';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Forecasting: React.FC = () => {
  const { projects, loading } = useProjects();
  const [selectedProject, setSelectedProject] = useState<string>('all');
  
  // Sample forecast data - in a real app, this would come from the backend/AI model
  const timelineData = [
    { month: 'Jul', baseline: 0, optimistic: 0, pessimistic: 0 },
    { month: 'Aug', baseline: 3, optimistic: 2, pessimistic: 5 },
    { month: 'Sep', baseline: 5, optimistic: 3, pessimistic: 8 },
    { month: 'Oct', baseline: 7, optimistic: 5, pessimistic: 12 },
    { month: 'Nov', baseline: 10, optimistic: 7, pessimistic: 15 },
    { month: 'Dec', baseline: 12, optimistic: 8, pessimistic: 18 },
  ];

  const budgetData = [
    { month: 'Jul', baseline: 0, optimistic: 0, pessimistic: 0 },
    { month: 'Aug', baseline: 25000, optimistic: 20000, pessimistic: 35000 },
    { month: 'Sep', baseline: 40000, optimistic: 35000, pessimistic: 55000 },
    { month: 'Oct', baseline: 65000, optimistic: 55000, pessimistic: 80000 },
    { month: 'Nov', baseline: 85000, optimistic: 70000, pessimistic: 110000 },
    { month: 'Dec', baseline: 100000, optimistic: 90000, pessimistic: 140000 },
  ];

  const resourceData = [
    { resource: 'Concrete', baseline: 85, optimistic: 80, pessimistic: 95 },
    { resource: 'Steel', baseline: 110, optimistic: 100, pessimistic: 125 },
    { resource: 'Labor', baseline: 2200, optimistic: 2000, pessimistic: 2400 },
    { resource: 'Equipment', baseline: 45, optimistic: 40, pessimistic: 55 },
  ];

  const riskFactors = [
    { scenario: 'Weather Delays', probability: 65, impact: 12 },
    { scenario: 'Material Shortages', probability: 45, impact: 18 },
    { scenario: 'Labor Shortage', probability: 30, impact: 15 },
    { scenario: 'Permit Delays', probability: 25, impact: 21 },
    { scenario: 'Design Changes', probability: 40, impact: 14 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">AI-Powered Forecasting</h1>
        
        <div className="flex items-center space-x-4">
          <label htmlFor="project-select" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Project:
          </label>
          <select
            id="project-select"
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white sm:text-sm rounded-md"
          >
            <option value="all">All Projects</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </select>
          
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Run Forecast
          </button>
        </div>
      </div>

      {/* AI Model Info */}
      <div className="bg-gradient-to-br from-blue-700 to-blue-900 text-white rounded-lg shadow-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-4 md:mb-0">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-200 text-blue-800">
              AI-Powered
            </span>
            <h2 className="mt-2 text-xl font-bold">ConstructAI Prediction Engine</h2>
            <p className="mt-1 text-blue-200">
              Using machine learning to analyze historical data and predict future outcomes
            </p>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-sm text-blue-200">Confidence Level</span>
            <span className="text-3xl font-bold">87%</span>
            <span className="text-sm text-blue-200">Based on 243 similar projects</span>
          </div>
        </div>
      </div>

      {/* Timeline Forecast */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Timeline Forecast</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            Projected delay in days across multiple scenarios
          </p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={timelineData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" />
                <YAxis label={{ value: 'Projected Delay (days)', angle: -90, position: 'insideLeft' }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="baseline" name="Baseline Forecast" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="optimistic" name="Optimistic Scenario" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="pessimistic" name="Pessimistic Scenario" stroke="#F97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Budget Forecast */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Budget Variance Forecast</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
            Projected cost overruns across multiple scenarios
          </p>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={budgetData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" />
                <YAxis tickFormatter={(value) => `$${value/1000}k`} />
                <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, undefined]} />
                <Legend />
                <Line type="monotone" dataKey="baseline" name="Baseline Forecast" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="optimistic" name="Optimistic Scenario" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="pessimistic" name="Pessimistic Scenario" stroke="#F97316" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Resource and Risk Forecasts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Resource Forecast */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Resource Utilization Forecast</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={resourceData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="resource" />
                  <YAxis 
                    label={{ 
                      value: 'Units / Hours (x100)', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' }
                    }} 
                  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="baseline" name="Baseline Estimate" fill="#3B82F6" />
                  <Bar dataKey="optimistic" name="Optimistic Estimate" fill="#10B981" />
                  <Bar dataKey="pessimistic" name="Pessimistic Estimate" fill="#F97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Risk Analysis */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">Risk Impact Assessment</h3>
          </div>
          <div className="px-4 py-5 sm:p-6">
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={riskFactors}
                  margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis type="number" />
                  <YAxis 
                    dataKey="scenario" 
                    type="category" 
                    scale="band" 
                  />
                  <Tooltip 
                    formatter={(value, name) => {
                      if (name === 'probability') return [`${value}%`, 'Probability'];
                      return [`${value} days`, 'Impact'];
                    }}
                  />
                  <Legend />
                  <Bar dataKey="probability" name="Probability (%)" fill="#3B82F6" />
                  <Bar dataKey="impact" name="Impact (days)" fill="#F97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">AI-Generated Recommendations</h3>
            <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 dark:text-blue-200 dark:bg-blue-900/20 dark:hover:bg-blue-900/30">
              Export Report
            </button>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Timeline Optimization</h4>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Based on historical weather patterns and current project timeline, consider adjusting the foundation
                  pouring schedule to avoid the forecasted heavy rainfall period (August 15-25). This could potentially
                  reduce weather-related delays by 60%.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-green-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Budget Risk Mitigation</h4>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Analysis predicts a 35% probability of steel price increases in Q4. Consider securing fixed-price
                  contracts for structural steel now to mitigate budget risks. Potential savings of $35,000-50,000 based
                  on projected market fluctuations.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-amber-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </span>
              </div>
              <div>
                <h4 className="text-lg font-medium text-gray-900 dark:text-white">Resource Allocation Warning</h4>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Forecast indicates a high probability (75%) of skilled labor shortages in the electrical phase starting
                  September 10. Consider securing specialized contractors 30 days earlier than planned or adjusting the
                  project schedule to avoid competition with three other major projects starting in the same timeframe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecasting;