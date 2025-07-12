import { useQuery } from '@tanstack/react-query';
import { getProjects } from '../services/projectService';

const ProjectList = () => {
    const { data, isLoading, error } = useQuery({
            queryKey: ['projects'],
            queryFn: () => getProjects(),
        });
}