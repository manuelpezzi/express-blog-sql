/*const arrayPosts = require('../data/posts.js');*/
const connection = require('../data/db');

function index(req, res) {

    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({
            error: 'Database query failed'

        });

        res.json(results);
    });


    /* res.json(arrayPosts)*/
}
function show(req, res) {
    /* const id = parseInt(req.params.id)
 
     const post = arrayPosts.find(post => post.id === id);
 
     res.status(404)
 
 
     if (!post) {
         return res.json({
             error: "Not Found",
             message: "post non trovato"
         });
     }
     res.json(post)*/


    const { id } = req.params

    const sql = 'SELECT * FROM posts WHERE id = ?';

    connection.query(sql, [id], (err, results) => {

        if (err) return res.status(500).json({
            error: 'Database query failed'

        });

        if (results.length === 0) return res.status(404).json({
            error: 'Post  not found'

        });
        res.json(results[0]);
    });
}


function store(req, res) {
    const newId = arrayPosts[arrayPosts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags

    }
    arrayPosts.push(newPost)
    console.log(arrayPosts);

    res.status(201);
    res.json(newPost);
}
function update(req, res) {
    const id = parseInt(req.params.id);

    const post = arrayPosts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non torvato"
        })
    }


    post.title = req.body.title;
    post.image = req.body.image;
    post.content = req.body.content;

    console.log(arrayPosts)


    res.json(post);

}
function patch(req, res) {
    const id = parseInt(req.params.id)

    const post = arrayPosts.find(post => post.id === id);

    if (!post) {
        res.status(404);


        return res.json({

            error: "Not Found",
            message: "post non trovato"
        })
    }

    for (let key in req.body) {
        post[key] = req.body[key];

    }

    console.log(arrayPosts)
    res.json(post)


}
function destroy(req, res) {

    const { id } = req.params;

    const sql = 'DELETE FROM posts WHERE id = ?'

    connection.query(sql, [id], (err) => {
        if (err) return res.status(500).json({
            error: 'Database query error'
        })

        res.sendStatus(204)
    })









    // const id = parseInt(req.params.id)

    // const post = arrayPosts.find(post => post.id === id);

    // res.status(404)


    // if (!post) {
    //     return res.json({
    //         error: "Not Found",
    //         message: "post non trovato"
    //     });
    // }
    // arrayPosts.splice(arrayPosts.indexOf(post), 1)

    // console.log(post)

    // res.sendStatus(204)

};
module.exports = { index, show, store, update, patch, destroy }