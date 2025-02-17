import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LearningActivities from "./learning-activities";

const DashboardOngoing = () => {


  return (
    <div>
      <Tabs defaultValue="practice" className="w-full">
        <TabsList className="mb-8 pb-1 w-full justify-start gap-8">
          <TabsTrigger
            value="practice"
            className=""
          >
            Practice/role play
          </TabsTrigger>
          <TabsTrigger value="learning" className="text-xl text-gray-500">
            Learning modules
          </TabsTrigger>
        </TabsList>

        <TabsContent value="practice">
          <LearningActivities />
        </TabsContent>

        <TabsContent value="learning">
          {/* Content for Learning modules tab */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardOngoing;
