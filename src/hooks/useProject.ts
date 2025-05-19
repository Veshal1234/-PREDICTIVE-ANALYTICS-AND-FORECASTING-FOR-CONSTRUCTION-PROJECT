import { useState, useEffect } from 'react';
import { Project } from '../types/project';
import { useProjects } from './useProjects';

export const useProject = (id: string) => {
  const { projects, loading: projectsLoading } = useProjects();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!projectsLoading) {
      const foundProject = projects.find(p => p.id === id);
      if (foundProject) {
        setProject(foundProject);
      } else {
        setError('Project not found');
      }
      setLoading(false);
    }
  }, [id, projects, projectsLoading]);

  return { project, loading, error };
};