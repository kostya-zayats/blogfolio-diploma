import React, {FC} from "react";
import classnames from "classnames";

import styles from "./Icons.module.scss";

type IconProps = {
  unicClass?: string;
}

export const ArrowToRightIcon: FC<IconProps> = ({unicClass}) => {
  return (
    <svg
      className={
        classnames(
          unicClass,
          styles["svg-fill"]
        )
      }
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2901 18.7076C13.1001 18.5076 13.0001 18.2576 13.0001 17.9976C13.0001 17.7376 13.1001 17.4876 13.2901 17.2876L17.5901 12.9976L4.00006 12.9976C3.45006 12.9976 3.00006 12.5476 3.00006 11.9976C3.00006 11.4476 3.45006 10.9976 4.00006 10.9976L17.5901 10.9976L13.2901 6.70762C12.9001 6.31762 12.9001 5.67762 13.2901 5.28762C13.6801 4.89762 14.3201 4.89762 14.7101 5.28762L20.7101 11.2876C20.8001 11.3776 20.8701 11.4876 20.9201 11.6076C20.9401 11.6576 20.9601 11.6976 20.9601 11.7476C21.0101 11.9076 21.0101 12.0876 20.9601 12.2476C20.9601 12.2976 20.9401 12.3376 20.9201 12.3876C20.8701 12.5076 20.8001 12.6176 20.7101 12.7076L14.7101 18.7076C14.3201 19.0976 13.6801 19.0976 13.2901 18.7076Z"
      />
    </svg>
  );
};