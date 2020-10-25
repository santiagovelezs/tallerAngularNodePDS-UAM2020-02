export const mult = (req, res) => {

    try { 
        var { num } = req.body
        num = parseInt(num)
        var tabla = []
        console.log(num);
        for(let i=1; i<=10; i++){
            tabla.push(num*i)
        }
        console.log(tabla)
        return res.status(200).json({
            num,
            tabla
        })
    }catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }   
}