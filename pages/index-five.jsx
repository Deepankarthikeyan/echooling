import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/index-five");

export default function IndexFivePage() {
  return <StaticPage page={page} />;
}
