var EventFlagView = Collinder.extend({

    render:function()
    {
        var hei = 16;
        _.each(this.dates,function(e,i)
        {           
            var h    = this.svg.append('g').attr('class','bar');
            var col  = this.getColour(i);

            if (i < this.dates.length-1)
            {                 
                // grab the one ahead for comparison
                var curr = e.get('date');
                if (curr < me.born) curr = me.born;       

                // put in the coloured line rising from the beginning.
                var line = h.append('rect')
                    .attr("x",me.scale(e.get('date')))
                    .attr("y",3-(hei))
                    .attr("width",2)
                    .attr("height",(hei+this.barheight-3))
                    .attr("fill",col);

                var textplacement = 3-hei;

                // put in the word label at the top of the line.
                var label = h.append('text')
                    .text(e.get('name'))
                    .attr("x",-1+me.scale(curr))
                    .attr("y",textplacement)
                    .attr("font-size",'0.8em')
                    .attr('text-anchor','end')
                    .attr('alignment-baseline','hanging')
                    .attr("fill",col);  

                hei+=13;
            }   
        },this);        
    },

});
// var tech = function()
// {
//     var barheight = 15;
//     var dates = the_dates.whereBookend({group:'my-tech'},false,true);        
//     var col   = pusher.color("#af841a").hueRange(180,dates.length);

//     var g = svg.append('g')
//         .attr('transform','translate(0,500)');

//     g.append("rect") // bar background
//         .attr("x",me.scale(me.born))
//         .attr("width",me.scale(now)-me.scale(me.born))
//         .attr("height",barheight)
//         .attr("fill",'#999');

//     g.append('text')
//         .attr('class','text')
//         .attr('x',90)
//         .attr('transform','translate(0,'+(0.8*barheight)+')')
//         .text('tech');

                    
// }