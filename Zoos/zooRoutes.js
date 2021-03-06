const express = require('express');
const router = express.Router();
const zooModel = require('./zooModel.js');

router.get('/', (req, res)=>{
    zooModel.get()
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({message: 'Unable to get zoos'})
        });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    zooModel.get(id)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Unable to get zoos' })
        });
});

router.post('/', (req, res)=>{
    let { id } = req.params;
    zooModel.insert(id, req.body)
        .then(data => {
            res.status(201).json({message: 'Creating zoo was successful'})
        })
        .catch(err => {
            res.status(500).json({message: 'Unable to create zoo.'})
        })
});

router.put('/:id', (req, res)=>{
    let id = req.params.id;
    zooModel.update(id, req.body)
        .then(data => {
            res.status(200).json({ message: 'Zoo updated' })
        })
        .catch( err => {
            res.status(500).json({ message: 'Unable to update zoo' })
        })
})

router.delete('/:id', (req, res)=>{
    zooModel.delete(req.params.id)
        .then(data => {
            res.status(204).json({message:'Zoo deleted'})
        })
        .catch(err => {
            res.status(504).json({message: 'Unable to delete zoo'})
        })
});

module.exports = router;