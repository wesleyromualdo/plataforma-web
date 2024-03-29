export class Usuario {
    nu_cpf: any;
    tx_nome: any;
    tx_senha: any;
    tx_senha_confirma: any;
    tx_email: any;
    tx_foto: any;
    bo_status: any;
    dt_inclusao: any;
    cliente?: any;
    cliente_id?: any;
    perfil?: any;
    perfil_id?: any;
    superuser?: any;
    constante_virtual?: any;
    nu_worker?: any;

    // @ts-ignore
    constructor(data?): any{
        if(data){
            data = JSON.parse(data);
            this.nu_cpf =  data.nu_cpf;
            this.tx_nome = data.tx_nome;
            this.tx_senha = data.tx_senha;
            this.tx_senha_confirma = data.tx_senha_confirma;
            this.tx_email = data.tx_email;
            this.dt_inclusao = data.dt_inclusao;
            this.bo_status = data.bo_status;
            this.cliente = data.cliente;
            this.cliente_id = data.cliente_id;
            this.perfil = data.perfil;
            this.tx_foto = data.tx_foto;
            this.perfil_id = data.perfil_id;
            this.superuser = data.superuser;
            this.constante_virtual = data.constante_virtual;
            this.nu_worker = data.nu_worker;
        }
    }
}

export class DadosAcesso {
    perfil: any;
    automacao: any;
    nu_cpf: any;
    cliente_id: any;
}

export class SenhaAcesso {
    nu_cpf: any;
    tx_senha: any;
    tx_senha_confirma: any;
}

export class CofreSenha {
    cliente_id: any;
    tx_nome: any;
    tx_usuario: any;
    tx_senha: any;
    token: any;
}
