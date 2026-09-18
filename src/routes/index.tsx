import { createFileRoute } from "@tanstack/react-router";
import InvitationExperience from "@/components/invitation/InvitationExperience";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "मंगल आमंत्रण पत्रिका | ८ उपवास पचकावणी - कु. हिमानी छाजेड" },
      {
        name: "description",
        content: "कु. हिमानी शितल रविंद्र छाजेड की ८ उपवास पचकावणी का सस्नेह आमंत्रण।",
      },
      {
        property: "og:title",
        content: "मंगल आमंत्रण पत्रिका | ८ उपवास पचकावणी - कु. हिमानी छाजेड",
      },
      {
        property: "og:description",
        content: "शनिवार, १९/०९/२०२६ • प्रातः ९:०० बजे • आनंद भवन, कोपरगांव",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <InvitationExperience />;
}
