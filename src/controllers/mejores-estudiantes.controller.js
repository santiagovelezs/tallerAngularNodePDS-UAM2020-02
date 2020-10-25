export const filtrar5 = (req, res) => {    
    try { 
        let  estudiantes  = req.body 

        //JSON.stringify(estudiantes)

        //console.log(estudiantes)

        //console.log(estudiantes[0].nota)

        estudiantes.sort(function (a, b) {
            if (a.edad > b.edad) {
              return 1;
            }
            if (a.edad < b.edad) {
              return -1;
            }
            // a must be equal to b
            return 0;
          });
          estudiantes = estudiantes.slice(0,5);
        
        return res.status(200).json({
            estudiantes            
        })
    }catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }   
}