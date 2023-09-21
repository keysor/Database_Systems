db.zips.find({"pop": {$gt: 75000}}, {"state": 1})
//Which cities have populations greater than 200,000 people?
db.zips.aggregate([{$match: {"city": city}}, {$group: {_id: "$_id", totalPop: {$sum: "$pop"}}}])