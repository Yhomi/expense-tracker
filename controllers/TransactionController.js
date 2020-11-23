const Transaction = require('../model/Transaction');

// @desc get all transaction
// @routes GET /api/transactions
// @access public
exports.getTransactions = async(req,res)=>{
    try{
        const transactions = await Transaction.find();
        return res.status(200).json({
            success: true,
            count:transactions.length,
            data:transactions
        })
    }catch(err){
        return res.status(500).json({
            success:false,
            error:err
        })
    }
}

// @desc add transaction
// @routes POST /api/transactions
// @access public
exports.addTransactions = async(req,res)=>{
    const {text,amount} = req.body;
    try {
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({
            success:true,
            data:transaction
        });
    }catch (err) {
        if(err.name === 'ValidationError'){
            const messages = Object.values(err.errors).map(val=>val.message);
            return res.status(400).json({
                success:false,
                error:messages
            });
        }else{
            return res.status(500).json({
                success:false,
                error:"Server Error"
            });
        }
    }
}

// @desc delete transaction
// @routes DELETE /api/transactions/:id
// @access public
exports.deleteTransactions = async (req,res)=>{
    try {
        const transaction = await Transaction.findById(req.params.id)
        if(!transaction){
            return res.status(404).json({
                success:false,
                error:'Transaction not found'
            })
        }
        await transaction.deleteOne();
        return res.status(200).json({
            success:true,
            data:{}
        })
        
    } catch (err) {
         return res.status(500).json({
             success:false,
             error:'Server Error'
         })
    }
}