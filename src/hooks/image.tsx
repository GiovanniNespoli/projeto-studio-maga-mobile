import React, { createContext, useCallback, useContext, useState } from "react";

interface ImageContextData {
  image: string;
  saveImage(uri: string): void;
}

const ImageContext = createContext<ImageContextData>({} as ImageContextData);

const ImageProvider: React.FC = ({ children }) => {
  const [image, setImage] = useState<string>("");

  const saveImage = useCallback((uri: string) => {
    setImage(uri);
  }, []);

  return (
    <ImageContext.Provider value={{ image, saveImage }}>
      {children}
    </ImageContext.Provider>
  );
};

function useImage(): ImageContextData {
  const context = useContext(ImageContext);

  if (!context) {
    throw new Error("useVisitor must be used within a ToastProvider");
  }

  return context;
}

export { useImage, ImageProvider };
