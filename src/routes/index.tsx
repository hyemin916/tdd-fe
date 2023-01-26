import { useRoutes } from 'react-router-dom';

import mainRoute from '@/routes/MainRoute';

const Route = () => useRoutes([...mainRoute]);

export default Route;
