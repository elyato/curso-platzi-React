import PropTypes from "prop-types";

export const FristApp = ({ title, subtitle }) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </>
  );
};

FristApp.PropTypes = {
  title: PropTypes.string.isRequired,
};

FristApp.defaultProps = {
  title: "no hay titulo",
  subtitle:"no hay subtittulo"
};
