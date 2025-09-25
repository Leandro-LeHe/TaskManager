import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="w-[500px] mx-auto space-y-4">
        <div className="flex justify-center itemd-center">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-9 top-8 button-0 text-slate-100 hover:bg-slate-700 hover:text-white hover:shadow-lg
             transition duration-100 hover:scale-102 cursor-pointer"
          >
            <svg
              className="w-6 h-6 text-green-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
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
