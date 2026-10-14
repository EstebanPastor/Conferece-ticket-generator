const CongratsTicket = () => {
  return (
    <>
      <p className="text-[30px]/8 text-center font-extrabold mb-6">Congrats!{" "}  
        <span className="bg-linear-to-r from-orange-500 to bg-neutral-0 bg-clip-text text-transparent">Esteban</span>
        <span className="bg-linear-to-r from-orange-500 to bg-neutral-0 bg-clip-text text-transparent">Pastor</span> Your ticket is ready.
      </p>
      <p className="text-[19px] text-center mb-20 text-neutral-300">
        We've emailed your ticket to <span className="text-orange-500">esteban.pastor@example.com</span> and
        will send updates in the run up to the event.
      </p>
    </>
  );
};

export default CongratsTicket;
