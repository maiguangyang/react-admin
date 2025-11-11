import { FC } from "react";
import { Project, ProjectCreateInput } from "~@/__generated__/graphql";
import { useGraphql } from "~@/hooks/useGraphql";
import { useAction } from "./hooks";

const Add: FC = () => {
  const { title, model, FormData } = useAction();
  const [formAdd, { loading }] = useGraphql<Project, ProjectCreateInput>(
    model
  ).Create();

  return (
    <FormData<Project, ProjectCreateInput>
      title={`新增${title}`}
      model={model}
      loading={loading}
      disabled={[]}
      required={[]}
      onCallback={(options) =>
        formAdd({ variables: options?.variables as ProjectCreateInput })
      }
    />
  );
};

export default Add;
