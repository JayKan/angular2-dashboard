import { DEGREE_IN_RADIANS } from './progress-circle';

/**
 * Clamps a value to be between 0 and 100.
 */
function clamp(v: number) {
  return Math.max(0, Math.min(100, v));
}

/**
 * Converts Polar coordinates to Cartesian.
 */
function polarToCartesian(radius: number, pathRadius: number, angleInDegrees: number) {
  let angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;

  return (radius + (pathRadius * Math.cos(angleInRadians))) +
    ',' + (radius + (pathRadius * Math.sin(angleInRadians)));
}

/**
 * Easing function for linear animation.
 */
function linearEase(currentTime: number, startValue: number,
                    changeInValue: number, duration: number) {
  return changeInValue * currentTime / duration + startValue;
}

/**
 * Easing function to match material design indeterminate animation.
 */
function materialEase(currentTime: number, startValue: number,
                      changeInValue: number, duration: number) {
  let time = currentTime / duration;
  let timeCubed = Math.pow(time, 3);
  let timeQuad = Math.pow(time, 4);
  let timeQuint = Math.pow(time, 5);
  return startValue + changeInValue * ((6 * timeQuint) + (-15 * timeQuad) + (10 * timeCubed));
}

/**
 * Determines the path value to define the arc.  Converting percentage values to to polar
 * coordinates on the circle, and then to cartesian coordinates in the viewport.
 *
 * @param currentValue The current percentage value of the progress circle, the percentage of the
 *    circle to fill.
 * @param rotation The starting point of the circle with 0 being the 0 degree point.
 * @return A string for an SVG path representing a circle filled from the starting point to the
 *    percentage value provided.
 */
function getSvgArc(currentValue: number, rotation: number) {
  // The angle can't be exactly 360, because the arc becomes hidden.
  let maximumAngle = 359.99 / 100;
  let startPoint = rotation || 0;
  let radius = 50;
  let pathRadius = 40;

  let startAngle = startPoint * maximumAngle;
  let endAngle = currentValue * maximumAngle;
  let start = polarToCartesian(radius, pathRadius, startAngle);
  let end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
  let arcSweep = endAngle < 0 ? 0 : 1;
  let largeArcFlag: number;

  if (endAngle < 0) {
    largeArcFlag = endAngle >= -180 ? 0 : 1;
  } else {
    largeArcFlag = endAngle <= 180 ? 0 : 1;
  }

  return `M${start}A${pathRadius},${pathRadius} 0 ${largeArcFlag},${arcSweep} ${end}`;
}

export {
  clamp,
  linearEase,
  polarToCartesian,
  materialEase,
  getSvgArc
};