import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/index-three");

export default function IndexThreePage() {
  return <StaticPage page={page} />;
}
