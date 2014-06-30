var PeriodsView = Collinder.extend(
{
    render:function()
    {
        _.each(this.dates,function(e,i)
        {                       
            if (i < this.dates.length-1)
            {                 
                var node    = this.svg.append('g').attr('class','bar'); // cretae a new node                
                var col     = this.getColour(i);                        // grab a colour
                var next    = this.dates[(i+1)].get('date');            // the next value 
                var current = e.get('date');                            // this value
                var label   = e.get('name');
                
                // don't plot anything before my birth.    
                if (current < me.born) current = me.born;
            
                this.addThisNextRectangle(node,current,next,col);
                this.addRectangleLabel(node,label,current,col,(i%2),(i == this.dates.length-2));
            }   
        },this);     

        return this;    
    },

});