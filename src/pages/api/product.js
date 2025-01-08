// /pages/api/products.ts (for Next.js pages folder)
import { NextApiRequest, NextApiResponse } from 'next';

export async function handler(req, res) {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
