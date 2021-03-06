import { by, element } from 'protractor';

export class VacunasPage {
   
    private btnBuscar = element(by.id('btnBuscarVacunasId'));
    private inputTipoDoc= element(by.id("tipoDocUsuario"));
    private inputDoc= element(by.id("numDocumento"));
    private checkPendientes = element(by.id("aplicadas"));

    private inputNombreVacuna = element(by.id("nombreVacuna"));
    private inputestadoVacuna = element(by.id("estadoVacuna"));
    private inputdosisvacuna = element(by.id("dosisVacuna"));
    private inputValorVacuna = element(by.id("valorVacuna"));
    private inputSubsidiada = element(by.id("subsidiadaVacuna"));
    private inputdosisPendientes = element(by.id("dosisPendientesVacuna"));
    private inputTiempoDosis = element(by.id("tiempoDosisVacuna"));
    private btnGuardarVacuna = element(by.id("btnGuardarVacuna"));
    

    private inputtipoDocUsuarioregistro = element(by.id('tipoDocUsuarioregistro'));
    private inputnumDocumentoRegistro = element(by.id('numDocumentoRegistro'));
    private inputnombreusuarioRegistro = element(by.id('nombreusuarioRegistro'));
    private inputfechanac = element(by.id('fechanac'));
    private inputtipoSangre = element(by.id('tipoSangre'));
    private btnRegistrarUsuario = element(by.id('btnRegistrarusuario'));
    private btnRegistrarUsuarioGuardar = element(by.id('btnRegistrarUsuarioGuardar'));

    async clickBotonBuscarVacunas() {
        await this.btnBuscar.click();
    }
    async ingresarTipoDoc(tipoDoc) {
        await this.inputTipoDoc.sendKeys(tipoDoc);
    }
    async ingresarDocumento(documento){
        await this.inputDoc.sendKeys(documento);
    }
    async ingresarPendientes(checkpendiente){
        await this.checkPendientes.sendKeys(checkpendiente);
    }



    async ingresarinputNombreVacuna(inputNombreVacuna){
        await this.inputNombreVacuna.sendKeys(inputNombreVacuna);
    }
    async ingresarinputestadoVacuna(inputestadoVacuna){
        await this.inputestadoVacuna.sendKeys(inputestadoVacuna);
    }
    async ingresarinputdosisvacuna(inputdosisvacuna){
        await this.inputdosisvacuna.sendKeys(inputdosisvacuna);
    }
    async ingresarinputValorVacunas(inputValorVacunas){
        await this.inputValorVacuna.sendKeys(inputValorVacunas);
    } 
    async ingresarinputSubsidiada(inputSubsidiada){
        await this.inputSubsidiada.sendKeys(inputSubsidiada);
    } 
    async ingresarinputTiempoDosis(inputTiempoDosis){
        await this.inputTiempoDosis.sendKeys(inputTiempoDosis);
    } 
    async ingresarinputdosisPendientes(dosis){
        await this.inputdosisPendientes.sendKeys(dosis);
    } 
    async clickbtnGuardarVacuna(){
        await this.btnGuardarVacuna.click();
    }


    async ingresarinputtipoDocUsuarioregistro(inputtipoDocUsuarioregistro){
        await this.inputtipoDocUsuarioregistro.sendKeys(inputtipoDocUsuarioregistro);
    }
    async ingresarinputnumDocumentoRegistro(inputnumDocumentoRegistro){
        await this.inputnumDocumentoRegistro.sendKeys(inputnumDocumentoRegistro);
    }
    async ingresarinputtipoSangre(inputtipoSangre){
        await this.inputtipoSangre.sendKeys(inputtipoSangre);
    }
    async ingresarinputfechanac(inputfechanac){
        await this.inputfechanac.sendKeys(inputfechanac);
    }
    async ingresarinputnombreusuarioRegistro(inputnombreusuarioRegistro){
        await this.inputnombreusuarioRegistro.sendKeys(inputnombreusuarioRegistro);
    }
    async clickbtnRegistrarUsuario(){
        await this.btnRegistrarUsuario.click();
    }

    async clickbtnRegistrarUsuarioGuardar(){
        await this.btnRegistrarUsuarioGuardar.click();
    }


}
