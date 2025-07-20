import { useSearchParams } from "react-router-dom";
import { PageWrapper } from "../PageWrapper";

export const ActionsPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <PageWrapper>
      <h1>{`Actions: ${category}`}</h1>
    </PageWrapper>
  );
};
