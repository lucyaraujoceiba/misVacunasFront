import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { VacunasPage } from '../page/vacunas/vacuna.po';

describe('workspace-project Producto', () => {
    let page: AppPage;
    let navBar: NavbarPage;
    let producto: VacunasPage;

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        producto = new VacunasPage();
    });

    it('Deberia crear vacuna', () => {
      

        page.navigateTo();
        navBar.clickBotonProductos();
      
    });

   /* it('Deberia listar productos', () => {
        page.navigateTo();
        navBar.clickBotonProductos();
        producto.clickBotonListarProductos();

        expect(4).toBe(producto.contarProductos());
    });*/
});
