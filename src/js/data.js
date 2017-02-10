var DateModel = Backbone.Model.extend({});

var DatesCollection = Backbone.Collection.extend({
    
    model:DateModel,
    
    comparator:'date',

    whereBookend:function(searchObj,front,back)
    {            
        var res = this.where(searchObj)
        if (front) res.unshift(this.findWhere({name:'born'}));
        if (back) res.push(this.findWhere({name:'now'}));
        return res;
    }
});

var the_dates = new DatesCollection();

the_dates.add({
    name: 'now',
    date: new Date(),
    group: '',
});
the_dates.add({
    name: 'born',
    date: Date.parse('October 19th 1976'),
    group: '',
});

the_dates.add({
    name: 'married',
    date: Date.parse('May 1st 2004'),
    group: 'married',
});

the_dates.add({
    name: 'sister born',
    date: Date.parse('January 12th 1979'),
    group: 'family',
});
the_dates.add({
    name: 'met wife',
    date: Date.parse('October 5th 1998'),
    group: 'family',
});
the_dates.add({
    name: 'proposed',
    date: Date.parse('July 15th 2003'),
    group: 'family',
});
the_dates.add({
    name: 'married wife',
    date: Date.parse('May 1st 2004'),
    group: 'family',
});
the_dates.add({
    name: 'daughter born',
    date: Date.parse('July 16th 2005'),
    group: 'family',
});
the_dates.add({
    name: 'son born',
    date: Date.parse('August 28th 2007'),
    group: 'family',
});

the_dates.add({
    name: 'trebanos',
    date: Date.parse('October 19th 1976'),
    group: 'houses',
});
the_dates.add({
    name: 'ennerdale road',
    date: Date.parse('January 20th 1979'),
    group: 'houses',
});
the_dates.add({
    name: 'old town lane',
    date: Date.parse('August 2nd 1988'),
    group: 'houses',
});
the_dates.add({
    name: 'sugarwell court',
    date: Date.parse('September 27th 1996'),
    group: 'houses',
});
the_dates.add({
    name: 'headingley mount',
    date: Date.parse('September 27th 1997'),
    group: 'houses',
});
the_dates.add({
    name: 'cardigan road',
    date: Date.parse('September 27th 1999'),
    group: 'houses',
});
the_dates.add({
    name: 'oak house cottage',
    date: Date.parse('September 27th 2001'),
    group: 'houses',
});
the_dates.add({
    name: 'otley road',
    date: Date.parse('September 27th 2003'),
    group: 'houses',
});
the_dates.add({
    name: 'fieldhead drive',
    date: Date.parse('October 27th 2006'),
    group: 'houses',
});
the_dates.add({
    name: 'renton lea',
    date: Date.parse('October 24th 2014'),
    group: 'houses',
});

/*
    Days - What I was up to during the day.
*/        
the_dates.add({
    name: 'infant school',
    date: Date.parse('September 1st 1981'),
    group: 'days',
});
the_dates.add({
    name: 'junior school',
    date: Date.parse('September 1st 1984'),
    group: 'days',
});
the_dates.add({
    name: 'high school',
    date: Date.parse('September 1st 1988'),
    group: 'days',
});
the_dates.add({
    name: 'foundation course',
    date: Date.parse('September 1st 1995'),
    group: 'days',
});
the_dates.add({
    name: 'university',
    date: Date.parse('September 1st 1996'),
    group: 'days',
});
the_dates.add({
    name: 'unemployed',
    date: Date.parse('September 1st 1999'),
    group: 'days',
});
the_dates.add({
    name: 'ananova',
    date: Date.parse('March 1st 2000'),
    group: 'days',
});
the_dates.add({
    name: 'orange',
    date: Date.parse('September 1st 2000'),
    group: 'days',
});
the_dates.add({
    name: 'common agency',
    date: Date.parse('October 1st 2009'),
    group: 'days',
});
the_dates.add({
    name: 'freelance',
    date: Date.parse('November 1st 2011'),
    group: 'days',
});
the_dates.add({
    name: 'dwp',
    date: Date.parse('April 13th 2015'),
    group: 'days',
});

/*
    UK Prime Ministers
*/  
the_dates.add({
    name: "James Callaghan",
    date: Date.parse("5 April 1976"),
    group: 'pms',    
});
the_dates.add({
    name: "Margaret Thatcher",
    date: Date.parse("4 May 1979"),
    group: 'pms',    
});
the_dates.add({
    name: "John Major",
    date: Date.parse("28 November 1990"),
    group: 'pms',    
});
the_dates.add({
    name: "Tony Blair",
    date: Date.parse("2 May 1997"),
    group: 'pms',    
});
the_dates.add({
    name: "Gordon Brown",
    date: Date.parse("27 June 2007"),
    group: 'pms',    
});
the_dates.add({
    name: "David Cameron",
    date: Date.parse("11 May 2010"),
    group: 'pms',    
});
the_dates.add({
    name: "David Cameron",
    date: Date.parse("13 July 2016"),
    group: 'pms',    
});

/*
    US Presidents
*/        
the_dates.add({
    name: "Gerald Ford",
    date: Date.parse("9 August 1974"),
    group: 'usp',    
});
the_dates.add({
    name: "Jimmy Carter",
    date: Date.parse("20 January 1977"),
    group: 'usp',    
});
the_dates.add({
    name: "Ronald Reagan",
    date: Date.parse("20 January 1981"),
    group: 'usp',    
});
the_dates.add({
    name: "George H. W. Bush",
    date: Date.parse("20 January 1989"),
    group: 'usp',    
});
the_dates.add({
    name: "Bill Clinton",
    date: Date.parse("20 January 1993"),
    group: 'usp',    
});
the_dates.add({
    name: "George W. Bush",
    date: Date.parse("20 January 2001"),
    group: 'usp',    
});
the_dates.add({
    name: "Barack Obama",
    date: Date.parse("20 January 2009"),
    group: 'usp',    
});
the_dates.add({
    name: "Donlad Trump",
    date: Date.parse("20 January 2017"),
    group: 'usp',    
});

/*
    my-Tech stuff
*/        
the_dates.add({
    name: "joined Facebook",
    date: Date.parse("May 23, 2007"),
    group: 'my-tech',    
});
the_dates.add({
    name: "first Flickr upload",
    date: Date.parse("November 25, 2004"),
    group: 'my-tech',    
});
the_dates.add({
    name: "first Tweet",
    date: Date.parse("November 23, 2006"),
    group: 'my-tech',    
});
the_dates.add({
    name: "first Delicious bookmark",
    date: Date.parse("4th February 2005"),
    group: 'my-tech',    
});
the_dates.add({
    name: "iPhone launched",
    date: Date.parse("June 29, 2007"),
    group: 'tech',    
});
the_dates.add({
    name: "iPod launched",
    date: Date.parse("October 23, 2001"),
    group: 'tech',    
});
the_dates.add({
    name: "first Amazon purchase",
    date: Date.parse("22 December 1999"),
    group: 'my-tech',    
});
the_dates.add({
    name: "joined Spotify",
    date: Date.parse("October 15, 2008"),
    group: 'my-tech',    
});
the_dates.add({
    name: "Gmail account",
    date: Date.parse("August 27, 2004"),
    group: 'my-tech',    
});
the_dates.add({
    name: "first Scrobble",
    date: Date.parse("10 May 2006"),
    group: 'my-tech',    
});
the_dates.add({
    name: "first Instagram",
    date: Date.parse("1 January 2012"),
    group: 'my-tech',    
});
