import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://avatars3.githubusercontent.com/u/37128700?s=460&u=b056e9d72dd639c19e309aeada6e476c9cc654ee&v=4"
        alt="Allan Galdino"
      />
      <div>
        <strong>Allan Galdino</strong>
        <span>Física</span>
      </div>
    </header>

    <p>
      Entusiasta das melhores tecnologias de Física avançada.
      <br />
      <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida de
      possoas através de experiências. Mais de 200.000 pessoas já passaram por
      uma das minhas explosões.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 80,00</strong>
      </p>

      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
);

export default TeacherItem;
