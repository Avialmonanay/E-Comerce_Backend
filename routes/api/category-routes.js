const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// finds all categories and their respective products.
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(categoryData)
  }catch (err) {
    res.status(500).json(err);
  }

});


//finds a specific category by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryIDData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    res.status(200).json(categoryIDData)
  }catch (err) {
    res.status(500).json(err);
  }
});

// Creates a new category
router.post('/', async (req, res) => {
  try {
    const createCategory = await Category.create(req.body);
    res.status(200).json(createCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});


//updates a category with matching ID
router.put('/:id', async (req, res) => {
  try{
  const updateCategory = await Category.update(req.body, {where:{id:req.params.id}})
  res.status(200).json(updateCategory);
  } catch (err) {
    res.status(400).json(err)
  }
});


// deletes category with matching ID
router.delete('/:id', async (req, res) => {
  try {
    const deleteCategory = await Category.destroy({where:{id:req.params.id}})
    res.status(200).json(deleteCategory)
  } catch (err) {
    res.status(400).json(err)
  }
});

module.exports = router;
