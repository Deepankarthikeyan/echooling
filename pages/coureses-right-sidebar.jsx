import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/coureses-right-sidebar");

export default function CouresesRightSidebarPage() {
  return <StaticPage page={page} />;
}
