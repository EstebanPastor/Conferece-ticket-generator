import TicketFormPage from "./components/ticket-form-page/TicketFormPage";
import MainLayout from "./components/layouts/MainLayout";
import ConfirmationPage from "./components/confirmation-page/ConfirmationPage";
import { useState } from "react";

const App = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <MainLayout>
      {isShow ? <ConfirmationPage /> : <TicketFormPage setIsShow={setIsShow} />}
    </MainLayout>
  );
};

export default App;
