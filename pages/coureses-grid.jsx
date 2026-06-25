import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/coureses-grid");

export default function CouresesGridPage() {
  return <StaticPage page={page} />;
}
