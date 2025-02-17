import { bebas } from "@/lib/font";
import ModuleCard from "../cards/module-card";

const LearningModule = () => {
  return (
    <div>
      <h1 className={`${bebas.className} text-5xl mb-[30px]`}>
        learning modules
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {[undefined, "url('/images/star.png')", "url('/images/box.png')"].map(
          (bg, $i) => (
            <ModuleCard className="col-span-3 md:col-span-2 lg:col-span-1" bg={bg} key={$i} />
          )
        )}
      </div>
    </div>
  );
};

export default LearningModule;
