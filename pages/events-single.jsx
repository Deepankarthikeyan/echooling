import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/events-single");

export default function EventsSinglePage() {
  return <StaticPage page={page} />;
}
