import { useUserStore } from "../../store/user";
import { useMemo } from "react";

const Ticket = () => {
  const store = useUserStore();
  const { fullName, githubUser, url } = store;

  const ticketNumber = useMemo(() => {
    return `#${Math.floor(10000 + Math.random() * 90000)}`;
  }, []);

  return (
    <div className="w-full max-w-85 sm:max-w-105 md:max-w-140 aspect-560/280 flex flex-col justify-between p-5 sm:p-6 bg-[url('/assets/images/pattern-ticket.svg')] bg-cover sm:bg-contain bg-no-repeat bg-center relative mx-auto my-4 shadow-lg">
      <div>
        <img src="/assets/images/logo-full.svg" alt="logo" className="w-32 sm:w-40" />
        <p className="text-xs sm:text-sm text-neutral-300 mt-1">Jan 31, 2026 / Austin TX</p>
      </div>
      <div className="flex gap-3 items-center">
        <img
          src={url || "/assets/images/image-avatar.jpg"}
          alt="image avatar"
          className="w-11 h-11 rounded-lg object-cover"
        />
        <div>
          <p className="text-lg sm:text-xl font-medium text-white">{fullName || "Esteban Pastor"}</p>
          <div className="flex items-center gap-1 text-neutral-400">
            <img src="/assets/images/icon-github.svg" alt="Github icon" className="w-4 h-4" />
            <p className="text-sm">{githubUser || "@estebanpastor"}</p>
          </div>
        </div>
      </div>
      <p className="text-xl sm:text-2xl absolute top-1/2 right-4 sm:right-6 -translate-y-1/2 rotate-90 text-neutral-400 font-mono">
        {ticketNumber}
      </p>
    </div>
  );
};

export default Ticket;