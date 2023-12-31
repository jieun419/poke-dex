interface PokeStyleT {
  color?: string;
  width?: string;
  height?: string;
  type?: string;
}

const Pokeball = ({ color, width, height }: PokeStyleT) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : '100%'}
      height={height ? height : '100%'}
      viewBox="0 0 506 508"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M505.411 273.937H354.613C345.123 321.65 303.021 357.612 252.52 357.612C202.018 357.612 159.916 321.65 150.426 273.937H0C10.3987 404.401 119.567 507.032 252.706 507.032C385.844 507.032 495.012 404.401 505.411 273.937ZM505.33 232.099H354.41C344.536 184.883 302.669 149.42 252.52 149.42C202.37 149.42 160.504 184.883 150.629 232.099H0.0813679C10.9549 102.109 119.906 0 252.706 0C385.505 0 494.456 102.109 505.33 232.099ZM251.994 321.273C289.414 321.273 319.75 290.937 319.75 253.516C319.75 216.095 289.414 185.759 251.994 185.759C214.573 185.759 184.237 216.095 184.237 253.516C184.237 290.937 214.573 321.273 251.994 321.273Z"
        fill={color ? color : '#fff'}
      />
    </svg>
  );
};

export default Pokeball;
