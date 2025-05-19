export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'planning' | 'active' | 'completed' | 'on-hold';
  startDate: string;
  endDate: string;
  budget: number;
  location?: string;
  type?: string;
  teamSize: number;
  completedTasks: number;
  totalTasks: number;
  isDelayed: boolean;
  image?: string;
}

export interface Task {
  id: string;
  projectId: string;
  name: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed' | 'delayed';
  plannedStartDate: string;
  plannedEndDate: string;
  actualStartDate?: string;
  actualEndDate?: string;
  assignedTo?: string;
  category: string;
  dependencies?: string[];
}

export interface ProjectAnalytics {
  id: string;
  projectId: string;
  timelineVariance: number;
  budgetVariance: number;
  completionPercentage: number;
  riskScore: number;
  predictedDelay: number;
  lastUpdated: string;
}