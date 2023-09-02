import { weaviateDB } from "./class";

const classObj = {
  class: "XORDIA",
  vectorizer: "text2vec-openai",
  moduleConfig: {
    "text2vec-openai": {
      model: "ada",
      modelVersion: "002",
      type: "text",
    },
  },
};

weaviateDB.connect()
weaviateDB.createClass(classObj)


