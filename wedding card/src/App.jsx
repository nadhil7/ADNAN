import { useEffect, useState } from "react";

export default function App() {
  const targetDate = new Date("2025-09-22T18:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = +targetDate - +new Date();
    return {
      days: Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((diff / 1000 / 60) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    };
  }

  const notnow = () => {
    alert("not now")
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white p-6">
      <p className="text-lg mb-2">بسم الله الرحمن الرحيم</p>
      <p className="text-sm text-gray-300 mb-6">
        In the name of Allah the most Gracious the most Merciful
      </p>

      <h1 className="text-4xl md:text-6xl font-bold mb-8">adnan & adnan</h1>

      <div className="flex gap-6 text-center mb-10">
        <TimeBox label="DAYS" value={timeLeft.days} />
        <TimeBox label="HOURS" value={timeLeft.hours} />
        <TimeBox label="MINUTES" value={timeLeft.minutes} />
        <TimeBox label="SECONDS" value={timeLeft.seconds} />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-xs">

        <div onClick={notnow} className="px-4 py-3 rounded-2xl bg-gray-700 hover:bg-gray-600 transition flex items-center justify-center">

          📩 View Invitation
        </div>
        <a
          href="https://www.google.com/maps/place/Ismail+Enterprises,+5%2F1213,+Mohammed+Abdul+Rahman+Rd,+Mattancherry,
          +Kochi,+Kerala+682002/data=!4m2!3m1!1s0x3b086dc20d4353e9:0x9665693c675fc19e?entry=gps&coh=192189&g_ep=CAESBzI1L
          jMzLjMYACCenQoqmQEsOTQyNzgzMDcsOTQyNjc3MjcsOTQyODQ0ODcsOTQyMjMyOTksOTQyMTY0MTMsOTQyODA1NzYsOTQyMTI0OTYsOTQyMDczOTQ
          sOTQyMDc1MDYsOTQyMDg1MDYsOTQyMTc1MjMsOTQyMTg2NTMsOTQyMjk4MzksOTQyNzUxNjgsNDcwODQzOTMsOTQyMTMyMDAsOTQyNTgzMjVCAklO&s
          kid=b3b9940f-3dc9-4f35-8251-a79cb652eb3e&g_st=ac"
          className="px-4 py-3 rounded-2xl border border-gray-500 hover:bg-gray-800 transition flex items-center justify-center"
        >
          📍 View Location
        </a>
      </div>
    </div>
  );
}

function TimeBox({ label, value }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-bold">
        {String(value).padStart(2, "0")}
      </div>
      <div className="text-xs text-gray-400 mt-1">{label}</div>
    </div>
  );
}
