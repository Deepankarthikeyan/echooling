import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/about");

export default function AboutPage() {
  return <StaticPage page={page} />;
}
