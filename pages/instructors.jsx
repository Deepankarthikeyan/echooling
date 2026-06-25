import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/instructors");

export default function InstructorsPage() {
  return <StaticPage page={page} />;
}
