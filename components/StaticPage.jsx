import LegacyPage from "./LegacyPage";
import { knownRouteAliases } from "../lib/legacy-routes";

export default function StaticPage({ page }) {
  return <LegacyPage page={page} knownRouteAliases={knownRouteAliases} />;
}
