import React, { useRef } from "react";
import { render } from "react-dom";
import { Stage, Layer, Circle, Text } from "react-konva";
import 'lodash.combinations';
import _ from "lodash";
import Edge from "./Edge"
import { generateShapes, generateEdges } from "./utils";


const INITIAL_STATE = generateShapes();
const INITIAL_EDGE_STATE = generateEdges(INITIAL_STATE);

const App = () => {
  const [stars, setStars] = React.useState(INITIAL_STATE);
  const [edges, setEdges] = React.useState(INITIAL_EDGE_STATE);
  const stageRef = useRef(null);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };

  const handleDragEnd = (e) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };

  const handleDragMove = (e) => {
    setStars(prevStars => {
      const newStars = prevStars.map(star => star.id === e.target.id() ? {...star, ...e.target.position()} : star)
      console.log(newStars)
      return newStars
    })
  }

  return (
    <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
      <Layer>
        <Text text="Try to drag a star" />
        <Circle
          name="draggableCircle"
          x={50}
          y={50}
          radius={25}
          fill="green"
          draggable
          onDragEnd={(e) => {
            setStars((prevStars) => [
              ...prevStars,
              { id: prevStars.length.toString(),
                x: e.target.x(),
                y: e.target.y(),
                fill: "blue",
                radius: 10,
                draggable: true,
                isDragging: false, }
            ]);

            var stage = stageRef.current;
            var draggableCircle = stage.findOne(".draggableCircle");
            draggableCircle.position({ x: 50, y: 50 });
          }}
        />
        {stars.map((star) => {
          return (
            <>
              <Circle
                key={star.id}
                id={star.id}
                x={star.x}
                y={star.y}
                radius={20}
                // numPoints={5}
                // innerRadius={20}
                // outerRadius={40}
                offset={{x:0, y:-20}}
                fill="#89b717"
                opacity={0.8}
                draggable
                rotation={star.rotation}
                shadowColor="black"
                shadowBlur={10}
                shadowOpacity={0.6}
                shadowOffsetX={star.isDragging ? 10 : 5}
                shadowOffsetY={star.isDragging ? 10 : 5}
                scaleX={star.isDragging ? 1.2 : 1}
                scaleY={star.isDragging ? 1.2 : 1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragMove={handleDragMove}
              />
            </>
          );
        })}
        {_.combinations(stars, 2).map(([to,from]) => ({to, from})).map(({to,from}) => <Edge node1={to} node2={from}/>)}
      </Layer>
    </Stage>
  );
};

export default App;
