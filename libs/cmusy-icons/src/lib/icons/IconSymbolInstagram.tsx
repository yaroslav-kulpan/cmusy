/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconSymbolInstagram: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <g clipPath="url(#clip0_517_25412)">
        <path
          d="M12.0039 5.83813C8.60095 5.83813 5.84595 8.59614 5.84595 11.9961C5.84595 15.3991 8.60395 18.1541 12.0039 18.1541C15.4069 18.1541 18.1619 15.3961 18.1619 11.9961C18.1619 8.59314 15.4039 5.83813 12.0039 5.83813ZM12.0039 15.9931C9.79495 15.9931 8.00695 14.2041 8.00695 11.9961C8.00695 9.78814 9.79595 7.99914 12.0039 7.99914C14.2119 7.99914 16.0009 9.78814 16.0009 11.9961C16.0019 14.2041 14.2129 15.9931 12.0039 15.9931Z"
          fill={color}
        />
        <path
          d="M16.948 0.0758749C14.74 -0.0271251 9.27098 -0.0221251 7.06098 0.0758749C5.11898 0.166875 3.40598 0.635875 2.02498 2.01687C-0.283017 4.32487 0.0119831 7.43488 0.0119831 11.9959C0.0119831 16.6639 -0.248017 19.7019 2.02498 21.9749C4.34198 24.2909 7.49698 23.9879 12.004 23.9879C16.628 23.9879 18.224 23.9909 19.859 23.3579C22.082 22.4949 23.76 20.5079 23.924 16.9389C24.028 14.7299 24.022 9.26188 23.924 7.05188C23.726 2.83888 21.465 0.283875 16.948 0.0758749ZM20.443 20.4479C18.93 21.9609 16.831 21.8259 11.975 21.8259C6.97498 21.8259 4.96998 21.8999 3.50698 20.4329C1.82198 18.7559 2.12698 16.0629 2.12698 11.9799C2.12698 6.45487 1.55998 2.47587 7.10498 2.19187C8.37898 2.14687 8.75398 2.13187 11.961 2.13187L12.006 2.16187C17.335 2.16187 21.516 1.60387 21.767 7.14787C21.824 8.41288 21.837 8.79288 21.837 11.9949C21.836 16.9369 21.93 18.9539 20.443 20.4479Z"
          fill={color}
        />
        <path
          d="M18.406 7.034C19.2008 7.034 19.845 6.38974 19.845 5.595C19.845 4.80027 19.2008 4.15601 18.406 4.15601C17.6113 4.15601 16.967 4.80027 16.967 5.595C16.967 6.38974 17.6113 7.034 18.406 7.034Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_517_25412">
          <rect width="24" height="24" fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};

IconSymbolInstagram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
