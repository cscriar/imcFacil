import fs from 'fs';
import path from 'path';

const imcDataFilePath = path.join(process.cwd(), 'public', 'imcData.json');

// Função para adicionar um novo registro de IMC ao arquivo JSON
export function adicionarRegistroIMC(peso, altura, result) {
  // Carregue os registros IMC existentes (ou um array vazio)
  const registrosIMC = JSON.parse(fs.readFileSync(imcDataFilePath, 'utf-8'));

  // Crie um novo registro
  const novoRegistroIMC = { peso, altura, result, data: new Date() };

  // Adicione o novo registro à lista
  registrosIMC.push(novoRegistroIMC);

  // Atualize o arquivo JSON
  fs.writeFileSync(imcDataFilePath, JSON.stringify(registrosIMC, null, 2));

  return novoRegistroIMC;
}

// Função para recuperar todos os registros de IMC
export function obterTodosRegistrosIMC() {
  return JSON.parse(fs.readFileSync(imcDataFilePath, 'utf-8'));
}
