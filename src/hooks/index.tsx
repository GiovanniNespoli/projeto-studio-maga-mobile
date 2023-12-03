import { ImageProvider } from "./image";
import { UserProvider } from "./user";
 
export default function AppProvider({ children }) {
  return (
    <UserProvider>
      <ImageProvider>{children}</ImageProvider>
    </UserProvider>
  );
}
