import React from "react";
import "../Cadastro/cadastro.css";

const CadastroColaborador = () => {
    return (
        <div>
            <div className={"caixaCadastro"}>
                <h1 className={"tituloCadastro"}>Cadastro de colaborador</h1>
                <hr />
                <div className={"form"}>
                    <div className={"formCadastro"}>
                        <h3>Nome Completo</h3>
                        <input type="text" id={"inputNome"} />
                        <h3>E-mail</h3>
                        <input type="text" id={"inputEmail"} />
                        <h3>Senha de acesso</h3>
                        <input type="password" id={"inputSenha"} />
                        <h3>Repita a senha</h3>
                        <input type="password" id={"inputSenha"} />
                    </div>
                    <div className={"formImagem"}></div>
                </div>
            </div>
        </div>
    );
}

export default CadastroColaborador;
