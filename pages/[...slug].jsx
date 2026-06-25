import LegacyPage from "../components/LegacyPage";
import { knownRouteAliases } from "../lib/legacy-routes";
import { loadLegacyPage } from "../lib/legacy-page-loader";

function routeFromSlug(slug) {
  return `/${slug.join("/")}`;
}

export async function getServerSideProps({ params }) {
  const page = loadLegacyPage(routeFromSlug(params.slug));

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      knownRouteAliases,
      page,
    },
  };
}

export default function CatchAllLegacyPage({ page, knownRouteAliases: aliases }) {
  return <LegacyPage page={page} knownRouteAliases={aliases} />;
}
