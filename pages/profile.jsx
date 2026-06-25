import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/profile");

export default function ProfilePage() {
  return <StaticPage page={page} />;
}
