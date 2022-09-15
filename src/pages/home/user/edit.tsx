import { ComponentData } from './classify';

export default () => {
  return (
    <ComponentData.FormData title={`修改${ComponentData.title}`} model={ComponentData.model} />
  )
}