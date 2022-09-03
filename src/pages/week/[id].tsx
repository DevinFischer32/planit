import { useRouter } from "next/router";
import Header from "../components/navigation/Header";

const Week = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main className="h-screen">
      <Header />
      <section className="h-1/8">
        <h1>Month</h1>
        <h1>Week {id} of 52</h1>
      </section>
      <section className="w-screen h-2/3 flex ">
        <div className="bg-red-400 w-1/5 h-full">
          <h1>Today</h1>
          <h1>Monday 23</h1>
        </div>
        <section className="bg-blue-400 w-full h-full grid grid-cols-3 gap-3 p-3">
          <div className="bg-gray-200">
            <h1>Day</h1>
            <p>Todo</p>
            <p>Goals</p>
          </div>
          <div className="bg-gray-200">
            <h1>Day</h1>
            <p>Todo</p>
            <p>Goals</p>
          </div>
          <div className="bg-gray-200">
            <h1>Day</h1>
            <p>Todo</p>
            <p>Goals</p>
          </div>
          <div className="bg-gray-200">
            <h1>Day</h1>
            <p>Todo</p>
            <p>Goals</p>
          </div>
          <div className="bg-gray-200">
            <h1>Day</h1>
            <p>Todo</p>
            <p>Goals</p>
          </div>
          <div className="bg-gray-200">
            <h1>Day</h1>
            <p>Todo</p>
            <p>Goals</p>
          </div>
        </section>
      </section>
    </main>
  );
};

const addForm = () => {};

export default Week;
