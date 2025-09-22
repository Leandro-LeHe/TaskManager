import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowBigLeft } from "Lucide-react";
function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-9 top-8 button-0 text-slate-100 hover:bg-slate-700 hover:text-white hover:shadow-lg
             transition duration-100 hover:scale-102"
          >
            <ArrowBigLeft />
          </button>

          <h1 className="text-3xl text-slate-100 font-bold text-center mb-6">
            Details Task
          </h1>
        </div>

        <div className=" bg-emerald-700 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold">{title}</h2>
          <p className="text-white">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
