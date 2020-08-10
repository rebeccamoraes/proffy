import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/1-historia.jpg" alt="" />
        <div>
          <strong>Jefferson Acevedo</strong>
          <span>História</span>
        </div>
      </header>

      <p>
        Mestre em História pela Universidade Federal de Goiás.
        Professor da rede municipal de educação de Goiânia.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>

    </article>
  );
}

export default TeacherItem;