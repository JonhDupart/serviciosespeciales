// Importaciones de módulos externos
import type { NextApiRequest, NextApiResponse } from 'next';

// Importaciones de módulos internos
import searchItems from '../../layouts/searchItems.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(searchItems);
}
