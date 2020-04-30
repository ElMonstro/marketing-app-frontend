import React from "react";
import { Route } from "react-router-dom";
import PropType from "prop-types";

// This is component will allow the use of a common layout for each route hence no repitition
const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropType.any.isRequired,
  layout: PropType.any.isRequired,
  path: PropType.string,
};

export default RouteWithLayout;
