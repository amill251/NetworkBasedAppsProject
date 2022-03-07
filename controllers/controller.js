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
    res.render('trade', {trade});
};

exports.newTrade = (req, res)=>{
    res.render('newTrade');
};

exports.new = (req, res)=>{
    model.addTrade(req.body);
    let trades = model.find();
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
    let trade = model.update(req.params.id, req.body)
    res.render('trade', {trade});
};

