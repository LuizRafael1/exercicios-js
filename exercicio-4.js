//OBJETIVO:
/**
 * Validar e-mail
 * 
 * Verifica se uma string segue o formato básico de um endereço de e-mail
 * (nome@dominio.extensao), usando expressão regular (regex) com validação de:
 * - Antes do @: letras, números, underscore, ponto e hífen
 * - Domínio: letras, números, underscore e hífen
 * - Extensão: um ou mais blocos (.com, .com.br, etc), mínimo 2 caracteres cada
 */
const palavra = "jatoaqui09_2@gmail.com.br"
const regex = /^[\w.-]+@[\w-]+(\.[\w-]{2,})+$/i
if (palavra.match(regex)){
    console.log("O e-mail preenche todos os requisitos")
}else{
    console.log("Revise seu e-mail")
}