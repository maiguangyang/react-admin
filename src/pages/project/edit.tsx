/*
 * @Author: Marlon.M
 * @Email: maiguangyang@163.com
 * @Date: 2025-11-11 07:55:57
 */
import { FC } from "react";
import { Project, ProjectUpdateInput } from "~@/__generated__/graphql";
import { useGraphql } from "~@/hooks/useGraphql";
import { useAction } from "./hooks";

const Edit: FC = () => {
  const { title, model, FormData } = useAction();
  const [formEdit, { loading }] = useGraphql<Project, ProjectUpdateInput>(
    model
  ).Update();

  return (
    <FormData
      title={`修改${title}`}
      model={model}
      loading={loading}
      disabled={[]}
      required={[]}
      onCallback={(options) =>
        formEdit({ variables: options?.variables as ProjectUpdateInput })
      }
    />
  );
};

export default Edit;
