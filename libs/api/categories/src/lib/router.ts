import { Request, Router, Response } from 'express';
import controller from './controller';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const categories = await controller.get();

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const category = await controller.getById(req.params['id'])

    res.status(200).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const category = await controller.create(req.body);

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updated = await controller.update(req.body, req.params['id']);

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deleted = await controller.delete(req.params['id']);

    res.status(200).json(deleted);
  } catch (error) {
    console.log(error)
  }
});

export { router };
