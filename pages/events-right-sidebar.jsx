import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/events-right-sidebar");

export default function EventsRightSidebarPage() {
  return <StaticPage page={page} />;
}
