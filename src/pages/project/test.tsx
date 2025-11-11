/*
 * @Author: Marlon.M
 * @Email: maiguangyang@163.com
 * @Date: 2025-11-11 07:55:57
 */
import { ProjectResultType, QueryProjectsArgs } from "~@/__generated__/graphql";
import { useGraphql } from "~@/hooks/useGraphql";

export default function RocketInventoryList() {
  const [, { loading, data }] = useGraphql<
    ProjectResultType,
    QueryProjectsArgs
  >(
    "Projects",
    `
    {
      id
      name
    }
  `,
    { per_page: 2 }
  ).List();

  console.log("data", data);

  return (
    <div>
      <h3>Available Inventory</h3>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
