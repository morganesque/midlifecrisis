var Houses = Collinder.extend(
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

                var opposite = (i < 2) ? true : false ;

                this.addThisNextRectangle(node,current,next,colour);
                this.addEventFlag(node,current,colour,label,false,opposite);        
            }  
        },this);        

        return this;
    },

});