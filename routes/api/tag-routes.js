const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


// gets all tags
router.get('/', async(req, res) => {
  try {
    const allTags = await Tag.findAll({
      include: [{model:Product}]
    })
    res.status(200).json(allTags)
  }catch (err) {
    res.status(500).json(err);
  }
});


//gets a tag by ID
router.get('/:id', async(req, res) => {
  try {
    const tagById = await Tag.findByPk(req.params.id, {
      include: [{model:Product}]
    })
    res.status(200).json(tagById)
  }catch (err) {
    res.status(500).json(err);
  }
});

//creates a new tag
router.post('/', async (req, res) => {
  try {
    const createTag = await Tag.create(req.body);
    res.status(200).json(createTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

//updates an existing tag by Id
router.put('/:id', async (req, res) => {
  try{
    const updateTag = await Tag.update(req.body, {where:{id:req.params.id}})
    res.status(200).json(updateTag);
    } catch (err) {
      res.status(400).json(err)
    }
});


//deletes and existing tag by ID
router.delete('/:id', async(req, res) => {
  try {
    const deleteTag = await Tag.destroy({where:{id:req.params.id}})
    res.status(200).json(deleteTag)
  } catch (err) {
    res.status(400).json(err)
  }
});

module.exports = router;
