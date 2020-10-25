export const verify = (req, res) => {

    try { 
        var { pos } = req.body      
        let isOk = false;  
        let r = parseInt(Math.random()*3)
        if(pos == r)  
            isOk = true  
        return res.status(200).json({
            isOk            
        })
    }catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }   
}