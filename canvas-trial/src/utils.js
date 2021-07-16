import 'lodash.combinations';
import _ from "lodash";

export const generateShapes = () => {
    const nodes = [...Array(1)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      fill: "blue",
      radius: 10,
      draggable: true,
      isDragging: false,
    }
    ));
  
    return nodes;
};

export const generateEdges = (nodes) => {
  let combinations = _.combinations(nodes, 2);
  const edges = combinations.map(([to,from]) => ({to, from}))
  return edges
};


