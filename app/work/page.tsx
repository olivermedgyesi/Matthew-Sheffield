import { WorkStage } from "@/components/work/WorkStage";
import { WORK_SECTIONS } from "@/lib/work-sections";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <>
      <div
        className="scanlines crt pointer-events-none fixed inset-0 z-50"
        aria-hidden
      />
      <main className="relative">
        <WorkStage slug={WORK_SECTIONS[0].slug} />
      </main>
    </>
  );
}
