module.exports = (req, res, next) => {

    /**
     * para unir http://localhost:3000/api/carros?unir=true
     */
    if ( req.method === 'POST' && req.path === '/api/carros') {
      
      console.log(req.headers);
      console.log(req.body);
      console.log("req.params", req.params);
      console.log("req.query", req.query);
  
      res.header('X-Cabezera-richi', 'Ricihi');

      var carros = [
        { id: 1, text: "carro azul", vendido:true, unidades:[1,2,3]},
        { id: 2, text: "carro rojo", vendido:false, unidades:[1,2,3]},
        { id: 3, text: "carro gris", vendido:false, unidades:[1,2,3]},
        { id: 4, text: "carro marron", vendido:true, unidades:[1,2,3]},
      ]

      if( req.query.unir == "false" ){

        res.status(200).json({ 
          carros
        });

      }else{

        console.log("req.body.carros", req.body.carros);
        res.status(200).json({ 
            carros: carros.concat(req.body.carros)
        });
      }
  
    } else {
      next()
    }
  
  }