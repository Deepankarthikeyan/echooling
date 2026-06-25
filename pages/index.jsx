import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/");

export default function HomePage() {
  return <StaticPage page={page} />;
}
