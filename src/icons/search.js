import React from 'react'
import Svg, { Path } from 'react-native-svg';

export default ({ width, height, style }) => (
  <Svg width={width || 23} height={height || 23} viewBox="0 0 23 23" fill="white" style={style}>
    <Path d="M15.9151 13.6482C18.676 9.74957 17.7526 4.3511 13.854 1.59086C9.95537 -1.16939 4.55691 -0.246668 1.79667 3.65263C-0.963576 7.55126 -0.040857 12.9491 3.85844 15.7093C6.64111 17.6794 10.3201 17.8311 13.2551 16.0978L19.6324 22.4368C20.321 23.1616 21.4666 23.1907 22.1915 22.5021C22.9163 21.8142 22.9453 20.6685 22.2574 19.9437C22.2357 19.9206 22.2145 19.8995 22.1915 19.8777L15.9151 13.6482ZM8.85062 14.2392C5.76983 14.2398 3.27209 11.7441 3.27011 8.66328C3.26945 5.58249 5.76521 3.08475 8.84666 3.08343C11.9235 3.08211 14.4199 5.57392 14.4258 8.65074C14.4311 11.7322 11.9367 14.2339 8.85458 14.2392C8.85326 14.2392 8.8526 14.2392 8.85062 14.2392Z" fill="#C9C9C9" fill-opacity="0.6"/>
  </Svg>
)