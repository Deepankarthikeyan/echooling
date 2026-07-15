import StarSite from "../components/StarSite";
import { resolveStarRoute } from "../lib/star-routes";

function routeFromSlug(slug) {
  if (!slug || slug.length === 0) {
    return "/";
  }

  return `/${slug.join("/")}`;
}

export async function getServerSideProps({ params }) {
  const pathname = routeFromSlug(params?.slug);
  const page = resolveStarRoute(pathname);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      page,
      pathname,
    },
  };
}

export default function CatchAllStarPage({ page, pathname }) {
  return <StarSite page={page} pathname={pathname} />;
}
