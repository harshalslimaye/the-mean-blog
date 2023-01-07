import { Request, Response, Router } from 'express';
import { User } from './model';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params['id']);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const p = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await p.save();

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});


router.put('/:id', async (req: Request, res: Response) => {
  try {
    const updated = await User.findByIdAndUpdate(
      req.params['id'],
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
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
    const deleted = await User.findByIdAndDelete(req.params['id']);

    res.status(200).json(deleted);
  } catch (error) {
    res.status(500).json(error);
  }
});

export { router };
