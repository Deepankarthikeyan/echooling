import StaticPage from '../components/StaticPage';
import { getGeneratedRootPage } from '../lib/generated-root-pages';

const page = getGeneratedRootPage("/contact");

export default function ContactPage() {
  return <StaticPage page={page} />;
}
