const { DateTime } = require("luxon");
const { trade } = require("../controllers/controller");
idCount = 7;
const trades = [
    {
        id: '1',
        title: 'Cow',
        category: 'Livestock',
        header: 'Robert Cowney Jr.',
        details: 'Robert Cowney Jr. is a magnificent cow, weighing in at a whopping 1849lbs. Robert was raised on freshly organic, vegan, non-gmo, grass. Robert grazes on a mix of clover, orchardgrass, and timothy hay, and drinks purified water from his very own well. Seriously, though, Robert would be a great addition to any farm and would make a great cow for beef or milk production. He is gentle and easy to handle, and would be a perfect fit for your operation. Robert is a great cow and a great friend. He is always willing to help out and is always there for a good laugh. He is an amazing cow and an amazing friend. If you are looking for a cow that is both beautiful and useful, look no further than Robert Cowney Jr! Contact us today to schedule a visit.',
        img: 'images/cow.jpg'
    },
    {
        id: '2',
        title: 'Pig',
        category: 'Livestock',
        header: 'Wilbur',
        details: 'Pig goes oink.',
        img: 'images/pig.jpg'
    },
    {
        id: '3',
        title: 'Chicken',
        category: 'Livestock',
        header: 'Cluck',
        details: 'Chickens eat seed.',
        img: 'images/chicken.jpg'
    },
    {
        id: '4',
        title: 'Raw Beef',
        category: 'Raw meat and Eggs',
        header: 'Robert Cowney Sr.',
        details: 'Could be made into some steak.',
        img: 'images/beef.jpg'
    },
    {
        id: '5',
        title: 'Raw Pork',
        category: 'Raw meat and Eggs',
        header: '20 lbs of pork',
        details: 'Could be made into some porkchops.',
        img: 'images/pork.jpg'
    },
    {
        id: '6',
        title: 'Raw Chicken',
        category: 'Raw meat and Eggs',
        header: '20 lbs of chicken',
        details: 'Chick-Fil-A.',
        img: 'images/rawchicken.jpg'
    },
    {
        id: '7',
        title: 'Eggs',
        category: 'Raw meat and Eggs',
        header: '2 Dozen Eggs',
        details: 'Could be baked into a cake.',
        img: 'images/eggs.jpg'
    }
];

exports.find = () => trades;

exports.findById = (id) => {
    return trades.find((trade) => {
        return trade.id == id;
    });
};

exports.addTrade = (newTrade) => {
    idCount++;
    console.log(newTrade);
    if(newTrade.title == null || newTrade.title == '') {
        return -1;
    }

    trades.push(
        {
            id: idCount,
            title: newTrade.title,
            category: newTrade.category,
            header: newTrade.header,
            details: newTrade.details,
            img: 'images/cow.jpg'
        }
    );
    return 0;
}

exports.update = (id, updatedTrade) => {
    let trade = trades.find((trade) => {
        return trade.id == id;
    });
    if (trade == null) {
        return null;
    }

    if(updatedTrade.title == '') {
        return -1;
    }

    trade.title = updatedTrade.title;
    trade.category = updatedTrade.category;
    trade.header = updatedTrade.header;
    trade.details = updatedTrade.details;
    return trades;
}

exports.deleteTrade = (id) => {
    let tradeIndex = trades.findIndex((trade) => {
        return trade.id == id;
    });
    if (tradeIndex == null || tradeIndex < 0) {
        tradeIndex = -1;
        return tradeIndex;
    } 

    trades.splice(tradeIndex, 1);
    return trades;
}