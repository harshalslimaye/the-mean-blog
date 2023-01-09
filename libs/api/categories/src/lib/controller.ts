import { Category, ICategory } from './model';

export class CategoryController {
  get() {
    return Category.find();
  }

  getById(id: string) {
    return Category.findById(id);
  }

  create(body: ICategory) {
    return new Category({
      name: body.name,
      description: body.description,
    });
  }

  update(body: ICategory, id: string) {
    return Category.findByIdAndUpdate(
      id,
      {
        name: body.name,
        description: body.description,
      },
      { new: true }
    );
  }

  delete(id: string) {
    return Category.findByIdAndDelete(id);
  }
}

export default new CategoryController();
