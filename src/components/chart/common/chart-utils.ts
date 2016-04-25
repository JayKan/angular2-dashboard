export const randomScalingGenerator = (): number => {
  return (Math.random() * 0.5 ? 1.0: 0.1) * Math.round(Math.random() * 100);
};

export const randomColorGenerator = (): number => {
  return Math.round(Math.random() * 255);
};

export const randomColor = (opacity:number): string => {
  return 'rgba(' + `${randomColorGenerator()}` + ',' + `${randomColorGenerator()}` + ',' + `${randomColorGenerator()}` + ',' + (opacity + .3) + ')';
};

