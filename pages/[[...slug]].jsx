import StarSite from "../components/StarSite";
import { resolveStarRoute } from "../lib/star-routes";

function routeFromSlug(slug) {
  if (!slug || slug.length === 0) {
    return "/";
  }

  return `/${slug.join("/")}`;
}

export async function getServerSideProps({ params }) {
  const page = resolveStarRoute(routeFromSlug(params?.slug));

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
    },
  };
}

export default function CatchAllStarPage({ page }) {
  return <StarSite page={page} />;
}
