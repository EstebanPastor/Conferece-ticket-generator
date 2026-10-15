import TicketFormPage from "./components/ticket-form-page/TicketFormPage";
import MainLayout from "./components/layouts/MainLayout";
import ConfirmationPage from "./components/confirmation-page/ConfirmationPage";
import { useShowTicket } from "./hooks/useShowTicket";

const App = () => {
  const context = useShowTicket();

  return (
    <MainLayout>
      {context.showTicket ? <ConfirmationPage /> : <TicketFormPage />}
    </MainLayout>
  );
};

export default App;
