import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/coureses-list");

export default function CouresesListPage() {
  return <StaticPage page={page} />;
}
