import type { Route } from "./+types/_index";
import WebsiteLayout from "~/layouts/WebsiteLayout";
import Hero from "~/components/Hero";
import PainPoints from "~/components/PainPoints";
import HowItWorks from "~/components/HowItWorks";
import Professions from "~/components/Professions";
import FAQ from "~/components/FAQ";
import FinalCTA from "~/components/FinalCTA";
import { useSiteMode } from "~/hooks/use-env";
import Pricing from "~/components/Pricing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CallKaira - AI Receptionist for Your Business" },
    { name: "description", content: "Never miss another call with CallKaira, your 24/7 AI receptionist. Join the waitlist for early access." },
  ];
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const siteMode = useSiteMode();
  return (
    <WebsiteLayout>
      <p>{siteMode}</p>
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Professions />
      { siteMode === "normal" && <Pricing /> }
      <FAQ />
      <FinalCTA />
    </WebsiteLayout>
  )
}
