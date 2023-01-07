import { Request, Router, Response } from 'express';
import { Category } from './model';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const category = await Category.findById(req.params['id']);

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const p = new Category({
      name: req.body.name,
      description: req.body.description,
    });
    const category = await p.save();

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updated = await Category.findByIdAndUpdate(
      req.params['id'],
      {
        name: req.body.name,
        description: req.body.description,
      },
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params['id']);

    res.status(200).json(deleted);
  } catch (error) {
    console.log(error)
  }
});

export { router };
