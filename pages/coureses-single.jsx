import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/coureses-single");

export default function CouresesSinglePage() {
  return <StaticPage page={page} />;
}
