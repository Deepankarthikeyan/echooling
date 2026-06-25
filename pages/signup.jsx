import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/signup");

export default function SignupPage() {
  return <StaticPage page={page} />;
}
