import Home2 from "@/components/layout/main/Home2Main";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <ThemeController />
      <Home2 />
    </PageWrapper>
  );
}
