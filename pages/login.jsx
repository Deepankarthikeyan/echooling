import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/login");

export default function LoginPage() {
  return <StaticPage page={page} />;
}
