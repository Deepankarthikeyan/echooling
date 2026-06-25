import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/blog");

export default function BlogPage() {
  return <StaticPage page={page} />;
}
