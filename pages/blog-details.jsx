import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/blog-details");

export default function BlogDetailsPage() {
  return <StaticPage page={page} />;
}
