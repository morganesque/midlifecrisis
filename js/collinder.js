var Collinder = Backbone.View.extend(
{        
    width:960,
    height:200,
	pad:0,

    initialize: function(options) 
    {
        this.pad = config.pad; // HACK - BAD BOY IN YOUR BED!!

        this.barheight  = options.barheight;
        this.dates      = options.dates;
        this.label      = options.label;
        if (options.width)  this.width      = options.width;
        if (options.height) this.height     = options.height;  

        this.colours   = pusher.color(options.colour).hueRange(180,this.dates.length);

        this.svg = d3.select(this.el)
            .attr('viewBox',"0,0,"+(this.width)+","+(this.height))
            .attr('preserveAspectRatio',"xMidYMid meet")
            .append('g')
            .attr('class','main');

        this.$el.closest('.container').css('padding-top',(100*this.height/this.width)+'%');

        this.addBarBackground();

        // this.svg.append('text')
        //     .attr('class','text')
        //     .attr('x',me.scale.range()[0]-(2*this.pad))
        //     .attr('y',this.barheight/2)
        //     .attr('alignment-baseline','middle')
        //     .text(this.label);
    },  

    addBarBackground:function()
    {
        var background = this.svg.append('g').attr('class','background');

        background.append("rect") // bar background
            .attr("x",me.scale(me.born))
            .attr("width",me.scale(me.now)-me.scale(me.born))
            .attr("height",this.barheight)
            .attr("fill",config.barCol);

        var range = (me.scale.domain()[1]-me.scale.domain()[0])/(1000*60*60*24*7*52);

        var axis = d3.svg.axis()
            .ticks(range)
            .tickSize(0-(this.barheight+this.pad))
            .scale(me.scale);
            
        var xAxisGroup = background.append("g")
            .attr('transform',"translate(0,"+(this.barheight+this.pad)+")")
            .attr('class','ticks')
            .call(axis);
        
        xAxisGroup.selectAll('line').attr('class','white');
        xAxisGroup.selectAll('text').remove();
        xAxisGroup.selectAll('.domain').remove();
    },

    setMainOffset:function(x,y)
    {
        this.$el.find('.main').attr('transform','translate('+x+','+y+')');                        
        return this;
    },
    
    getColour:function(i)
    {
        return this.colours[i%this.colours.length].hex6();
    },

    render:function(){},

    addThisNextRectangle:function(node,current,next,colour)
    {     
        // draw a rectangle between this value and that next one.
        var rect = node.append("rect")
            .attr("x",me.scale(current))
            .attr("y",this.pad)
            .attr("width",me.scale(next)-me.scale(current))
            .attr("height",this.barheight-(2*this.pad))
            .attr("fill",colour)
            .attr('class','rectangleblooo');
    },

    addRectangleLabel:function(node,text,current,colour,below,endalign)
    {    
        // put in the word label above the line.
        var label = node.append('text')
            .text(text)
            .attr("x",this.pad+me.scale(current))
            .attr("y",-this.pad)
            .attr('text-anchor','start')
            .attr("fill",colour);  

        if (below) // put alternate labels below the line.
        {
            label.attr('alignment-baseline','hanging');
            label.attr('y',this.barheight + this.pad);
        }

        if (endalign) // align the last label to the end.
        {
            label.attr('text-anchor','end'); 
            label.attr("x",me.scale.range()[1] - this.pad);
        }
    },

    addEventFlag:function(node,current,colour,label,through,opposite)
    {
        var height = (this.flagheight);
        if (through) height += this.barheight-3;

        // put in the coloured line rising from the beginning.
        var line = node.append('rect')
            .attr("x",me.scale(current))
            .attr("y",this.pad-this.flagheight)
            .attr("width",2)
            .attr("height",height)
            .attr("fill",colour);

        // put in the word label at the top of the line.
        var label = node.append('text')
            .text(label)
            .attr("x",me.scale(current)-2)
            .attr("y",this.pad-this.flagheight)
            .attr('text-anchor','end')
            .attr('alignment-baseline','hanging')
            .attr("fill",colour);  

        console.log(opposite);        
        if (opposite)
        {
            label.attr('text-anchor','start')
                .attr("x",me.scale(current)+this.pad-1)
        }

        this.flagheight += 13;
    },        

    addXAxis:function()
    {
        var axis = d3.svg.axis()
            .ticks(10)
            .tickSize(this.pad)
            .orient('bottom')
            .scale(me.scale);

        var xAxisGroup = this.svg.append("g")
            .attr('transform',"translate(0,"+(this.barheight+this.pad)+")")
            .attr('class','axis')
            .call(axis);
        
        return this;
    },    
});