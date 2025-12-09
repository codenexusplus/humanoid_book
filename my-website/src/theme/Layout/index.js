import React from 'react';
import Layout from '@theme-original/Layout';
import ChatWidget from '../../components/ChatWidget/ChatWidget';

export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <ChatWidget />
    </>
  );
}