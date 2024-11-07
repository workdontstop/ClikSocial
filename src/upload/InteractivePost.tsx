import { matchPc, matchTablet } from "../DetectDevice";
import { Grid } from "@material-ui/core";
import React, { useState, useEffect, useRef } from "react";

function InteractivePostx({
  setopeninteraction,
  selectedImagexx,
}: any): JSX.Element {
  ///
  ///
  ///

  const [touchPosition, setTouchPosition] = useState(null);

  const [showbutts, setshowbutts] = useState<boolean>(true);

  const [showbuttsx, setshowbuttsx] = useState<boolean>(true);

  const [cropInitial, setcropInitial] = useState<any>({ x: 0, y: 0 });

  const handleTouchMoveTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const canvasRef: any = useRef(null);

  useEffect(() => {
    var ctx = canvasRef.current.getContext("2d");
    var context = ctx;

    const previewFileReadimage = new Image();
    previewFileReadimage.src = selectedImagexx[0];

    previewFileReadimage.onload = function () {
      ///
      ///

      var ratio =
        previewFileReadimage.naturalHeight / previewFileReadimage.naturalWidth;

      var width = window.innerHeight / ratio;

      canvasRef.current.height = window.innerHeight;
      canvasRef.current.width = width;

      ctx.drawImage(previewFileReadimage, 0, 0, width, window.innerHeight);

      var x = cropInitial.x;
      var y = cropInitial.y;
      var r = 50;
      var c = 272;
      var a = 0.9;

      context.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);

      context.fillStyle = "yellow";
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = "black";
      context.stroke();
      ctx.closePath();

      ///use this
    };
  }, [selectedImagexx, cropInitial]);

  ///
  ///
  ///

  const handleTouchStart = (e: any, type: any) => {
    ////mouseover(0);

    if (!showbutts) {
      if (type === 0) {
        setcropInitial({
          ...cropInitial,
          x: e.clientX,
          y: e.clientY - 70,
        });
      } else {
        setcropInitial({
          ...cropInitial,
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
      }

      if (e.target) {
        setshowbutts(true);
        ///setDrag(true);
        ///setshowalloptions(false);
        ////alert(e.clientY);
      }
    }
    ///
    ///BREAK
    ///
    if (!showbuttsx) {
      var ctx = canvasRef.current.getContext("2d");
      var context = ctx;

      var x = cropInitial.x;
      var y = cropInitial.y;
      var r = 50;
      var c = 272;
      var a = 0.9;

      context.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);

      context.fillStyle = "yellow";
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = "black";
      context.stroke();

      if (ctx.isPointInPath(e.clientX, e.clientY - 70)) {
        alert("jj");
      }

      ctx.closePath();
    }
  };

  const shiixx = () => {
    setshowbuttsx(false);
  };

  const shii = () => {
    setshowbutts(false);
  };

  return (
    <>
      <Grid
        container
        style={{
          width: "100%",
          margin: "auto",
          backgroundColor: "#cccccc",
          height: "100%",
          position: "fixed",
          zIndex: "2",
        }}
      >
        <Grid
          item
          xs={3}
          style={{
            padding: "0px",
          }}
        ></Grid>
        <Grid
          className="tur"
          item
          onClick={shii}
          xs={3}
          style={{
            padding: "0px",
            backgroundColor: "#888888",
            borderRadius: "50vh",
            color: "#ffffff",
            height: "7vh",
            alignItems: "center",
            display: "grid",
            textAlign: "center",
            cursor: "pointer",
            visibility: showbutts ? "visible" : "hidden",
          }}
        >
          SETUP
        </Grid>

        <Grid
          item
          xs={3}
          onClick={shiixx}
          style={{
            padding: "0px",
            backgroundColor: "#0b1728",
            borderRadius: "50vh",
            color: "#ffffff",
            height: "7vh",
            alignItems: "center",
            display: "grid",
            textAlign: "center",
            cursor: "pointer",
            visibility: showbutts ? "visible" : "hidden",
          }}
        >
          {" "}
          ACTIVATE
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            padding: "0px",
          }}
        ></Grid>

        <Grid
          item
          xs={12}
          style={{
            padding: "0px",
          }}
        >
          <canvas
            onMouseDown={(e: any) => {
              // handleTouchStart(e, 0);
            }}
            onTouchStart={(e: any) => {
              // handleTouchStart(e, 1);
            }}
            onMouseMove={(e: any) => {
              //handleTouchDrag(e, 0);
            }}
            onTouchMove={(e: any) => {
              // handleTouchDrag(e, 1);
            }}
            onMouseUp={(e: any) => {
              handleTouchStart(e, 0);
            }}
            onTouchEnd={(e: any) => {
              handleTouchStart(e, 1);
            }}
            ref={canvasRef}
            style={{
              padding: "0px",
              zIndex: 0,
              backgroundColor: "#00ccff",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export const InteractivePost = React.memo(InteractivePostx);
