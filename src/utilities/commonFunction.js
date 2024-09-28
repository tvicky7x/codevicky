import EN_JSON from "./EN.json";

// getComponent Text Function
export default function getComponentText(path) {
  let pathArray = path.split(".");
  let content = EN_JSON[`${pathArray[0]}`];
  for (let i = 1; i < pathArray.length; i++) {
    content = content[`${pathArray[i]}`];
  }
  return content;
}
