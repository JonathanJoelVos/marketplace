import { appConfig } from "@/config/appConfig";
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { Hero } from "./components/hero";
import { Perks } from "./components/perks";

export default function Home() {
  return (
    <div>
      <MaxWidthWrapper>
        <Hero />
      </MaxWidthWrapper>
      <section className="bg-gray-50 border-t border-gray-200">
        <MaxWidthWrapper className="py-20">
          <Perks />
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
