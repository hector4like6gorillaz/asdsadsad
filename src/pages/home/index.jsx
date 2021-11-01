import HeaderFooterWraper from "../../app/components/layout/InitWraper";
import {
  Container,
  Footer,
  Header,
  Main,
  Sidebar,
  Widget,
} from "../../Views/home/HomeStyled";

const index = () => {
  return (
    <HeaderFooterWraper>
      
      <Container className="contenedor">
        <Header className="header">
          <h1>Header</h1>
        </Header>

        <Main className="contenido">
          <h2>Test</h2>
          <p>Lorem asdasd</p>
        </Main>

        <Sidebar className="sidebar">Sidebar</Sidebar>

        <Widget className="widget-1">Widget-1</Widget>
        <Widget className="widget-2">Widget-2</Widget>

        <Footer className="footer">Footer</Footer>
      </Container>
    </HeaderFooterWraper>
  );
};

export default index;
