import React, { useRef, useEffect } from "react";
import { render } from "react-dom";
import { Stage, Layer, Circle, Text, Shape, Image } from "react-konva";
import 'lodash.combinations';
import _ from "lodash";
import Edge from "./Edge"
import { generateShapes, generateEdges } from "./utils";
import useImage from "use-image";

const INITIAL_STATE = generateShapes();
const INITIAL_EDGE_STATE = generateEdges(INITIAL_STATE);


const distance = (curPoint)=>(p) => {
  return Math.sqrt(Math.pow(curPoint.x - p.x, 2) + Math.pow(curPoint.y - p.y, 2))
}

const findClosestStar = (curPoint, stars) => {
  const distFromCurPoint = distance(curPoint)
  const tempStars = stars.filter(star => star.fill != "transparent");
  const closest = tempStars.reduce((a, b) => (distFromCurPoint(a) < distFromCurPoint(b)) ? a : b);
  return closest
}

const App = () => {
  const [stars, setStars] = React.useState(INITIAL_STATE);
  const [edges, setEdges] = React.useState(INITIAL_EDGE_STATE);
  const [connectors, setConnectors] = React.useState([]);
  const [image] = useImage("https://svg-clipart.com/svg/blue/IH4nF93-blue-user-icon-vector.svg");

  const [fromShapeId, setFromShapeId] = React.useState(null);
  const [toShapeId, setToShapeId] = React.useState(null);

  const stageRef = useRef(null);

  // const oldDblClickToConnect = (e) => {
  //   if (fromShapeId) {
  //     const newConnector = {
  //       from: fromShapeId,
  //       to: star.id,
  //       id: connectors.length
  //     };
  //     setConnectors(connectors.concat([newConnector]));
  //     setFromShapeId(null);
  //   } else {
  //     setFromShapeId(star.id);
  //     setStars(prevStars => prevStars.map(star => ({...star, isDblClick: (star.id == e.target.id()) && !star.isDblClick })))
  //   }
  // }

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

    //if pulling a transparent / dummy node
    if(e.target.fill() == "transparent"){
      const closestStar = findClosestStar(e.target.position(), stars)
      setStars(prevStars => {
        const newStars = prevStars.filter(star => star.id != e.target.id());
        setConnectors(prevConnectors => prevConnectors.map(conn => conn.to == e.target.id() ? {...conn, to: closestStar.id}: conn))
        return newStars
      })
    }
    else{
      setStars(
        stars.map((star) => {
          return {
            ...star,
            isDragging: false,
          };
        })
      );
    }
   
  };

  const handleDragMove = (e) => {
    setStars(prevStars => {
      const currStar = prevStars.find((star) => star.id == e.target.id())
      // if (currStar.isDblClick == true){
      //   console.log("dbl clc")
      //   setConnectors(prevConnectors => prevConnectors.map(edge => ({to: {...e.target.position()}, from: {currStar}})))
      // }
      // else{
      const newStars = prevStars.map(star => star.id === e.target.id() ? {...star, ...e.target.position(), isDragging: true} : star)
      // console.log(newStars)
      return newStars
      // }
      // return prevStars
    })
  }

  console.log("Connectors", connectors)
  return (
    <Stage width={window.innerWidth} height={window.innerHeight} ref={stageRef}>
      <Layer>
        <Text text="Try to drag a star" />
        <Circle
          id={"parent"}
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
                // fill: "green",
                radius: 10,
                draggable: true,
                isDragging: false, 
              }
            ]);

            var stage = stageRef.current;
            var draggableCircle = stage.findOne(".draggableCircle");
            draggableCircle.position({ x: 50, y: 50 });
          }}
        />

        {stars.map((star) => {
          return (
            <>
              <Image
                image={image}
                width={40}
                height={40}
                key={star.id}
                id={star.id}
                x={star.x}
                y={star.y}
                // radius={20}
                offset={{x:20, y:0}}
                fill={star.fill || "#89b717"}
                opacity={0.8}
                draggable
                rotation={star.rotation}
                shadowColor={star.isDblClick ? "red" : "black"}
                shadowBlur={10}
                shadowOpacity={star.isDblClick ? 1 : 0.6}
                shadowOffsetX={star.isDragging ? 10 : 5}
                shadowOffsetY={star.isDragging ? 10 : 5}
                scaleX={star.isDragging ? 1.2 : 1}
                scaleY={star.isDragging ? 1.2 : 1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onDragMove={handleDragMove}
                onDblClick={(e) => {
                  if (fromShapeId) {
                    
                    setFromShapeId(null);
                    setToShapeId(null);
                  } else {
                    setFromShapeId(star.id);
                    setToShapeId(stars.length.toString())
                    setStars(prevStars => [...prevStars, {
                      id: prevStars.length.toString(),
                      ...e.target.position(),
                      fill: "transparent",
                      draggable: true,
                      isDragging: false,
                      isDblClick: false
                    }])

                    const newConnector = {
                      from: star.id,
                      to: stars.length.toString(),
                      id: connectors.length
                    };
                    setConnectors(connectors.concat([newConnector]));
                  }
                }}
                // onDblClick={e => setStars(prevStars => prevStars.map(star => ({...star, dblClick: star.id  == e.target.id()})))}
              />
            </>
          );
        })}
        {connectors.map(con => {
          const from = stars.find(s => s.id === con.from);
          const to = stars.find(s => s.id === con.to);

          return (
            <Edge node1={to} node2={from}/>
          );
        })}
        {/* {edges.map(({to,from}) => <Edge node1={to} node2={from}/>)} */}
      </Layer>
    </Stage>
  );
};

export default App;
