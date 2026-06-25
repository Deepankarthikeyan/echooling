import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/events");

export default function EventsPage() {
  return <StaticPage page={page} />;
}
