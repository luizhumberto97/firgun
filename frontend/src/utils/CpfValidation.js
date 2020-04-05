import { cnpj, cpf } from 'cpf-cnpj-validator';

export default function checkDocs(number) {
  if (number.length > 11) {
    const isValid = cnpj.isValid(number);
    return !!isValid;
  }
  const isValid = cpf.isValid(number);
  return !!isValid;
}
