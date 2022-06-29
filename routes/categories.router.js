const express = require('express');
<<<<<<< HEAD
const categoriasService = require('./../services/categorias.services');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCategoriasSchema, updateCategoriasSchema, getCategoriasSchema } = require('./../schemas/categoria.schema');




const router = express.Router();
const service = new categoriasService();

router.get('/', async (req, res) => {
  const categoria = await service.find();
  res.json(categoria);
});

router.get('/filter', (req, res) => {
  res.send('Soy un filter')
})
=======
const CategoriesService = require('./../services/categories.services');
const validatorHandler = require('./../middlewares/validator.handler');
const { createCategorySchema, updateCategorySchema, getCategorySchema } = require('./../schemas/categories.schema');

const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/:id',
  validatorHandler(getCategorySchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const category = await service.findOne(id);
    res.json(category);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createCategorySchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newCategory = await service.create(body);
    res.status(201).json(newCategory);
  })

router.patch('/:id',
  validatorHandler(getCategorySchema, 'params'),
  validatorHandler(updateCategorySchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const category = await service.update(id, body);
      res.json(category);
    } catch (error) {
      next(error);
    }
  })

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});
>>>>>>> Laura

router.get('/:id',
  validatorHandler(getCategoriasSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
    const categoria = await service.findOne(id);
    res.json(categoria);
    } catch (error) {
      next(error);
    }
  });

router.post('/',
  validatorHandler(createCategoriasSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  })

router.patch('/:id',
  validatorHandler(getCategoriasSchema, 'params'),
  validatorHandler(updateCategoriasSchema, 'body'),
  async (req, res, next) => {
    try{
      const { id } = req.params;
      const body = req.body;
      const categoria = await service.update(id, body);
      res.json(categoria);
    } catch (error) {
      next(error);
    }
  })

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const rta = service.delete(id);
  res.json(rta);
});

module.exports = router;


