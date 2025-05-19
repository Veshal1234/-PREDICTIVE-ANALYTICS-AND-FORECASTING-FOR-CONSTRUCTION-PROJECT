import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useProjects } from '../hooks/useProjects';

const Analytics: React.FC = () => {
  const { projects, loading } = useProjects();

  // Sample data for overall analytics - in a real app, this would be calculated from project data
  const projectsByStatus = [
    { name: 'Planning', value: projects.filter(p => p.status === 'planning').length },
    { name: 'Active', value: projects.filter(p => p.status === 'active').length },
    { name: 'Completed', value: projects.filter(p => p.status === 'completed').length },
    { name: 'On Hold', value: projects.filter(p => p.status === 'on-hold').length },
  ];

  const statusColors = ['#9333EA', '#10B981', '#3B82F6', '#F59E0B'];

  const delayTrends = [
    { month: 'Jan', actual: 5, predicted: 4 },
    { month: 'Feb', actual: 7, predicted: 5 },
    { month: 'Mar', actual: 3, predicted: 3 },
    { month: 'Apr', actual: 4, predicted: 3 },
    { month: 'May', actual: 8, predicted: 6 },
    { month: 'Jun', actual: 6, predicted: 5 },
  ];

  const budgetPerformance = [
    { project: 'Highland Towers', planned: 1200000, actual: 1250000 },
    { project: 'Harbor Bridge', planned: 4500000, actual: 4400000 },
    { project: 'Metro Station', planned: 3800000, actual: 3950000 },
    { project: 'Office Complex', planned: 2900000, actual: 2875000 },
    { project: 'Riverside Apartments', planned: 2200000, actual: 2150000 },
  ];

  const riskFactors = [
    { factor: 'Weather', risk: 75 },
    { factor: 'Supply Chain', risk: 60 },
    { factor: 'Labor', risk: 45 },
    { factor: 'Technical', risk: 30 },
    { factor: 'Financial', risk: 50 },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Analytics Dashboard</h1>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-blue-50 dark:bg-blue-900/20 rounded-md p-3">
                <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    Total Projects
                  </dt>
                  <dd className="text-lg font-medium text-gray-900 dark:text-white">
                    {projects.length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-green-50 dark:bg-green-900/20 rounded-md p-3">
                <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    On Track Projects
                  </dt>
                  <dd className="text-lg font-medium text-gray-900 dark:text-white">
                    {projects.filter(p => !p.isDelayed).length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-amber-50 dark:bg-amber-900/20 rounded-md p-3">
                <svg className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    Delayed Projects
                  </dt>
                  <dd className="text-lg font-medium text-gray-900 dark:text-white">
                    {projects.filter(p => p.isDelayed).length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-teal-50 dark:bg-teal-900/20 rounded-md p-3">
                <svg className="h-6 w-6 text-teal-600 dark:text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    Total Budget
                  </dt>
                  <dd className="text-lg font-medium text-gray-900 dark:text-white">
                    ${projects.reduce((sum, p) => sum + p.budget, 0).toLocaleString()}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {/* Project Status */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Project Status</h3>
            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={projectsByStatus}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {projectsByStatus.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={statusColors[index % statusColors.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Delay Trends */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Delay Prediction Accuracy</h3>
            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={delayTrends}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="month" />
                  <YAxis label={{ value: 'Days', angle: -90, position: 'insideLeft' }} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="actual" name="Actual Delay" stroke="#F97316" strokeWidth={2} />
                  <Line type="monotone" dataKey="predicted" name="Predicted Delay" stroke="#3B82F6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Budget Analysis */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Budget Performance</h3>
            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={budgetPerformance}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis 
                    dataKey="project" 
                    tick={{ fontSize: 12 }}
                    tickFormatter={(value) => value.split(' ')[0]} // Show only first word
                  />
                  <YAxis tickFormatter={(value) => `$${value / 1000}k`} />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, undefined]}
                  />
                  <Legend />
                  <Bar dataKey="planned" name="Planned Budget" fill="#3B82F6" />
                  <Bar dataKey="actual" name="Actual Cost" fill="#F97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Risk Factors */}
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Risk Analysis</h3>
            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={riskFactors}
                  margin={{ top: 5, right: 30, left: 60, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="factor" type="category" />
                  <Tooltip formatter={(value) => [`${value}%`, 'Risk Factor']} />
                  <Bar dataKey="risk" name="Risk Level" fill="#EF4444">
                    {riskFactors.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.risk > 70 ? '#EF4444' : entry.risk > 50 ? '#F97316' : entry.risk > 30 ? '#FBBF24' : '#10B981'} 
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">AI-Generated Insights</h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
              Powered by ConstructAI
            </span>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <div className="space-y-4">
            <div className="bg-amber-50 dark:bg-amber-900/10 p-4 rounded-lg border-l-4 border-amber-500">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-amber-800 dark:text-amber-300">Weather Impact Analysis</h3>
                  <div className="mt-2 text-sm text-amber-700 dark:text-amber-200">
                    <p>Based on 10-year historical weather data, late summer projects in Boston have a 35% higher chance of weather-related delays. Consider scheduling critical outdoor phases outside August-September.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/10 p-4 rounded-lg border-l-4 border-green-500">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800 dark:text-green-300">Resource Optimization</h3>
                  <div className="mt-2 text-sm text-green-700 dark:text-green-200">
                    <p>Analysis of similar projects shows potential for 12% cost savings by resequencing construction phases for Highland Towers and Metro Station to share specialized equipment and contractor crews.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/10 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800 dark:text-blue-300">Supply Chain Forecast</h3>
                  <div className="mt-2 text-sm text-blue-700 dark:text-blue-200">
                    <p>Predictive models indicate a 23% probability of steel price increases in Q4 2025. Consider securing long-term contracts now for Harbor Bridge and Riverside Apartments projects.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;