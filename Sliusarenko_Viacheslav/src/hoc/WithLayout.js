import React from 'react';
import { Layout } from "components/Layout";

export default function WithLayout( Component ) {
  return ( props ) => (
    <Layout>
      <Component { ...props }/>
    </Layout>
  );
}