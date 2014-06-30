var PresidentView = Collinder.extend (
{        
    render: function()
    {
        _.each(this.dates,function(e,i)
        {           
            var h = this.svg.append('g').attr('class','bar');

            if (i < this.dates.length-1)
            {                 
                // grab the one ahead for comparison
                var curr = e.get('date');
                if (curr < me.born) curr = me.born;

                var next = this.dates[(i+1)].get('date');         
                var col  = this.getColour(i);

                // draw a rectangle between this value and that next one.
                var rect = h.append("rect")
                    .attr("x",me.scale(curr))
                    .attr("y",3)
                    .attr("width",me.scale(next)-me.scale(curr))
                    .attr("height",this.barheight-6)
                    .attr("fill",col);

                var textplacement = (3-this.barheight) + ( (i%2) * (2 * this.barheight) );

                // put in the word label at the top of the line.
                var label = h.append('text')
                    .text(e.get('name'))
                    .attr("x",3+me.scale(curr))
                    .attr("y",textplacement)
                    .attr("font-size",'0.8em')
                    .attr('text-anchor','start')
                    .attr('alignment-baseline','hanging')
                    .attr("fill",col);  

                if (i == this.dates.length-2)
                {
                    label.attr('text-anchor','end'); 
                    label.attr("x",me.scale(next)-2);
                }
            }   
        },this);         
    },
});