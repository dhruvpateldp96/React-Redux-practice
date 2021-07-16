import { Arrow, Line } from "react-konva";
const BORDER_RADIUS = 10;

const Edge = ({ node1, node2 }) => {
    const dx = node1.x - node2.x;
    const dy = node1.y - node2.y;
    let angle = Math.atan2(-dy, dx);
  
    const radius = 20;
    const curvePower = 30;
  
    const arrowStart = {
        x: node2.x,
        y: node2.y

    //   x: node2.x + -radius * Math.cos(angle + Math.PI),
    //   y: node2.y + radius * Math.sin(angle + Math.PI)
    };
  
    const arrowEnd = {
        x: node1.x,
        y: node1.y 

    //   x: node1.x + -radius * Math.cos(angle),
    //   y: node1.y + radius * Math.sin(angle)
    };
  
    const arrowCurve = {
      x:
        (arrowStart.x + arrowEnd.x) / 2 +
        curvePower * Math.cos(angle + Math.PI / 2),
      y:
        (arrowStart.y + arrowEnd.y) / 2 +
        curvePower * Math.sin(angle - Math.PI / 2)
    };
  
    const arrowCurve1 = {
        x:
          (arrowStart.x) ,
        y:
          (arrowStart.y + arrowEnd.y) / 2 
      };

    const arrowCurve2 = {
        x:
          (arrowEnd.x) ,
        y:
          (arrowStart.y + arrowEnd.y) / 2 
      };
    return (
      <Line
      draggable
        tension={0}
        points={[
          arrowStart.x,
          arrowStart.y,
        //   arrowCurve.x,
        //   arrowCurve.y,
        arrowCurve1.x,
        arrowCurve1.y,
        arrowCurve2.x,
        arrowCurve2.y,
          // (arrowStart.x),
          // (arrowStart.y+arrowEnd.y)/2,
          // (arrowStart.x + arrowEnd.x)/2,
          // (arrowStart.y + arrowEnd.y)/2,
          arrowEnd.x,
          arrowEnd.y
        ]}
        stroke="#000"
        fill="#000"
        strokeWidth={3}
        pointerWidth={6}
        sceneFunc= {function(ctx,shape){
            let points = shape.points();
    
            ctx.beginPath();
            ctx.moveTo(points[0],points[1]);
            if (points.length == 4) {
                ctx.lineTo(points[2],points[3]);
            } else {
                let n = 0;
    
                while (n < points.length-4) {
                    let deltaX1 = (points[n+2] - points[n+0]);
                    let deltaY1 = (points[n+3] - points[n+1]);
                    let br1 = Math.min(BORDER_RADIUS,Math.max(Math.abs(deltaX1/2),Math.abs(deltaY1/2)));
    
                    let deltaX2 = (points[n+2+2] - points[n+0+2]);
                    let deltaY2 = (points[n+3+2] - points[n+1+2]);
                    let br2 = Math.min(BORDER_RADIUS,Math.max(Math.abs(deltaX2/2),Math.abs(deltaY2/2)));
    
                    let br = Math.min(br1,br2);
    
                    let oneX = points[n+0] + (Math.abs(deltaX1) - br)*Math.sign(deltaX1);
                    let oneY = points[n+1] + (Math.abs(deltaY1) - br)*Math.sign(deltaY1);
    
                    ctx.lineTo(oneX, oneY);
                    n+=2;
                    let twoX = points[n+0] + (br)*Math.sign(deltaX2);
                    let twoY = points[n+1] + (br)*Math.sign(deltaY2);
    
                    ctx.quadraticCurveTo(points[n+0], points[n+1],twoX, twoY);
                }
                ctx.lineTo(points[points.length-2],points[points.length-1]);        
            }
            ctx.strokeShape(shape);
        }}
      />
    );
  };

export default Edge;