var MultiView = Collinder.extend(
{
    flagheight:16,

    render:function()
    {
        _.each(this.dates,function(e,i)
        {                    
            if (i < this.dates.length-1)
            {                
                var node    = this.svg.append('g').attr('class','bar');
                var colour  = this.getColour(i);
                var label   = e.get('name');
                var current = e.get('date');
                var next    = this.dates[(i+1)].get('date');            // the next value 

                if (i && e.get('name') != 'unemployed')
                {
                    this.addThisNextRectangle(node,current,next,colour);
                    this.addEventFlag(node,current,colour,label);        
                }                
            }  
        },this);        

        return this;
    },

});