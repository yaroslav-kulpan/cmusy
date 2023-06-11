/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconWeatherWind: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M9.59 4.58998C9.82231 4.3563 10.1088 4.18363 10.4239 4.08732C10.739 3.99102 11.073 3.97407 11.3963 4.03797C11.7195 4.10188 12.022 4.24466 12.2768 4.45363C12.5315 4.66259 12.7307 4.93127 12.8566 5.23578C12.9825 5.54028 13.0313 5.87117 12.9985 6.19905C12.9657 6.52692 12.8524 6.84161 12.6687 7.11514C12.4849 7.38868 12.2365 7.61258 11.9454 7.76695C11.6542 7.92132 11.3295 8.00137 11 7.99998H2M12.59 19.41C12.8223 19.6437 13.1088 19.8163 13.4239 19.9126C13.739 20.0089 14.073 20.0259 14.3963 19.962C14.7195 19.8981 15.022 19.7553 15.2768 19.5463C15.5315 19.3374 15.7307 19.0687 15.8566 18.7642C15.9825 18.4597 16.0313 18.1288 15.9985 17.8009C15.9657 17.473 15.8524 17.1584 15.6687 16.8848C15.4849 16.6113 15.2365 16.3874 14.9454 16.233C14.6542 16.0786 14.3295 15.9986 14 16H2M17.73 7.72998C18.0208 7.43987 18.3787 7.2259 18.7719 7.10699C19.1652 6.98809 19.5816 6.96792 19.9845 7.04827C20.3874 7.12861 20.7642 7.307 21.0817 7.56765C21.3993 7.8283 21.6477 8.16318 21.805 8.54267C21.9623 8.92217 22.0236 9.33458 21.9836 9.74343C21.9436 10.1523 21.8035 10.545 21.5756 10.8868C21.3477 11.2286 21.0391 11.509 20.6771 11.7031C20.3151 11.8973 19.9108 11.9992 19.5 12H2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

IconWeatherWind.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
