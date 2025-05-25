import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import styled from "styled-components";

function MyLayout() {
  return (
    <Layout>
      <Navbar />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const Content = styled.main`
  flex: 1;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export default MyLayout;