import { useRef, useEffect } from "react";

const FALLOFF_CURVES = {
  linear: (t) => t,
  smooth: (t) => t * t * (3 - 2 * t),
  sharp: (t) => t * t * t,
};

const hexToRgb = (hex) => {
  const h = hex.replace("#", "");

  const value =
    h.length === 3
      ? h
          .split("")
          .map((char) => char + char)
          .join("")
      : h;

  const num = parseInt(value.slice(0, 6), 16);

  return [
    (num >> 16) & 255,
    (num >> 8) & 255,
    num & 255,
  ];
};

const CursorGrid = ({
  cellSize = 65,
  color = "#22D3EE",
  radius = 160,
  falloff = "smooth",
  holdTime = 350,
  fadeDuration = 900,
  lineWidth = 1.1,
  maxOpacity = 0.8,
  fillOpacity = 0.03,
  gridOpacity = 0.08,
  cellRadius = 2,
  clickPulse = true,
  pulseSpeed = 650,
  className = "",
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const propsRef = useRef({});
  const wakeRef = useRef(null);

  propsRef.current = {
    cellSize,
    color,
    radius,
    falloff,
    holdTime,
    fadeDuration,
    lineWidth,
    maxOpacity,
    fillOpacity,
    gridOpacity,
    cellRadius,
    clickPulse,
    pulseSpeed,
  };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;

    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let cols = 0;
    let rows = 0;

    let offX = 0;
    let offY = 0;

    let width = 0;
    let height = 0;

    let alphas = new Float32Array(0);
    let touched = new Float64Array(0);

    const pulses = [];

    let animationFrame = 0;
    let running = false;
    let lastFrame = 0;

    /* --------------------------------
       BUILD GRID
    -------------------------------- */

    const rebuild = () => {
      const p = propsRef.current;

      width = container.offsetWidth;
      height = container.offsetHeight;

      canvas.width = Math.max(
        1,
        Math.round(width * dpr)
      );

      canvas.height = Math.max(
        1,
        Math.round(height * dpr)
      );

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      cols =
        Math.ceil(width / p.cellSize) + 1;

      rows =
        Math.ceil(height / p.cellSize) + 1;

      /* Center grid */

      offX =
        (width - cols * p.cellSize) / 2;

      offY =
        (height - rows * p.cellSize) / 2;

      alphas = new Float32Array(
        cols * rows
      );

      touched = new Float64Array(
        cols * rows
      );
    };

    /* --------------------------------
       CELL CENTER
    -------------------------------- */

    const getCellCenter = (index) => {
      const p = propsRef.current;

      const column = index % cols;
      const row = Math.floor(index / cols);

      const x =
        offX +
        column * p.cellSize +
        p.cellSize / 2;

      const y =
        offY +
        row * p.cellSize +
        p.cellSize / 2;

      return [x, y];
    };

    /* --------------------------------
       ENERGIZE GRID
    -------------------------------- */

    const energize = (
      mouseX,
      mouseY,
      boost = 1
    ) => {
      const p = propsRef.current;

      const radius = Math.max(
        p.radius,
        1
      );

      const falloffFunction =
        FALLOFF_CURVES[p.falloff] ||
        FALLOFF_CURVES.linear;

      const now = performance.now();

      const minColumn = Math.max(
        0,
        Math.floor(
          (mouseX -
            radius -
            offX) /
            p.cellSize
        )
      );

      const maxColumn = Math.min(
        cols - 1,
        Math.floor(
          (mouseX +
            radius -
            offX) /
            p.cellSize
        )
      );

      const minRow = Math.max(
        0,
        Math.floor(
          (mouseY -
            radius -
            offY) /
            p.cellSize
        )
      );

      const maxRow = Math.min(
        rows - 1,
        Math.floor(
          (mouseY +
            radius -
            offY) /
            p.cellSize
        )
      );

      for (
        let row = minRow;
        row <= maxRow;
        row++
      ) {
        for (
          let column = minColumn;
          column <= maxColumn;
          column++
        ) {
          const index =
            row * cols + column;

          const [cellX, cellY] =
            getCellCenter(index);

          const distance = Math.hypot(
            cellX - mouseX,
            cellY - mouseY
          );

          if (distance > radius) {
            continue;
          }

          const intensity =
            falloffFunction(
              1 - distance / radius
            ) *
            p.maxOpacity *
            boost;

          if (
            intensity >
            alphas[index]
          ) {
            alphas[index] =
              intensity;

            touched[index] = now;
          } else if (intensity > 0) {
            touched[index] = now;
          }
        }
      }
    };

    /* --------------------------------
       DRAW
    -------------------------------- */

    const draw = (now) => {
      const p = propsRef.current;

      const deltaTime = Math.min(
        now - lastFrame,
        50
      );

      lastFrame = now;

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      const [red, green, blue] =
        hexToRgb(p.color);

      /* --------------------------------
         STATIC GRID
      -------------------------------- */

      if (p.gridOpacity > 0) {
        ctx.strokeStyle = `rgba(
          ${red},
          ${green},
          ${blue},
          ${p.gridOpacity}
        )`;

        ctx.lineWidth = 1;

        ctx.beginPath();

        /* Vertical lines */

        for (
          let column = 0;
          column <= cols;
          column++
        ) {
          const x =
            Math.round(
              offX +
                column *
                  p.cellSize
            ) + 0.5;

          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }

        /* Horizontal lines */

        for (
          let row = 0;
          row <= rows;
          row++
        ) {
          const y =
            Math.round(
              offY +
                row *
                  p.cellSize
            ) + 0.5;

          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
        }

        ctx.stroke();
      }

      /* --------------------------------
         CLICK PULSES
      -------------------------------- */

      for (
        let pulseIndex =
          pulses.length - 1;
        pulseIndex >= 0;
        pulseIndex--
      ) {
        const pulse =
          pulses[pulseIndex];

        const age =
          (now - pulse.startTime) /
          1000;

        const ringRadius =
          age * p.pulseSpeed;

        if (
          ringRadius >
          Math.hypot(width, height)
        ) {
          pulses.splice(
            pulseIndex,
            1
          );

          continue;
        }

        const band =
          p.cellSize;

        const minColumn =
          Math.max(
            0,
            Math.floor(
              (
                pulse.x -
                ringRadius -
                band -
                offX
              ) / p.cellSize
            )
          );

        const maxColumn =
          Math.min(
            cols - 1,
            Math.floor(
              (
                pulse.x +
                ringRadius +
                band -
                offX
              ) / p.cellSize
            )
          );

        const minRow =
          Math.max(
            0,
            Math.floor(
              (
                pulse.y -
                ringRadius -
                band -
                offY
              ) / p.cellSize
            )
          );

        const maxRow =
          Math.min(
            rows - 1,
            Math.floor(
              (
                pulse.y +
                ringRadius +
                band -
                offY
              ) / p.cellSize
            )
          );

        for (
          let row = minRow;
          row <= maxRow;
          row++
        ) {
          for (
            let column =
              minColumn;
            column <= maxColumn;
            column++
          ) {
            const index =
              row * cols + column;

            const [cellX, cellY] =
              getCellCenter(index);

            const distance =
              Math.hypot(
                cellX - pulse.x,
                cellY - pulse.y
              );

            if (
              Math.abs(
                distance -
                  ringRadius
              ) <
                band / 2
            ) {
              if (
                p.maxOpacity >
                alphas[index]
              ) {
                alphas[index] =
                  p.maxOpacity;

                touched[index] =
                  now;
              }
            }
          }
        }
      }

      /* --------------------------------
         GLOWING CELLS
      -------------------------------- */

      let somethingVisible =
        pulses.length > 0;

      const fadeStep =
        deltaTime /
        Math.max(
          p.fadeDuration,
          16
        );

      const half =
        p.cellSize / 2;

      for (
        let index = 0;
        index < alphas.length;
        index++
      ) {
        let alpha =
          alphas[index];

        if (alpha <= 0) {
          continue;
        }

        /* Fade */

        if (
          now -
            touched[index] >
          p.holdTime
        ) {
          alpha = Math.max(
            0,
            alpha - fadeStep
          );

          alphas[index] =
            alpha;

          if (alpha <= 0) {
            continue;
          }
        }

        somethingVisible = true;

        const [cellX, cellY] =
          getCellCenter(index);

        /* Glow */

        const gradient =
          ctx.createRadialGradient(
            cellX,
            cellY,
            half * 0.05,
            cellX,
            cellY,
            p.cellSize
          );

        gradient.addColorStop(
          0,
          `rgba(
            ${red},
            ${green},
            ${blue},
            ${alpha}
          )`
        );

        gradient.addColorStop(
          0.45,
          `rgba(
            ${red},
            ${green},
            ${blue},
            ${alpha * 0.45}
          )`
        );

        gradient.addColorStop(
          1,
          `rgba(
            ${red},
            ${green},
            ${blue},
            0
          )`
        );

        const x =
          cellX -
          half +
          0.5;

        const y =
          cellY -
          half +
          0.5;

        const size =
          p.cellSize - 1;

        ctx.beginPath();

        if (p.cellRadius > 0) {
          ctx.roundRect(
            x,
            y,
            size,
            size,
            p.cellRadius
          );
        } else {
          ctx.rect(
            x,
            y,
            size,
            size
          );
        }

        /* Cell fill */

        if (p.fillOpacity > 0) {
          ctx.fillStyle =
            `rgba(
              ${red},
              ${green},
              ${blue},
              ${alpha *
                p.fillOpacity}
            )`;

          ctx.fill();
        }

        /* Cell border */

        ctx.strokeStyle =
          gradient;

        ctx.lineWidth =
          p.lineWidth;

        ctx.stroke();
      }

      /* --------------------------------
         CONTINUE ANIMATION
      -------------------------------- */

      if (somethingVisible) {
        animationFrame =
          requestAnimationFrame(
            draw
          );
      } else {
        running = false;
      }
    };

    /* --------------------------------
       WAKE ANIMATION
    -------------------------------- */

    const wake = () => {
      if (running) {
        return;
      }

      running = true;

      lastFrame =
        performance.now();

      animationFrame =
        requestAnimationFrame(
          draw
        );
    };

    wakeRef.current = wake;

    /* --------------------------------
       POINTER POSITION
    -------------------------------- */

    const getLocalPosition = (
      event
    ) => {
      const rect =
        canvas.getBoundingClientRect();

      return [
        event.clientX - rect.left,
        event.clientY - rect.top,
      ];
    };

    /* --------------------------------
       MOUSE MOVE
    -------------------------------- */

    const handlePointerMove = (
      event
    ) => {
      const [x, y] =
        getLocalPosition(event);

      energize(x, y);

      wake();
    };

    /* --------------------------------
       MOUSE CLICK
    -------------------------------- */

    const handlePointerDown = (
      event
    ) => {
      if (
        !propsRef.current
          .clickPulse
      ) {
        return;
      }

      const [x, y] =
        getLocalPosition(event);

      pulses.push({
        x,
        y,
        startTime:
          performance.now(),
      });

      wake();
    };

    /* --------------------------------
       RESIZE
    -------------------------------- */

    const resizeObserver =
      new ResizeObserver(() => {
        rebuild();
        wake();
      });

    resizeObserver.observe(
      container
    );

    /* Initial setup */

    rebuild();
    wake();

    /* Events */

    container.addEventListener(
      "pointermove",
      handlePointerMove
    );

    container.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    /* --------------------------------
       CLEANUP
    -------------------------------- */

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      resizeObserver.disconnect();

      container.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      container.removeEventListener(
        "pointerdown",
        handlePointerDown
      );
    };
  }, [cellSize]);

  /* --------------------------------
     UPDATE PROPS
  -------------------------------- */

  useEffect(() => {
    wakeRef.current?.();
  }, [
    color,
    gridOpacity,
    lineWidth,
    maxOpacity,
    fillOpacity,
    cellRadius,
  ]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 h-full w-full overflow-hidden pointer-events-auto ${
        className || ""
      }`}
    >
      <canvas
        ref={canvasRef}
        className="block h-full w-full"
      />
    </div>
  );
};

export default CursorGrid;