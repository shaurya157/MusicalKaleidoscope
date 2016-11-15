
export const tick = (container, stage) => {
  return () => {
    container.rotation += 1;
    stage.update();
  };
};
