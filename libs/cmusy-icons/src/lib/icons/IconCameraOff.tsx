/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconCameraOff: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <g clipPath="url(#clip0_40_2532)">
        <path
          d="M1 1L23 23"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V17.34M15.28 15.28C14.9481 15.765 14.5134 16.171 14.0068 16.469C13.5002 16.7669 12.9342 16.9496 12.3489 17.004C11.7637 17.0584 11.1737 16.9831 10.6209 16.7836C10.0681 16.5841 9.56601 16.2652 9.15042 15.8496C8.73483 15.434 8.41593 14.9319 8.2164 14.3791C8.01688 13.8263 7.94163 13.2363 7.99601 12.6511C8.05039 12.0658 8.23306 11.4998 8.53103 10.9932C8.829 10.4866 9.23495 10.0519 9.72 9.72M21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6L21 21Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_40_2532">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

IconCameraOff.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
