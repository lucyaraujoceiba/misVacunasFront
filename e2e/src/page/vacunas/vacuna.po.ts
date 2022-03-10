import { by, element } from 'protractor';

export class VacunasPage {
   
    private linkvacunas = element(by.id('linkvacunas'));
    async clickBotonListarProductos() {
        await this.linkvacunas.click();
    }
}
