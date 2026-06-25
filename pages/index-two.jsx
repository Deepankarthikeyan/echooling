import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/index-two");

export default function IndexTwoPage() {
  return <StaticPage page={page} />;
}
