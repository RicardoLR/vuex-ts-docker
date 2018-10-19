module.exports = (req, res, next) => {


  if (req.method === 'POST' && req.path === '/login') {
    console.log("entro");

    console.log("req.body.email", req.body.email);
    console.log("req.body.password", req.body.password);

    if (req.body.email === 'admin@vue.com' && req.body.password === 'secret') {
      res.status(200).json({})
    } else {
      res.status(400).json({
        message: 'wrong password',
        data: req.body
      })
    }
  } else {
    next()
  }
}


/**
 * ejecutar
 * 
 * json-server --watch db.json
 * 
 * 
 * json-server --watch db.json --middlewares login-middleware.js --middlewares app-middleware.js 
 */