import { useUserStore } from "../../store/user";
import { useMemo } from "react";

const Ticket = () => {

  const store = useUserStore()

  const {fullName, githubUser} = store;

  const ticketNumber = useMemo(() => {
    return `#${Math.floor(10000 + Math.random() * 90000)}`;
  }, []);

  return (
    <div className="h-40 w-85.5 flex flex-col justify-between p-4 bg-[url(/assets/images/pattern-ticket.svg)] bg-contain bg-no-repeat relative">
      <div>
        <img src="/assets/images/logo-full.svg" alt="logo" />
        <p>Jan 31, 2026 / Austin TX</p>
      </div>
      <div className="flex gap-3">
        <img
          src="/assets/images/image-avatar.jpg"
          alt="image avatar"
          className="size-11.25 rounded-lg"
        />
        <div>
          <p className="text-xl font-medium">{fullName}</p>
       
          <div className="flex">
            <img src="/assets/images/icon-github.svg" alt="Github icon" />
            <p>{githubUser}</p>
          </div>
        </div>
      </div>
      <p className="text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 text-neutral-500">
        {ticketNumber}
      </p>
    </div>
  );
};

export default Ticket;
