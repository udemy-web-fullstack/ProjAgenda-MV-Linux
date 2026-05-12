import validator from 'validator';

export default class Contato {
  constructor(formClass) {
    this.form = document.querySelector(formClass);
  }

  init() {
    this.events();
  }

  events() {
    if (!this.form) return;

    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.validate(e);
    });
  }

  validate(e) {
    const el = e.target;

    const nome = el.querySelector('input[name="nome"]');
    const sobrenome = el.querySelector('input[name="sobrenome"]');
    const email = el.querySelector('input[name="email"]');
    const telefone = el.querySelector('input[name="telefone"]');

    let error = false;

    // Nome obrigatório
    if (!nome.value.trim()) {
      alert('Nome é obrigatório.');
      error = true;
    }

    // Sobrenome opcional (mas pode validar tamanho se quiser)
    if (sobrenome.value && sobrenome.value.length < 2) {
      alert('Sobrenome precisa ter pelo menos 2 caracteres.');
      error = true;
    }

    // Email opcional, mas se tiver precisa ser válido
    if (email.value && !validator.isEmail(email.value)) {
      alert('E-mail inválido.');
      error = true;
    }

    // Telefone opcional, mas pelo menos um contato precisa existir
    if (!email.value && !telefone.value) {
      alert('Informe pelo menos um contato: e-mail ou telefone.');
      error = true;
    }

    // Telefone simples (apenas números e tamanho mínimo)
    if (telefone.value && telefone.value.length < 8) {
      alert('Telefone inválido.');
      error = true;
    }

    if (!error) el.submit();
  }
}
