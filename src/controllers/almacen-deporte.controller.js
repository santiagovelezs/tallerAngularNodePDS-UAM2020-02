export const calcularTotal = (req, res) => {

    try { 
        let  patinetas  = req.body
        let valorTotal = 0
        for(let i=0; i<patinetas.length; i++){
            valorTotal+=patinetas[i].precio
        }
        return res.status(200).json({
            valorTotal            
        })
    }catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }   
}