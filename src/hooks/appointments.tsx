import IAppointment from "@src/interfaces/IAppointment";
import { api } from "../server/index";
import React, { createContext, useCallback, useContext, useState } from "react";
import Toast from "react-native-toast-message";

interface ICreateAppointment {
  date: string;
  service: string;
  userId: number;
  value: string;
}

interface IAppointmentContext {
  CreateAppointment(newDate: ICreateAppointment): Promise<boolean>;
  GetAppointmentPerUser(userId: number): Promise<IAppointment[]>;
  GetAppointment(): Promise<IAppointment[]>;
  DeleteAppointment(id: number): Promise<void>;
}

const AppointmentContext = createContext<IAppointmentContext>(
  {} as IAppointmentContext
);

const AppointmentProvider: React.FC = ({ children }) => {
  const CreateAppointment = useCallback(
    async ({
      date,
      service,
      userId,
      value,
    }: ICreateAppointment): Promise<boolean> => {
      const create = await api
        .post("/appointment", {
          date,
          service,
          userId,
          value,
        })
        .then((promise) => {
          Toast.show({
            type: "success",
            text1: "Sucesso",
            text2: "Horário cadastrado com sucesso ✅",
            visibilityTime: 5000,
          });

          return true;
        })
        .catch((err) => {
          Toast.show({
            type: "error",
            text1: "Error",
            text2: "Erro ao cadastrar um horário ❌",
            visibilityTime: 5000,
          });
          console.log(err);
          return false;
        });

      return create;
    },
    []
  );

  const GetAppointmentPerUser = useCallback(
    async (userId: number): Promise<IAppointment[]> => {
      const get = await api
        .get(`/appointment/user/${userId}`)
        .then((promise) => {
          return promise.data;
        })
        .catch((err) => {
          console.log(err);
        });
      return get;
    },
    []
  );

  const GetAppointment = useCallback(async (): Promise<IAppointment[]> => {
    const get = await api
      .get("/appointment")
      .then((promise) => {
        return promise.data;
      })
      .catch((err) => {
        console.log(err);
      });
    return get;
  }, []);

  const DeleteAppointment = useCallback(async (id: number): Promise<void> => {
    await api.delete(`/appointment/${id}`).then((promise) => {
      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Horário removido com sucesso ✅",
        visibilityTime: 5000,
      });
    });
  }, []);

  return (
    <AppointmentContext.Provider
      value={{
        CreateAppointment,
        GetAppointmentPerUser,
        DeleteAppointment,
        GetAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

function useAppointment(): IAppointmentContext {
  const context = useContext(AppointmentContext);

  if (!context) {
    throw new Error("useVisitor must be used within a ToastProvider");
  }

  return context;
}

export { useAppointment, AppointmentProvider };
