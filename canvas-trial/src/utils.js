import 'lodash.combinations';
import _ from "lodash";

export const generateShapes = () => {
    const nodes = [...Array(1)].map((_, i) => ({
      id: i.toString(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      // fill: "green",
      radius: 10,
      draggable: true,
      isDragging: false,
      isDblClick: false
    }
    ));
  
    return nodes;
};

export const generateEdges = (nodes) => {
  let combinations = _.combinations(nodes, 2);
  const edges = combinations.map(([to,from]) => ({to, from}))
  return edges
};


