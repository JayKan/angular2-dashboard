import { Component, HostBinding, ChangeDetectorRef, ChangeDetectionStrategy, OnDestroy, Input } from '@angular/core';
import { clamp, linearEase, getSvgArc, materialEase } from './utils';


/** A single degree in radians. */
export const DEGREE_IN_RADIANS = Math.PI / 180;
/** Duration of the indeterminate animation. */
const DURATION_INDETERMINATE = 667;
/** Duration of the indeterminate animation. */
const DURATION_DETERMINATE = 225;
/** Start animation value of the indeterminate animation */
const startIndeterminate = 3;
/** End animation value of the indeterminate animation */
const endIndeterminate = 80;

export type ProgressCircleMode = 'determinate' | 'indeterminate';
type EasingFn = (currentTime: number, startValue: number, changeInValue: number, duration: number) => number;


@Component({
  selector: 'md-progress-circle',
  host: {
    'role': 'progressbar',
    '[attr.aria-valuemin]': '_ariaValueMin',
    '[attr.aria-valuemax]': '_ariaValueMax',
  },
  styles: [`
    /* Animation Durations */
/** Component sizing */
/* Animation Durations */
/** Component sizing */
:host {
    display: block;
    /** Height and width are provided for md-progress-circle to act as a default.
        The height and width are expected to be overwritten by application css. */
    height: 100px;
    width: 100px;
    /** SVG's viewBox is defined as 0 0 100 100, this means that all SVG children will placed
        based on a 100px by 100px box.  Additionally all SVG sizes and locations are in reference to
        this viewBox.
    */
}

:host svg {
    height: 100%;
    width: 100%;
    -webkit-transform-origin: center;
    transform-origin: center;
}

:host path {
    fill: transparent;
    stroke: #00897b;
    /** Stroke width of 10px defines stroke as 10% of the viewBox */
    stroke-width: 10px;
}

:host[color="accent"] path {
    stroke: #8e24aa;
}

:host[color="warn"] path {
    stroke: #e53935;
}

:host[mode="indeterminate"] {
    -webkit-animation-duration: 5.25s, 2.8875s;
    animation-duration: 5.25s, 2.8875s;
    -webkit-animation-name: md-progress-circle-sporadic-rotate, md-progress-circle-linear-rotate;
    animation-name: md-progress-circle-sporadic-rotate, md-progress-circle-linear-rotate;
    -webkit-animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1), linear;
    animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1), linear;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-transition: none;
    transition: none;
}

/** Animations for indeterminate mode */
@-webkit-keyframes md-progress-circle-linear-rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes md-progress-circle-linear-rotate {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-webkit-keyframes md-progress-circle-sporadic-rotate {
    12.5% {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
    }
    25% {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
    }
    37.5% {
        -webkit-transform: rotate(405deg);
        transform: rotate(405deg);
    }
    50% {
        -webkit-transform: rotate(540deg);
        transform: rotate(540deg);
    }
    62.5% {
        -webkit-transform: rotate(675deg);
        transform: rotate(675deg);
    }
    75% {
        -webkit-transform: rotate(810deg);
        transform: rotate(810deg);
    }
    87.5% {
        -webkit-transform: rotate(945deg);
        transform: rotate(945deg);
    }
    100% {
        -webkit-transform: rotate(1080deg);
        transform: rotate(1080deg);
    }
}

@keyframes md-progress-circle-sporadic-rotate {
    12.5% {
        -webkit-transform: rotate(135deg);
        transform: rotate(135deg);
    }
    25% {
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
    }
    37.5% {
        -webkit-transform: rotate(405deg);
        transform: rotate(405deg);
    }
    50% {
        -webkit-transform: rotate(540deg);
        transform: rotate(540deg);
    }
    62.5% {
        -webkit-transform: rotate(675deg);
        transform: rotate(675deg);
    }
    75% {
        -webkit-transform: rotate(810deg);
        transform: rotate(810deg);
    }
    87.5% {
        -webkit-transform: rotate(945deg);
        transform: rotate(945deg);
    }
    100% {
        -webkit-transform: rotate(1080deg);
        transform: rotate(1080deg);
    }
}

  `],
  template:`
  <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
    <path [attr.d]="currentPath"></path>
  </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdProgressCircle implements OnDestroy {

  private _mode: ProgressCircleMode = 'determinate';
  @Input()
  @HostBinding('attr.mode')
  get mode() {
    return this._mode;
  }
  set mode(m: ProgressCircleMode) {
    if (m === 'indeterminate') {
      this._startIndeterminateAnimation();
    } else {
      this._cleanupIndeterminateAnimation();
    }
    this._mode = m;
  }

  /**
   * Value of the progress circle.
   *
   * Input:number
   * _value is bound to the host of as the attribute aria-valuenow.
   */
  private _value: number;
  @Input()
  @HostBinding('attr.aria-valuenow')
  get value() {
    if (this.mode === 'determinate') {
      return this._value;
    }
  }
  set value(v: number) {
    if (v && this.mode === 'determinate') {
      let newValue = clamp(v);
      this._animateCircle((this.value || 0), newValue, linearEase, DURATION_DETERMINATE, 0);
      this._value = newValue;
    }
  }

  /** The current path value, representing the progress circle. */
  private _currentPath: string;
  get currentPath() {
    return this._currentPath;
  }
  set currentPath(path: string) {
    this._currentPath = path;
    // Mark for check as our ChangeDetectionStrategy is OnPush, when changes come from within the
    // component, change detection must be called for.
    this._changeDetectorRef.markForCheck();
  }

  // The id of the last requested animation.
  private _lastAnimationId: number = 0;

  // The id of the indeterminate interval.
  private _interdeterminateInterval: number;
  get interdeterminateInterval() {
    return this._interdeterminateInterval;
  }
  set interdeterminateInterval(interval: number) {
    clearInterval(this._interdeterminateInterval);
    this._interdeterminateInterval = interval;
  }

  constructor(private _changeDetectorRef: ChangeDetectorRef) {}

  /** Clean up any animations that were running. */
  ngOnDestroy(): void {
    this._cleanupIndeterminateAnimation();
  }

  get _ariaValueMin() {
    return this._mode === 'determinate' ? 0 : null;
  }
  get _ariaValueMax() {
    return this._mode === 'determinate' ? 100 : null;
  }

  /**
   * Animates the circle from one percentage value to another.
   *
   * @param animateFrom The percentage of the circle filled starting the animation.
   * @param animateTo The percentage of the circle filled ending the animation.
   * @param ease The easing function to manage the pace of change in the animation.
   * @param duration The length of time to show the animation, in milliseconds.
   * @param rotation The starting angle of the circle fill, with 0° represented at the top center
   *    of the circle.
   */
  private _animateCircle(animateFrom: number, animateTo: number, ease: EasingFn, duration: number, rotation: number) {
    let id = ++this._lastAnimationId;
    let startTime = Date.now();
    let changeInValue = animateTo - animateFrom;

    // No need to animate it if the values are the same
    if (animateTo === animateFrom) {
      this.currentPath = getSvgArc(animateTo, rotation);
    } else {
      let animation = (currentTime: number) => {
        let elapsedTime = Math.max(0, Math.min((currentTime || Date.now()) - startTime, duration));

        this.currentPath = getSvgArc(
          ease(elapsedTime, animateFrom, changeInValue, duration),
          rotation
        );

        // Prevent overlapping animations by checking if a new animation has been called for and
        // if the animation has lasted long than the animation duration.
        if (id === this._lastAnimationId && elapsedTime < duration) {
          requestAnimationFrame(animation);
        }
      };
      requestAnimationFrame(animation);
    }
  }

  /**
   * Starts the indeterminate animation interval, if it is not already running.
   */
  private _startIndeterminateAnimation() {
    let rotationStartPoint = 0;
    let start = startIndeterminate;
    let end = endIndeterminate;
    let duration = DURATION_INDETERMINATE;
    let animate = () => {
      this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
      // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
      rotationStartPoint = (rotationStartPoint + end) % 100;
      let temp = start;
      start = -end;
      end = -temp;
    };

    if (!this.interdeterminateInterval) {
      this.interdeterminateInterval = setInterval(
        animate, duration + 50, 0, false);
      animate();
    }
  }

  /**
   * Removes interval, ending the animation.
   */
  private _cleanupIndeterminateAnimation() {
    this.interdeterminateInterval = null;
  }
}