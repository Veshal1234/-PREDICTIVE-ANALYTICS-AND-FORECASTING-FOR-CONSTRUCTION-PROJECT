import { useState, useEffect } from 'react';
import { Project } from '../types/project';

// Mock data for demonstration
const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Highland Towers',
    description: 'A modern 20-story residential building featuring luxury apartments with panoramic city views, sustainable energy systems, and smart home technology.',
    status: 'active',
    startDate: '2025-04-15',
    endDate: '2026-06-30',
    budget: 1200000,
    location: '123 Highland Ave, Boston, MA',
    type: 'Residential',
    teamSize: 35,
    completedTasks: 42,
    totalTasks: 120,
    isDelayed: true,
    image: 'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    name: 'Harbor Bridge',
    description: 'A 500-meter steel bridge connecting the east and west sides of the harbor, designed to withstand extreme weather conditions and accommodate both vehicular and pedestrian traffic.',
    status: 'planning',
    startDate: '2025-08-10',
    endDate: '2027-07-15',
    budget: 4500000,
    location: 'Harbor Bay, Boston, MA',
    type: 'Infrastructure',
    teamSize: 60,
    completedTasks: 12,
    totalTasks: 85,
    isDelayed: false,
    image: 'https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    name: 'Metro Station',
    description: 'A state-of-the-art underground metro station with multiple platforms, retail spaces, and integrated smart city technologies for improved urban mobility.',
    status: 'active',
    startDate: '2025-02-05',
    endDate: '2026-09-20',
    budget: 3800000,
    location: 'Central District, Boston, MA',
    type: 'Infrastructure',
    teamSize: 85,
    completedTasks: 56,
    totalTasks: 150,
    isDelayed: true,
    image: 'https://images.pexels.com/photos/333525/pexels-photo-333525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '4',
    name: 'Office Complex',
    description: 'A corporate campus with four interconnected buildings, featuring modern workspaces, conference centers, and recreational facilities designed for optimal productivity and employee wellness.',
    status: 'active',
    startDate: '2025-03-22',
    endDate: '2026-11-15',
    budget: 2900000,
    location: 'Business Park, Cambridge, MA',
    type: 'Commercial',
    teamSize: 42,
    completedTasks: 29,
    totalTasks: 95,
    isDelayed: false,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '5',
    name: 'Riverside Apartments',
    description: 'A luxury residential complex with 120 units, featuring waterfront views, premium amenities, and sustainable design elements for modern urban living.',
    status: 'planning',
    startDate: '2025-09-15',
    endDate: '2027-04-30',
    budget: 2200000,
    location: 'Riverside Dr, Cambridge, MA',
    type: 'Residential',
    teamSize: 30,
    completedTasks: 8,
    totalTasks: 110,
    isDelayed: false,
    image: 'https://images.pexels.com/photos/2319426/pexels-photo-2319426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '6',
    name: 'Community Hospital',
    description: 'A modern healthcare facility with 200 beds, specialized treatment centers, and advanced medical technology to serve the growing community needs.',
    status: 'completed',
    startDate: '2023-05-10',
    endDate: '2025-03-15',
    budget: 5200000,
    location: 'Health District, Boston, MA',
    type: 'Healthcare',
    teamSize: 95,
    completedTasks: 130,
    totalTasks: 130,
    isDelayed: false,
    image: 'https://images.pexels.com/photos/668296/pexels-photo-668296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // In a real app, this would be an API call
        // const response = await fetch('/api/projects');
        // const data = await response.json();
        
        // Simulate API call with delay
        setTimeout(() => {
          setProjects(MOCK_PROJECTS);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError('Failed to fetch projects');
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};