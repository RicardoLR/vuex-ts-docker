module.exports = (req, res, next) => {

    if (req.method === 'POST' && req.path === '/api/chida') {
      
      console.log(req.headers);
      console.log(req.body);
      console.log(req.params);
      console.log(req.query);
  
      res.header('X-Cabezera-richi', 'Ricihi');
      res.status(200).json({ 
        data: { 
          nombres: [ 'dfsdf', 'dff'],
          objetoCalle: { lugar :'bien', calle: 'larga'},
          stringNombre: "Richi"
        } 
      });
  
    } else {
      next()
    }
  
  }