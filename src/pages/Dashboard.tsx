import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, CalendarClock, CheckCircle, ClipboardCheck, Clock } from 'lucide-react';
import ProjectStatusCard from '../components/dashboard/ProjectStatusCard';
import DelayRiskChart from '../components/dashboard/DelayRiskChart';
import TaskCompletionChart from '../components/dashboard/TaskCompletionChart';
import UpcomingMilestones from '../components/dashboard/UpcomingMilestones';
import WeatherAlert from '../components/dashboard/WeatherAlert';
import { useProjects } from '../hooks/useProjects';

const Dashboard: React.FC = () => {
  const { projects, loading } = useProjects();
  const [activeProjects, setActiveProjects] = useState(0);
  const [delayedProjects, setDelayedProjects] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0);
  const [totalTasks, setTotalTasks] = useState(0);

  useEffect(() => {
    if (projects.length > 0) {
      // Calculate dashboard metrics
      const active = projects.filter(project => project.status === 'active').length;
      const delayed = projects.filter(project => project.isDelayed).length;
      const completed = projects.reduce((acc, project) => acc + project.completedTasks, 0);
      const total = projects.reduce((acc, project) => acc + project.totalTasks, 0);
      
      setActiveProjects(active);
      setDelayedProjects(delayed);
      setCompletedTasks(completed);
      setTotalTasks(total);
    }
  }, [projects]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const completionPercentage = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Dashboard</h1>
        <Link
          to="/projects/new"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          New Project
        </Link>
      </div>

      {/* Status cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <ProjectStatusCard 
          title="Active Projects"
          value={activeProjects}
          icon={<ClipboardCheck className="h-6 w-6 text-blue-600" />}
          bgColor="bg-blue-50 dark:bg-blue-900/20"
          textColor="text-blue-600 dark:text-blue-400"
        />
        <ProjectStatusCard 
          title="Completion Rate"
          value={`${completionPercentage}%`}
          icon={<CheckCircle className="h-6 w-6 text-green-600" />}
          bgColor="bg-green-50 dark:bg-green-900/20"
          textColor="text-green-600 dark:text-green-400"
        />
        <ProjectStatusCard 
          title="Delayed Projects"
          value={delayedProjects}
          icon={<Clock className="h-6 w-6 text-amber-600" />}
          bgColor="bg-amber-50 dark:bg-amber-900/20"
          textColor="text-amber-600 dark:text-amber-400"
        />
        <ProjectStatusCard 
          title="Upcoming Deadlines"
          value={3} // Sample data
          icon={<CalendarClock className="h-6 w-6 text-purple-600" />}
          bgColor="bg-purple-50 dark:bg-purple-900/20"
          textColor="text-purple-600 dark:text-purple-400"
        />
      </div>

      {/* Alert section */}
      <WeatherAlert 
        location="Project Site A"
        forecast="Heavy Rain"
        impact="High"
        projects={["Highland Towers", "Metro Station"]}
      />

      {/* Charts and statistics */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Delay Risk Assessment</h3>
            <div className="mt-6 h-64">
              <DelayRiskChart />
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Task Completion</h3>
            <div className="mt-6 h-64">
              <TaskCompletionChart />
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming milestones */}
      <div className="bg-white dark:bg-gray-800 overflow-hidden shadow rounded-lg">
        <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">Upcoming Milestones</h3>
        </div>
        <div className="p-5">
          <UpcomingMilestones />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;