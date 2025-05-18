import { StickyBanner } from "../../../../components/ui/sticky-banner";
import CreateBudgetInitial from "./CreateBudInitial";

export function StickyBannerDemo() {
  return (
    <div className="relative flex h-[60vh] w-full flex-col overflow-y-auto">
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md text-xs md:text-sm lg:text-base ">
          Create your first budget. Any Problem?{" "}
          <a
            href="https://youtu.be/wKp2vxmG5q4"
            className="transition duration-200 hover:underline underline md:no-underline"
          >
            Watch Demo!
          </a>
        </p>
      </StickyBanner>
      <DummyContent />
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <CreateBudgetInitial />
    </div>
  );
};
