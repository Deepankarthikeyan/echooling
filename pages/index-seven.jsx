import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/index-seven");

export default function IndexSevenPage() {
  return <StaticPage page={page} />;
}
