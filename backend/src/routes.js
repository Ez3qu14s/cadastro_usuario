import { Router } from 'express';
import {
  createUser,
  deleteUser,
  getAllUsers,
} from './controllers/controller.js';

const router = Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.delete('/delete/:id', deleteUser);

export default router;
