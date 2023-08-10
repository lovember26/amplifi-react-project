import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import Title from "components/common/Title/Title";

export const HomePage = () => {
  return (
    <>
      <Title title="Hello" />;
      <AppToastContainer size={30} />
    </>
  );
};
