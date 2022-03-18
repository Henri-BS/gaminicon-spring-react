import "./styles.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-4 mb-3">
                    <ul><h3>Site</h3>
                        <li>Sobre Nós</li>
                        <li>Perguntas Frequentes</li>
                        <li>Mapa do Site</li>
                        <li>Novidades</li>
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4 mb-3">
                    <ul><h3>Contato com Desenvolvedor</h3>
                        <li>GitHub</li>
                        <li>LinkedIn</li>
                        <li>Email</li>
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-4 mb-3">
                <ul><h3>Conta</h3>
                        <li>Cadastro</li>
                        <li>Login</li>
                        <li>Receber notificações por Email</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Footer;