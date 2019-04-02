/**
 * @file 地图
 */
declare namespace my {
  interface IGetCenterLocationResult {
    longitude: number;
    latitude: number;
    scale: number;
  }

  interface IShowRouteOptions {
    startLat?: number;
    startLng?: number;
    endLat?: number;
    endLng?: number;
    routeColor?: string;
    iconPath?: string;
    iconWidth?: number;
    routeWidth?: number;
    zIndex?: number;
  }

  interface IGestureEnableOptions {
    isGestureEnable: 0 | 1;
  }

  interface IShowsScaleOptions {
    isShowsScale: 0 | 1;
  }

  interface IShowsCompassOptions {
    isShowsCompass: 0 | 1;
  }

  interface IUpdateComponentsOptions {
    scale?: number;
    longitude?: number;
    latitude?: number;
    command?: {
      markerAnim?: Array<{
        type?: number;
        markerId?: string;
      }>,
    };
    setting?: {
      gestureEnable?: 0 | 1;
      showScale?: 0 | 1;
      showCompass?: 0 | 1;
      tiltGesturesEnabled?: 0 | 1;
      trafficEnabled?: 0 | 1;
      showMapText?: 0 | 1;
      logoPosition?: { centerX?: number; centerY?: number; };
    };
    markers?: any[];
    polylines?: any[];
    'include-points'?: any[];
    'include-padding'?: {
      left?: 0;
      right?: 0;
      top?: 0;
      bottom?: 0;
    };
  }

  interface IMapContext {
    /**
     * 移动视野到定位点并恢复到默认缩放级别，需要配合map组件的show-location使用
     */
    moveToLocation(): void;
    /**
     * 设置所有手势是否可用，1：可用 ，0：不可用
     */
    gestureEnable(options: IGestureEnableOptions): void;
    /**
     * 设置比例尺控件是否可见，1：可见 ，0：不可见
     */
    showsScale(options: IShowsScaleOptions): void;
    /**
     * 设置指南针是否可见，1：可见 ，0：不可见
     */
    showsCompass(options: IShowsCompassOptions): void;
    /**
     * 规划步行路线，一条
     */
    showRoute(options: IShowRouteOptions): void;
    /**
     * 清除地图上的步行导航路线
     */
    clearRoute(): void;
    /**
     * 获取当前地图中心位置
     */
    getCenterLocation(callback: (res: IGetCenterLocationResult) => {}): void;
    /**
     * 增量更新地图接口
     */
    updateComponents(options: IUpdateComponentsOptions): void;
  }
  /**
   * 创建并返回一个 map 上下文对象 mapContext。
   */
  function createMapContext(mapId: string): IMapContext;
}
