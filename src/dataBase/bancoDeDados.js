let lista = [
  {
    "name": "Solução",
    "type": "string",
    "format": "default",
    "description": "Nome da solução de software utilizada. Caso seja uma solução desenvolvida especialmente para o portal específico, sem utilizar parte de uma solução pronta, usar o valor 'interna'."
  },
  {
    "name": "Tipo de Licença",
    "type": "string",
    "format": "default",
    "description": "Se a licença é 'aberta' ou 'proprietária'. Considerar o conceito de aberto da Open Source Initiative."
  },
  {
    "name": "URL",
    "type": "string",
    "format": "uri",
    "description": "Endereço onde a solução de software pode ser encontrada, se houver."
  },
  {
    "name": "Conceito",
    "type": "string",
    "format": "uri",
    "description": "URI de referência no Wikidata ou DBPedia ao conceito do software utilizado."
  }
]

export default lista;