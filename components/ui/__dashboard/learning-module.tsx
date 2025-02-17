import { bebas } from "@/lib/font";
import ModuleCard from "../cards/module-card";

const LearningModule = () => {
  return (
    <div>
      <h1 className={`${bebas.className} text-5xl mb-[30px]`}>
        learning modules
      </h1>

      <div className="flex overflow-x-auto w-full flex-nowrap scrollbar-hide gap-4">
        {[undefined, "url('/images/star.png')", "url('/images/box.png')"].map(
          (bg, $i) => (
            <ModuleCard className="w-[424px] flex-shrink-0" bg={bg} key={$i} />
          )
        )}
      </div>
    </div>
  );
};

export default LearningModule;
