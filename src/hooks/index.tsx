import { AppointmentProvider } from "./appointments";
import { ImageProvider } from "./image";
import { UserProvider } from "./user";

export default function AppProvider({ children }) {
  return (
    <UserProvider>
      <AppointmentProvider>
        <ImageProvider>{children}</ImageProvider>
      </AppointmentProvider>
    </UserProvider>
  );
}
