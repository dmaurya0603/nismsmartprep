import { Router } from 'express';
import { supabase } from '../index.js';

const router = Router();

// GET /api/formulas/categories - List all unique categories with counts
router.get('/categories', async (req, res) => {
  try {
    // Fetch all categories in a single query
    const { data, error } = await supabase
      .from('formulas')
      .select('category');

    if (error) throw error;

    // Aggregate counts in memory (much faster than N+1 DB calls)
    const categoryCounts: Record<string, number> = {};
    data.forEach((f: any) => {
      const cat = f.category;
      categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
    });

    // Format and sort
    const categoriesWithCount = Object.entries(categoryCounts)
      .map(([category, count]) => ({ category, count }))
      .sort((a, b) => a.category.localeCompare(b.category));

    res.json({ categories: categoriesWithCount });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/formulas/:id - Get specific formula
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('formulas')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) throw error;
    if (!data) {
      return res.status(404).json({ error: 'Formula not found' });
    }

    res.json(data);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/formulas?category=... - List formulas, optionally filtered by category
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    let query = supabase
      .from('formulas')
      .select('*')
      .order('category')
      .order('difficulty')
      .order('title');

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;

    if (error) throw error;

    res.json({ formulas: data });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
