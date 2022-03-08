const model = require('../models/trades')

exports.index = (req, res)=> {
    res.render('index');
}

exports.trades = (req, res)=>{
    let trades = model.find();
    res.render('trades', {trades});
};

exports.trade = (req, res)=>{
    let trade = model.findById(req.params.id)
    if(trade == null) {
        let error = {
            status:404,
            message:'Not found'
        };
        res.status(error.status).render('error', {error})
        return;
    }
    res.render('trade', {trade});
};

exports.newTrade = (req, res)=>{
    res.render('newTrade');
};

exports.new = (req, res)=>{
    let response = model.addTrade(req.body);
    let trades = model.find();
    if(response == -1) {
        let error = {
            status:400,
            message:'Title cannot be empty'
        };
        res.status(error.status).render('error', {error})
        return;
    }
    res.render('trades', {trades});
};


exports.delete = (req, res)=>{
    model.deleteTrade(req.params.id);
    let trades = model.find();
    res.render('trades', {trades});
};


exports.newUpdate = (req, res)=>{
    let trade = model.findById(req.params.id)
    res.render('newUpdate', {trade});
};

exports.update = (req, res)=>{
    console.log('Test')
    let trades = model.update(req.params.id, req.body)
    console.log('Test')
    console.log(trades);
    if(trades == null) {
        let error = {
            status:404,
            message:'No trade with that ID'
        };
        res.status(error.status).render('error', {error})
        return;
    }
    if(trades == -1) {
        let error = {
            status:400,
            message:'Title cannot be empty'
        };
        res.status(error.status).render('error', {error})
        return;
    }
    res.render('trades', {trades});
};

exports.about = (req, res)=> {
    res.render('about');
}

exports.contact = (req, res)=> {
    res.render('contact');
}

exports.error = (req, res)=> {
    let error = {
        status:404,
        message:'Not found'
    };
        res.status(error.status).render('error', {error});
}