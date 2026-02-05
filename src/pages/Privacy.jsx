import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import "./Privacy.scss";

export default function Privacy() {
  return (
    <>
      <Navigation />
      <main className="privacy-page">
        <div className="privacy-container">
          <h1>Política de Privacidade</h1>

          <p className="privacy-intro">
            A sua privacidade é importante para nós. Esta Política de Privacidade descreve como
            coletamos, usamos, armazenamos e protegemos as informações pessoais fornecidas pelos
            usuários ao acessar nossa landing page.
          </p>
          <p className="privacy-intro">
            Ao utilizar este site, você concorda com as práticas descritas nesta política.
          </p>

          <section className="privacy-section">
            <h2>1. Coleta de Informações</h2>
            <p>
              Coletamos informações pessoais apenas quando realmente necessárias para oferecer um
              melhor atendimento e experiência ao usuário. As informações podem incluir:
            </p>
            <ul>
              <li>Nome</li>
              <li>E-mail</li>
              <li>Telefone</li>
              <li>Outras informações fornecidas voluntariamente por meio de formulários</li>
            </ul>
            <p>Esses dados são coletados de forma justa, legal e com o seu consentimento.</p>
          </section>

          <section className="privacy-section">
            <h2>2. Uso das Informações</h2>
            <p>As informações coletadas são utilizadas para:</p>
            <ul>
              <li>Entrar em contato com o usuário</li>
              <li>Responder solicitações e dúvidas</li>
              <li>Fornecer informações sobre serviços oferecidos</li>
              <li>Melhorar a experiência e funcionamento da landing page</li>
            </ul>
            <p>
              Não utilizamos seus dados para finalidades diferentes das informadas sem o seu
              consentimento.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. Compartilhamento de Dados</h2>
            <p>
              Não compartilhamos informações pessoais com terceiros, exceto quando necessário para
              cumprir obrigações legais ou mediante autorização expressa do usuário.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Armazenamento e Segurança</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais
              contra acesso não autorizado, perda, uso indevido ou divulgação.
            </p>
            <p>
              Os dados são armazenados apenas pelo tempo necessário para cumprir as finalidades
              para as quais foram coletados.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Cookies</h2>
            <p>
              Este site pode utilizar cookies para melhorar a navegação e experiência do usuário. Os
              cookies ajudam a entender como o site é utilizado, permitindo melhorias contínuas.
            </p>
            <p>
              Você pode, a qualquer momento, desativar os cookies nas configurações do seu
              navegador.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Direitos do Usuário</h2>
            <p>
              De acordo com a LGPD, o usuário tem direito de:
            </p>
            <ul>
              <li>Acessar seus dados pessoais</li>
              <li>Solicitar correção ou atualização</li>
              <li>Solicitar a exclusão dos dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p>
              Para exercer seus direitos, basta entrar em contato pelos canais disponíveis nesta
              landing page.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Alterações nesta Política</h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir
              melhorias ou mudanças legais. Recomendamos que o usuário revise este conteúdo
              regularmente.
            </p>
          </section>

          <Link to="/" className="privacy-back">
            ← Voltar ao início
          </Link>
        </div>
      </main>
    </>
  );
}
