import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/index-six");

export default function IndexSixPage() {
  return <StaticPage page={page} />;
}
