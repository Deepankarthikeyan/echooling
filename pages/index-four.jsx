import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/index-four");

export default function IndexFourPage() {
  return <StaticPage page={page} />;
}
