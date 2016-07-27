import { TemplateRef, ViewContainerRef, ElementRef, ComponentRef, Injector } from '@angular/core';
import {
  MdNullPortalHostError,
  MdPortalAlreadyAttachedError,
  MdNoPortalAttachedError,
  MdNullPortalError,
  MdPortalHostAlreadyDisposedError,
  MdUnknownPortalTypeError
} from './portal.errors';
import { ComponentType } from '../overlay/generic-component-type';

/**
 * A `PortalHost` is an space that can contain a single `Portal`.
 */
export interface PortalHost {
  attach(portal: Portal<any>): Promise<any>;
  detach(): Promise<any>;
  dispose(): void;
  hasAttached(): boolean;
}

/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attached to, or detached from a `PortalHost`.
 */
export abstract class Portal<T> {
  private _attachedHost: PortalHost;

  /** Attach this portal to a host. */
  attach(host: PortalHost): Promise<T> {
    if (host === null) {
      throw new MdNullPortalHostError();
    }
    if (host.hasAttached()) {
      throw new MdPortalAlreadyAttachedError();
    }

    this._attachedHost = host;
    return <Promise<T>> host.attach(this);
  }

  /** Detach this portal from its host */
  detach(): Promise<void> {
    let host = this._attachedHost;
    if (host === null) {
      throw new MdNoPortalAttachedError();
    }
    this._attachedHost = null;
    return host.detach();
  }

  /** Whether this portal is attached to a host. */
  get isAttached(): boolean {
    return this._attachedHost !== null;
  }

  /**
   * Sets the PortalHost reference without performing `attach()`. This is used directly by
   * the PortalHost when it is performing an `attach()` or `detach()`.
   */
  setAttachedHost(host: PortalHost) {
    this._attachedHost = host;
  }
}

/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
export class ComponentPortal<T> extends Portal<ComponentRef<T>> {
  /** The type of the component that will be instantiated for attachment. */
  component: ComponentType<T>;
  viewContainerRef: ViewContainerRef;
  injector: Injector;

  constructor(component: ComponentType<T>,
              viewContainerRef: ViewContainerRef = null,
              injector: Injector = null) {
    super();
    this.component = component;
    this.viewContainerRef = viewContainerRef;
    this.injector = injector;
  }
}

/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
export class TemplatePortal extends Portal<Map<string, any>> {
  templateRef: TemplateRef<any>;

  viewContainerRef: ViewContainerRef;

  locals: Map<string, any> = new Map<string, any>();

  constructor(template: TemplateRef<any>,
              viewContainerRef: ViewContainerRef) {
    super();
    this.templateRef = template;
    this.viewContainerRef = viewContainerRef;
  }

  get origin(): ElementRef {
    return this.templateRef.elementRef;
  }

  attach(host: PortalHost, locals?: Map<string, any>): Promise<Map<string, any>> {
    this.locals = locals == null ? new Map<string, any>() : locals;
    return super.attach(host);
  }

  detach(): Promise<void> {
    this.locals = new Map<string, any>();
    return super.detach();
  }
}


/**
 * Partial implementation of PortalHost that only deals with attaching either a
 * ComponentPortal or a TemplatePortal.
 */
export abstract class BasePortalHost implements PortalHost {
  /** The portal currently attached to the host. */
  private _attachedPortal: Portal<any>;

  /** A function that will permanently dispose this host. */
  private _disposeFn: () => void;

  /** Whether this host has already been permanently disposed. */
  private _isDisposed: boolean = false;

  abstract attachComponentPortal<T>(portal: ComponentPortal<T>): Promise<ComponentRef<T>>;

  abstract attachTemplatePortal(portal: TemplatePortal): Promise<Map<string, any>>;

  attach(portal: Portal<any>): Promise<any> {
    if (portal === null) {
      throw new MdNullPortalError();
    }

    if (this.hasAttached()) {
      throw new MdPortalAlreadyAttachedError();
    }

    if (this._isDisposed) {
      throw new MdPortalHostAlreadyDisposedError();
    }

    if (portal instanceof ComponentPortal) {
      this._attachedPortal = portal;
      return this.attachComponentPortal(portal);
    } else if (portal instanceof TemplatePortal) {
      this._attachedPortal = portal;
      return this.attachTemplatePortal(portal);
    }

    throw new MdUnknownPortalTypeError();
  }

  detach(): Promise<any> {
    this._attachedPortal.setAttachedHost(null);
    this._attachedPortal = null;
    if (this._disposeFn != null) {
      this._disposeFn();
      this._disposeFn = null;
    }

    return Promise.resolve(null);
  }

  dispose(): void {
    if (this.hasAttached()) {
      this.detach();
    }

    this._isDisposed = true;
  }

  /** Whether this host has an attached portal. */
  hasAttached(): boolean {
    return this._attachedPortal !== null;
  }

  setDisposeFn(fn: () => void) {
    this._disposeFn = fn;
  }
}