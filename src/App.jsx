import TicketFormPage from "./components/ticket-form-page/TicketFormPage";
import MainLayout from "./components/layouts/MainLayout";
import ConfirmationPage from "./components/confirmation-page/ConfirmationPage";


const App = () => {
  return (
    <MainLayout>
      <TicketFormPage />
      {/* <ConfirmationPage /> */}
    </MainLayout>
  );
};

export default App;
